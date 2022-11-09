export default function Page(): JSX.Element {
  return (
    <div className="px-8 font-mono">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center px-16">
        <h1 className="font-brand text-9xl font-normal tracking-tighter">
          Unlike
        </h1>
        <p>hi@unlike.dev</p>
      </main>
      <footer className="flex flex-1 items-center justify-center py-8 text-center text-sm text-gray-500">
        Unlike Ltd is a company registered in England and Wales (No. 14026435).
        <br />7 Bell Yard, London, WC2A 2JR.
        <br />
      </footer>
    </div>
  )
}
