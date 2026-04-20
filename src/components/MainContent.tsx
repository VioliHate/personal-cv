import React from "react";
import type { CVData } from "../types/interfaces";
import { ExperienceSection } from "./ExperienceSection";
import { ProfileSummary } from "./ProfileSummary";
import { TechStack } from "./TechStack";
import { Education } from "./Education";

export const MainContent: React.FC<{ data: CVData }> = ({ data }) => {
  return (
    <main>
      {/* Profilo professionale */}
      <ProfileSummary data={data} />

      {/* Tech Stack - Tag minimali */}
      <TechStack data={data} />

      <ExperienceSection title='Work Experience' items={data.workExperience} />
      <ExperienceSection
        title='Side Projects'
        items={[...data.outWorkExperience].reverse()}
      />

      {/* Formazione */}
      <Education data={data} />
    </main>
  );
};
