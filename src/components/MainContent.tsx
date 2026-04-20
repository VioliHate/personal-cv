// components/MainContent.tsx
import React from "react";
import type { CVData } from "../types/interfaces";
import { ExperienceSection } from "./ExperienceSection";
import { ProfileSummary } from "./ProfileSummary";

export const MainContent: React.FC<{ data: CVData }> = ({ data }) => {
  return (
    <main>
      {/* Profilo professionale */}
      <ProfileSummary summary={data.summary} />
      {/* Tech Stack - Tag minimali */}
      <section className='mb-16'>
        <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6'>
          Tech Stack
        </h2>
        <div className='flex flex-wrap gap-2'>
          {data.skills.map((skill, i) => (
            <span
              key={i}
              className='px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded border border-slate-200 uppercase tracking-tighter'
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <ExperienceSection title='Work Experience' items={data.workExperience} />

      <ExperienceSection title='Side Projects' items={data.outWorkExperience} />

      {/* Formazione */}
      <section className='print-keep-together'>
        <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8'>
          Formazione
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {data.education.map((edu) => (
            <div key={edu.id} className='group'>
              <h3 className='font-bold text-slate-900 group-hover:text-blue-600 transition-colors'>
                {edu.degree}
              </h3>
              <p className='text-slate-500 text-sm font-medium'>{edu.school}</p>
              <p className='text-xs text-slate-400 mt-1 uppercase tracking-wider'>
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
