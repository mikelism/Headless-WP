import { getPosts } from "@/lib/wordpress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-4xl font-bold">WordPress Connection Test</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Raw API Response</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap rounded-lg bg-muted p-4">{JSON.stringify(posts, null, 2)}</pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Posts List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2">
              {posts.map((post: any) => (
                <li key={post.id} className="text-lg">
                  {post.title}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

