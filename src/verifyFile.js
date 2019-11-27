import Swal from "sweetalert2";


export const imageMaxSize = 10000000; // bytes
export const acceptedFileTypes =
"image/x-png, image/png, image/jpg, image/jpeg, image/gif";

export const verifyFile = files => {
    const acceptedFileTypesArray = acceptedFileTypes.split(",").map(item => {
        return item.trim();
    });

  if (files && files.length > 0) {
    const currentFile = files[0];
    const currentFileType = currentFile.type;
    const currentFileSize = currentFile.size;
    if (currentFileSize > imageMaxSize) {
      Swal.fire(
        "Error!",
        `This file is not allowed. ${currentFileSize} bytes is too larg`,
        "error"
      );
      return false;
    }
    if (!acceptedFileTypesArray.includes(currentFileType)) {
      Swal.fire(
        "Error!",
        "This file is not allowed. Only images are allowed.",
        "error"
      );
      return false;
    }
    return true;
  }
};
