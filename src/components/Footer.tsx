import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#081a12] px-5 pb-6 pt-12 text-white sm:px-8 sm:pt-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:pb-14">
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Campus Connect home"
            >
              <img
                src="/logo.png"
                alt=""
                className="h-10 w-10 rounded-xl object-contain"
              />

              <span className="text-lg font-semibold tracking-[-0.04em]">
                Campus Connect
                <span className="text-[#a9d39d]">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
              Bringing student conversations, campus discovery, and community
              closer together.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
              Explore
            </p>

            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/65">
              <Link to="/#about" className="transition hover:text-white">
                About
              </Link>

              <Link to="/#features" className="transition hover:text-white">
                Features
              </Link>

              <Link to="/#faq" className="transition hover:text-white">
                FAQs
              </Link>

              <Link to="/new_release" className="transition hover:text-white">
                What’s New
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
              Get involved
            </p>

            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/65">
              <a
                href="https://app.mycampusconnect.com.ng"
                className="inline-flex items-center gap-1 transition hover:text-white"
              >
                Launch the app <ArrowUpRight size={14} />
              </a>

              <a
                href="https://survey.mycampusconnect.com.ng"
                className="inline-flex items-center gap-1 transition hover:text-white"
              >
                Share feedback <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Campus Connect. Built with student
            life in mind.
          </p>

          <p>Connect more. Miss less.</p>
        </div>
      </div>
    </footer>
  )
}