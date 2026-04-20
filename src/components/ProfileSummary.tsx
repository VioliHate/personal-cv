import React from "react";

interface SummaryProps {
  summary: string;
}

export const ProfileSummary: React.FC<SummaryProps> = ({ summary }) => (
  <section className='mb-10 print-keep-together'>
    <p className='text-slate-600 leading-relaxed text-[15px] max-w-3xl'>
      {summary}
    </p>
  </section>
);
