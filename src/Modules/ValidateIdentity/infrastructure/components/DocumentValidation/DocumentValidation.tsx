import { useState } from "react";
import { useDocumentUrls } from "../../../../../context/DocumentUrlsContext";
import DocumentForm from "../DocumentForm/DocumentForm";
import UploadDocument from "../UploadDocument/UploadDocument";
import ValidationResults from "../ValidationResults/ValidationsResults";
import "./DocumentValidation.scss";

const DocumentValidation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country: "",
    documentType: "",
  });

  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const { frontUrl, reverseUrl } = useDocumentUrls();


  const steps = [1, 2, 3, 4];

  return (
    <div className="validation-container">
      <div className="validation-stepper">
        {steps.map((num) => (
          <div
            key={num}
            className={`validation-stepper__step ${
              step > num
                ? "validation-stepper__step--completed"
                : step === num
                ? "validation-stepper__step--active"
                : "validation-stepper__step--disabled"
            }`}
            onClick={() => {
              if (step > num) setStep(num);
            }}
          >
            {num}
          </div>
        ))}
      </div>

      <div className="validation-content">
        {step === 1 && (
          <DocumentForm
            formData={formData}
            setFormData={setFormData}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <UploadDocument
            image={frontImage}
            setImage={setFrontImage}
            onNext={() => setStep(3)}
            url={frontUrl}
            step={step}
          />
        )}
        {step === 3 && (
          <UploadDocument
            image={backImage}
            setImage={setBackImage}
            onNext={() => setStep(4)}
            url={reverseUrl}
            step={step}
            />
        )}
        {step === 4 && <ValidationResults />}
      </div>
    </div>
  );
};

export default DocumentValidation;
