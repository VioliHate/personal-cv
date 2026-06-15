import React from "react";
import type { CVData } from "../types/interfaces";

export const ProfileSummary: React.FC<{ data: CVData }> = ({ data }) => (
  <section className='mb-4 print-keep-together'>
    <p className='text-gray-750 text-[13px] leading-relaxed text-justify italic'>
      {data.summary}
    </p>
  </section>
);
