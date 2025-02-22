import { GenericResponse } from "../../..//models/Http";
import { DataToCreateValidation, DataToGetValidation, DataToUploadDocument, IUploadDocument } from "../domain/UploadDocument";

export class UpdaloadDocumentUseCase  {
    static async createValidation(controller: IUploadDocument, data:DataToCreateValidation ): Promise<GenericResponse> {
        const response: GenericResponse = await controller.createValidation(data);
        return {
            data: response?.data,
            status: response?.status,
            message: response?.message
        };
  }

  static async uploadDocument(controller: IUploadDocument, data:DataToUploadDocument ): Promise<GenericResponse> {
    const response: GenericResponse = await controller.uploadDocument(data);
    return {
        data: response?.data,
        status: response?.status,
        message: response?.message
    };
  }

  static async getValidation(controller: IUploadDocument, data:DataToGetValidation ): Promise<GenericResponse> {
    const response: GenericResponse = await controller.getValidation(data);
    return {
        data: response?.data,
        status: response?.status,
        message: response?.message
    };
  }
}