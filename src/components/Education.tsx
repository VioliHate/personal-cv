import React from "react";
import type { CVData } from "../types/interfaces";

export const Education: React.FC<{ data: CVData }> = ({ data }) => (
  <section className='mb-3 print-keep-together'>
    <h2 className='text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-900 pb-0.5 mb-1.5'>
      Education
    </h2>
    <div className='space-y-2'>
      {data.education.map((edu) => (
        <div
          key={edu.id}
          className='flex justify-between items-baseline text-[13.5px]'
        >
          <div>
            <span className='font-bold text-gray-900'>{edu.degree}</span>
            <span className='text-gray-600 italic'> — {edu.school}</span>
          </div>
          <span className='text-gray-600 text-xs shrink-0'>{edu.period}</span>
        </div>
      ))}
    </div>
  </section>
);
