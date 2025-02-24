import { createContext, ReactNode, useContext, useState } from "react";

interface DocumentState {
  country: string;
  documentType: string;
  isComplete: boolean;
  setDocumentData: (country: string, documentType: string) => void;
}

const DocumentContext = createContext<DocumentState | undefined>(undefined);

export const DocumentProvider = ({ children }: { children: ReactNode }) => {
  const [documentData, setDocumentData] = useState({
    country: "",
    documentType: "",
    isComplete: false,
  });

  const setDocumentDataHandler = (country: string, documentType: string) => {
    setDocumentData({ country, documentType, isComplete: true });
  };

  return (
    <DocumentContext.Provider value={{ ...documentData, setDocumentData: setDocumentDataHandler }}>
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocumentContext = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error("useDocumentContext debe usarse dentro de DocumentProvider");
  }
  return context;
};
