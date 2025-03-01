'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState, useCallback } from "react";
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const [imageUrl, setImageUrl] = useState(value);

  const handleUpload = useCallback((result: any) => {

    if (result?.info?.secure_url) {
      setImageUrl(result.info.secure_url);
      onChange(result.info.secure_url);

    } else {
      return
    }
  }, [onChange]);

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{ maxFiles: 1 }}
      onSuccess={handleUpload}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed 
            border-2 
            p-20 
            border-neutral-300
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-neutral-600
          "
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
          {imageUrl && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                fill
                style={{ objectFit: 'cover' }}
                src={imageUrl}
                alt="Uploaded Image"
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
