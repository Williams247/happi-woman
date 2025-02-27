export interface FileData {
    uploadUrl: string;
    file: FileRes;
  }
  export interface FileRes {
    id: string;
    key: string | null;
    host: string | null;
    type: string | null;
    url: string | null;
    secure: boolean | null;
    mimetype: string | null;
    processing: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  

export interface UseFetchFileUploadResponse {
  uploadFile: (payload: File, fileName: string, fileType:string) => Promise<void>;
  uploading: boolean;
  data?: FileRes | null;
  progress: number;
  success: boolean
}
