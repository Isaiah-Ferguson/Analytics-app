import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://usw1-fit-baboon-34271.upstash.io',
  token: process.env.REDIS_KEY!,
})

export {redis}