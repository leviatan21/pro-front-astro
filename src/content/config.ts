// https://docs.astro.build/en/tutorials/add-content-collections/#create-a-collection-for-your-blog-posts
import { z, defineCollection } from 'astro:content'

// Define a `type` and `schema` for each collection
const schema = defineCollection({
  'type': 'data',
  'schema': z.any()
})

// Export the collections
export const collections = {
  'pages': schema,
  'tags': schema,
  'group': schema,
}