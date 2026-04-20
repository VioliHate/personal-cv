import React from "react";
import type { CVData } from "../types/interfaces";

export const Education: React.FC<{ data: CVData }> = ({ data }) => (
  <section className='print-keep-together'>
    <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6'>
      Formazione
    </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {data.education.map((edu) => (
        <div key={edu.id}>
          <h3 className='font-bold text-slate-900'>{edu.degree}</h3>
          <p className='text-slate-500 text-sm'>{edu.school}</p>
          <p className='text-xs text-slate-400'>{edu.period}</p>
        </div>
      ))}
    </div>
  </section>
);
