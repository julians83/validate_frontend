import { useState } from "react";
import { FaIdCard } from "react-icons/fa";

const UploadDocument = ({ image, setImage, onNext }: any) => {
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      setUploaded(true);
    }
  };

  return (
    <div className="upload-step">
      <h2>Sube tu documento</h2>
      <label className={`upload-step__box ${uploaded ? "uploaded" : ""}`}>
        <input type="file" onChange={handleFileChange} className="upload-step__input" />
        <FaIdCard className="upload-step__icon" />
      </label>

      {uploaded && <button onClick={onNext}>Siguiente</button>}
    </div>
  );
};

export default UploadDocument;
