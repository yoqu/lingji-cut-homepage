import { motion } from 'framer-motion'
import { Bell, Box, Globe, Send, Sparkles, Wrench } from 'lucide-react'

const entries = [
  {
    icon: Globe,
    label: '声呐采风',
    title: '创作流水线工作流',
    desc: '每条视频自动准备素材、提取无水印源、转录并生成爆款拆解，确认后一键送进待创作箱。',
  },
  {
    icon: Send,
    label: '发布',
    title: '多平台发布工作台',
    desc: '发布历史、失败账号就地重登、多比例封面、B 站分区推荐和标题简介标签生成全部收进同一页。',
  },
  {
    icon: Sparkles,
    label: '视频生成',
    title: '逐拍动画指导',
    desc: 'Motion Card 在出卡前先生成动画脚本，让字幕信息卡的节奏、强调和转场更可控。',
  },
  {
    icon: Wrench,
    label: 'AI Provider',
    title: '火山方舟与默认模型',
    desc: '新增 Volcengine Ark 独立 Provider，并支持每个 LLM Provider 单独设置默认模型。',
  },
  {
    icon: Box,
    label: '打包',
    title: '运行时按需下载',
    desc: 'Chromium 与 biliup 不再塞进安装包，发布侧首次需要时下载，安装体积更轻。',
  },
  {
    icon: Bell,
    label: '体验',
    title: '耗时任务系统通知',
    desc: '导出、TTS、导入、AI 分析、封面和卡片等长任务完成或失败时会通知并可聚焦窗口。',
  },
]

export function Changelog() {
  return (
    <section id="changelog" className="py-24 px-6 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-5">
              v1.3.1 · 2026-06-27
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">更新日志</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              这次更新把「发布」和「采风」两条链路补齐，同时继续加强 Agent、动画生成和运行时打包体验。
            </p>
          </div>
          <a
            href="https://github.com/yoqu/lingji-cut/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
          >
            查看完整 Release Notes
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <entry.icon size={20} />
                </div>
                <span className="rounded-full bg-surface px-3 py-1 text-xs text-muted-foreground">
                  {entry.label}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{entry.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{entry.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
