import React, { FC, useRef, EventHandler, ChangeEvent } from 'react';
import ajax from './ajax';
import { Button } from 'antd';

export interface UploadProps {
  action: string;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  httpRequest?: () => void;
  autoUpload?: boolean; // 是否自动上传
};

export const Upload: FC = (props) => {
  const {
    action,
    onProgress,
    onSuccess,
    onError,
    httpRequest = ajax,
    autoUpload,
  } = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  }

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach(file => {
      // 上传
      if (autoUpload) upload(file);
    });
  };

  const upload = (file?: File) => {
    // 上传之前的判断逻辑
    post(file);
  }

  const post = (file: File) => {
    const req = httpRequest({
      file,
      action,
      onProgress: (e: ChangeEvent) => onProgress(e, file),
      onError: (e: ChangeEvent) => on
    });
    if (req && req.then) {
      req.then(onSuccess, onError)''
    }
  };

  return (
    <div
      className="dm-upload">
        <Button type="primary" onClick={handleClick}>上传文件</Button>
        <input
          className="dm-file-input"
          style={{display: 'none'}}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"/>
    </div>
  )
};

export default Upload;
