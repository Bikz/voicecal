import { useState, useRef, useEffect } from 'react';
import { Phone, Play, Pause } from 'lucide-react';
import { StepProps } from '../../types';
import Card from '../ui/Card';

const CallStep = ({ onNext, clinicData, stepNumber }: StepProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [transcriptVisible, setTranscriptVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const maxDuration = 20; // Simulated audio length in seconds
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= maxDuration) {
            setIsPlaying(false);
            return maxDuration;
          }
          return prevTime + 1;
        });
        
        // Show transcript after 1 second of playback
        if (currentTime >= 1 && !transcriptVisible) {
          setTranscriptVisible(true);
        }
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentTime, transcriptVisible]);
  
  const togglePlay = () => {
    if (currentTime >= maxDuration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };
  
  const resetAudio = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setTranscriptVisible(false);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Card>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
          <span className="text-xl font-bold">{stepNumber}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Call Your AI Receptionist</h2>
        <p className="text-gray-600 mt-2">
          Your personalized receptionist is ready! Hear how {clinicData.aiName} handles your calls.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-8">
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4 text-center">
              <Phone className="inline-block mr-2" size={18} />
              <span>Demo Call</span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">{clinicData.name || 'Sunrise Wellness'}</h3>
                  <p className="text-sm text-gray-500">AI Receptionist: {clinicData.aiName || 'Ava'}</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="text-blue-600" size={20} />
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <button
                  onClick={togglePlay}
                  className={`
                    h-16 w-16 rounded-full flex items-center justify-center shadow-md
                    ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}
                    text-white transition-colors
                  `}
                >
                  {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(maxDuration)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentTime / maxDuration) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                {isPlaying ? "Now playing demo call..." : "Click play to hear the conversation"}
              </p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Don't worry, this is a demo – no real appointment will be made.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 max-w-md">
          <div 
            className={`
              bg-white border border-gray-200 rounded-lg p-4 transition-opacity duration-500
              ${transcriptVisible ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <h3 className="font-medium mb-4 text-gray-700">Call Transcript</h3>
            
            <div className="space-y-3">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 mr-3">
                  {clinicData.aiName?.[0] || 'A'}
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-gray-700 max-w-[calc(100%-44px)]">
                  <p>Hello, thank you for calling {clinicData.name || 'Sunrise Wellness'}. This is {clinicData.aiName || 'Ava'}, how may I help you today?</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-gray-100 p-3 rounded-lg text-gray-700 max-w-[80%]">
                  <p>Hi, I'd like to book a massage appointment for next week if possible.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 mr-3">
                  {clinicData.aiName?.[0] || 'A'}
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-gray-700 max-w-[calc(100%-44px)]">
                  <p>I'd be happy to help you book a massage appointment. We offer {clinicData.services?.includes('Massage') ? 'several massage types including ' + clinicData.services.filter(s => s.includes('Massage')).join(', ') : 'Swedish, Deep Tissue, and Hot Stone massages'}. Which would you prefer?</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-gray-100 p-3 rounded-lg text-gray-700 max-w-[80%]">
                  <p>{clinicData.services?.includes('Deep Tissue Massage') ? 'Deep Tissue please' : 'Swedish massage would be perfect'}.</p>
                </div>
              </div>
              
              {currentTime >= 8 && (
                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 mr-3">
                    {clinicData.aiName?.[0] || 'A'}
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-gray-700 max-w-[calc(100%-44px)]">
                    <p>Great choice. Let me check our availability for next week. I have openings on Tuesday at 2:00 PM, Wednesday at 10:00 AM, or Friday at 3:30 PM. Do any of those times work for you?</p>
                  </div>
                </div>
              )}
              
              {currentTime >= 12 && (
                <div className="flex justify-end">
                  <div className="bg-gray-100 p-3 rounded-lg text-gray-700 max-w-[80%]">
                    <p>Wednesday at 10 AM would be perfect.</p>
                  </div>
                </div>
              )}
              
              {currentTime >= 15 && (
                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 mr-3">
                    {clinicData.aiName?.[0] || 'A'}
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-gray-700 max-w-[calc(100%-44px)]">
                    <p>Perfect. I've booked you for a {clinicData.services?.includes('Deep Tissue Massage') ? 'Deep Tissue' : 'Swedish'} massage next Wednesday at 10:00 AM. May I have your name and phone number for the appointment?</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <button
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Next: See Call Summary
        </button>
      </div>
    </Card>
  );
};

export default CallStep;