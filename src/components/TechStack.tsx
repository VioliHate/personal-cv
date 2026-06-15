import React from "react";
import type { CVData } from "../types/interfaces";

export const TechStack: React.FC<{ data: CVData }> = ({ data }) => (
  <section className='mb-4 print-keep-together'>
    <h2 className='text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-900 pb-0.5 mb-2'>
      Technical Skills
    </h2>
    <div className='space-y-1 text-[13.5px]'>
      {data.skills.map((category) => (
        <div key={category.title} className='flex items-baseline gap-1'>
          <span className='font-bold text-gray-900 min-w-[150px] shrink-0'>
            {category.title}:
          </span>
          <span className='text-gray-750 text-[13px]'>
            {category.skills.join(", ")}
          </span>
        </div>
      ))}
    </div>
  </section>
);
