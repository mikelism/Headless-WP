import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function WordPressSetupGuide() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>WordPress GraphQL API Not Configured</AlertTitle>
        <AlertDescription>Your WordPress GraphQL endpoint is not properly configured or accessible.</AlertDescription>
      </Alert>

      <div className="rounded-lg border p-6">
        <h2 className="mb-4 text-xl font-semibold">How to Fix This Issue</h2>
        <ol className="ml-6 list-decimal space-y-3">
          <li>
            <strong>Install and activate the WPGraphQL plugin</strong> on your WordPress site.
            <div className="mt-1 text-sm text-muted-foreground">
              Download from{" "}
              <a
                href="https://wordpress.org/plugins/wp-graphql/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                wordpress.org/plugins/wp-graphql
              </a>
            </div>
          </li>
          <li>
            <strong>Verify your GraphQL endpoint is working</strong> by visiting
            <code className="mx-1 rounded bg-muted px-1 py-0.5">https://your-wordpress-site.com/graphql</code>
            in your browser. You should see a GraphQL playground or a message about the API.
          </li>
          <li>
            <strong>Check your WordPress site's CORS settings</strong> to ensure it allows requests from your Next.js
            app.
          </li>
          <li>
            <strong>Set the correct environment variable</strong> in your Next.js project:
            <pre className="mt-1 overflow-x-auto rounded bg-muted p-2 text-sm">
              <code>WORDPRESS_API_URL=https://your-wordpress-site.com/graphql</code>
            </pre>
          </li>
          <li>
            <strong>Ensure your WordPress site allows POST requests</strong> to the GraphQL endpoint.
          </li>
        </ol>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="mb-4 text-xl font-semibold">Debugging Tips</h2>
        <ul className="ml-6 list-disc space-y-3">
          <li>
            Try accessing your GraphQL endpoint directly in a tool like Postman or Insomnia to test if it's working.
          </li>
          <li>Check your WordPress server logs for any errors related to the GraphQL endpoint.</li>
          <li>Temporarily disable any security plugins or firewalls that might be blocking API requests.</li>
          <li>If using a managed WordPress host, check if they have any restrictions on the GraphQL API.</li>
        </ul>
      </div>
    </div>
  )
}

