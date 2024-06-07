import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
} from "./file-upload.styles";

const UploadImages = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false); // New state to track dragging

  console.log(images);

  const KILO_BYTES_PER_BYTE = 1000;
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

  const onDragEnter = () => {
    setIsDragging(true); // Show overlay when file is dragged over
  };

  const onDragLeave = () => {
    setIsDragging(false); // Hide overlay when file is dragged out
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const filteredFiles = acceptedFiles.filter(
      (file) => file.size <= MAX_FILE_SIZE
    );

    if (filteredFiles.length !== acceptedFiles.length) {
      alert("Some files were too large and have not been added.");
    } else {
      setImages((prevImages) => [...prevImages, ...acceptedFiles]);

    }
setTimeout(() => setIsDragging(false), 0); // Hide overlay after 2 seconds
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

  const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

  const removeFile = (fileToRemove) => {
    setImages(images.filter((file) => file !== fileToRemove));
  };

  const h101 = {
    height : "102%"
  }

  return (
    <>
      <div
        className="bg-gray-500 h-auto sm:px-8 md:px-16 sm:py-8 "
      >
        <main className="container mx-auto max-w-screen-lg h-full">
          <article
            aria-label="File Upload Modal"
            style={h101}
            className={`relative flex flex-col shadow-xl rounded-md ${
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

            <section className="overflow-auto p-8 w-full h-full flex flex-col">
              <header
                className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
                {...getRootProps()}
              >
                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                  <span>Drag and drop your</span>&nbsp;
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
                      className="h-full w-full text-center flex flex-col items-center justify-center items-center"
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
              >
                Upload now
              </button>
              <button
                id="cancel"
                className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
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
