import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjmt149ln028401dly4x1tz5s/master',
      TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiODQ2MDkzNDMtMDRmZi00ZGQ1LThhYzctYWMwYjFjNjZmZDY4In0.KWIDOhOZE2URdkcA-flkRXbZq_BLg9zyi3deQc8tNBc'

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  getAuth:() => `Bearer ${TOKEN}`,
  cache: new InMemoryCache()
})
