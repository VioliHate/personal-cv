import React from "react";
import type { CVData } from "../types/interfaces";

export const TechStack: React.FC<{ data: CVData }> = ({ data }) => (
  <section className='mb-10 print-keep-together'>
    <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5'>
      Tech Stack
    </h2>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm'>
      {data.skills.map((category) => (
        <div key={category.title}>
          <p className='text-xs font-semibold text-slate-400 mb-2 tracking-wider'>
            {category.title}
          </p>
          <div className='flex flex-wrap gap-2'>
            {category.skills.map((skill) => (
              <span
                key={skill}
                className='px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded border border-slate-200'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
