import Header from "../components/Header"
import Footer from "../components/Footer"

export default function NewRelease() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-bg-main">
        {/* Release Hero */}
        <section className="px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-color bg-surface px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Product updates
                  </span>
                </div>

                <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  What's new at{" "}
                  <span className="text-primary">
                    Campus Connect?
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
                  New features, useful improvements, and fixes.
                  Here's what we're working on to make campus life
                  more connected.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#latest-release"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                  >
                    Explore latest updates

                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>

                  <a
                    href="#report-bug"
                    className="inline-flex items-center gap-2 rounded-xl border border-border-color bg-surface px-5 py-3.5 text-sm font-semibold text-text-dark transition-colors hover:border-primary"
                  >
                    Report a bug
                  </a>
                </div>
              </div>

              {/* Latest Release Preview */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-primary/5" />

                <div className="relative overflow-hidden rounded-3xl border border-border-color bg-surface p-6 shadow-sm sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
                        Latest release
                      </span>

                      <h2 className="mt-3 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
                        A better campus experience.
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
                        <path d="m19 15 1.1 2.9L23 19l-2.9 1.1L19 23l-1.1-2.9L15 19l2.9-1.1L19 15Z" />
                      </svg>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-text-muted">
                    Every update brings us a step closer to making
                    student life simpler, more useful, and more
                    connected.
                  </p>

                  <div className="mt-8 border-t border-border-color pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-text-muted">
                        Release notes
                      </span>

                      <a
                        href="#latest-release"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Read updates
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-border-color bg-surface px-5 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M12 8v4m0 4h.01" />
                      <path d="M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3l-7.5-13.1a2 2 0 0 0-3.4 0Z" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text-dark">
                      Found something wrong?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-text-muted">
                      Your feedback helps us improve.
                    </p>
                  </div>

                  <a
                    href="#report-bug"
                    aria-label="Go to bug reporting information"
                    className="ml-auto text-primary"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Release */}
        <section
          id="latest-release"
          className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 border-b border-border-color pb-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  The latest
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                  Latest release
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted sm:text-base">
                  A closer look at what's new, what's improved,
                  and what's been fixed.
                </p>
              </div>

              <span className="w-fit rounded-full border border-border-color bg-surface px-4 py-2 text-xs font-semibold text-text-muted">
                Release notes
              </span>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {/* New Features */}
              <article className="rounded-2xl border border-border-color bg-surface p-6 transition-shadow hover:shadow-md sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18M3 12h18" />
                  </svg>
                </div>

                <span className="mt-6 inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  New features
                </span>

                <h3 className="mt-4 text-xl font-bold text-text-dark">
                  More ways to connect
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-muted">
                  Discover new ways to interact with other students
                  and participate in your campus community.
                </p>
              </article>

              {/* Improvements */}
              <article className="rounded-2xl border border-border-color bg-surface p-6 transition-shadow hover:shadow-md sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M12 19V5m-7 7 7-7 7 7" />
                  </svg>
                </div>

                <span className="mt-6 inline-block rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                  Improvements
                </span>

                <h3 className="mt-4 text-xl font-bold text-text-dark">
                  A smoother experience
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-muted">
                  We're continually refining the interface and
                  making Campus Connect easier to use across devices.
                </p>
              </article>

              {/* Bug Fixes */}
              <article className="rounded-2xl border border-border-color bg-surface p-6 transition-shadow hover:shadow-md sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>

                <span className="mt-6 inline-block rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Bug fixes
                </span>

                <h3 className="mt-4 text-xl font-bold text-text-dark">
                  Fixes that matter
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-muted">
                  We work to identify issues, resolve them, and
                  make the platform more reliable for everyone.
                </p>
              </article>
            </div>

            <p className="mt-5 text-xs leading-5 text-text-light">
              These descriptions are preview copy. Replace them
              with the specific changes included in each release.
            </p>
          </div>
        </section>

        {/* Previous Releases */}
        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-border-color bg-surface p-6 sm:p-10 lg:p-12">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    The journey so far
                  </span>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                    Previous releases
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted sm:text-base">
                    Keep up with the changes that have shaped
                    Campus Connect over time.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-border-color pt-8">
                <div className="flex gap-4">
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <span className="mt-3 w-px flex-1 bg-border-color" />
                  </div>

                  <div className="pb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Release archive
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-text-dark">
                      Your release history starts here
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-text-muted">
                      Once Campus Connect has previous releases,
                      their notes will appear here so users can
                      look back at older features, improvements,
                      and bug fixes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-color text-text-muted">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M12 8v4l3 2" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-text-dark">
                      More updates to come
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      Check back whenever you want to see what's
                      changed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bug Reporting */}
        <section
          id="report-bug"
          className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
        >
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-4 -top-8 h-40 w-40 rounded-full border border-white/10" />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    Help us improve
                  </span>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Something not working right?
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                    If you run into a bug while using Campus Connect,
                    let us know. Your reports help us find problems
                    and build a better experience for every student.
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href="https://app.campusconnect.com.ng"
                    className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                  >
                    Report a bug

                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>

                  <p className="mt-3 text-xs text-white/70">
                    Available through the Campus Connect app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}