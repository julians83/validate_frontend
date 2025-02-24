import { useEffect, useState } from "react";
import { useValidationId } from "../../../../../context/ValidationId";
import { ValidateIdentityUseCase } from "../../../application/ValidateIdentity.useCases";
import { DataToGetValidation } from "../../../domain/ValidateIdentity";
import { ValidateIdentityController } from "../../controllers/UploadDocument.controller";

const validateIdentityController = new ValidateIdentityController();

const ValidationResults = () => {
  const { validationId } = useValidationId();
  const [validationStatus, setValidationStatus] = useState('');

  useEffect(() => {
    const validate = async () => {
      const data: DataToGetValidation = {
        validation_id: validationId || "",
      };
      const response = await ValidateIdentityUseCase.getValidation(
        validateIdentityController,
        data
      );
      console.log(response);
      if (response.status === 200) {
        setValidationStatus(response.data.validation_status);
      }
    };
    validate();
  }, [validationId]);

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
      ) : (
        <p>Cargando resultados de la validación...</p>
      )}
    </div>
  );
};

export default ValidationResults;
