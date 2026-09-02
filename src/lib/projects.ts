import ImagePlateformeProjet from '../assets/images/project/nova-portfolio.png'
import ImageOlist from '../assets/images/project/nova-portfolio.png'
import ImageCodeInterpreter from '../assets/images/project/nova-portfolio.png'
import ImageCreditRisk from '../assets/images/project/nova-portfolio.png'

import ImageGithub from '../assets/svgs/github.svg'
import ImageEye from '../assets/svgs/eye.svg'
export const DATA_PROJECTS_HEADER = {
  title: 'Projects',
  description:
    'A selection of my projects in Full Stack Development, Data Analytics, Business Intelligence, Machine Learning, and Artificial Intelligence.'
} as const

export const DATA_PROJECTS = [
  {
    title: 'Digital Project Tracking Platform',
    icon: ImagePlateformeProjet,
    description:
      'Developed a digital platform for project tracking and management, designed to centralize project information, monitor progress, and facilitate collaboration between team members. Implemented a modern web interface and structured the application around project management workflows.',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'REST API', 'Database'],
    metrics: ['Project Management', 'Web Application', 'Full Stack', 'Open-source'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/souhaylelhammadi/Plateforme-num-rique-de-suivi-de-projets-',
        icon: ImageGithub
      },
      
      {
        text: 'View',
        url: '#',
        icon: ImageEye
      }
    ]
  },

  {
    title: 'Olist Data Warehouse & Analytics',
    icon: ImageOlist,
    description:
      'Built an end-to-end analytical data pipeline using the Brazilian Olist e-commerce dataset. Ingested raw CSV data into PostgreSQL, transformed the data with dbt through staging, intermediate, and marts layers, then performed SQL analysis and developed a Power BI dashboard for business intelligence and KPI monitoring.',
    techStack: ['Python', 'PostgreSQL', 'SQL', 'dbt', 'Power BI', 'Data Warehouse'],
    metrics: ['ETL Pipeline', 'Data Warehouse', 'Business Intelligence', 'Power BI'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/souhaylelhammadi/olist_dbt_project',
        icon: ImageGithub
      }
    ]
  },

  {
    title: 'Groq Code Interpreter Agent',
    icon: ImageCodeInterpreter,
    description:
      'Developed a modular AI-powered data analysis application using Streamlit, LangChain, and Groq. Users can upload CSV files and ask questions in natural language. The agent automatically generates and executes Python code to analyze the data, provide answers, and create visualizations.',
    techStack: ['Python', 'Streamlit', 'LangChain', 'Groq', 'Pandas', 'AI Agents'],
    metrics: ['AI Agent', 'Natural Language', 'Automated Analysis', 'Data Visualization'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/souhaylelhammadi/code-interpreter-agent',
        icon: ImageGithub
      }
    ]
  },

  {
    title: 'Credit Risk Prediction App',
    icon: ImageCreditRisk,
    description:
      'Developed a Streamlit machine learning application that predicts credit risk as Good or Bad based on applicant information. Implemented data preprocessing, feature engineering, and an Extra Trees Classifier to generate credit risk predictions through an interactive interface.',
    techStack: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    metrics: ['Machine Learning', 'Credit Risk', 'Predictive Model', 'Streamlit'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/souhaylelhammadi/credit-risk-app',
        icon: ImageGithub
      }
    ]
  }
] as const
