import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-20 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">联系作者</h2>
          <p className="text-sm text-muted-foreground">欢迎通过以下方式联系我</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 items-start"
        >
          {/* Twitter / X */}
          <a
            href="https://x.com/LYoqu60097"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-muted border border-border/50 hover:border-accent/30 hover:bg-muted/80 transition-colors group"
          >
            <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className="text-foreground">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <div className="text-left">
              <div className="text-sm font-medium">X / Twitter</div>
              <div className="text-xs text-muted-foreground">@LYoqu60097</div>
            </div>
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-accent transition-colors ml-2" />
          </a>

          {/* WeChat */}
          <div className="flex flex-col items-center gap-3 px-6 py-4 rounded-xl bg-muted border border-border/50">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className="text-[#07c160]">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.84c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.983.97-.983zm4.072 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.983.97-.983z" />
              </svg>
              <span className="text-sm font-medium">微信：yoqu2020</span>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}wechat-qr.png`}
              alt="微信二维码"
              className="w-36 h-36 rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
