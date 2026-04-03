import React from "react";
import type { CVData } from "../types/interfaces";

interface HeaderProps {
  data: CVData;
}

export const Headerbar: React.FC<HeaderProps> = ({ data }) => {
  const { personal, contact } = data;
  return (
    <header className='border-b border-slate-100 pb-8'>
      <div className='flex flex-col gap-4'>
        <div>
          <h1 className='text-4xl font-extrabold text-slate-900 tracking-tight'>
            {personal.name}
          </h1>
          <p className='text-lg font-medium text-blue-600 mt-1 uppercase tracking-wider'>
            {personal.role.replace("\n", " | ")}
          </p>
        </div>

        {/* Link e Contatti in riga */}
        <ul className='flex flex-wrap gap-y-2 gap-x-6'>
          {contact.map((item, index) => (
            <li
              key={index}
              className='flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors'
            >
              <span className='text-slate-400'>{item.icon}</span>
              {item.link ? (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-sm font-medium underline-offset-4 hover:underline'
                >
                  {item.text}
                </a>
              ) : (
                <span className='text-sm font-medium'>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
