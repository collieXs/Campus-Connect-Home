import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Landing() {
  return (
    <>
      <Header />

      <main
        id="hero"
        className="mx-auto flex w-full max-w-[1000px] flex-col items-center px-6 pb-20 pt-12 text-center"
      >
        {/* Hero badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b8d4bc] bg-[rgba(208,224,212,0.5)] px-[14px] py-[6px] text-xs font-semibold text-primary">
          <svg
            className="h-[14px] w-[14px] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <use href="/icons.svg#icon-sparkles" />
          </svg>

          <span>Welcome to Your New Campus Experience</span>
        </div>

        {/* Hero heading */}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-[-0.03em] text-text-dark sm:text-[52px]">
          Connect, Share, and Thrive on Your Campus.
        </h1>

        <p className="mt-4 max-w-xl text-[15px] leading-[1.6] text-text-muted sm:text-[16.8px]">
          Your all-in-one student hub for real-time campus feeds, safe
          marketplace trading, study groups, and community updates.
        </p>

        {/* Hero actions */}
        <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href="https://app.mycampusconnect.com.ng"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-[14px] text-[15px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-hover"
          >
            Open Campus App
          </a>

          <a
            href="https://survey.mycampusconnect.com.ng"
            className="inline-flex items-center justify-center rounded-xl border border-border-color bg-white px-7 py-[14px] text-[15px] font-semibold text-text-dark shadow-sm transition-colors duration-200 hover:bg-[#f4f7f4]"
          >
            Take Student Survey
          </a>
        </div>

        {/* About section */}
        <section
          id="about"
          className="mt-20 w-full rounded-[20px] border border-border-color bg-white px-7 py-10 text-left shadow-sm sm:p-14"
        >
          <div className="mx-auto max-w-[704px]">
            <span className="mb-3 inline-block text-[11.2px] font-bold tracking-[0.05em] text-primary">
              BUILT BY STUDENTS, FOR STUDENTS
            </span>

            <h2 className="mb-5 text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-text-dark sm:text-4xl">
              Why Campus Connect Exists
            </h2>

            <p className="mb-4 text-[15px] leading-[1.7] text-text-muted">
              Navigating university life shouldn't feel fragmented. Between
              scattered WhatsApp groups, missed announcements, and outdated
              notice boards, students waste valuable time trying to stay in the
              loop.
            </p>

            <p className="mb-4 text-[15px] leading-[1.7] text-text-muted">
              Campus Connect brings everything into one unified digital
              ecosystem—making it effortless to trade securely, connect with
              course mates, and keep your finger on the pulse of what's
              happening around campus.
            </p>

            {/* Statistics */}
            <div className="mt-8 flex flex-wrap gap-10 border-t border-border-color pt-6">
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-primary">
                  100%
                </span>

                <span className="mt-0.5 text-xs font-medium text-text-muted">
                  Student Focused
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-primary">
                  All-in-One
                </span>

                <span className="mt-0.5 text-xs font-medium text-text-muted">
                  Feed, Market &amp; Chat
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="mt-20 w-full text-left">
          <div className="mb-8">
            <span className="mb-2 inline-block text-[11.2px] font-bold tracking-[0.05em] text-primary">
              EVERYTHING YOU NEED
            </span>

            <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-text-dark sm:text-4xl">
              Built for Daily Campus Life
            </h2>

            <p className="mt-1 text-[14.4px] leading-relaxed text-text-muted">
              Powerful tools designed specifically to streamline your
              university experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {/* Campus Feed */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f0e9] text-primary">
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#icon-feed" />
                </svg>
              </div>

              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                Campus Feed
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                See what students are sharing, announcements, and conversations
                happening right around you.
              </p>
            </div>

            {/* Marketplace */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f0e9] text-primary">
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#icon-market" />
                </svg>
              </div>

              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                Marketplace
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                Buy and sell textbooks, gadgets, and dorm essentials securely
                with trusted peers on campus.
              </p>
            </div>

            {/* Communities */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f0e9] text-primary">
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#icon-users" />
                </svg>
              </div>

              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                Communities
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                Join department study groups, channels, and student
                organization boards easily.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section id="faq" className="mt-20 w-full text-left">
          <div className="mb-8">
            <span className="mb-2 inline-block text-[11.2px] font-bold tracking-[0.05em] text-primary">
              GOT QUESTIONS?
            </span>

            <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-text-dark sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-1 text-[14.4px] leading-relaxed text-text-muted">
              Everything you need to know about the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* FAQ 1 */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                Is Campus Connect completely free for students?
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                Yes, 100% free. It’s built entirely to keep campus life
                connected without any hidden charges or fees.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                How do I access the web app?
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                Just click "Launch App" at the top or visit
                app.mycampusconnect.com.ng to jump straight into your feed,
                groups, and profile.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                Can I buy and sell items safely?
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                Absolutely. The built-in marketplace lets you connect directly
                with trusted peers on campus for textbooks, gadgets, and dorm
                essentials.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                Do I need to download an app from an app store?
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                No download required! Campus Connect is a fast web app that
                works straight from your browser, and you can easily add it to
                your phone's home screen.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                What is the student survey for?
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                It helps shape what we build next! You can drop your feedback,
                ideas, or feature requests via
                survey.mycampusconnect.com.ng.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="rounded-2xl border border-border-color bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-[14.4px] font-bold text-text-dark">
                Who is behind Campus Connect?
              </h3>

              <p className="text-[12.8px] leading-[1.6] text-text-muted">
                It’s an independent platform built by students, for students,
                specifically designed to fix the fragmented ways we
                communicate on campus.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}