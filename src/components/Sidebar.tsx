import React from "react";
import type { CVData } from "../types/interfaces";

interface SidebarProps {
  data: CVData;
}

export const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  const { personal, contact, skills } = data;

  return (
    <aside className='w-full md:w-1/3 bg-slate-900 text-white p-8 flex flex-col items-center md:items-start'>
      {/* Foto Profilo */}
      <div className='mb-6'>
        <div className='w-40 h-40 rounded-full border-4 border-slate-700 overflow-hidden shadow-lg bg-slate-800'>
          <img
            src={personal.photo}
            alt={personal.name}
            className='w-full h-full object-cover object-top scale-[1.7] translate-y-10 translate-x-2'
            onError={(e) => {
              console.log("personal info", personal);
              e.currentTarget.style.display = "none";
              if (e.currentTarget.parentElement)
                e.currentTarget.parentElement.innerText = "FOTO";
            }}
          />
        </div>
      </div>

      {/* Nome e Ruolo */}
      <div className='text-center md:text-left mb-8'>
        <h1 className='text-3xl font-bold mb-2'>{personal.name}</h1>
        <p
          className='text-blue-400 uppercase tracking-widest text-sm font-semibold'
          style={{ whiteSpace: "pre-line" }}
        >
          {personal.role}
        </p>
      </div>

      {/* Contatti */}
      <div className='w-full mb-8'>
        <h3 className='text-lg font-semibold border-b border-slate-700 pb-2 mb-4 uppercase text-slate-400 tracking-wider'>
          Contatti
        </h3>
        <ul className='space-y-4'>
          {contact.map((item, index) => (
            <li
              key={index}
              className='flex items-center gap-3 text-slate-300 hover:text-white transition-colors'
            >
              <span className='text-blue-400'>{item.icon}</span>
              {item.link ? (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-sm hover:underline break-all'
                >
                  {item.text}
                </a>
              ) : (
                <span className='text-sm break-all'>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className='w-full'>
        <h3 className='text-lg font-semibold border-b border-slate-700 pb-2 mb-4 uppercase text-slate-400 tracking-wider'>
          Tech Stack
        </h3>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, index) => (
            <span
              key={index}
              className='bg-slate-800 text-blue-200 text-xs px-3 py-1 rounded-md border border-slate-700'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};
