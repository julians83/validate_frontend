import { useEffect, useState } from "react";
import { FaRedo } from "react-icons/fa";
import { useValidationId } from "../../../../../context/ValidationId";
import { ValidateIdentityUseCase } from "../../../application/ValidateIdentity.useCases";
import { DataToGetValidation } from "../../../domain/ValidateIdentity";
import { ValidateIdentityController } from "../../controllers/ValidateIdentity.controller";
import "./ValidationResults.scss";

const validateIdentityController = new ValidateIdentityController();

const ValidationResults = () => {
  const { validationId } = useValidationId();
  const [validationStatus, setValidationStatus] = useState('');
  const [isRetrying, setIsRetrying] = useState(false);

  const validate = async () => {
    const data: DataToGetValidation = {
      validation_id: validationId || "",
    };
    const response = await ValidateIdentityUseCase.getValidation(
      validateIdentityController,
      data
    );
    if (response.status === 200) {
      setValidationStatus(response.data.validation_status);
    }
  };

  useEffect(() => {
    validate();
  }, [validationId, isRetrying]);

  const handleRetry = () => {
    setIsRetrying(!isRetrying);
  };

  return (
    <div className="validation-results">
      {validationStatus === "success" ? (
        <>
          <h2>Documento validado correctamente ✅</h2>
          <p>Tu documento ha sido procesado exitosamente.</p>
        </>
      ) : validationStatus === "failure" ? (
        <>
          <h2>La validación del documento falló ❌</h2>
          <p>Hubo un problema al procesar tu documento. Por favor, inténtalo nuevamente.</p>
        </>
      ) : validationStatus === "pending" ? (
        <>
          <h2>La validación del documento está pendiente ⏳</h2>
          <p>La validación está en proceso. Si tarda demasiado, puedes volver a intentarlo.</p>
          <button onClick={handleRetry} className="retry-button">
            <FaRedo /> Reintentar
          </button>
        </>
      ) : (
        <p>Cargando resultados de la validación...</p>
      )}
    </div>
  );
};

export default ValidationResults;
