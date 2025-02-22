export class GenericResponse {
    status: number
    message: string
    data: any

    constructor ({ status, message, data}: {status: number, message: string, data: any}) {
      this.status = status
      this.message = message
      this.data = data
    }
}