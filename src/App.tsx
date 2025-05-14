import { useState } from 'react';
import Hero from './components/Hero';
import StepIndicator from './components/StepIndicator';
import WebsiteStep from './components/steps/WebsiteStep';
import VoiceStep from './components/steps/VoiceStep';
import CallStep from './components/steps/CallStep';
import DashboardStep from './components/steps/DashboardStep';
import WaitlistStep from './components/steps/WaitlistStep';
import { ClinicData } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [clinicData, setClinicData] = useState<ClinicData>({
    name: '',
    website: '',
    services: [],
    hours: {},
    aiName: 'Ava',
    voiceType: 'calm'
  });

  const steps = [
    { title: 'Enter Your Clinic Website', component: WebsiteStep },
    { title: 'Customize Your Receptionist', component: VoiceStep },
    { title: 'Call Your AI Receptionist', component: CallStep },
    { title: 'See Your Call Summary', component: DashboardStep },
    { title: 'Join the Early Access Waitlist', component: WaitlistStep }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateClinicData = (data: Partial<ClinicData>) => {
    setClinicData({ ...clinicData, ...data });
  };

  const renderCurrentStep = () => {
    const StepComponent = steps[currentStep].component;
    return (
      <StepComponent
        onNext={handleNextStep}
        clinicData={clinicData}
        updateClinicData={updateClinicData}
        stepNumber={currentStep + 1}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {currentStep === 0 ? (
        <Hero onStartDemo={() => setCurrentStep(1)} />
      ) : (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4">
              VoiceCal AI Receptionist
            </h1>
            <StepIndicator 
              steps={steps.map(s => s.title)} 
              currentStep={currentStep} 
              onStepClick={() => {}} 
            />
          </div>
          {renderCurrentStep()}
          
          <div className="flex justify-between mt-8">
            {currentStep > 0 && currentStep < steps.length - 1 && (
              <button
                onClick={handlePrevStep}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back
              </button>
            )}
            <div></div> {/* Spacer */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;