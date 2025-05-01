"use client";

import { Button } from "@/app/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadItemProgress,
  FileUploadList,
  FileUploadTrigger,
} from "@/app/components/ui/file-upload";
import { Camera, X } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

interface Props {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export function ImageUpload({ files, setFiles }: Props) {
  const onUpload = React.useCallback(
    async (
      newFiles: File[],
      {
        onProgress,
        onSuccess,
        onError,
      }: {
        onProgress: (file: File, progress: number) => void;
        onSuccess: (file: File) => void;
        onError: (file: File, error: Error) => void;
      }
    ) => {
      try {
        const uploadPromises = newFiles.map(async (file) => {
          try {
            const totalChunks = 10;
            let uploadedChunks = 0;

            for (let i = 0; i < totalChunks; i++) {
              await new Promise((res) =>
                setTimeout(res, Math.random() * 200 + 100)
              );
              uploadedChunks++;
              const progress = (uploadedChunks / totalChunks) * 100;
              onProgress(file, progress);
            }

            setFiles((prevFiles) => [...prevFiles, file]);
            onSuccess(file);
          } catch (error) {
            onError(
              file,
              error instanceof Error ? error : new Error("Upload failed")
            );
          }
        });

        await Promise.all(uploadPromises);
      } catch (error) {
        toast.error("Unexpected error during file upload.");
        console.error("Upload Error:", error);
      }
    },
    [setFiles]
  );

  const onFileReject = React.useCallback((file: File, message: string) => {
    toast(message, {
      description: `"${
        file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
      }" has been rejected`,
    });
  }, []);

  const handleFileDelete = (fileToDelete: File) => {
    setFiles((prev) => prev.filter((f) => f !== fileToDelete));
  };

  return (
    <FileUpload
      value={files}
      onValueChange={setFiles}
      onUpload={onUpload}
      onFileReject={onFileReject}
      maxFiles={2}
      className="w-full bg-stone-100"
      multiple
    >
      <FileUploadDropzone>
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="flex items-center text-neutral-300 justify-center rounded-full border border-neutral-400 p-2.5">
            <Camera className="size-6 text-neutral-400" />
          </div>
          <p className="font-medium text-neutral-500 text-sm">
            Drag & drop files here
          </p>
          <p className="text-neutral-500 text-xs">
            Or click to browse (max 2 files)
          </p>
        </div>
        <FileUploadTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="mt-2 text-neutral-500 w-fit"
          >
            Browse files
          </Button>
        </FileUploadTrigger>
      </FileUploadDropzone>

      <FileUploadList>
        {files.map((file, index) => (
          <FileUploadItem key={index} value={file} className="flex-col">
            <div className="flex w-full items-center gap-2">
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7"
                  onClick={() => handleFileDelete(file)}
                >
                  <X />
                </Button>
              </FileUploadItemDelete>
            </div>
            <FileUploadItemProgress />
          </FileUploadItem>
        ))}
      </FileUploadList>
    </FileUpload>
  );
}
