import { useState } from "react";
import { Country, DocumentType } from "../Enums/Document";
import { useDocumentContext } from "../context/DocumentContext";

const DocumentForm = () => {
  const { setDocumentData } = useDocumentContext();
  const [formData, setFormData] = useState({
    country: "",
    documentType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.country && formData.documentType) {
      setDocumentData(formData.country, formData.documentType);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Validación de Documento
      </h2>

      <label className="block mb-3 text-sm font-medium text-gray-700">
        Selecciona tu país:
      </label>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Seleccionar País --</option>
        {Object.values(Country).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <label className="block mb-3 text-sm font-medium text-gray-700">
        Tipo de documento:
      </label>
      <select
        name="documentType"
        value={formData.documentType}
        onChange={handleChange}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Seleccionar Documento --</option>
        {Object.values(DocumentType).map((docType) => (
          <option key={docType} value={docType}>
            {docType.replace("-", " ").toUpperCase()}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full p-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Validar Documento
      </button>
    </form>
  );
};

export default DocumentForm;
