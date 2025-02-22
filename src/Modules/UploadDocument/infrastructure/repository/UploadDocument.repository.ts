import { GenericResponse } from "../../../../models/Http";
import {
    DataToCreateValidation,
    DataToUploadDocument,
} from "../../domain/UploadDocument";

export default class UploadDocumentRepository {
  async createValidation(
    data: DataToCreateValidation
  ): Promise<GenericResponse> {
    const url = "http://localhost:3001/identity-validate/validate-document";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return {
      status: response.status,
      data: result,
      message: response.statusText,
    };
  }

  async uploadDocument(data: DataToUploadDocument): Promise<GenericResponse> {
    const formData = new FormData();
    formData.append("file", data.file);
    const response = await fetch(data.url, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    return {
      status: response.status,
      data: result,
      message: response.statusText,
    };
  }

  async getValidation(data: {
    validation_id: string;
  }): Promise<GenericResponse> {
    const url = `http://localhost:3001/identity-validate/validate-document/${data.validation_id}`;
    const response = await fetch(url);
    const result = await response.json();
    return {
      status: response.status,
      data: result,
      message: response.statusText,
    };
  }
}
