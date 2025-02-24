import DocumentValidation from "../Modules/ValidateIdentity/infrastructure/components/DocumentValidation/DocumentValidation";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <DocumentValidation />
    </div>
  );
};

export default Home;
