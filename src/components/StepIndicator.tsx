import { CheckCircle } from 'lucide-react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

const StepIndicator = ({ steps, currentStep, onStepClick }: StepIndicatorProps) => {
  return (
    <div className="hidden md:flex justify-between items-center w-full max-w-4xl mx-auto mb-8">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        
        return (
          <div key={index} className="flex flex-col items-center w-1/5">
            <div 
              className={`
                flex items-center justify-center w-10 h-10 rounded-full mb-2
                ${isCompleted ? 'bg-teal-500 text-white' : isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}
                ${isActive && 'ring-4 ring-blue-100'}
                transition-all duration-300
              `}
            >
              {isCompleted ? (
                <CheckCircle size={20} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className={`text-xs text-center whitespace-nowrap ${isActive ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
              {step}
            </span>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="absolute h-0.5 w-[calc(20%-40px)] bg-gray-200" style={{ 
                left: `calc(${(index + 0.5) * 20}% + 20px)`,
                top: '1.25rem',
                zIndex: -1
              }}>
                <div 
                  className="h-full bg-teal-500 transition-all duration-500"
                  style={{ width: isCompleted ? '100%' : '0%' }}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;