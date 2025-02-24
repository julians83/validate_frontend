import React, { useState } from 'react';
import LoadingSpinner from '../../../../../Components/Loading/Loading';
import { Country, DocumentType } from '../../../../../Enums/Document';
import { useDocumentContext } from '../../../../../context/DocumentContext';
import { useDocumentUrls } from '../../../../../context/DocumentUrlsContext';
import { useValidationId } from '../../../../../context/ValidationId';
import { GenericResponse } from '../../../../../models/Http';
import { ValidateIdentityUseCase } from '../../../application/ValidateIdentity.useCases';
import { DataToCreateValidation } from '../../../domain/ValidateIdentity';
import { ValidateIdentityController } from '../../controllers/UploadDocument.controller';
import './DocumentForm.scss';

interface DocumentFormProps {
  formData: {
    country: string;
    documentType: string;
  };
  setFormData: (data: { country: string; documentType: string }) => void;
  onNext: () => void;
}

const validateIdentityController = new ValidateIdentityController();

const DocumentForm: React.FC<DocumentFormProps> = ({
  formData,
  setFormData,
  onNext,
}) => {
  const { setDocumentData } = useDocumentContext();
  const { setFrontUrl, setReverseUrl } = useDocumentUrls();
  const { setValidationId } = useValidationId();
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newFormData = { ...formData, [e.target.name]: e.target.value };
      setFormData(newFormData);
      if (newFormData.country && newFormData.documentType) setIsComplete(true);
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.country && formData.documentType) {
      setDocumentData(formData.country, formData.documentType);
      const countryKey = Object.keys(Country).find(
        (key) => Country[key as keyof typeof Country] === formData.country
      );
      const data: DataToCreateValidation = {
        type: 'document-validation',
        country: countryKey || '',
        document_type: formData.documentType,
      };
      setLoading(true);
      const response: GenericResponse =
        await ValidateIdentityUseCase.createValidation(
          validateIdentityController,
          data
        );

      if (response.status === 201) {
        setFrontUrl(response?.data?.instructions?.front_url);
        setReverseUrl(response?.data?.instructions?.reverse_url);
        setValidationId(response?.data?.validation_id);
        setLoading(false);
        onNext();
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

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
            {docType.replace('-', ' ').toUpperCase()}
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
