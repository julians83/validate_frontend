import { useState } from "react";
import UploadDocument from "../../Modules/UploadDocument/infrastructure/components/UploadDocument";
import ValidationResults from "../../Modules/UploadDocument/infrastructure/components/ValidationsResults";
import DocumentForm from "../DocumentForm/DocumentForm";

const DocumentValidation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ country: "", documentType: "" });
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);

  return (
    <div className="validation-container">
      <div className="validation-step-indicator">Paso {step} de 3</div>

      {step === 1 && (
        <DocumentForm formData={formData} setFormData={setFormData} onNext={() => setStep(2)} />
      )}
      {step === 2 && (
        <UploadDocument image={frontImage} setImage={setFrontImage} onNext={() => setStep(3)} />
      )}
      {step === 3 && (
        <UploadDocument image={backImage} setImage={setBackImage} onNext={() => setStep(4)} />
      )}
      {step === 4 && <ValidationResults />}
    </div>
  );
};

export default DocumentValidation;
