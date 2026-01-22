import React from "react";
import type { CVData } from "../types/interfaces";

interface MainContentProps {
  data: CVData;
}

export const MainContent: React.FC<MainContentProps> = ({ data }) => {
  const { personal, workExperience, outWorkExperience, education } = data;

  return (
    <main className='w-full md:w-2/3 p-8 md:p-12 text-slate-800'>
      {/* Profilo */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4 inline-block'>
          Chi sono
        </h2>
        <p className='text-slate-600 leading-relaxed text-lg'>
          {personal.description}
        </p>
      </section>

      {/* Esperienza Lavorativa */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-6 inline-block'>
          Esperienza Lavorativa
        </h2>
        <div className='space-y-8'>
          {workExperience.map((job) => (
            <div
              key={job.id}
              className='relative pl-6 border-l-2 border-slate-200 hover:border-blue-400 transition-colors'
            >
              <div className='absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1.5 border-4 border-white'></div>
              <h3 className='text-xl font-bold text-slate-800'>{job.role}</h3>
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-slate-500 mb-3 mt-1'>
                <span className='font-semibold text-blue-600'>
                  {job.company}
                </span>
                <span className='bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit'>
                  {job.period}
                </span>
              </div>
              <p className='text-slate-600 leading-relaxed whitespace-pre-line'>
                <ul className='list-disc pl-5 space-y-1'>
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Progetti  Extra-Lavorativi */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-6 inline-block'>
          Esperienza Extra-Lavorativa
        </h2>
        <div className='space-y-8'>
          {outWorkExperience.map((project) => (
            <div
              key={project.id}
              className='relative pl-6 border-l-2 border-slate-200 hover:border-blue-400 transition-colors'
            >
              <div className='absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1.5 border-4 border-white'></div>
              <h3 className='text-xl font-bold text-slate-800'>
                {project.role}
              </h3>
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-slate-500 mb-3 mt-1'>
                <span className='font-semibold text-blue-600'>
                  {project.name}
                </span>
                <span className='bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit'>
                  {project.period}
                </span>
              </div>
              <p className='text-slate-600 leading-relaxed whitespace-pre-line'>
                <ul className='list-disc pl-5 space-y-1'>
                  {project.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Formazione */}
      <section>
        <h2 className='text-2xl font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-6 inline-block'>
          Formazione
        </h2>
        <div className='space-y-6'>
          {education.map((edu) => (
            <div
              key={edu.id}
              className='bg-slate-50 p-4 rounded-lg border border-slate-100'
            >
              <h3 className='text-lg font-bold text-slate-800'>{edu.degree}</h3>
              <p className='text-slate-600'>{edu.school}</p>
              <p className='text-sm text-slate-400 mt-1'>{edu.period}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
