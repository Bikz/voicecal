import { useState } from 'react';
import { Check, Send, Rocket, Gift, Share2 } from 'lucide-react';
import { StepProps } from '../../types';
import Card from '../ui/Card';

const WaitlistStep = ({ clinicData, stepNumber }: StepProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    
    // Simulate submission
    setError('');
    setSubmitted(true);
  };

  return (
    <Card>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
          <span className="text-xl font-bold">{stepNumber}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Get Early Access (Free 3 Months)</h2>
        <div className="flex items-center justify-center mt-2 mb-4">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
            <Gift size={14} className="inline mr-1" />
            Limited Time Offer
          </span>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Loved what you saw? We're launching soon. Join our waitlist today and get the first 3 months free when we go live.
        </p>
      </div>

      {!submitted ? (
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
              {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
              )}
            </div>
            
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
              >
                <Rocket size={20} className="mr-2" />
                Join Waitlist
              </button>
              <p className="text-sm text-gray-500 mt-2 text-center">
                We won't share your email. Unsubscribe anytime.
              </p>
            </div>
          </form>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-start mb-2">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2 mt-0.5">
                <Check size={12} />
              </span>
              <p className="text-blue-800 text-sm">
                <strong>Join 120+ clinics</strong> already on the waitlist
              </p>
            </div>
            <div className="flex items-start mb-2">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2 mt-0.5">
                <Check size={12} />
              </span>
              <p className="text-blue-800 text-sm">
                <strong>Get notified first</strong> when VoiceCal launches
              </p>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2 mt-0.5">
                <Check size={12} />
              </span>
              <p className="text-blue-800 text-sm">
                <strong>Lock in 3 free months</strong> - no commitment
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto text-center">
          <div className="bg-green-50 border-2 border-green-100 rounded-lg p-8 mb-6 animate-fadeIn">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Thank you! You're on the waitlist.
            </h3>
            <p className="text-green-700">
              We'll email you with next steps when VoiceCal launches. You're secured 3 free months!
            </p>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium flex items-center justify-center mb-3 text-blue-800">
              <Share2 size={18} className="mr-2" />
              Get Priority Access
            </h4>
            <p className="text-sm text-blue-700 mb-4">
              Share with a colleague and skip to the front of the line!
            </p>
            <div className="flex rounded-lg overflow-hidden border border-blue-200">
              <input 
                type="text" 
                value="https://voicecal.ai/refer?id=123456" 
                className="flex-grow p-2 bg-white border-none text-sm"
                readOnly
              />
              <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default WaitlistStep;