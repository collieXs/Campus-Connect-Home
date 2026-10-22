export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-border-color bg-[rgba(238,243,239,0.5)]">
      <div className="mx-auto flex max-w-[1150px] flex-col items-center gap-6 px-6 pb-6 pt-10 sm:flex-row sm:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary text-xs font-bold text-white">
            <img
              src="/logo.png"
              alt="Campus Connect"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="text-[15px] font-bold text-text-dark">
            Campus Connect
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-5">
          <a
            href="#about"
            className="text-[13px] text-text-muted transition-colors hover:text-text-dark"
          >
            About
          </a>

          <a
            href="#features"
            className="text-[13px] text-text-muted transition-colors hover:text-text-dark"
          >
            Features
          </a>

          <a
            href="#faq"
            className="text-[13px] text-text-muted transition-colors hover:text-text-dark"
          >
            FAQs
          </a>
        </nav>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://app.mycampusconnect.com.ng"
            className="text-[13px] font-semibold text-primary transition-opacity hover:opacity-80"
          >
            Launch App
          </a>

          <a
            href="https://survey.mycampusconnect.com.ng"
            className="text-[13px] font-semibold text-primary transition-opacity hover:opacity-80"
          >
            Take Survey
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-[1150px] border-t border-border-color px-6 pb-8 pt-4 text-center text-xs text-text-light sm:text-left">
        <p>
          &copy; {new Date().getFullYear()} Campus Connect. Built for students, by students.
        </p>
      </div>
    </footer>
  )
}