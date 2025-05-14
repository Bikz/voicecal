# VoiceCal – AI Receptionist for Health Clinics

> Never miss a patient's call again. VoiceCal is an AI receptionist that answers calls, books appointments, and requires zero integrations.

## Project Overview
VoiceCal is a modern web application that demonstrates an AI-powered virtual receptionist for health and wellness clinics. The app simulates how clinics can automate call answering, appointment booking, and client engagement with zero setup or integrations required.

## Features
- **AI Receptionist Demo**: Simulates a virtual receptionist that answers calls and books appointments.
- **Personalized Onboarding**: Enter your clinic website to auto-personalize the demo.
- **Voice Customization**: Choose a voice style and name for your AI receptionist.
- **Demo Call Simulation**: Listen to a sample call and view a dynamic transcript.
- **Dashboard Preview**: See how calls and appointments are logged and summarized.
- **Waitlist Signup**: Join the early access waitlist and get free months on launch.
- **Beautiful, Responsive UI**: Built with React, Tailwind CSS, and modern design best practices.

## Demo Flow
1. **Landing Page**: Introduction to VoiceCal and its benefits.
2. **Step 1 – Enter Clinic Website**: Scan your (or a demo) website to personalize the experience.
3. **Step 2 – Customize Receptionist**: Select a voice and name for your AI assistant.
4. **Step 3 – Call Demo**: Listen to a simulated call and see the AI in action.
5. **Step 4 – Dashboard**: Preview how calls and appointments are tracked.
6. **Step 5 – Waitlist**: Sign up for early access and share with colleagues.

## Tech Stack
- **React** (with TypeScript)
- **Vite** (for fast development/build)
- **Tailwind CSS** (utility-first styling)
- **Lucide React** (icon library)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/your-username/voicecal.git
cd voicecal
npm install # or yarn install
```

### Running the App
```bash
npm run dev # or yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production
```bash
npm run build # or yarn build
```

### Preview Production Build
```bash
npm run preview # or yarn preview
```

### Linting
```bash
npm run lint
```

## Folder Structure
```
voicecal/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── StepIndicator.tsx
│   │   ├── steps/
│   │   │   ├── WebsiteStep.tsx
│   │   │   ├── VoiceStep.tsx
│   │   │   ├── CallStep.tsx
│   │   │   ├── DashboardStep.tsx
│   │   │   └── WaitlistStep.tsx
│   │   └── ui/
│   │       └── Card.tsx
│   ├── utils/
│   │   └── simulateData.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...
```

## Customization
- **Add More Steps**: Add new step components in `src/components/steps/` and update the `steps` array in `App.tsx`.
- **Change Theme**: Edit `tailwind.config.js` and `src/index.css` for colors and fonts.
- **Demo Data**: Update `src/utils/simulateData.ts` for different clinic types or services.

## License
MIT 