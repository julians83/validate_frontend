import { DocumentProvider } from "./context/DocumentContext";
import { DocumentUrlsProvider } from "./context/DocumentUrlsContext";
import Home from "./Pages/Home";

function App() {
  return (
    <DocumentProvider>
      <DocumentUrlsProvider>
        <Home />
      </DocumentUrlsProvider>
    </DocumentProvider>
  );
}

export default App;
