import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import useUploadImage from "../../hooks/useUploadImage";
import {
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
} from "./file-upload.styles";

const UploadImages = ({ setAddImg, onClose }) => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const { addImg, loading } = useUploadImage(setAddImg);

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

  const onDragEnter = () => setIsDragging(true);
  const onDragLeave = () => setIsDragging(false);

  const onDrop = useCallback((acceptedFiles) => {
    const filteredFiles = acceptedFiles.filter(
      (file) => file.size <= MAX_FILE_SIZE
    );

    if (filteredFiles.length !== acceptedFiles.length) {
      alert("Some files were too large and have not been added.");
    } else {
      setImages((prevImages) => [...prevImages, ...filteredFiles]);
    }
    setTimeout(() => setIsDragging(false), 0);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter,
    onDragLeave,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  const removeFile = (fileToRemove) => {
    setImages(images.filter((file) => file !== fileToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addImg(images);
  };

  const KILO_BYTES_PER_BYTE = 1000;
  const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

  return (
    <>
      <div className="relative">
        {loading && (
          <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
            <div className="flex items-center">
              <span className="text-3xl mr-4">Loading</span>
              <svg
                className="animate-spin h-8 w-8 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        )}
        <main className="container rounded-md overflow-hidden max-w-full mx-auto my-auto h-full">
          <article
            aria-label="File Upload Modal"
            className={`relative flex flex-col shadow-xl rounded-md max-h-[95vh] ${
              isDragging ? "bg-gray-300" : "bg-white"
            }`}
          >
            {isDragging && (
              <div
                id="overlay"
                className="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md"
              >
                <i>
                  <svg
                    className="fill-current w-12 h-12 mb-3 text-blue-700"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                  </svg>
                </i>
                <p className="text-lg text-blue-700">Drop files to upload</p>
              </div>
            )}

            <section className="overflow-auto no-scrollbar p-8 w-full h-full flex flex-col">
              <header
                className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
                {...getRootProps()}
              >
                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                  <span>Drag and drop your</span> 
                  <span>files anywhere or</span>
                </p>
                <input
                  id="hidden-input"
                  type="file"
                  multiple
                  className="hidden"
                  {...getInputProps()}
                />
                <button
                  id="button"
                  className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                >
                  Upload a file
                </button>
              </header>

              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                To Upload
              </h1>

              <FilePreviewContainer>
                {images.length > 0 ? (
                  ""
                ) : (
                  <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                    <li
                      id="empty"
                      className="h-full w-full text-center flex flex-col items-center justify-center"
                    >
                      <img
                        className="mx-auto w-32"
                        src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                        alt="no data"
                      />
                      <span className="text-small text-gray-500">
                        No files selected
                      </span>
                    </li>
                  </ul>
                )}
                <PreviewList>
                  {images.map((file, index) => {
                    let isImageFile = file.type.split("/")[0] === "image";
                    // Create a unique key for each file
                    const fileKey = file.name + file.lastModified;
                    return (
                      <PreviewContainer key={fileKey}>
                        <div>
                          {isImageFile && (
                            <ImagePreview
                              src={URL.createObjectURL(file)}
                              alt={`file preview ${index}`}
                            />
                          )}
                          <FileMetaData isImageFile={isImageFile}>
                            <span>{file.name}</span>
                            <aside>
                              <span>{convertBytesToKB(file.size)} kb</span>
                              <RemoveFileIcon
                                className="fas fa-trash-alt"
                                onClick={() => removeFile(file)}
                              />
                            </aside>
                          </FileMetaData>
                        </div>
                      </PreviewContainer>
                    );
                  })}
                </PreviewList>
              </FilePreviewContainer>
            </section>

            <footer className="flex relative justify-end px-8 pb-8 pt-4">
              <button
                id="submit"
                className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
                onClick={(e) => {
                  handleSubmit(e);
                  onClose();
                }}
              >
                Upload now
              </button>
              <button
                id="cancel"
                className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                onClick={onClose}
              >
                Cancel
              </button>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
};

export default UploadImages;
