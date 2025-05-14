import { useState } from 'react';
import { Globe, Loader2 } from 'lucide-react';
import { StepProps } from '../../types';
import { simulateWebsiteScan } from '../../utils/simulateData';
import Card from '../ui/Card';

const WebsiteStep = ({ onNext, clinicData, updateClinicData, stepNumber }: StepProps) => {
  const [website, setWebsite] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [scanComplete, setScanComplete] = useState(false);
  const [scannedData, setScannedData] = useState<{
    name: string;
    services: string[];
    hours: Record<string, string>;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!website && !isLoading) {
      setError('Please enter a website URL or use the demo clinic');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate website scanning
    setTimeout(() => {
      try {
        const data = simulateWebsiteScan(website);
        setScannedData(data);
        updateClinicData({
          website,
          name: data.name,
          services: data.services,
          hours: data.hours
        });
        setScanComplete(true);
        
        // Proceed to next step after showing results briefly
        setTimeout(() => {
          onNext();
        }, 2000);
      } catch (err) {
        setError('Could not process that website. Please try a different URL or use the demo clinic.');
      } finally {
        setIsLoading(false);
      }
    }, 2500);
  };

  const useDemo = () => {
    setWebsite('');
    setError('');
    setIsLoading(true);
    
    setTimeout(() => {
      const data = simulateWebsiteScan('demo');
      setScannedData(data);
      updateClinicData({
        website: 'https://sunrisewellness.example.com',
        name: data.name,
        services: data.services,
        hours: data.hours
      });
      setScanComplete(true);
      
      setTimeout(() => {
        onNext();
      }, 2000);
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
          <span className="text-xl font-bold">{stepNumber}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Enter Your Clinic Website</h2>
        <p className="text-gray-600 mt-2">
          We'll personalize your AI receptionist using your website info.
        </p>
      </div>

      {!scanComplete ? (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Globe size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. www.sunrisewellness.com"
              disabled={isLoading}
            />
          </div>
          
          {error && (
            <div className="mb-4 text-red-500 text-sm">
              {error}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:bg-blue-400"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Scanning website...
                </span>
              ) : (
                "Find My Clinic"
              )}
            </button>
            
            <button
              type="button"
              onClick={useDemo}
              disabled={isLoading}
              className="w-full sm:w-auto text-blue-600 hover:text-blue-800 font-medium underline"
            >
              No website? Try our demo clinic.
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            We'll use your site's public info to personalize the demo. No data is stored.
          </p>
        </form>
      ) : (
        <div className="max-w-lg mx-auto animate-fadeIn">
          <div className="p-6 bg-green-50 rounded-lg border border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center">
                <CheckIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-green-800">
                {scannedData?.name} found!
              </h3>
            </div>
            
            <div className="space-y-2">
              <p className="text-green-800">
                <strong>Services:</strong> {scannedData?.services.join(', ')}
              </p>
              <p className="text-green-800">
                <strong>Hours:</strong> Mon-Fri 9am-6pm, Sat 10am-4pm
              </p>
            </div>
            
            <p className="mt-4 text-sm text-green-700">
              Preparing your personalized demo...
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};

// Check icon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default WebsiteStep;