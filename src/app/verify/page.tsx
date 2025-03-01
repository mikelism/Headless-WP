export default function VerifyPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-4 text-3xl font-bold">Codebase Verification</h1>
      <p className="text-muted-foreground">
        If you can see this page styled with Tailwind classes, your codebase is properly set up!
      </p>
      <div className="mt-8 rounded-lg border bg-card p-4">
        <p className="font-mono">Verification timestamp: {new Date().toISOString()}</p>
      </div>
    </div>
  )
}

