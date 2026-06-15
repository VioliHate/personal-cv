import React from "react";
import type { CVData } from "../types/interfaces";

export const ProfileSummary: React.FC<{ data: CVData }> = ({ data }) => (
  <section className='mb-5 print-keep-together'>
    <p className='text-gray-800 text-[13px] leading-relaxed text-justify italic whitespace-pre-wrap'>
      {data.summary}
    </p>
  </section>
);
