import React, { useState, useRef } from "react";
import { IMAGE_PLACEHOLDER } from "assets";

const UploadImageSection = ({ onImageSelect = null, placeholder = "" }) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const uploadRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    onImageSelect(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBrowseImage = () => {
    uploadRef.current.click();
  };

  return (
    <div className="upload-image-wrapper">
      <div className="placeholder-wrapper">
        <img
          className={uploadedImageUrl ? "full-image" : ""}
          src={uploadedImageUrl || IMAGE_PLACEHOLDER}
          alt=""
        />
      </div>
      <div>
        <h5>{placeholder}</h5>
        <p className="primary-text" onClick={handleBrowseImage}>
          Browse Image
        </p>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleImageUpload}
          ref={uploadRef}
        />
      </div>
    </div>
  );
};

export default UploadImageSection;
