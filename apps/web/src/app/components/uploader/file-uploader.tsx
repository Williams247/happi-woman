'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button } from '@app/components/lib/ui/button';
import { Input } from '@app/components/lib/ui/input';
import { UploadIcon } from '../icons/file';
import { useFileUpload } from '../../hooks/fileUpload';
import { toast } from 'react-hot-toast';
import { PdfIcon, TxtIcon } from '../icons/pdfandtxticon';

interface FileUploaderProps {
  name?: string;
  onUploadComplete?: (fileUrl: string | null) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  name,
  onUploadComplete,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileType] = useState<string>('');
  const { uploadFile, data, uploading, progress } = useFileUpload(fileType);

  const MAX_FILE_SIZE_MB = 5;

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];

    if (uploadedFile) {
      const fileSizeMB = uploadedFile.size / (1024 * 1024);
      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        toast.error('File size must be 5MB or less');
        return;
      }
      setFile(uploadedFile);
      const extractedFileExtension = uploadedFile.name
        .split('.')
        .pop()
        ?.toLowerCase();
      if (
        !extractedFileExtension ||
        !['pdf', 'txt'].includes(extractedFileExtension)
      ) {
        toast.error('Invalid file type');
        return;
      }
      const fileTypeMap: Record<string, string> = {
        pdf: 'document',
        txt: 'document',
      };
      const extractedFileType =
        fileTypeMap[extractedFileExtension] || 'document';
      await uploadFile(uploadedFile, uploadedFile.name, extractedFileType);
    }
  };

  useEffect(() => {
    if (data?.url) {
      onUploadComplete?.(data.url);
    }
  }, [data, onUploadComplete]);

  return (
    <div className="relative w-full h-32 border border-[#DBDBDB] rounded-lg flex flex-col items-center justify-center">
      <Input
        id="file-upload"
        name={name}
        type="file"
        accept=".pdf,.txt"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileUpload}
        disabled={uploading}
      />

      {!file && (
        <div className="text-center">
          <UploadIcon className="mx-auto" />
          <p className="mt-2 text-sm text-[#E83F6F] font-medium">
          Click to here browse or drag and
          drop
          </p>
          <p className="text-xs py-1">Accepted file: PDF, JPG, PNG</p>
        </div>
      )}

      {file && (
        <div className="flex flex-col items-center mt-1">
          {/* Show PDF or TXT icon */}
          {file.type.includes('pdf') ? (
            <PdfIcon className="h-10 w-10 text-red-500" />
          ) : file.type.includes('text') ? (
            <TxtIcon className="h-10 w-10 text-blue-500" />
          ) : null}

          {/* Show file name */}
          <p className="mt-1 text-xs text-gray-700">{file.name}</p>

          {uploading && (
            <p className="text-xs text-blue-500 mt-1">
              Uploading... {progress}%
            </p>
          )}
        </div>
      )}

      {file && !uploading && (
        <Button
          onClick={() => {
            setFile(null);
            onUploadComplete?.(null);
          }}
          className="absolute top-2 right-2"
        >
          Remove File
        </Button>
      )}
    </div>
  );
};
