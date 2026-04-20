import React from "react";

export const linkify = (text: string): React.ReactNode => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target='_blank'
          rel='noreferrer'
          className='text-blue-600 underline hover:text-blue-700 transition-colors'
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
};
