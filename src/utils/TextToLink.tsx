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
          className='text-gray-900 underline underline-offset-2 hover:text-gray-750 transition-colors font-medium'
        >
          {part.replace(/^https?:\/\/(www\.)?/, "")}{" "}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
};
