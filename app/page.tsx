import { SVGProps } from 'react'

import SvgLinkedin from '../components/icons/social/Linkedin'
import SvgSquareGithub from '../components/icons/social/SquareGithub'
import SvgClientPave from '../components/svgs/logos/ClientPave'
import SvgClientPhantom from '../components/svgs/logos/ClientPhantom'
import SvgClientScienceIo from '../components/svgs/logos/ClientScienceIo'
import SvgClientTari from '../components/svgs/logos/ClientTari'

const CLIENTS: ReadonlyArray<{
  id: string
  Component: (props: SVGProps<SVGSVGElement>) => JSX.Element
  href: string
  title: string
}> = [
  {
    id: 'phantom',
    Component: SvgClientPhantom,
    href: 'https://phantom.land',
    title: 'Phantom | Creative Agency',
  },
  {
    id: 'tari',
    Component: SvgClientTari,
    href: 'https://tari.com/',
    title: 'Tari | The protocol for digital assets',
  },
  {
    id: 'pave',
    Component: SvgClientPave,
    href: 'https://pave.team/',
    title: 'Pave | Interim design & recruiting team.',
  },
  {
    id: 'scienceio',
    Component: SvgClientScienceIo,
    href: 'https://science.io/',
    title: 'ScienceIO | Unlock the power of untapped healthcare data',
  },
]

export default function Page(): JSX.Element {
  return (
    <div className="px-8 font-mono">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-2 sm:mx-16">
        <h1 className="font-brand text-7xl font-normal tracking-tighter sm:text-9xl">
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
        <section className="my-20 w-full">
          <h2 id="clients" className="mb-2 text-center text-xl font-normal">
            Clients
          </h2>
          <ul
            aria-labelledby="clients"
            className=" flex w-full flex-row flex-wrap items-center justify-center gap-2"
          >
            {CLIENTS.map(({ Component, id, href, title }, index) => (
              <li
                className="  flex aspect-square shrink-0 basis-1/2 items-center justify-center  sm:mx-0 sm:basis-48"
                key={id}
              >
                <a
                  href={href}
                  aria-label={title}
                  title={title}
                  target="_blank"
                  rel="noreferrer"
                  className="select-none fill-black transition-all duration-300 ease-linear hover:bg-black hover:fill-white focus-visible:bg-black focus-visible:fill-white dark:fill-white dark:hover:bg-white dark:hover:fill-black dark:focus-visible:bg-white dark:focus-visible:fill-black"
                >
                  <Component aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="flex flex-1 items-center justify-center py-8 text-center text-sm text-gray-500">
        Unlike Ltd is a company registered in England and Wales (No. 14026435).
        <br />7 Bell Yard, London, WC2A 2JR.
        <br />
      </footer>
    </div>
  )
}
