import React from "react";
import type { CVData } from "../types/interfaces";

export const Languages: React.FC<{ data: CVData }> = ({ data }) => {
  if (!data.languages || data.languages.length === 0) return null;

  return (
    <section className='print-keep-together mb-4'>
      <h2 className='text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-900 pb-0.5 mb-2'>
        Languages
      </h2>
      <div className='text-[13px] text-gray-700'>
        {data.languages.map((lang, i) => (
          <React.Fragment key={lang.name}>
            {i > 0 && <span className='text-gray-400 select-none mx-2'>•</span>}
            <span className='font-bold text-gray-900'>{lang.name}:</span>{" "}
            <span className='text-gray-750'>{lang.level}</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
