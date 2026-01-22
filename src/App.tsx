import { Download } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import { cvData } from "./data/cvData";

function App() {
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center p-4 md:p-10 font-sans'>
      {/* Container Principale (Layout) */}
      <div className='bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row'>
        {/* Componente Sinistro */}
        <Sidebar data={cvData} />

        {/* Componente Destro */}
        <MainContent data={cvData} />
      </div>

      {/* Pulsante Stampa (Extra) */}
      <div className='fixed bottom-4 right-4 print:hidden'>
        <button
          onClick={() => window.print()}
          className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center gap-2 transition-all'
        >
          <Download size={20} />
          <span className='hidden md:inline font-medium'>Salva PDF</span>
        </button>
      </div>
    </div>
  );
}

export default App;
