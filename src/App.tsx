import { DocumentProvider } from "./context/DocumentContext";
import { DocumentUrlsProvider } from "./context/DocumentUrlsContext";
import { ValidationIdContextProvider } from "./context/ValidationId";
import Home from "./Pages/Home";

function App() {
  return (
    <DocumentProvider>
      <DocumentUrlsProvider>
        <ValidationIdContextProvider>
        <Home />
        </ValidationIdContextProvider>
      </DocumentUrlsProvider>
    </DocumentProvider>
  );
}

export default App;
