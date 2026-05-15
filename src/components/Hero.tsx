import { motion } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'

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
            开源 AI 视频创作工作台
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            灵机剪影
            <span className="block text-3xl md:text-4xl font-normal text-muted-foreground mt-3">
              Lingji Cut
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            本地优先的桌面 AI 视频创作工具。从写稿、素材管理、AI 审稿、语音合成、字幕处理到时间线剪辑和视频导出，一站式完成内容创作。
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
              href="https://github.com/yoqu/lingji-cut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-surface border border-border text-foreground font-medium hover:bg-surface-elevated transition-all hover:scale-105"
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
              alt="灵机剪影 - 开源 AI 视频创作工作台"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
