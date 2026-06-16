import { Download } from "lucide-react";
import { Headerbar } from "./components/Headerbar";
import { cvData } from "./data/cvData";
import { MainContent } from "./components/MainContent";

export default function App() {
  return (
    <div className='min-h-screen bg-slate-100 py-6 md:py-12 flex justify-center font-serif text-gray-900 selection:bg-gray-200'>
      <div className='bg-white w-full max-w-3xl shadow-md min-h-screen md:min-h-0 p-8 md:p-10 print:shadow-none print:border-none print:p-0'>
        <Headerbar personal={cvData.personal} contacts={cvData.contact} />
        <MainContent data={cvData} />
      </div>

      {/* Pulsante di stampa */}
      <button
        onClick={() => window.print()}
        className='fixed bottom-8 right-8 bg-gray-900 text-white p-4 rounded-full shadow-2xl print:hidden hover:scale-105 active:scale-95 transition-transform'
      >
        <Download size={24} />
      </button>
    </div>
  );
}
