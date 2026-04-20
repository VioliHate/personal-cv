import React from "react";
import type {
  WorkExperienceItem,
  OutWorkExperienceItem,
} from "../types/interfaces";
import { linkify } from "../utils/TextToLink";

interface ExperienceSectionProps {
  title: string;
  items: (WorkExperienceItem | OutWorkExperienceItem)[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title,
  items,
}) => (
  <section className='print-keep-together mb-12'>
    <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 border-b border-slate-50 pb-2'>
      {title}
    </h2>
    <div className='space-y-10'>
      {items.map((item) => (
        <div
          key={item.id}
          className='grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8'
        >
          {/* Data a sinistra */}
          <div className='text-sm font-semibold text-slate-400 pt-1'>
            {item.period}
          </div>

          {/* Dettagli a destra */}
          <div>
            <h3 className='text-lg font-bold text-slate-900 mb-0.5'>
              {item.role}
            </h3>

            <div className='text-blue-600 font-bold text-sm mb-4 uppercase tracking-wide'>
              {"company" in item ? item.company : item.name}
            </div>

            <ul className='space-y-2'>
              {item.description.map((bullet, i) => (
                <li
                  key={i}
                  className='text-slate-600 leading-relaxed text-[15px] flex gap-3'
                >
                  <span className='mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0' />
                  {linkify(bullet)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);
