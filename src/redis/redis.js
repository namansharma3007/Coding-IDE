import { Redis } from '@upstash/redis'
  
// const redis = new Redis({
//   url: import.meta.env.VITE_UPSTASH_REDIS_REST_URL,
//   token: import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN,
// })
const redis = new Redis({
  url: "https://able-ape-31684.upstash.io",
  token: "AXvEACQgMzEwN2ZjNzUtYTdlYS00ZDc4LWE5NjEtOTk2ZDIwODdmZjlmMDUwNTM3ZGU5NDUyNDg5NTgwNjMxN2MwMDRmOTE2MWU=",
})

export default redis;
