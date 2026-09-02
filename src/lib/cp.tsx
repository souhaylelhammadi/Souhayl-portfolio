import { SiCodeforces, SiHackerrank, SiLeetcode } from '@icons-pack/react-simple-icons'

export const DATA_COMPETITIVE_SITES = [
  {
    siteName: 'LeetCode',
    profileLink: 'https://leetcode.com/souhayl-el-hammadi/',
    icon: (size: number) => <SiLeetcode color="default" size={size} />
  },
  {
    siteName: 'HackerRank',
    profileLink: 'https://www.hackerrank.com/profile/souhaylelhamma1',
    icon: (size: number) => <SiHackerrank color="default" size={size} />
  },
  {
    siteName: 'Codeforces',
    profileLink: 'https://codeforces.com/profile/Souhayl',
    icon: (size: number) => <SiCodeforces color="default" size={size} />
  }
] as const
