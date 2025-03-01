const API_URL = process.env.WORDPRESS_API_URL

if (!API_URL) {
  throw new Error("WORDPRESS_API_URL is not defined")
}

async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { "Content-Type": "application/json" }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      const text = await res.text()
      console.error(`API request failed with status ${res.status}: ${text}`)
      throw new Error(`API request failed with status ${res.status}`)
    }

    const json = await res.json()

    if (json.errors) {
      console.error(json.errors)
      throw new Error("GraphQL API errors")
    }

    return json.data
  } catch (error) {
    console.error("Error fetching from WordPress:", error)
    throw error
  }
}

export async function getPosts() {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          date
          slug
          excerpt
        }
      }
    }
  `)

  return data?.posts?.nodes || []
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        date
        title
        slug
        content
        excerpt
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `,
    {
      variables: { slug },
    },
  )

  const post = data?.post

  if (!post) return null

  return {
    id: post.id,
    date: post.date,
    title: post.title,
    slug: post.slug,
    content: post.content,
    excerpt: post.excerpt,
    categories: post.categories?.nodes.map((category: any) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
    })),
    tags: post.tags?.nodes.map((tag: any) => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
    })),
    featuredImage: post.featuredImage?.node
      ? {
          sourceUrl: post.featuredImage.node.sourceUrl,
          altText: post.featuredImage.node.altText,
        }
      : null,
  }
}

export async function getEvents() {
  const data = await fetchAPI(`
    query Events {
      events(first: 100, where: { orderby: { field: DATE, order: ASC } }) {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          acf {
            eventDate
            location
            ticketUrl
            isHighlighted
          }
        }
      }
    }
  `)

  return data?.events?.nodes || []
}

const SAMPLE_POSTS = [
  {
    id: "1",
    date: "2023-05-15T12:00:00",
    title: "Getting Started with Headless WordPress",
    slug: "getting-started-with-headless-wordpress",
    excerpt:
      "<p>Learn how to set up a headless WordPress site with Next.js for better performance and developer experience.</p>",
    content:
      "<p>This is a sample post content. In a real application, this would be fetched from your WordPress instance.</p><p>Headless WordPress separates your content management from your frontend, giving you the flexibility to use modern frameworks like Next.js while keeping the familiar WordPress admin interface.</p>",
    categories: {
      nodes: [
        {
          id: "cat1",
          name: "Development",
          slug: "development",
        },
      ],
    },
    tags: {
      nodes: [
        {
          id: "tag1",
          name: "WordPress",
          slug: "wordpress",
        },
        {
          id: "tag2",
          name: "Next.js",
          slug: "nextjs",
        },
      ],
    },
    featuredImage: {
      node: {
        sourceUrl: "/placeholder.svg?height=600&width=800",
        altText: "Headless WordPress",
      },
    },
  },
  {
    id: "2",
    date: "2023-05-20T12:00:00",
    title: "Optimizing Your Headless WordPress Site",
    slug: "optimizing-headless-wordpress",
    excerpt: "<p>Discover techniques to optimize your headless WordPress site for better performance and SEO.</p>",
    content:
      "<p>This is another sample post. In a real application, this would be fetched from your WordPress instance.</p>",
    categories: {
      nodes: [
        {
          id: "cat2",
          name: "Performance",
          slug: "performance",
        },
      ],
    },
    tags: {
      nodes: [
        {
          id: "tag1",
          name: "WordPress",
          slug: "wordpress",
        },
        {
          id: "tag3",
          name: "Optimization",
          slug: "optimization",
        },
      ],
    },
    featuredImage: {
      node: {
        sourceUrl: "/placeholder.svg?height=600&width=800",
        altText: "WordPress Optimization",
      },
    },
  },
  {
    id: "3",
    date: "2023-05-25T12:00:00",
    title: "Custom Post Types in Headless WordPress",
    slug: "custom-post-types-headless-wordpress",
    excerpt: "<p>Learn how to work with custom post types in a headless WordPress setup.</p>",
    content:
      "<p>This is a third sample post. In a real application, this would be fetched from your WordPress instance.</p>",
    categories: {
      nodes: [
        {
          id: "cat1",
          name: "Development",
          slug: "development",
        },
      ],
    },
    tags: {
      nodes: [
        {
          id: "tag1",
          name: "WordPress",
          slug: "wordpress",
        },
        {
          id: "tag4",
          name: "Custom Post Types",
          slug: "custom-post-types",
        },
      ],
    },
    featuredImage: {
      node: {
        sourceUrl: "/placeholder.svg?height=600&width=800",
        altText: "Custom Post Types",
      },
    },
  },
]

