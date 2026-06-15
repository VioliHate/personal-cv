import React from "react";
import type { PersonalInfo, ContactItem } from "../types/interfaces";

interface HeaderProps {
  personal: PersonalInfo;
  contacts: ContactItem[];
}

export const Headerbar: React.FC<HeaderProps> = ({ personal, contacts }) => {
  return (
    <header className='text-center mb-5'>
      <h1 className='text-3xl font-normal text-gray-900 tracking-wide uppercase mb-1.5'>
        {personal.name}
      </h1>
      <div className='flex flex-wrap justify-center items-center gap-x-2 text-[13px] text-gray-700'>
        {contacts.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className='text-gray-400 select-nonemx-1'>•</span>}
            {item.link ? (
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className='hover:underline hover:text-gray-900 transition-colors'
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};
