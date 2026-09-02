import CanvaImg from '../svgs/Canva'
import JavaImg from '../svgs/Java'
import MatplotlibImg from '../svgs/Matplotlib'
import VscodeImg from '../svgs/VscodeImg'
import RedisImg from '../svgs/RedisImg'
import NodemailerImg from '../svgs/Nodemailer'
import {
  SiCss,
  SiCssHex,
  SiDrizzle,
  SiDrizzleHex,
  SiEslint,
  SiEslintHex,
  SiFastapi,
  SiFastapiHex,
  SiFirebase,
  SiFirebaseHex,
  SiFlask,
  SiFlaskHex,
  SiGitbook,
  SiGitbookHex,
  SiGithubpages,
  SiGithubpagesHex,
  SiHostinger,
  SiHostingerHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiJupyter,
  SiJupyterHex,
  SiLaravel,
  SiLaravelHex,
  SiLinux,
  SiLinuxHex,
  SiLinuxmint,
  SiLlvm,
  SiLlvmHex,
  SiLinuxmintHex,
  SiMarkdown,
  SiMarkdownHex,
  SiMongodb,
  SiMongodbHex,
  SiMysql,
  SiMysqlHex,
  SiNetlify,
  SiNetlifyHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNpm,
  SiNpmHex,
  SiNumpy,
  SiNumpyHex,
  SiPandas,
  SiPandasHex,
  SiPerplexity,
  SiPerplexityHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPostman,
  SiPostmanHex,
  SiPrettier,
  SiPrettierHex,
  SiPython,
  SiPythonHex,
  SiQt,
  SiQtHex,
  SiReact,
  SiReactHex,
  SiRender,
  SiRenderHex,
  SiSupabase,
  SiSupabaseHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiUpstash,
  SiUpstashHex,
  SiVercel,
  SiVercelHex,
  SiVirtualbox,
  SiVirtualboxHex
} from '@icons-pack/react-simple-icons'

import WebDevImg from '../illustrations/WebDevImg'
import LowLevelProgImg from '../illustrations/LowLevelProgImg'
import PythonProgImg from '../illustrations/PythonProgImg'
import ExtraTechImg from '../illustrations/ExtraTechImg'
import ServerImg from '../illustrations/ServerImg'
import DatabaseImg from '../illustrations/DatabaseImg'

export const DATA_SKILLS = [
  {
    title: 'Web Development',
    fileName: WebDevImg,
    skills: [
      '— I Have quite good experience working on different web based projects',
      '— I Know well to improve Search Engine Optimization(SEO) for better ranking on the web'
    ],
    softwareSkills: [
      {
        skillName: 'JavaScript',
        icon: (size: number) => <SiJavascript size={size} color={SiJavascriptHex} />
      },
      {
        skillName: 'TypeScript',
        icon: (size: number) => <SiTypescript size={size} color={SiTypescriptHex} />
      },
      {
        skillName: 'ReactJS',
        icon: (size: number) => <SiReact size={size} color={SiReactHex} />
      },
      {
        skillName: 'NextJS',
        icon: (size: number) => <SiNextdotjs size={size} color={SiNextdotjsHex} />
      },
      {
        skillName: 'Larvel',
        icon: (size: number) => <SiLaravel size={size} color={SiLaravelHex} />
      },

      {
        skillName: 'Tailwind CSS',
        icon: (size: number) => <SiTailwindcss size={size} color={SiTailwindcssHex} />
      },
      {
        skillName: 'HTML5',
        icon: (size: number) => <SiHtml5 size={size} color={SiHtml5Hex} />
      },
      {
        skillName: 'CSS3',
        icon: (size: number) => <SiCss size={size} color={SiCssHex} />
      },

      {
        skillName: 'Node.js',
        icon: (size: number) => <SiNodedotjs size={size} color={SiNodedotjsHex} />
      },
      {
        skillName: 'Npm',
        icon: (size: number) => <SiNpm size={size} color={SiNpmHex} />
      }
    ]
  },
  {
    title: 'Low Level Programming',
    fileName: LowLevelProgImg,
    skills: [
      '— Developing highly optimized technologies like compilers, interpreter etc.',
      '— Experience of working with complex cross-platform projects',
      '— Optimizing and maintaining multi-platform header files for applications'
    ],
    softwareSkills: [
      {
        skillName: 'Java',
        icon: (size: number) => JavaImg(size)
      },
      
      {
        skillName: 'LLVM',
        icon: (size: number) => <SiLlvm size={size} color={SiLlvmHex} />
      },
      {
        skillName: 'Linux',
        icon: (size: number) => <SiLinux size={size} color={SiLinuxHex} />
      }
    ]
  },
  {
    title: 'Cloud Architecting',
    fileName: ServerImg,
    skills: [
      '— I have build highly scalable systems which can handle heavy load during peak hours',
      "— These tools helped me to build scalable and super fast API's and backend"
    ],
    softwareSkills: [
      {
        skillName: 'Supabase',
        icon: (size: number) => <SiSupabase size={size} color={SiSupabaseHex} />
      },
      {
        skillName: 'Firebase',
        icon: (size: number) => <SiFirebase size={size} color={SiFirebaseHex} />
      },
      {
        skillName: 'Vercel',
        icon: (size: number) => <SiVercel size={size} color={SiVercelHex} />
      },
      {
        skillName: 'Upstash',
        icon: (size: number) => <SiUpstash size={size} color={SiUpstashHex} />
      },
      {
        skillName: 'Render',
        icon: (size: number) => <SiRender size={size} color={SiRenderHex} />
      },
      {
        skillName: 'Hostinger',
        icon: (size: number) => <SiHostinger size={size} color={SiHostingerHex} />
      },
      {
        skillName: 'Github Pages',
        icon: (size: number) => <SiGithubpages size={size} color={SiGithubpagesHex} />
      },
      {
        skillName: 'Netlify',
        icon: (size: number) => <SiNetlify size={size} color={SiNetlifyHex} />
      }
    ]
  },
  {
    title: 'Database Handling',
    fileName: DatabaseImg,
    skills: [
      '— Proficient with relational and NoSQL databases, with experience optimizing queries & schema design across multiple production projects',
      '— Experienced with caching, session management, and real-time data handling to improve application performance and scalability'
    ],
    softwareSkills: [
      {
        skillName: 'PostgreSQL',
        icon: (size: number) => <SiPostgresql size={size} color={SiPostgresqlHex} />
      },
      {
        skillName: 'Drizzle ORM',
        icon: (size: number) => <SiDrizzle size={size} color={SiDrizzleHex} />
      },
      {
        skillName: 'Redis',
        icon: (size: number) => RedisImg(size)
      },
      {
        skillName: 'MongoDB',
        icon: (size: number) => <SiMongodb size={size} color={SiMongodbHex} />
      },
      {
        skillName: 'MySQL',
        icon: (size: number) => <SiMysql size={size} color={SiMysqlHex} />
      }
    ]
  },
  {
    title: 'Python Programming',
    fileName: PythonProgImg,
    skills: [
      '— Experience working on projects of multiple domains using Python',
      '— APIs, Data Analysis, Natural-language Processing and Desktop App Development',
      '— Deploying projects on Vercel and connecting domains from Hostinger to the vercel'
    ],
    softwareSkills: [
      {
        skillName: 'Python',
        icon: (size: number) => <SiPython size={size} color={SiPythonHex} />
      },
      {
        skillName: 'FastAPI',
        icon: (size: number) => <SiFastapi size={size} color={SiFastapiHex} />
      },
      {
        skillName: 'Flask',
        icon: (size: number) => <SiFlask size={size} color={SiFlaskHex} />
      },
      {
        skillName: 'Pandas',
        icon: (size: number) => <SiPandas size={size} color={SiPandasHex} />
      },
      {
        skillName: 'NumPy',
        icon: (size: number) => <SiNumpy size={size} color={SiNumpyHex} />
      },
      {
        skillName: 'Matplotlib',
        icon: (size: number) => MatplotlibImg(size)
      },
      {
        skillName: 'PyQT5',
        icon: (size: number) => <SiQt size={size} color={SiQtHex} />
      }
    ]
  },
  {
    title: 'Tools I use',
    fileName: ExtraTechImg,
    skills: [
      '— I have worked on multiple projects with so many different technologies being used',
      '— These tools always helped me to improve the productivity as well as helped me in bringing better outputs'
    ],
    softwareSkills: [
      {
        skillName: 'Perplexity',
        icon: (size: number) => <SiPerplexity size={size} color={SiPerplexityHex} />
      },
      {
        skillName: 'VsCode',
        icon: (size: number) => VscodeImg(size)
      },
      {
        skillName: 'Java',
        icon: (size: number) => JavaImg(size)
      },
      {
        skillName: 'Eslint',
        icon: (size: number) => <SiEslint size={size} color={SiEslintHex} />
      },
      {
        skillName: 'Prettier',
        icon: (size: number) => <SiPrettier size={size} color={SiPrettierHex} />
      },
      {
        skillName: 'Nodemailer',
        icon: (size: number) => NodemailerImg(size)
      },
      {
        skillName: 'LinuxMint',
        icon: (size: number) => <SiLinuxmint size={size} color={SiLinuxmintHex} />
      },
      {
        skillName: 'VirtualBox',
        icon: (size: number) => <SiVirtualbox size={size} color={SiVirtualboxHex} />
      },
      {
        skillName: 'MarkDown',
        icon: (size: number) => <SiMarkdown size={size} color={SiMarkdownHex} />
      },
      {
        skillName: 'GitBook',
        icon: (size: number) => <SiGitbook size={size} color={SiGitbookHex} />
      },
      {
        skillName: 'Postman',
        icon: (size: number) => <SiPostman size={size} color={SiPostmanHex} />
      },
      {
        skillName: 'Jupyter',
        icon: (size: number) => <SiJupyter size={size} color={SiJupyterHex} />
      },
      {
        skillName: 'Canva',
        icon: (size: number) => CanvaImg(size)
      }
    ]
  }
] as const
