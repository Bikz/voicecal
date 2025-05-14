import { ArrowRight, Phone, Calendar, Clock } from 'lucide-react';

interface HeroProps {
  onStartDemo: () => void;
}

const Hero = ({ onStartDemo }: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Never Miss a Patient's Call Again
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Meet VoiceCal – a virtual receptionist that answers all your calls, books your appointments, and requires zero integrations.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-blue-400 bg-opacity-30 p-2 rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Always Answers, Always Friendly</h3>
                  <p className="opacity-80">Your AI receptionist handles calls 24/7, so clients never hit voicemail.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-blue-400 bg-opacity-30 p-2 rounded-full mr-4">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Instant Booking</h3>
                  <p className="opacity-80">Appointments are scheduled automatically while you work.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-blue-400 bg-opacity-30 p-2 rounded-full mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">No Setup Hassle</h3>
                  <p className="opacity-80">Works with just your phone – no new apps or integrations needed.</p>
                </div>
              </li>
            </ul>
            
            <button
              onClick={onStartDemo}
              className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Try the Demo Now
              <ArrowRight className="ml-2" size={20} />
            </button>
            
            <p className="mt-4 text-blue-100 text-sm">100+ clinics have signed up for early access</p>
          </div>
          
          <div className="md:w-5/12 relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gray-100 px-4 py-3 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <div className="text-gray-600 text-sm ml-2">Incoming Call</div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-gray-800 font-medium mb-1">AI Receptionist</h3>
                  <p className="text-blue-600">Sunrise Wellness</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                    <p className="text-blue-800 font-medium">Hello, this is Ava from Sunrise Wellness. How can I help you today?</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-gray-800">Hi, I'd like to book a massage for next week.</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                    <p className="text-blue-800 font-medium">I'd be happy to help you book a massage. We have 60-minute and 90-minute sessions available. Which would you prefer?</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-gray-800">A 60-minute session would be great.</p>
                  </div>
                  
                  <div className="animate-pulse flex items-center">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-1"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-1"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;