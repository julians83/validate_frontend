import { createContext, ReactNode, useContext, useState } from "react";

interface ValidationIdContextType {
  validationId: string | null;
  setValidationId: (url: string) => void;
}

const ValidationIdContext = createContext<ValidationIdContextType | undefined>(
  undefined
);

export const ValidationIdContextProvider = ({ children }: { children: ReactNode }) => {
  const [validationId, setValidationId] = useState<string | null>(null);

  return (
    <ValidationIdContext.Provider value={{ validationId, setValidationId }}>
      {children}
    </ValidationIdContext.Provider>
  );
};

export const useValidationId = () => {
  const context = useContext(ValidationIdContext);
  if (!context) {
    throw new Error("useDocumentUrls debe usarse dentro de un DocumentUrlsProvider");
  }
  return context;
};
