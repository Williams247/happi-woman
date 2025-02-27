import defaultAxios, { AxiosProgressEvent } from 'axios';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useAxios } from '../useAxios';
import {
  FileRes,
  UseFetchFileUploadResponse,
} from './FileUpload';

const SKILLPADDY_BASE_URL = 'https://api.skillpaddy.com';

export const useFileUpload = (
  fileType: string,
  hideSuccess?: boolean
): UseFetchFileUploadResponse => {
  const { axios } = useAxios();
  const [data, setData] = useState<FileRes | null | undefined>(null);
  const [success, setSuccess] = useState(true);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const onUploadProgress = (event: AxiosProgressEvent) => {
    const percentCompleted = event.total
      ? Math.round((event.loaded * 100) / event.total)
      : 0;
    setProgress(percentCompleted);
  };

  const uploadFile = useCallback(
    async (payload: File, fileName: string, fileType:string) => {
      console.log('Uploading fileType:', fileType, 'fileName:', fileName);

      try {
        setLoading(true);
        const uploadUrl = `${SKILLPADDY_BASE_URL}/filemanager/${fileType}?filename=${fileName}`;

        const res = await axios.put(uploadUrl);
        console.log('uploading to:',uploadUrl)

        console.log(res);
        console.log('Response Data:', res.data);
        console.log(res.status, 'show success now here');
        if (res.status !== 200) {
          toast.error('Failed to upload file');
          setData(null);
          setSuccess(false);
          setLoading(false);
        } else {
          await defaultAxios.put(`${res.data.data?.uploadUrl}`, payload, {
            headers: {
              'Content-Type': payload.type,  
            },
            onUploadProgress,
          });
          console.log('Successfully uploaded');
          if (!hideSuccess) {
            toast.success('File uploaded');
            setLoading(false);
          }
          setData(res.data?.file);
          console.log(res.data);
          setSuccess(true);
          setLoading(false);
        }
      } catch (e) {
        console.error('Failed to upload file', e);
        setLoading(false);
      }
    },
    [axios, fileType, hideSuccess]
  );

  return {
    uploading: loading,
    data,
    uploadFile,
    progress,
    success,
  };
};
