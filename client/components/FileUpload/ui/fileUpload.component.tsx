import React, { PropsWithChildren, useRef } from 'react';

interface FileUploadComponentProps {
  file?: any;
  setFile: Function;
  accept: string;
}

export const FileUploadComponent: React.FC<FileUploadComponentProps & PropsWithChildren> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files);
  }

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={changeHandler}
      />
      {children}
    </div>
  );
};
