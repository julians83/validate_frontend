import { createContext, ReactNode, useContext, useState } from "react";

interface DocumentUrlsContextType {
  frontUrl: string | null;
  reverseUrl: string | null;
  setFrontUrl: (url: string) => void;
  setReverseUrl: (url: string) => void;
}

const DocumentUrlsContext = createContext<DocumentUrlsContextType | undefined>(
  undefined
);

export const DocumentUrlsProvider = ({ children }: { children: ReactNode }) => {
  const [frontUrl, setFrontUrl] = useState<string | null>(null);
  const [reverseUrl, setReverseUrl] = useState<string | null>(null);

  return (
    <DocumentUrlsContext.Provider value={{ frontUrl, reverseUrl, setFrontUrl, setReverseUrl }}>
      {children}
    </DocumentUrlsContext.Provider>
  );
};

export const useDocumentUrls = () => {
  const context = useContext(DocumentUrlsContext);
  if (!context) {
    throw new Error("useDocumentUrls debe usarse dentro de un DocumentUrlsProvider");
  }
  return context;
};
