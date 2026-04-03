import { Download } from "lucide-react";
import { Headerbar } from "./components/Headerbar";
import { cvData } from "./data/cvData";
import { MainContent } from "./components/MainContent";

export default function App() {
  return (
    <div className='min-h-screen bg-slate-50 md:py-12 flex justify-center font-sans selection:bg-blue-100'>
      {/* Contenitore A4-like */}
      <div className='bg-white w-full max-w-4xl shadow-sm min-h-screen md:min-h-0 p-8 md:p-16 border border-slate-100'>
        <Headerbar personal={cvData.personal} contacts={cvData.contact} />

        <MainContent data={cvData} />
      </div>

      {/* Tasto Stampa (rimane fisso) */}
      <button
        onClick={() => window.print()}
        className='fixed bottom-8 right-8 bg-slate-900 text-white p-4 rounded-full shadow-2xl print:hidden hover:scale-110 transition-transform'
      >
        <Download size={24} />
      </button>
    </div>
  );
}
