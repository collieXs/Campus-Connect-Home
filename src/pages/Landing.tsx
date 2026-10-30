import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import {
  ArrowUpRight,
  BookOpen,
  MessageCircle,
  ShoppingBag,
  Users,
  Plus,
  Sparkles,
} from "lucide-react"

import Header from "../components/Header"
import Footer from "../components/Footer"

const features = [
  {
    number: "01",
    icon: BookOpen,
    title: "Your campus, in the loop.",
    description:
      "A shared place for campus updates, student conversations, and the things happening around you.",
    label: "CAMPUS FEED",
    background: "bg-[#edf3e9]",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Trade with your people.",
    description:
      "Discover a student-focused marketplace for textbooks, gadgets, and everyday campus essentials.",
    label: "MARKETPLACE",
    background: "bg-[#f7f2e8]",
  },
  {
    number: "03",
    icon: Users,
    title: "Find your community.",
    description:
      "Connect with course mates, find study circles, and meet people with shared interests.",
    label: "COMMUNITY",
    background: "bg-[#f4f6f1]",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Keep the conversation going.",
    description:
      "Bring campus connections closer together instead of letting everything get lost across scattered chats.",
    label: "CONNECTIONS",
    background: "bg-[#eaf1ec]",
  },
]

const faqs = [
  {
    question: "What is Campus Connect?",
    answer:
      "Campus Connect is a student-focused digital hub designed to bring campus conversations, community, updates, and useful student services closer together.",
  },
  {
    question: "Is Campus Connect free to use?",
    answer:
      "Campus Connect is being built for students. Check the app for current access and availability details.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "The web experience can be accessed through a supported browser without an app-store download.",
  },
  {
    question: "Can I share feedback or suggest a feature?",
    answer:
      "Yes. Use the student survey to share ideas and suggestions that could help shape what gets built next.",
  },
]

export default function Landing() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const targetId = decodeURIComponent(location.hash.slice(1))

    const firstFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      })
    })

    return () => cancelAnimationFrame(firstFrame)
  }, [location.hash, location.pathname])

  return (
    <div className="overflow-hidden bg-[#f5f7f3] text-[#15281f]">
      <Header />

      <main>
        {/* HERO */}
        <section
          id="hero"
          className="relative isolate overflow-hidden bg-[#0b2118] text-white pt-[64px]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_12%,rgba(45,125,78,0.38),transparent_38%),radial-gradient(ellipse_at_88%_65%,rgba(143,178,112,0.16),transparent_32%)]" />

          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-12 lg:pb-32 lg:pt-28">
            <div className="relative z-10 max-w-2xl animate-[rise-in_700ms_ease-out_both]">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c7dfc8] backdrop-blur-sm sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a7d28e] shadow-[0_0_12px_rgba(167,210,142,0.8)]" />
                Built around campus life
              </div>

              <h1 className="max-w-3xl text-[clamp(3.25rem,8vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white">
                Campus life,
                <br />
                <span className="bg-gradient-to-r from-[#c7e8bd] via-[#a6d6a0] to-[#e0edce] bg-clip-text text-transparent">
                  connected.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                The people, conversations, opportunities, and everyday
                essentials that make student life what it is — brought closer
                together in one place.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://app.mycampusconnect.com.ng"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#c7e8bd] px-6 text-sm font-bold text-[#10261a] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c7e8bd] focus:ring-offset-2 focus:ring-offset-[#0b2118]"
                >
                  Explore Campus Connect
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#features"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold text-white/85 transition duration-200 hover:border-white/45 hover:bg-white/[0.06]"
                >
                  Discover what’s inside
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/45 sm:text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#a7d28e]" />
                  Made with students in mind
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />

                <span>A more connected campus starts here</span>
              </div>
            </div>

            {/* Illustrative product preview */}
            <div className="relative mx-auto w-full max-w-[610px] animate-[rise-in_900ms_120ms_ease-out_both] lg:ml-auto">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#5d9d69]/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.07] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[2.25rem] sm:p-3">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#f5f7f3] text-[#17291f] sm:rounded-[1.8rem]">
                  <div className="flex items-center justify-between border-b border-[#e4e9e1] bg-white px-4 py-3.5 sm:px-6">
                    <div className="flex items-center gap-2.5">
                      <img
                        src="/logo.png"
                        alt=""
                        className="h-8 w-8 rounded-xl object-contain"
                      />

                      <div>
                        <p className="text-xs font-bold tracking-tight sm:text-sm">
                          Campus Connect
                        </p>

                        <p className="mt-0.5 text-[10px] text-[#748176] sm:text-[11px]">
                          Your campus, closer
                        </p>
                      </div>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7efe4] text-xs font-bold text-[#27543a]">
                      CC
                    </div>
                  </div>

                  <div className="grid gap-3 p-3 sm:grid-cols-[1fr_0.72fr] sm:gap-4 sm:p-5">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="rounded-2xl bg-[#173c29] p-4 text-white sm:p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b9d6b4]">
                          Your campus feed
                        </p>

                        <p className="mt-3 max-w-[230px] text-xl font-semibold leading-tight tracking-[-0.04em] sm:text-2xl">
                          Good things happen when we connect.
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-3">
                          <span className="text-[10px] text-white/65">
                            A space for student life
                          </span>

                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c7e8bd] text-[#173c29]">
                            <ArrowUpRight size={16} />
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#e4e9e1] bg-white p-4 sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-bold sm:text-sm">
                            Around your campus
                          </p>

                          <span className="rounded-full bg-[#edf4e9] px-2 py-1 text-[9px] font-semibold text-[#386346]">
                            COMMUNITY
                          </span>
                        </div>

                        <div className="mt-4 flex gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dce9d6] text-[#31583b]">
                            <Users size={20} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold">
                              Study circles & shared interests
                            </p>

                            <p className="mt-1 text-[10px] leading-4 text-[#78847a]">
                              Find people to learn, build, and grow with.
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 h-px bg-[#edf0eb]" />

                        <div className="mt-4 flex gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3e9d7] text-[#85663b]">
                            <MessageCircle size={20} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold">
                              Conversations that matter
                            </p>

                            <p className="mt-1 text-[10px] leading-4 text-[#78847a]">
                              Keep student conversations closer together.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="rounded-2xl border border-[#e4e9e1] bg-white p-4">
                        <div className="flex items-center gap-2">
                          <Sparkles size={16} className="text-[#52765a]" />
                          <p className="text-xs font-bold">Discover more</p>
                        </div>

                        <div className="mt-4 space-y-2.5">
                          <div className="flex items-center gap-2 rounded-xl bg-[#edf3e9] p-3">
                            <BookOpen size={17} className="text-[#31583b]" />
                            <span className="text-[10px] font-semibold">
                              Campus updates
                            </span>
                          </div>

                          <div className="flex items-center gap-2 rounded-xl bg-[#f7f2e8] p-3">
                            <ShoppingBag
                              size={17}
                              className="text-[#85663b]"
                            />
                            <span className="text-[10px] font-semibold">
                              Student essentials
                            </span>
                          </div>

                          <div className="flex items-center gap-2 rounded-xl bg-[#eaf1ec] p-3">
                            <Users size={17} className="text-[#31583b]" />
                            <span className="text-[10px] font-semibold">
                              Find your people
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-[#dce9d6] p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#52765a]">
                          Campus life
                        </p>

                        <p className="mt-2 text-lg font-semibold leading-tight tracking-[-0.04em] text-[#173c29]">
                          All in one place.
                        </p>

                        <div className="mt-4 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#4c8051]" />
                          <span className="h-1.5 w-1.5 rounded-full bg-[#83ad76]" />
                          <span className="h-1.5 w-1.5 rounded-full bg-[#c4d9b8]" />
                          <span className="ml-1 text-[10px] text-[#657a67]">
                            Made for campus life
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#e4e9e1] bg-white px-4 py-3 text-[10px] text-[#778479] sm:px-6">
                    <span>A little closer to your campus.</span>

                    <span className="font-semibold text-[#31583b]">
                      Campus Connect
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-[18%] hidden items-center gap-2.5 rounded-2xl border border-white/15 bg-[#173c29]/90 px-4 py-3 text-white shadow-xl backdrop-blur-lg sm:flex lg:-left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c7e8bd] text-[#173c29]">
                  <Users size={19} />
                </span>

                <span>
                  <span className="block text-xs font-semibold">
                    Find your people
                  </span>

                  <span className="mt-0.5 block text-[10px] text-white/55">
                    Community, within reach
                  </span>
                </span>
              </div>

              <div className="absolute -right-2 bottom-[13%] hidden rounded-2xl border border-white/15 bg-white/[0.09] px-4 py-3 text-white shadow-xl backdrop-blur-lg sm:block lg:-right-6">
                <span className="block text-[10px] uppercase tracking-[0.13em] text-[#c7e8bd]">
                  Student life
                </span>

                <span className="mt-1 block text-sm font-semibold">
                  All in one place.
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.025]">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left lg:px-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                A better way to experience campus
              </p>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/65 sm:justify-end">
                <span>Connect</span>
                <span className="text-[#a7d28e]">/</span>
                <span>Discover</span>
                <span className="text-[#a7d28e]">/</span>
                <span>Belong</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="relative scroll-mt-4 bg-[#f5f7f3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#52765a]">
                Why we’re here
              </p>

              <p className="mt-5 max-w-xs text-sm leading-6 text-[#68776b]">
                Campus is more than lecture halls. It’s friendships, ideas,
                opportunities, and a thousand little moments in between.
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.06em] text-[#17291f] sm:text-5xl lg:text-6xl">
                Student life is already connected.{" "}
                <span className="text-[#7a927b]">
                  The tools should be, too.
                </span>
              </h2>

              <div className="mt-8 grid gap-6 border-t border-[#dfe6dc] pt-7 sm:grid-cols-2 sm:gap-10">
                <p className="text-sm leading-7 text-[#68776b] sm:text-base">
                  Too often, useful information lives in separate chats,
                  updates get missed, and finding your people takes more effort
                  than it should.
                </p>

                <p className="text-sm leading-7 text-[#68776b] sm:text-base">
                  Campus Connect is being built to bring more of that
                  experience into one student-focused space — simpler to
                  discover, easier to navigate, and made around real campus
                  needs.
                </p>
              </div>

              <a
                href="#features"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#245238]"
              >
                Get to know the platform
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="relative scroll-mt-4 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 border-b border-[#e4e9e1] pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#52765a]">
                  What brings it together
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#17291f] sm:text-5xl lg:text-6xl">
                  One campus.
                  <br />
                  <span className="text-[#7a927b]">More possibilities.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[#68776b] sm:pb-1">
                Useful campus experiences, brought together with a little less
                friction and a lot more intention.
              </p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon

                return (
                  <article
                    key={feature.number}
                    className={`group relative overflow-hidden rounded-[1.75rem] border border-[#e3e9e0] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c4d5c0] hover:shadow-[0_20px_50px_rgba(27,62,39,0.08)] sm:p-8 ${feature.background}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.05] bg-white/75 text-[#31583b] shadow-sm">
                        <Icon size={22} strokeWidth={1.7} />
                      </span>

                      <span className="text-xs font-semibold tracking-[0.14em] text-[#829083]">
                        {feature.number}
                      </span>
                    </div>

                    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#638068]">
                      {feature.label}
                    </p>

                    <h3 className="mt-2 max-w-md text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#1b3023] sm:text-3xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#657467]">
                      {feature.description}
                    </p>

                    <div className="pointer-events-none absolute -bottom-14 -right-8 h-36 w-36 rounded-full border border-[#4e7656]/10 transition-transform duration-500 group-hover:scale-125" />

                    <div className="pointer-events-none absolute -bottom-8 -right-2 h-24 w-24 rounded-full border border-[#4e7656]/10 transition-transform duration-500 group-hover:scale-125" />
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* COMMUNITY CTA */}
        <section className="relative isolate overflow-hidden bg-[#10271b] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_30%,rgba(113,159,101,0.2),transparent_38%),radial-gradient(ellipse_at_10%_100%,rgba(44,100,63,0.28),transparent_40%)]" />

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b4d6a9]">
                Your campus is a community
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                Make room for more{" "}
                <span className="text-[#b4d6a9]">connection.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Discover what Campus Connect is building for student life — and
                help shape what comes next.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="https://app.mycampusconnect.com.ng"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#c7e8bd] px-6 text-sm font-bold text-[#10261a] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Launch Campus Connect
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://survey.mycampusconnect.com.ng"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                Share your ideas
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-4 bg-[#f5f7f3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#52765a]">
                A few answers
              </p>

              <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#17291f] sm:text-5xl">
                Good to know.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#68776b]">
                A little more about the platform and how to get involved.
              </p>
            </div>

            <div className="divide-y divide-[#dfe6dc] border-y border-[#dfe6dc]">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group py-5 sm:py-6"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-[#203629] marker:hidden sm:text-lg">
                    <span>{faq.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d5dfd2] text-[#31583b] transition duration-200 group-open:rotate-45 group-open:bg-[#e7efe4]">
                      <Plus size={17} />
                    </span>
                  </summary>

                  <p className="max-w-2xl pt-4 pr-8 text-sm leading-6 text-[#68776b]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}