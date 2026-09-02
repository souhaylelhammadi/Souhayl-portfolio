import LinkedinImg from '../svgs/Linkedin'
import { SiGithub, SiGithubHex, SiGmail, SiGmailHex } from '@icons-pack/react-simple-icons'

export const DATA_SOCIAL_MEDIA = [
  {
    name: 'Github',
    link: 'https://github.com/souahylelhammadi',
    icon: (size: number) => <SiGithub size={size} color={SiGithubHex} />
  },
  {
    name: 'LinkedIn',
    link: 'www.linkedin.com/in/souhayl-el-hammadi-b16a55288',
    icon: (size: number) => LinkedinImg(size)
  },
  {
    name: 'E-mail',
    link: 'mailto:elhammaidsouhayl@gmail.com',
    icon: (size: number) => <SiGmail size={size} color={SiGmailHex} />
  }
] as const
