import { useState } from 'react';
import { Calendar, Clock, Settings, FileText, CheckCircle as CircleCheck, User, Info } from 'lucide-react';
import { StepProps, CallEntry } from '../../types';
import Card from '../ui/Card';

const generateCalls = (clinicName: string): CallEntry[] => {
  return [
    {
      id: '1',
      name: 'Jane D.',
      time: '3:45 PM',
      date: 'Today',
      summary: 'Called to book a 60min massage on next Wednesday',
      outcome: 'Appointment booked',
      status: 'booked',
      details: 'Booked for Swedish massage on Wednesday at 10:00 AM. Client requested a female therapist if possible.'
    },
    {
      id: '2',
      name: 'Unknown',
      time: '11:20 AM',
      date: 'Today',
      summary: 'Asked about pricing for initial consultation',
      outcome: 'Information provided',
      status: 'informed',
      details: 'Caller inquired about pricing for consultations. Provided standard rates and mentioned the new client discount.'
    },
    {
      id: '3',
      name: 'John S.',
      time: '5:15 PM',
      date: 'Yesterday',
      summary: 'Needed to reschedule appointment',
      outcome: 'Appointment rescheduled',
      status: 'rescheduled',
      details: 'Moved appointment from Tuesday 2pm to Thursday 4pm. Client mentioned traffic issues with original time.'
    },
    {
      id: '4',
      name: 'Mary W.',
      time: '2:30 PM',
      date: 'Yesterday',
      summary: 'Had questions about insurance coverage',
      outcome: 'Follow-up scheduled',
      status: 'informed',
      details: 'Explained insurance process and which providers are accepted. Offered to email detailed list, client accepted.'
    },
    {
      id: '5',
      name: 'Robert L.',
      time: '10:10 AM',
      date: 'Yesterday',
      summary: 'Booked acupuncture session',
      outcome: 'Appointment booked',
      status: 'booked',
      details: 'First-time client booked for acupuncture, Friday at 2pm. Mentioned shoulder pain as primary concern.'
    }
  ];
};

const DashboardStep = ({ onNext, clinicData, stepNumber }: StepProps) => {
  const [selectedCall, setSelectedCall] = useState<string | null>('1'); // Pre-select first call
  const calls = generateCalls(clinicData.name || 'Sunrise Wellness');
  
  const stats = {
    totalCalls: calls.length,
    booked: calls.filter(c => c.status === 'booked').length,
    answered: calls.length,
    missed: 0
  };

  return (
    <Card>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
          <span className="text-xl font-bold">{stepNumber}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">AI Receptionist Dashboard</h2>
        <p className="text-gray-600 mt-2">
          Every call is logged and summarized automatically. Here's what your dashboard could look like:
        </p>
      </div>
      
      <div className="mt-6 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
        {/* Dashboard Header */}
        <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
          <h3 className="font-medium">
            {clinicData.name || 'Sunrise Wellness'} Dashboard
          </h3>
          <div className="flex items-center text-sm">
            <span className="mr-3">
              <Clock size={14} className="inline mr-1" /> Last updated: Just now
            </span>
            <button className="p-1.5 rounded hover:bg-blue-500">
              <Settings size={16} />
            </button>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-4 border-b border-gray-200">
          <div className="p-4 border-r border-gray-200 text-center">
            <div className="text-sm text-gray-500">Today's Calls</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">{stats.totalCalls}</div>
          </div>
          <div className="p-4 border-r border-gray-200 text-center">
            <div className="text-sm text-gray-500">Appointments Booked</div>
            <div className="text-2xl font-bold text-green-600 mt-1">{stats.booked}</div>
          </div>
          <div className="p-4 border-r border-gray-200 text-center">
            <div className="text-sm text-gray-500">Answer Rate</div>
            <div className="text-2xl font-bold text-blue-600 mt-1">100%</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-sm text-gray-500">Missed Calls</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">{stats.missed}</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 divide-x divide-gray-200">
          {/* Calls List */}
          <div className="md:col-span-2 divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 font-medium flex">
              <div className="flex-1">Recent Calls</div>
              <div className="w-32 text-right">Status</div>
            </div>
            
            {calls.map(call => (
              <div 
                key={call.id}
                onClick={() => setSelectedCall(call.id === selectedCall ? null : call.id)}
                className={`
                  px-4 py-3 cursor-pointer transition-colors
                  ${selectedCall === call.id ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-50'}
                `}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{call.name}</div>
                    <div className="text-sm text-gray-500">
                      {call.date} at {call.time}
                    </div>
                    <div className="mt-1">{call.summary}</div>
                  </div>
                  <div className="text-right">
                    <StatusBadge status={call.status} />
                  </div>
                </div>
                
                {selectedCall === call.id && (
                  <div className="mt-3 bg-white p-3 rounded border border-blue-100 text-sm animate-fadeIn">
                    <div className="font-medium text-blue-800 mb-1 flex items-center">
                      <FileText size={14} className="mr-1" />
                      Call Details
                    </div>
                    <p className="text-gray-700">{call.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Settings Panel */}
          <div className="p-4">
            <div className="font-medium mb-3 flex items-center">
              <Settings size={16} className="mr-2 text-blue-500" />
              Clinic Settings
            </div>
            
            <div className="mb-6">
              <div className="font-medium text-sm text-gray-600 mb-2">Services Offered</div>
              <div className="bg-gray-50 border border-gray-200 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">Available Services</div>
                  <button className="text-blue-500 hover:text-blue-700 text-sm">
                    Edit
                  </button>
                </div>
                <ul className="text-sm space-y-1">
                  {(clinicData.services?.length ? clinicData.services : [
                    'Swedish Massage',
                    'Deep Tissue Massage',
                    'Hot Stone Therapy',
                    'Acupuncture'
                  ]).map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="font-medium text-sm text-gray-600 mb-2">Business Hours</div>
              <div className="bg-gray-50 border border-gray-200 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">Open Hours</div>
                  <button className="text-blue-500 hover:text-blue-700 text-sm">
                    Edit
                  </button>
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          <Info size={14} className="inline mr-1" />
          Hover over or click a call to see more details
        </p>
      </div>
      
      <div className="mt-8 flex justify-center">
        <button
          onClick={onNext}
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Next: Join Waitlist
        </button>
      </div>
    </Card>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  let color = '';
  let icon = null;
  let text = '';
  
  switch (status) {
    case 'booked':
      color = 'bg-green-100 text-green-800';
      icon = <CircleCheck size={14} className="mr-1" />;
      text = 'Booked';
      break;
    case 'informed':
      color = 'bg-blue-100 text-blue-800';
      icon = <Info size={14} className="mr-1" />;
      text = 'Informed';
      break;
    case 'missed':
      color = 'bg-red-100 text-red-800';
      icon = <Info size={14} className="mr-1" />;
      text = 'Missed';
      break;
    case 'rescheduled':
      color = 'bg-amber-100 text-amber-800';
      icon = <Calendar size={14} className="mr-1" />;
      text = 'Rescheduled';
      break;
    default:
      color = 'bg-gray-100 text-gray-800';
      text = status;
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
      {icon}
      {text}
    </span>
  );
};

export default DashboardStep;