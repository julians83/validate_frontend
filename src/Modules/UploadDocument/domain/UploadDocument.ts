import { Country, DocumentType } from "../../../Enums/Document";
import { GenericResponse } from "../../../models/Http";


export interface DataToCreateValidation {
  type: string;
  country: Country;
  document_type: DocumentType;
}

export interface DataToUploadDocument {
  file: File;
  url: string;
}

export interface DataToGetValidation {
  validation_id: string;
}


  

export interface IUploadDocument {
  createValidation(data: DataToCreateValidation): Promise<GenericResponse>;
  uploadDocument(data: DataToUploadDocument): Promise<GenericResponse>;
  getValidation(data: DataToGetValidation): Promise<GenericResponse>;
}
