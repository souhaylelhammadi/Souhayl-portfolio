import ImageCreditAgricole from '../assets/images/experience/credit-agricole-logo.png'
import ImageBHA from '../assets/images/experience/bha-logo.png'

export const DATA_EXPERIENCE = {
  title: 'Experience',
  subtitle: 'Internships and Professional Projects',
  description:
    'Gained practical experience through internships in data and web development, working on real-world projects involving data analysis, artificial intelligence, and full stack web development.',
  sections: [
    {
      title: 'Internships',
      experiences: [
        {
          title: 'Data Intern',
          company: 'Crédit Agricole du Maroc – Meknès Headquarters',
          orgUrl: 'https://www.credit-agricole.ma/',
          logo: ImageCreditAgricole,
          duration: '3 months',
          location: 'On-site',
          description:
            'Developed ChequeGuard, an intelligent cheque verification platform. Implemented automatic signature detection using YOLOv8, extracted cheque information using OCR, and developed backend APIs with Python. Worked on data processing and applied artificial intelligence techniques to automate cheque verification.',
          color: '#ffffff'
        },
        {
          title: 'Web Development Intern',
          company: 'BHA Business Haus Académie',
          orgUrl: '',
          logo: ImageBHA,
          duration: '1 month',
          location: 'On-site',
          description:
            'Developed the front-end of an online training management platform using Next.js and TypeScript. Contributed to the implementation of web interfaces and the overall user experience of the platform.',
          color: '#ffffff'
        }
      ]
    },
    {
      title: 'Final Year Project',
      experiences: [
        {
          title: 'Full Stack Developer – Interview AI',
          company: 'Automated Video Interview Platform',
          orgUrl: '',
          logo: '',
          duration: 'Final Year Project (PFE)',
          location: 'Academic Project',
          description:
            'Developed an asynchronous video interview platform designed to automate the recruitment interview process. Implemented automatic speech transcription using Whisper and AI-powered analysis of candidate responses using the Grok API. Developed the application using React.js, Tailwind CSS, Flask, and MongoDB.',
          color: '#ffffff'
        }
      ]
    }
  ]
} as const