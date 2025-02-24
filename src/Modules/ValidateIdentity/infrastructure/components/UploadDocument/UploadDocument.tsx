import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import { GenericResponse } from "../../../../../models/Http";
import { ValidateIdentityUseCase } from "../../../application/ValidateIdentity.useCases";
import { DataToValidateIdentity } from "../../../domain/ValidateIdentity";
import { ValidateIdentityController } from "../../controllers/UploadDocument.controller";


interface ValidateIdentityProps {
  image: File | null;
  setImage: (image: File) => void;
  onNext: () => void;
  url: string | null;
}

const validateIdentityController = new ValidateIdentityController();


const ValidateIdentity: React.FC<ValidateIdentityProps> = ({
  url,
  setImage,
  onNext
}) => {
  const [uploaded, setUploaded] = useState(false);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      const data: DataToValidateIdentity = {
        file: e.target.files[0],
        url: url || ""
      }
      const response: GenericResponse = await ValidateIdentityUseCase.uploadDocument(validateIdentityController, data);
      if (response.status === 200) {
        setUploaded(true);
      }
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

export default ValidateIdentity;
