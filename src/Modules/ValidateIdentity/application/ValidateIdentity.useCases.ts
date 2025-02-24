import { GenericResponse } from "../../../models/Http";
import { DataToCreateValidation, DataToGetValidation, DataToValidateIdentity, IValidateIdentity } from "../domain/ValidateIdentity";

export class ValidateIdentityUseCase  {
    static async createValidation(controller: IValidateIdentity, data:DataToCreateValidation ): Promise<GenericResponse> {
        const response: GenericResponse = await controller.createValidation(data);
        return {
            data: response?.data,
            status: response?.status,
            message: response?.message
        };
  }

  static async uploadDocument(controller: IValidateIdentity, data:DataToValidateIdentity ): Promise<GenericResponse> {
    const response: GenericResponse = await controller.uploadDocument(data);
    return {
        data: response?.data,
        status: response?.status,
        message: response?.message
    };
  }

  static async getValidation(controller: IValidateIdentity, data:DataToGetValidation ): Promise<GenericResponse> {
    const response: GenericResponse = await controller.getValidation(data);
    return {
        data: response?.data,
        status: response?.status,
        message: response?.message
    };
  }
}