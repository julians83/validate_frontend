import './App.css'
import { DocumentProvider } from './context/DocumentContext'
import Home from './Pages/Home'

function App() {

  return (
    <DocumentProvider>
      <Home />
    </DocumentProvider>
  )
}

export default App
