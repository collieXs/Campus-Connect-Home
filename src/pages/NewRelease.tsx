import {
  ArrowLeft,
  ArrowUpRight,
  Bug,
  CheckCircle2,
  Clock3,
  Sparkles,
  Wrench,
} from "lucide-react"

import { Link } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

type ReleaseSection = {
  title: string
  description: string
  icon: typeof Sparkles
  items: string[]
}

const releaseSections: ReleaseSection[] = [
  {
    title: "What's new",
    description: "New features and improvements.",
    icon: Sparkles,
    items: [
      "A refreshed Campus Connect website experience.",
      "A clearer way to discover platform features.",
      "A more consistent responsive layout across screen sizes.",
    ],
  },
  {
    title: "Improvements",
    description: "Changes that make the experience better.",
    icon: Wrench,
    items: [
      "Improved navigation between website sections.",
      "Refined spacing, typography, and visual hierarchy.",
      "More consistent interactive states and transitions.",
    ],
  },
  {
    title: "Bug fixes",
    description: "Fixes and stability improvements.",
    icon: Bug,
    items: [
      "Responsive navigation refinements.",
      "Improved keyboard focus visibility.",
      "Support for reduced-motion preferences.",
    ],
  },
]

export default function NewRelease() {
  return (
    <div className="min-h-screen bg-[#f5f7f3] text-[#17291f]">
      <Header />

      <main>
        {/* RELEASE HERO */}
        <section className="relative isolate overflow-hidden bg-[#0b2118] px-5 pb-16 pt-14 text-white sm:px-8 sm:pb-20 sm:pt-20 lg:px-12">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(80,139,86,0.3),transparent_40%),radial-gradient(ellipse_at_10%_100%,rgba(44,100,63,0.25),transparent_42%)]" />

          <div className="mx-auto max-w-7xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-white pt-[64px]"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="mt-12 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#c7dfc8]">
                <Sparkles size={14} />
                Product updates
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                What’s new
                <span className="text-[#b4d6a9]">.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                A running log of what’s changing at Campus Connect — new
                features, improvements, and fixes, all in one place.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/50">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <Clock3 size={14} />
                  Release notes
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <CheckCircle2 size={14} />
                  Product updates
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RELEASE HISTORY */}
        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <aside>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#52765a]">
                Release history
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                The details matter.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#68776b]">
                Follow the evolution of Campus Connect and see what has
                changed along the way.
              </p>

              <a
                href="https://app.mycampusconnect.com.ng"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#245238] transition hover:text-[#52765a]"
              >
                Visit Campus Connect
                <ArrowUpRight size={16} />
              </a>
            </aside>

            <div className="space-y-5">
              <article className="rounded-[1.75rem] border border-[#dfe6dc] bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#e7efe4] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#31583b]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5d9160]" />
                      Website update
                    </span>

                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                      A refreshed first impression
                    </h3>
                  </div>

                  <span className="text-xs text-[#849084]">
                    Latest website redesign
                  </span>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#68776b]">
                  The website now uses a more expressive visual system, with a
                  dark introductory section, brighter content areas, clearer
                  feature cards, and improved responsive navigation.
                </p>

                <div className="mt-8 space-y-8">
                  {releaseSections.map((section) => {
                    const Icon = section.icon

                    return (
                      <div
                        key={section.title}
                        className="grid gap-4 sm:grid-cols-[2.5rem_1fr]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3e9] text-[#31583b]">
                          <Icon size={19} />
                        </span>

                        <div>
                          <h4 className="font-semibold">{section.title}</h4>

                          <p className="mt-1 text-sm text-[#78847a]">
                            {section.description}
                          </p>

                          <ul className="mt-4 space-y-3">
                            {section.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm leading-6 text-[#536356]"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="mt-1 shrink-0 text-[#638068]"
                                />

                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>

              <div className="rounded-[1.75rem] border border-dashed border-[#cbd8c7] bg-[#edf3e9] p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#31583b]">
                  More updates are on the way.
                </p>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#68776b]">
                  This page will be connected to Supabase so release entries can
                  be managed as data instead of being hardcoded into the
                  component.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUG REPORT */}
        <section className="bg-[#eaf1e8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#173c29] p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-12">
              <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-5 -top-12 -z-10 h-52 w-52 rounded-full border border-white/10" />

              <div className="relative max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c7e8bd]">
                  <Bug size={13} />
                  Help us improve
                </span>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
                  Found something that doesn't work?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Spotted a bug, broken link, or unexpected behaviour? Let us
                  know. Your reports help us make Campus Connect better.
                </p>
              </div>

              <div className="relative mt-8 shrink-0 lg:mt-0">
                <a
                  href="https://survey.mycampusconnect.com.ng"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#c7e8bd] px-6 text-sm font-bold text-[#10261a] transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  Report a bug
                  <ArrowUpRight size={17} />
                </a>

                <p className="mt-3 text-center text-xs text-white/40 lg:text-left">
                  Opens our feedback page
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}