import { Redis } from '@upstash/redis'
  
const redis = new Redis({
  url: process.env.VITE_UPSTASH_REDIS_REST_URL,
  token: process.env.VITE_UPSTASH_REDIS_REST_TOKEN,
})

export default redis;

// const setKey = async () => {
//   await redis.set('myKey', 'Hello, World!');
//   console.log('Key set successfully');
// }

// // Retrieving a key
// const getKey = async () => {
//   const value = await redis.get('myKey');
//   console.log(`Value of myKey: ${value}`);
// }

// // Deleting a key
// const deleteKey = async () => {
//   await redis.del('myKey');
//   console.log('Key deleted successfully');
// }
