import { ClinicData } from '../types';

export const simulateWebsiteScan = (website: string): { name: string; services: string[]; hours: Record<string, string> } => {
  // In a real application, this would be an API call to scan the website
  // For demo purposes, we'll return mock data
  
  if (website.toLowerCase().includes('demo') || website === '') {
    // Return demo clinic data
    return {
      name: 'Sunrise Wellness',
      services: ['Swedish Massage', 'Deep Tissue Massage', 'Hot Stone Therapy', 'Acupuncture'],
      hours: {
        'Monday-Friday': '9:00 AM - 6:00 PM',
        'Saturday': '10:00 AM - 4:00 PM',
        'Sunday': 'Closed'
      }
    };
  }
  
  // "Extract" services based on URL patterns - this is simulated
  let name = '';
  let services = [];
  
  if (website.includes('massage') || website.includes('wellness')) {
    name = website.includes('wellness') ? 'Wellness Center' : 'Massage Therapy';
    services = ['Swedish Massage', 'Deep Tissue Massage', 'Aromatherapy'];
  } else if (website.includes('chiro') || website.includes('spine')) {
    name = 'Chiropractic Care';
    services = ['Spinal Adjustment', 'Physical Therapy', 'Posture Analysis'];
  } else if (website.includes('physio') || website.includes('therapy')) {
    name = 'Physiotherapy Clinic';
    services = ['Rehabilitation', 'Sports Therapy', 'Injury Assessment'];
  } else if (website.includes('acupuncture') || website.includes('holistic')) {
    name = 'Holistic Healing';
    services = ['Acupuncture', 'Cupping Therapy', 'Chinese Medicine'];
  } else {
    // Extract a name from the URL
    const domainParts = website.replace(/https?:\/\/(www\.)?/, '').split('.');
    name = domainParts[0].charAt(0).toUpperCase() + domainParts[0].slice(1) + ' Clinic';
    
    // Generic services
    services = ['Consultation', 'Treatment', 'Follow-up'];
  }
  
  // Standard hours for most clinics
  const hours = {
    'Monday-Friday': '9:00 AM - 5:00 PM',
    'Saturday': '10:00 AM - 2:00 PM',
    'Sunday': 'Closed'
  };
  
  return { name, services, hours };
};