import { GenericResponse } from "../../../../models/Http";
import { DataToCreateValidation, DataToGetValidation, DataToUploadDocument, IUploadDocument } from "../../domain/UploadDocument";
import UploadDocumentRepository from "../repository/UploadDocument.repository";

export class UpdaloadDocumentController  implements IUploadDocument{
    repository: UploadDocumentRepository;
    constructor() {
        this.repository = new UploadDocumentRepository();
    }

    async createValidation(data: DataToCreateValidation): Promise<GenericResponse> {
        return await this.repository.createValidation(data);
    }

    async uploadDocument(data: DataToUploadDocument): Promise<GenericResponse> {
        return await this.repository.uploadDocument(data);
    }

    async getValidation(data: DataToGetValidation): Promise<GenericResponse> {
        return await this.repository.getValidation(data);
    }
}