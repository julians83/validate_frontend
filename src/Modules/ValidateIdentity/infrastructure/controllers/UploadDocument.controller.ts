import { GenericResponse } from "../../../../models/Http";
import { DataToCreateValidation, DataToGetValidation, DataToValidateIdentity, IValidateIdentity } from "../../domain/ValidateIdentity";
import ValidateIdentityRepository from "../repository/ValidateIdentity.repository";

export class ValidateIdentityController  implements IValidateIdentity{
    repository: ValidateIdentityRepository;
    constructor() {
        this.repository = new ValidateIdentityRepository();
    }

    async createValidation(data: DataToCreateValidation): Promise<GenericResponse> {
        return await this.repository.createValidation(data);
    }

    async uploadDocument(data: DataToValidateIdentity): Promise<GenericResponse> {
        return await this.repository.uploadDocument(data);
    }

    async getValidation(data: DataToGetValidation): Promise<GenericResponse> {
        return await this.repository.getValidation(data);
    }
}