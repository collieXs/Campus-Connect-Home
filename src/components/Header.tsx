import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === "/"
  const isNewRelease = location.pathname === "/new_release"

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const handleScroll = () => {
      setMenuOpen(false)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const linkClass = (active: boolean) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active
        ? "bg-white/10 text-white"
        : "text-white/65 hover:bg-white/[0.08] hover:text-white"
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b2118]/75 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Campus Connect home"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-9 w-9 rounded-xl object-contain"
          />

          <span className="text-base font-semibold tracking-[-0.035em] sm:text-lg">
            Campus Connect
            <span className="ml-1 text-[#a9d39d]">.</span>
          </span>
        </Link>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#0b2118]/95 px-5 py-6 shadow-2xl backdrop-blur-xl sm:px-8 lg:static lg:col-start-2 lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none`}
        >
          <nav className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <Link
              to="/#about"
              onClick={closeMenu}
              className={linkClass(isHome && location.hash === "#about")}
            >
              About
            </Link>

            <Link
              to="/#features"
              onClick={closeMenu}
              className={linkClass(isHome && location.hash === "#features")}
            >
              Features
            </Link>

            <Link
              to="/#faq"
              onClick={closeMenu}
              className={linkClass(isHome && location.hash === "#faq")}
            >
              FAQs
            </Link>

            <Link
              to="/new_release"
              onClick={closeMenu}
              aria-current={isNewRelease ? "page" : undefined}
              className={linkClass(isNewRelease)}
            >
              What’s New
            </Link>
          </nav>

          <a
            href="https://app.mycampusconnect.com.ng"
            onClick={closeMenu}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#c7e8bd] px-4 text-sm font-bold text-[#10261a] transition hover:bg-white lg:hidden"
          >
            Launch App
            <ArrowUpRight size={16} />
          </a>
        </div>

        <a
          href="https://app.mycampusconnect.com.ng"
          className="hidden min-h-11 items-center justify-center gap-2 justify-self-end rounded-xl bg-[#c7e8bd] px-4 text-sm font-bold text-[#10261a] transition hover:-translate-y-0.5 hover:bg-white lg:inline-flex"
        >
          Launch App
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}