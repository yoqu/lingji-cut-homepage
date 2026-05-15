import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" fill="#007AFF" opacity="0.15" />
            <path d="M50 15 L65 40 L85 45 L70 60 L73 80 L50 70 L27 80 L30 60 L15 45 L35 40 Z" fill="#007AFF" />
          </svg>
          <span className="text-sm text-muted-foreground">
            灵机剪影 &copy; {new Date().getFullYear()} &mdash; Apache License 2.0
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yoqu/lingji-cut"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={16} />
            GitHub
          </a>
          <a
            href="https://github.com/yoqu/lingji-cut/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            提交 Issue
          </a>
          <a
            href="https://github.com/yoqu/lingji-cut/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Releases
          </a>
        </div>
      </div>
    </footer>
  )
}
