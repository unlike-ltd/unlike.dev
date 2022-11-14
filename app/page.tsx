import SvgLinkedin from '../components/icons/social/Linkedin'
import SvgSquareGithub from '../components/icons/social/SquareGithub'

export default function Page(): JSX.Element {
  return (
    <div className="px-8 font-mono">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-2 px-16">
        <h1 className="font-brand text-9xl font-normal tracking-tighter">
          Unlike
        </h1>
        <p>hi@unlike.dev</p>
        <div className="flex gap-2">
          <a
            aria-label="LinkedIn"
            title="LinkedIn"
            href="https://www.linkedin.com/company/unlike-ltd/"
            target="_blank"
            rel="noreferrer"
            className="group select-none fill-black text-4xl dark:fill-white"
          >
            <SvgLinkedin
              aria-hidden
              className="pointer-events-none shrink-0 select-none transition-opacity duration-100 ease-in-out group-hover:opacity-50 group-focus-visible:opacity-50"
            />
          </a>
          <a
            aria-label="GitHub"
            title="GitHub"
            href="https://github.com/unlike-ltd"
            target="_blank"
            rel="noreferrer"
            className="group select-none fill-black text-4xl dark:fill-white"
          >
            <SvgSquareGithub
              aria-hidden
              className="pointer-events-none shrink-0 select-none transition-opacity duration-100 ease-in-out group-hover:opacity-50 group-focus-visible:opacity-50"
            />
          </a>
        </div>
      </main>
      <footer className="flex flex-1 items-center justify-center py-8 text-center text-sm text-gray-500">
        Unlike Ltd is a company registered in England and Wales (No. 14026435).
        <br />7 Bell Yard, London, WC2A 2JR.
        <br />
      </footer>
    </div>
  )
}
