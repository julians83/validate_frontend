import { useState } from "react";
import { Country, DocumentType } from "../../../../../Enums/Document";
import { useDocumentContext } from "../../../../../context/DocumentContext";
import "./DocumentForm.scss";

interface DocumentFormProps {
  formData: {
    country: string;
    documentType: string;
  };
  setFormData: (data: { country: string; documentType: string }) => void;
  onNext: () => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({
  formData,
  setFormData,
  onNext,
}) => {
  const { setDocumentData } = useDocumentContext();
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    if (newFormData.country && newFormData.documentType) setIsComplete(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.country && formData.documentType) {
      setDocumentData(formData.country, formData.documentType);
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="document-form">
      <h2 className="document-form__title">Validación de Documento</h2>

      <select
        name="country"
        value={formData?.country}
        onChange={handleChange}
        className="document-form__select"
      >
        <option value="" disabled>
          - Selecciona un país -
        </option>
        {Object.values(Country).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <label className="document-form__label">Tipo de documento:</label>
      <select
        name="documentType"
        value={formData?.documentType}
        onChange={handleChange}
        className="document-form__select"
      >
        <option value="" disabled>
          - Selecciona un tipo de documento -
        </option>
        {Object.values(DocumentType).map((docType) => (
          <option key={docType} value={docType}>
            {docType.replace("-", " ").toUpperCase()}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="document-form__button"
        disabled={!isComplete}
      >
        Siguiente
      </button>
    </form>
  );
};

export default DocumentForm;
