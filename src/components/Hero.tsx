import { ArrowRight, Phone, Calendar, Clock, DollarSign, UserPlus, BarChart3, CheckCircle, AlertCircle, X, Star, Quote } from 'lucide-react';

interface HeroProps {
  onStartDemo: () => void;
}

const Hero = ({ onStartDemo }: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      {/* Top decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 right-[10%] w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Main hero content */}
      <div className="container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
        {/* Slogan/tagline banner */}
        <div className="bg-white text-blue-800 font-medium text-center py-2 px-4 rounded-full max-w-max mx-auto mb-8 shadow-lg">
          Don't send clients to Voicemail, send them to VoiceCal
        </div>
      
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Never Miss Another Patient Call
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Turn missed calls into booked appointments while you focus on patient care.
            </p>
            
            {/* Key statistics section */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="text-white text-4xl font-bold">42%</div>
                <div className="text-white text-sm">of calls are missed during business hours</div>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="text-white text-4xl font-bold">80%</div>
                <div className="text-white text-sm">of callers won't leave voicemails</div>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="text-white text-4xl font-bold">$200</div>
                <div className="text-white text-sm">lost revenue per missed booking</div>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="text-white text-4xl font-bold">30%</div>
                <div className="text-white text-sm">of callers never call back</div>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-white text-blue-600 p-2 rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Never Miss a Call Again</h3>
                  <p className="opacity-80">Your AI receptionist handles calls 24/7, even when you're with patients.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-white text-blue-600 p-2 rounded-full mr-4">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Recover Lost Revenue</h3>
                  <p className="opacity-80">Typical practitioners recover 3-5 bookings weekly ($1,500-$2,500/mo).</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-white text-blue-600 p-2 rounded-full mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Save Admin Time</h3>
                  <p className="opacity-80">Save 5-8 hours weekly on booking and patient intake tasks.</p>
                </div>
              </li>
            </ul>
            
            {/* Pricing comparison */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/10">
              <h4 className="font-semibold mb-2">Why VoiceCal Is The Smart Choice:</h4>
              <div className="flex items-center justify-between mb-2">
                <span>Human Receptionist:</span>
                <span className="font-medium">$300-600/month</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>Virtual Assistant:</span>
                <span className="font-medium">$1,500/month</span>
              </div>
              <div className="flex items-center justify-between text-white font-bold">
                <span>VoiceCal:</span>
                <span>$60/month</span>
              </div>
            </div>
            
            <button
              onClick={onStartDemo}
              className="flex items-center justify-center w-full md:w-auto bg-white hover:bg-blue-50 text-blue-600 font-semibold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Try the Demo Now
              <ArrowRight className="ml-2" size={20} />
            </button>
            
            <p className="mt-4 text-blue-100 text-sm flex items-center justify-center md:justify-start">
              <CheckCircle size={16} className="mr-2" />
              100+ solo practitioners already signed up for early access
            </p>
          </div>
          
          <div className="md:w-5/12 relative">
            {/* Practitioner type tabs */}
            <div className="flex mb-3 justify-center gap-2">
              <div className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium shadow-md">RMT</div>
              <div className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Chiropractor</div>
              <div className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Naturopath</div>
            </div>
          
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone size={14} className="mr-2" />
                  Incoming Call
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-800 font-medium mb-1">AI Receptionist - Sarah</h3>
                      <p className="text-blue-600">Healing Hands Massage Therapy</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      Live Call
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                    <p className="text-blue-800 font-medium">Hello, this is Sarah from Healing Hands Massage Therapy. How may I help you today?</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-gray-800">Hi, I'd like to book a deep tissue massage. Do you have anything available tomorrow?</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                    <p className="text-blue-800 font-medium">I'd be happy to help you with that. We have openings for deep tissue massage tomorrow at 10:00 AM and 2:30 PM with Teresa. Would either of those times work for you?</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-gray-800">2:30 PM would be perfect.</p>
                  </div>
                  
                  <div className="animate-pulse flex items-center">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-1"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-1"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Success notification overlay */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 max-w-[90%] border-l-4 border-green-500 flex items-start">
                <div className="flex-shrink-0 text-green-500 mr-2 mt-0.5">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <p className="text-gray-800 text-sm font-medium">New Appointment Booked</p>
                  <p className="text-gray-600 text-xs">Deep Tissue Massage - Tomorrow at 2:30 PM</p>
                </div>
                <button className="ml-2 text-gray-400 hover:text-gray-600">
                  <X size={14} />
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* ROI indicator */}
            <div className="absolute -right-4 -bottom-4 bg-white text-blue-800 rounded-xl px-4 py-2 shadow-lg transform rotate-3">
              <div className="text-sm font-semibold">Just booked: $85 value</div>
              <div className="text-xs">ROI: 141% of monthly fee</div>
            </div>
          </div>
        </div>
        
        {/* Testimonials section */}
        <div className="max-w-6xl mx-auto mt-20 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-white text-blue-600 px-4 py-1 rounded-lg">Real Practitioners</span>{" "}
            <span className="ml-2">Real Results</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium text-lg">Jane D.</p>
                  <p className="text-sm opacity-80">Registered Massage Therapist</p>
                </div>
                <div className="flex text-blue-100">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
              </div>
              <p className="italic text-white/90">
                "I was losing at least 4-5 potential clients weekly because I couldn't answer calls during sessions. VoiceCal recovered $1,800 in monthly revenue that was going to voicemail."
              </p>
            </div>
            
            <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium text-lg">Michael S.</p>
                  <p className="text-sm opacity-80">Chiropractor</p>
                </div>
                <div className="flex text-blue-100">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
              </div>
              <p className="italic text-white/90">
                "The after-hours booking feature alone paid for VoiceCal in the first week. I've gained 7-8 new patients monthly that would have gone elsewhere."
              </p>
            </div>
            
            <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium text-lg">Sophia R.</p>
                  <p className="text-sm opacity-80">Naturopathic Doctor</p>
                </div>
                <div className="flex text-blue-100">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
              </div>
              <p className="italic text-white/90">
                "I was spending over $450/month on a human answering service. VoiceCal costs less, books more appointments, and patients actually prefer it."
              </p>
            </div>
          </div>
        </div>
        
        {/* Profession-focused section */}
        <div className="max-w-6xl mx-auto mt-16 pb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Perfect for Independent Practitioners</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-white/15 to-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8c0 4.5-2.5 8-6.5 8S4 12.5 4 8c0-3 2-6 6.5-6C14 2 17 5 17 8z"/><path d="M14.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M21 8c0 3-2 6-5.5 6S10 11 10 8c0-3 2-6 5.5-6S21 5 21 8z"/><path d="m15.5 14 2 6"/><path d="M8 17h7"/><path d="m8.5 14-2 6"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Massage Therapists</h3>
              <p className="mb-4 text-white/80">
                When you're with a client, your AI receptionist fields calls and books new appointments, ensuring no opportunity is missed during your hands-on work.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Accept bookings while in session</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Fill gaps in your schedule</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Capture after-hours inquiries</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-white/15 to-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9.5H5"/><path d="m9 4 3 5 3-5"/><path d="m9 20 3-5 3 5"/><path d="M5 14.5h14"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Chiropractors</h3>
              <p className="mb-4 text-white/80">
                Focus on spinal adjustments while your AI receptionist handles scheduling, reducing administrative burden and keeping your patient pipeline full.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Convert phone inquiries into consultations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Answer insurance questions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Manage appointment reschedules</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-white/15 to-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-2-2h-1a3 3 0 0 1-3-3 3 3 0 0 1 3-3h.5A5.5 5.5 0 0 1 14 9.5"/><path d="M17 18v-2a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v2"/><path d="M14 18v-5"/><path d="M10 18v-5"/><path d="M7 6c.32-1.75 1.82-3 3.5-3 1.68 0 3.18 1.25 3.5 3"/><path d="M3 3h18v18H3z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Naturopaths</h3>
              <p className="mb-4 text-white/80">
                Provide undivided attention to patients during extended consultations while VoiceCal engages with prospective clients for your holistic practice.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Schedule new patient intakes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Answer questions about services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-blue-100 mr-2 flex-shrink-0" />
                  <span>Collect pre-consultation information</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={onStartDemo}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl inline-flex items-center"
            >
              Try the Interactive Demo
              <ArrowRight className="ml-2" size={20} />
            </button>
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