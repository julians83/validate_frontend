const ValidationResult = ({ frontImage, backImage }: { frontImage: File | null; backImage: File | null }) => {
    return (
      <div className="p-4 bg-gray-700 text-white rounded-lg shadow-lg max-w-md mx-auto mt-4">
        <h2 className="text-xl font-bold mb-4">Resultado de Validación</h2>
        {frontImage && <img src={URL.createObjectURL(frontImage)} alt="Frente Validado" className="rounded-lg" />}
        {backImage && <img src={URL.createObjectURL(backImage)} alt="Reverso Validado" className="rounded-lg mt-2" />}
        <p className="mt-4 text-green-400">✅ Documento validado correctamente.</p>
      </div>
    );
  };
  
  export default ValidationResult;
  