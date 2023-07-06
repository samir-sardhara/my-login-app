import React,{useState} from "react";
import { useDropzone } from 'react-dropzone';

const Step4 = ({
  formData,
  handleFileUpload,
  handleNextStep,
  handlePreviousStep,
}) => {
    const [files, setFiles] = useState([]);

    const handleDrop = (acceptedFiles) => {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles.slice(0, 5)); // Limit the number of uploaded files to 5
    };
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: handleDrop,
      accept: '.png,.pdf',
      multiple: true,
      maxFiles: 5,
    });
  return (
    <div className="login-form-container">
      <h2>File Upload</h2>
      <form className="login-form" onSubmit={handleNextStep}>
      <div {...getRootProps()} style={{ border: '2px dashed', padding: '20px', marginBottom: '20px' }}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop files here or click to browse</p>
        )}
      </div>
      <div>
        {files.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
        <button type="button" onClick={handlePreviousStep}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step4;
