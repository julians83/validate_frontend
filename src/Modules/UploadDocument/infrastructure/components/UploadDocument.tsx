import { useState } from "react";
import { useDocumentContext } from "../../../../context/DocumentContext";

const UploadPhotos = () => {
  const { isComplete } = useDocumentContext();
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setImage: (file: File | null) => void) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  if (!isComplete) return null; // Solo mostrar si el formulario está completo

  return (
    <div className="max-w-md mx-auto p-6 mt-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Sube tus fotos</h2>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold">Frontal del documento:</label>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFrontImage)}
          className="w-full p-2 bg-gray-700 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold">Reverso del documento:</label>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setBackImage)}
          className="w-full p-2 bg-gray-700 rounded-md"
        />
      </div>

      {frontImage && backImage && (
        <p className="text-green-400 font-bold">✅ Archivos listos para subir</p>
      )}
    </div>
  );
};

export default UploadPhotos;
