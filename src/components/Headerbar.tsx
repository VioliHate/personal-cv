import React from "react";
import type { PersonalInfo, ContactItem } from "../types/interfaces";

interface HeaderProps {
  personal: PersonalInfo;
  contacts: ContactItem[];
}

export const Headerbar: React.FC<HeaderProps> = ({ personal, contacts }) => {
  return (
    <header className='border-b border-slate-100 pb-10 mb-12'>
      <h1 className='text-4xl font-extrabold text-slate-900 tracking-tight mb-2'>
        {personal.name}
      </h1>
      <p className='text-xl font-medium text-blue-600 mb-6 uppercase tracking-widest text-sm'>
        {personal.role.replace("\n", " | ")}
      </p>

      <div className='flex flex-wrap gap-x-6 gap-y-3'>
        {contacts.map((item, i) => (
          <div
            key={i}
            className='flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors'
          >
            <span className='text-blue-500/70'>{item.icon}</span>
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
          </div>
        ))}
      </div>
    </header>
  );
};
