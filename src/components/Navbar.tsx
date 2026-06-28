import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: '创作全流程', href: '#workflow' },
  { label: '功能特性', href: '#features' },
  { label: '宣传动画', href: '#promo' },
  { label: '快速上手', href: '#quickstart' },
  { label: '产品截图', href: '#screenshots' },
  { label: '更新日志', href: '#changelog' },
  { label: '采风插件', href: '#chrome-extension' },
  { label: '安装教程', href: '#installation' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-foreground font-semibold text-lg">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" fill="#007AFF" opacity="0.15" />
            <path d="M50 15 L65 40 L85 45 L70 60 L73 80 L50 70 L27 80 L30 60 L15 45 L35 40 Z" fill="#007AFF" />
          </svg>
          灵机剪影
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/yoqu/lingji-cut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            GitHub
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 glass">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="https://github.com/yoqu/lingji-cut" target="_blank" rel="noopener noreferrer" className="text-sm text-accent">
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
