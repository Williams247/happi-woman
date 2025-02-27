'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useFileUpload } from '../../hooks/fileUpload';

interface ImageUploaderProps {
  name: string;
  label: string;
  onUploadComplete?: (fileUrl: string) => void;
}

export const ImageUploader = ({
  name,
  label,
  onUploadComplete,
}: ImageUploaderProps) => {
  const [image, setImage] = useState<string | null>(null);
   const [fileType] = useState<string>('');
  const { uploading, data, uploadFile, progress } = useFileUpload(fileType);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      await uploadFile(file, file.name, fileType);
    }
  };

  useEffect(() => {
    if (data?.url) {
      setImage(data.url);
      onUploadComplete?.(data.url);
    }
  }, [data, onUploadComplete]);

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="relative w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
        {uploading ? (
          <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-[#666666] rounded-full"></div>
        ) : image ? (
          <Image
            src={image}
            alt="Uploaded"
            width={300}
            height={300}
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <div className="text-[#666666]">Upload</div>
        )}
      </div>

      {/* Label and Buttons */}
      <div className="text-left">
        <label className="text-sm text-[#0D0D0D] font-medium">
          {label}
          <span className="block text-[#666666] text-xs font-normal py-1">
            Min 400x400px, PNG or JPEG
          </span>
        </label>
        <div className="mt-2 flex gap-2">
          {!image ? (
            <>
              <input
                type="file"
                accept="image/*"
                id={`imageUpload-${name}`}
                onChange={handleImageChange}
                className="hidden"
                disabled={uploading}
              />
              <label
                htmlFor={`imageUpload-${name}`}
                className={`border-2 font-medium py-2 px-4 text-sm rounded-lg cursor-pointer ${
                  uploading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-transparent border-[#e5e5e5] text-[#666666]'
                }`}
              >
                {uploading ? `Uploading... ${progress}%` : 'Upload'}
              </label>
            </>
          ) : (
            <>
              {/* Remove Button */}
              <button
                onClick={removeImage}
                className="bg-transparent border border-[#E94A3F] text-[#E94A3F] font-medium py-1 px-4 rounded-lg"
                disabled={uploading}
              >
                Remove
              </button>
              {/* Change Button */}
              <input
                type="file"
                accept="image/*"
                id={`imageUpload-${name}`}
                onChange={handleImageChange}
                className="hidden"
                disabled={uploading}
              />
              <label
                htmlFor={`imageUpload-${name}`}
                className={`border-2 font-medium py-1 px-4 text-sm rounded-lg cursor-pointer ${
                  uploading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-transparent border-[#e5e5e5] text-[#666666]'
                }`}
              >
                {uploading ? 'Uploading...' : 'Change'}
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
