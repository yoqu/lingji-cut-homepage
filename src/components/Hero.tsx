import { motion } from 'framer-motion'
import { Download, ExternalLink, PlayCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            1.3.1 已发布：采风、Agent、发布闭环全面升级
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            从选题到发布
            <span className="block text-3xl md:text-5xl font-normal text-muted-foreground mt-4">
              一条本地优先的 AI 视频流水线
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            灵机剪影把 Chrome 采风、爆款拆解、AI 写稿、内置 Pi Agent、信息卡动画、Remotion 导出和多平台发布收进一个桌面工作台。素材在本机，流程不断档。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://github.com/yoqu/lingji-cut/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all hover:scale-105"
            >
              <Download size={18} />
              下载最新版本
            </a>
            <a
              href="#promo"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-surface border border-border text-foreground font-medium hover:bg-surface-elevated transition-all hover:scale-105"
            >
              <PlayCircle size={18} />
              看 43 秒更新
            </a>
            <a
              href="https://github.com/yoqu/lingji-cut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-muted-foreground font-medium hover:text-foreground transition-colors"
            >
              <ExternalLink size={18} />
              查看源码
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glow-blue rounded-2xl overflow-hidden border border-border/50">
            <img
              src={`${import.meta.env.BASE_URL}lingji-cut-hero.png`}
              alt="灵机剪影视频编辑器最新界面"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
