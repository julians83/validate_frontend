import { GenericResponse } from "../../../../models/Http";
import {
  DataToCreateValidation,
  DataToValidateIdentity,
} from "../../domain/ValidateIdentity";

const url = "http://localhost:3001/identity-validate";

export default class ValidateIdentityRepository {
  async createValidation(
    data: DataToCreateValidation
  ): Promise<GenericResponse> {
    const response = await fetch(`${url}/validate-document`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result: GenericResponse = await response.json();
    return {
      status: response.status,
      data: result,
      message: response.statusText,
    };
  }

  async uploadDocument(data: DataToValidateIdentity): Promise<GenericResponse> {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("url", data.url);
    const response = await fetch(`${url}/upload-image`, {
      method: "PUT",
      body: formData,
    });
    const result: GenericResponse = await response.json();
    return {
      status: response.status,
      data: result,
      message: response.statusText,
    };
  }

  async getValidation(data: {
    validation_id: string;
  }): Promise<GenericResponse> {
    const response = await fetch(`${url}/validations/${data.validation_id}`);
    const result: GenericResponse = await response.json();
    return {
      status: response.status,
      data: result,
      message: response.statusText,
    };
  }
}
