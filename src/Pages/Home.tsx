import DocumentForm from "../Components/DocumentForm";
import UploadDocument from "../Modules/UploadDocument/infrastructure/components/UploadDocument";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <DocumentForm />
      <UploadDocument />
    </div>
  );
};

export default Home;
