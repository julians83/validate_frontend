import { GenericResponse } from "../../../models/Http";


export interface DataToCreateValidation {
  type: string;
  country: string;
  document_type: string;
}

export interface DataToValidateIdentity {
  file: File;
  url: string;
}

export interface DataToGetValidation {
  validation_id: string;
}


  

export interface IValidateIdentity {
  createValidation(data: DataToCreateValidation): Promise<GenericResponse>;
  uploadDocument(data: DataToValidateIdentity): Promise<GenericResponse>;
  getValidation(data: DataToGetValidation): Promise<GenericResponse>;
}
