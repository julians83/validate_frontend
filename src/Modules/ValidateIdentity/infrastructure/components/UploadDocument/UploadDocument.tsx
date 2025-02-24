import { useState } from "react";
import { FaIdCard, FaIdCardAlt } from "react-icons/fa";
import { GenericResponse } from "../../../../../models/Http";
import { ValidateIdentityUseCase } from "../../../application/ValidateIdentity.useCases";
import { DataToValidateIdentity } from "../../../domain/ValidateIdentity";
import { ValidateIdentityController } from "../../controllers/UploadDocument.controller";
import "./UploadDocument.scss";

interface UploadDocumentProps {
  image: File | null;
  setImage: (image: File) => void;
  onNext: () => void;
  url: string | null;
  step: number;
}

const validateIdentityController = new ValidateIdentityController();

const UploadDocument: React.FC<UploadDocumentProps> = ({
  url,
  setImage,
  onNext,
  step,
}) => {
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      const data: DataToValidateIdentity = {
        file: e.target.files[0],
        url: url || "",
      };
      const response: GenericResponse =
        await ValidateIdentityUseCase.uploadDocument(
          validateIdentityController,
          data
        );
      if (response.status === 200) {
        setUploaded(true);
      }
    }
  };

  let title = "";
  let IconComponent = FaIdCard;

  if (step === 2) {
    title = "Sube la parte frontal de tu documento de identidad";
    IconComponent = FaIdCard;
  } else if (step === 3) {
    title = "Sube la parte posterior de tu documento de identidad";
    IconComponent = FaIdCardAlt;
  }

  return (
    <div className="upload-step">
      <h2 className="upload-step__title">{title}</h2>
      <label className={`upload-step__box ${uploaded ? "uploaded" : ""}`}>
        <input
          type="file"
          onChange={handleFileChange}
          className="upload-step__input"
        />
        <IconComponent className="upload-step__icon" />
      </label>
      {uploaded && (
        <button className="upload-step__button" onClick={onNext}>
          Siguiente
        </button>
      )}
    </div>
  );
};

export default UploadDocument;
