import React from "react";
import type { CVData } from "../types/interfaces";

export const TechStack: React.FC<{ data: CVData }> = ({ data }) => (
  <section className='mb-8 print-keep-together'>
    <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5'>
      Tech Stack
    </h2>
    <div className='space-y-4'>
      {" "}
      {data.skills.map((category) => (
        <div key={category.title}>
          <p className='text-xs font-semibold text-slate-400 mb-1.5 tracking-wider'>
            {category.title}
          </p>
          <div className='flex flex-wrap gap-1.5'>
            {category.skills.map((skill) => (
              <span
                key={skill}
                className='px-2.5 py-0.5 bg-slate-50 text-slate-700 text-[12.5px] font-medium rounded border border-slate-200 whitespace-nowrap'
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
