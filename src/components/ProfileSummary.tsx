import React from "react";
import type { CVData } from "../types/interfaces";

export const ProfileSummary: React.FC<{ data: CVData }> = ({ data }) => (
  <section className='mb-10 print-keep-together'>
    <div className='border-l-4 border-blue-200 pl-5 py-1'>
      <p className='text-slate-700 text-[15.5px] leading-relaxed max-w-[95%] whitespace-pre-wrap'>
        {data.summary}
      </p>
    </div>
  </section>
);
