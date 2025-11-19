export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Template Check Passed
      </p>
      <h1 className="text-balance text-4xl font-bold sm:text-5xl">
        Bolt.new template ready ⚡
      </h1>
      <p className="text-balance text-base text-muted-foreground">
        Start editing <code className="rounded bg-muted px-2 py-1">src/app/page.tsx</code> to make
        this project your own.
      </p>
    </main>
  );
}
