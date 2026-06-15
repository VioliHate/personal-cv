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
  <section className='print-keep-together mb-4'>
    <h2 className='text-sm font-bold uppercase tracking-wider text-gray-800 border-b border-gray-900 pb-0.5 mb-2'>
      {title}
    </h2>
    <div className='space-y-3.5'>
      {items.map((item) => {
        const displayName = "company" in item ? item.company : item.name;
        return (
          <div key={item.id} className='text-[13.5px]'>
            {/* Ruolo, Azienda, Periodo */}
            <div className='flex justify-between items-baseline font-bold text-gray-900'>
              <span>
                {item.role}
                {displayName && (
                  <span className='font-normal text-gray-600 italic'>
                    {" "}
                    @ {displayName}
                  </span>
                )}
              </span>
              <span className='font-normal text-gray-600 text-xs shrink-0'>
                {item.period}
              </span>
            </div>

            {/* Elenco Tecnologie in corsivo */}
            {item.technologies && item.technologies.length > 0 && (
              <div className='text-gray-750 italic text-[12px] mt-0.5 font-medium tracking-wide'>
                {item.technologies.join(", ")}
              </div>
            )}

            {/* Elenco dei traguardi e contributi sul progetto */}
            <ul className='list-disc pl-5 mt-1 space-y-0.5 text-gray-750 text-[13px] leading-relaxed text-justify'>
              {item.description.map((bullet, i) => (
                <li key={i} className='pl-0.5'>
                  {linkify(bullet)}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);
