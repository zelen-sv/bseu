import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjmne5oje19tf01dlo9r8ljav/master',
      TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiYmVjNjgzZGYtMmM0ZS00NDYxLTkzODktN2Y5ODljNTJiYTg2In0.ruPPsY_KXM7hiPjEguq2PunJYoRvGksLH0cAEFpulbs'

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  getAuth:() => `Bearer ${TOKEN}`,
  cache: new InMemoryCache()
})
