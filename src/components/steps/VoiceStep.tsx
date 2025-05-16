import { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { StepProps, VoiceOption } from '../../types';
import Card from '../ui/Card';

const voiceOptions: VoiceOption[] = [
  {
    id: 'calm',
    name: 'Calm & Caring',
    description: 'A soothing, gentle voice perfect for wellness clinics',
    gender: 'Female',
    audioSrc: 'https://example.com/voices/calm-caring.mp3' // Would be real audio files in production
  },
  {
    id: 'bright',
    name: 'Bright & Friendly',
    description: 'An upbeat, energetic voice that sounds happy to help',
    gender: 'Male',
    audioSrc: 'https://example.com/voices/bright-friendly.mp3'
  },
  {
    id: 'professional',
    name: 'Professional & Clear',
    description: 'A poised, articulate voice that exudes competence',
    gender: 'Female',
    audioSrc: 'https://example.com/voices/professional-clear.mp3'
  },
  {
    id: 'warm',
    name: 'Warm & Reassuring',
    description: 'A comforting voice that puts patients at ease',
    gender: 'Male',
    audioSrc: 'https://example.com/voices/warm-reassuring.mp3'
  }
];

const VoiceStep = ({ onNext, clinicData, updateClinicData, stepNumber }: StepProps) => {
  const [selectedVoice, setSelectedVoice] = useState(clinicData.voiceType || 'calm');
  const [aiName, setAiName] = useState(clinicData.aiName || 'Ava');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const playbackTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // In a real implementation, we would use actual audio files
  // For this demo, we'll simulate audio playback with progress
  const simulateAudioPlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
      setPlaybackProgress(0);
      if (playbackTimerRef.current) {
        clearInterval(playbackTimerRef.current);
        playbackTimerRef.current = null;
      }
      return;
    }
    
    setPlayingId(id);
    setPlaybackProgress(0);
    
    if (playbackTimerRef.current) {
      clearInterval(playbackTimerRef.current);
    }
    
    // Simulate a 3-second audio clip with progress updates
    playbackTimerRef.current = setInterval(() => {
      setPlaybackProgress(prev => {
        if (prev >= 100) {
          clearInterval(playbackTimerRef.current!);
          playbackTimerRef.current = null;
          setPlayingId(null);
          return 0;
        }
        return prev + 3.33; // Increase by ~3.33% every 100ms to complete in 3 seconds
      });
    }, 100);
  };
  
  const handleNext = () => {
    updateClinicData({
      voiceType: selectedVoice,
      aiName
    });
    onNext();
  };

  return (
    <Card>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
          <span className="text-xl font-bold">{stepNumber}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Customize Your Receptionist</h2>
        <p className="text-gray-600 mt-2">
          Pick a voice style and give your AI receptionist a friendly name.
        </p>
      </div>
      
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Volume2 size={18} className="mr-2 text-blue-500" />
            Choose a Voice
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            🎧 Tap to preview each voice
          </p>
          
          <div className="grid grid-cols-1 gap-3">
            {voiceOptions.map((voice) => (
              <button
                key={voice.id}
                onClick={() => setSelectedVoice(voice.id)}
                className={`
                  flex items-center justify-between text-left p-4 rounded-lg border transition-all
                  ${selectedVoice === voice.id 
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50'}
                `}
              >
                <div>
                  <div className="font-medium">
                    {voice.name} ({voice.gender})
                  </div>
                  <div className="text-sm text-gray-500">
                    {voice.description}
                  </div>
                  
                  {playingId === voice.id && (
                    <div className="mt-2 w-full bg-gray-200 h-1.5 rounded-full">
                      <div 
                        className="bg-blue-500 h-1.5 rounded-full transition-all duration-100"
                        style={{ width: `${playbackProgress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    simulateAudioPlay(voice.id);
                  }}
                  className={`
                    p-2 rounded-full 
                    ${playingId === voice.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                  aria-label={`Play ${voice.name} sample`}
                >
                  {playingId === voice.id ? (
                    <Pause size={18} />
                  ) : (
                    <Play size={18} />
                  )}
                </button>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Name Your Receptionist</h3>
          
          <div className="mb-8">
            <label htmlFor="aiName" className="block text-sm font-medium text-gray-700 mb-1">
              Receptionist Name
            </label>
            <input
              type="text"
              id="aiName"
              value={aiName}
              onChange={(e) => setAiName(e.target.value)}
              maxLength={15}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Default: Ava"
            />
            <p className="mt-2 text-sm text-gray-500">
              Choose a name that feels friendly and professional.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">Your AI Receptionist Preview</h4>
            <p className="text-blue-700">
              When someone calls your clinic, <strong>{aiName}</strong> will answer in a{' '}
              <strong>{voiceOptions.find(v => v.id === selectedVoice)?.name.toLowerCase()}</strong> tone:
            </p>
            <div className="mt-3 p-3 bg-white rounded border border-blue-200 text-gray-700">
              "Hello, thank you for calling {clinicData.name || 'your clinic'}. This is {aiName}, how may I help you today?"
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Next: Get Demo Number
        </button>
      </div>
    </Card>
  );
};

export default VoiceStep;