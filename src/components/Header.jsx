import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === "/"
  const isNewRelease = location.pathname === "/new_release"

  const sectionLinkClass = (hash) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isHome && location.hash === hash
        ? "bg-primary/10 text-primary"
        : "text-text-muted hover:bg-primary/5 hover:text-primary"
    }`

  const releaseLinkClass = isNewRelease
    ? "bg-primary/10 text-primary"
    : "text-text-muted hover:bg-primary/5 hover:text-primary"

  return (
    <header className="sticky top-0 z-50 border-b border-border-color bg-bg-main/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 md:grid md:grid-cols-[auto_1fr_auto] lg:px-12">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-3"
          aria-label="Campus Connect home"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-10 w-10 object-contain"
          />

          <span className="text-lg font-bold tracking-tight text-text-dark sm:text-xl">
            Campus Connect
          </span>
        </Link>

        {/* Navigation */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-5 border-b border-border-color bg-bg-main px-5 py-6 shadow-sm sm:px-8 md:contents`}
        >
          <nav className="flex flex-col gap-2 md:col-start-2 md:flex-row md:items-center md:justify-self-center md:gap-2">
            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
              aria-current={
                isHome && location.hash === "#about"
                  ? "location"
                  : undefined
              }
              className={sectionLinkClass("#about")}
            >
              About
            </a>

            <a
              href="/#features"
              onClick={() => setMenuOpen(false)}
              aria-current={
                isHome && location.hash === "#features"
                  ? "location"
                  : undefined
              }
              className={sectionLinkClass("#features")}
            >
              Features
            </a>

            <a
              href="/#faq"
              onClick={() => setMenuOpen(false)}
              aria-current={
                isHome && location.hash === "#faq"
                  ? "location"
                  : undefined
              }
              className={sectionLinkClass("#faq")}
            >
              FAQs
            </a>

            <Link
              to="/new_release"
              onClick={() => setMenuOpen(false)}
              aria-current={isNewRelease ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${releaseLinkClass}`}
            >
              What's New
            </Link>
          </nav>

          <div className="flex md:col-start-3 md:justify-self-end">
            <a
              href="https://app.mycampusconnect.com.ng"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover md:w-auto"
            >
              Launch App
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-dark transition-colors hover:bg-primary/5 md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

      </div>
    </header>
  )
}