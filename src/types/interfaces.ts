import React from "react";

export interface PersonalInfo {
  name: string;
  role: string;
  photo: string;
  description: string;
}

export interface ContactItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

//esperienze lavorative
export interface WorkExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

//esperienze fuorui dal contesto lavorativo
export interface OutWorkExperienceItem {
  id: number;
  role: string;
  name: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  school: string;
  period: string;
}

export interface CVData {
  personal: PersonalInfo;
  contact: ContactItem[];
  skills: string[];
  workExperience: WorkExperienceItem[];
  outWorkExperience: OutWorkExperienceItem[];
  education: EducationItem[];
}
