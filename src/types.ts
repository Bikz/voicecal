export interface ClinicData {
  name: string;
  website: string;
  services: string[];
  hours: Record<string, string>;
  aiName: string;
  voiceType: string;
}

export interface StepProps {
  onNext: () => void;
  clinicData: ClinicData;
  updateClinicData: (data: Partial<ClinicData>) => void;
  stepNumber: number;
}

export interface VoiceOption {
  id: string;
  name: string;
  description: string;
  gender: string;
  audioSrc: string;
}

export interface CallEntry {
  id: string;
  name: string;
  time: string;
  date: string;
  summary: string;
  outcome: string;
  status: 'booked' | 'informed' | 'missed' | 'rescheduled';
  details?: string;
}