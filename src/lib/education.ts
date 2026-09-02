import ImageGeu from '../assets/images/geu.png'
import ImageGehu from '../assets/images/ofppt.png'

export const DATA_CURRENT_COURSE = {
  course: [
    {
      title: 'École des Sciences et Techniques d’Oujda (ESTO)',
      subtitle: 'Bachelor’s Degree in Data Analytics & Decision Support Systems',
      duration: '2025 - 2026',
      descriptions: [
        '⚡ Studied data analytics, business intelligence, statistics, and decision support systems.',
        '⚡ Developed skills in data analysis, data visualization, databases, ETL processes, and Business Intelligence.',
        '⚡ Worked on Machine Learning and Artificial Intelligence projects using Python and related technologies.'
      ],
      logoPath: ImageGeu,
      altName: 'ESTO logo',
      websiteUrl: 'https://www.esto.ump.ma/'
    }
  ]
} as const

export const DATA_DEGREE = {
  degrees: [
    {
      title: 'Office of Vocational Training and Employment Promotion (OFPPT), Meknès',
      subtitle:
        'Specialized Technician Diploma in Digital Development – Full Stack Web Development',
      duration: '2023 - 2025',
      descriptions: [
        '⚡ Studied full stack web development using HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, PHP, Laravel, Python, and Flask.',
        '⚡ Developed REST APIs and worked with relational and NoSQL databases including MySQL, PostgreSQL, and MongoDB.',
        '⚡ Acquired practical knowledge of software development, database design, UML, Merise, and Agile project management.'
      ],
      logoPath: ImageGehu,
      altName: 'OFPPT logo',
      websiteUrl: 'https://www.ofppt.ma/'
    },
    {
      title: 'Baccalaureate in Physical Sciences – French Track',
      subtitle: 'Baccalaureate in Physical Sciences',
      duration: '2022 - 2023',
      descriptions: [
        '⚡ Completed a Baccalaureate in Physical Sciences with a French-language curriculum.',
        '⚡ Developed strong foundations in mathematics, physics, scientific reasoning, and problem solving.'
      ],
      logoPath: '',
      altName: 'Baccalaureate certificate',
      websiteUrl: ''
    }
  ]
} as const
/*
import ImageBcaSeminar from '../assets/images/eduGallery/bca_seminar.jpg'
import ImageCppComp from '../assets/images/eduGallery/cpp_competition.jpg'
import ImageCppQuiz from '../assets/images/eduGallery/cpp_quiz.png'
import ImageSeminar2 from '../assets/images/eduGallery/seminar_2.jpg'
import ImageBcaDegree from '../assets/images/eduGallery/bca_degree.jpg'
import ImageBcaConvocation from '../assets/images/eduGallery/convocation_2024.jpg'
import ImageSron21 from '../assets/images/eduGallery/sron_v2_1.jpg'
import ImageBloodDonate from '../assets/images/eduGallery/blood_donate.jpg'
import ImageSih2025 from '../assets/images/eduGallery/sih.jpg'

export const EDUCATION_GALLERY: NovaGalleryType[] = [
  {
    title: 'Participated in Quiz',
    subtitle: 'Participated in C++ Quiz which I won further',
    img: ImageBcaSeminar,
    altName: 'C++ QUIZ',
    colorCode: '#FFBB0099'
  },
  {
    title: 'Receiving Certificate',
    subtitle: 'Got #1 in C++ Competition',
    img: ImageCppComp,
    altName: 'Receiving certificate from (Prof) Dr. MC Lohani',
    colorCode: '#0C9D5899'
  },
  {
    title: 'Again #1',
    subtitle: '#1 again in C++ Quiz',
    img: ImageCppQuiz,
    altName: 'Receiving certificate from (Prof) Dr. MC Lohani',
    colorCode: '#2A73CC'
  },
  {
    title: 'Seminars',
    subtitle: 'Actively participated in Seminars',
    img: ImageSeminar2,
    altName: 'Seminars',
    colorCode: '#356effff'
  },
  {
    title: "Bachelor's Degree",
    subtitle: 'BCA Degree Received',
    img: ImageBcaDegree,
    altName: 'BCA Degree',
    colorCode: '#4285F499'
  },
  {
    title: "Bachelor's Convocation",
    subtitle: 'Attended 2024 Convocation at GEHU Dehradun',
    img: ImageBcaConvocation,
    altName: 'Convocation',
    colorCode: '#1F70C199'
  },
  {
    title: 'Launched SRON v2.1',
    subtitle: 'Celebrating launch of version 2.1 of SRON',
    img: ImageSron21,
    altName: "SRON v2.1's Cake Cutting",
    colorCode: '#c39a42ff'
  },
  {
    title: 'Blood donation',
    subtitle: 'Donating blood for welfare',
    img: ImageBloodDonate,
    altName: 'Donating blood for welfare',
    colorCode: '#cc2929ff'
  },
  {
    title: 'SIH 2025',
    subtitle: 'Participated in SIH 2025',
    img: ImageSih2025,
    altName: 'Hackathon',
    colorCode: '#D83B0199'
  }
] as const

import ImageIq137 from '../assets/certifications/arealme-iq-137.png'
import ImageCpp1 from '../assets/certifications/certificate_cpp1.jpg'
import ImageCpp2 from '../assets/certifications/certificate_cpp2.jpg'
import type { NovaGalleryType } from '../types/galleryType'

export const CERTIFICATION_GALLERY: NovaGalleryType[] = [
  {
    title: 'IQ 137',
    subtitle: 'Achieved IQ of 137 in July 2026',
    img: ImageIq137,
    altName: 'IQ 137',
    colorCode: '#b6f9ff'
  },
  {
    title: '#1 in C++ Quiz',
    subtitle: 'Certificate of #1 in C++ Quiz',
    img: ImageCpp1,
    altName: '#1 in C++',
    colorCode: '#00aec9'
  },
  {
    title: 'Again #1 in C++ Competition',
    subtitle: 'Certificate of #1 in C++ Competition',
    img: ImageCpp2,
    altName: '#1 in C++',
    colorCode: '#c10000'
  }
]
*/