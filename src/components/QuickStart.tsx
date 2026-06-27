import { motion } from 'framer-motion'
import { FileText, Film, Globe, Send } from 'lucide-react'

const steps = [
  {
    icon: Globe,
    step: '01',
    title: '采集选题',
    desc: '用灵机采风监听博主、采集公开视频，本地转录并生成爆款拆解，确认后推送到灵机剪影待创作箱。',
  },
  {
    icon: FileText,
    step: '02',
    title: '生成口播',
    desc: '在写稿工作台从原始素材生成口播稿，按模板改写、AI 审稿、版本回溯，也可以让 Pi Agent 直接改稿。',
  },
  {
    icon: Film,
    step: '03',
    title: '做成视频',
    desc: '自动生成 TTS、字幕、信息卡、逐拍动画指导和多比例封面，在视频编辑器里精调时间线和素材。',
  },
  {
    icon: Send,
    step: '04',
    title: '一键发布',
    desc: '导出后进入发布工作台，AI 生成标题、简介、标签和 B 站分区，勾选账号后发布到多个平台。',
  },
]

export function QuickStart() {
  return (
    <section id="quickstart" className="overflow-hidden py-24 px-6 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">一条线跑完内容生产</h2>
          <p className="text-muted-foreground text-lg">
            从刷到选题，到做出成片，再到多平台发布。
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`inline-flex items-center gap-3 mb-3 ${i % 2 === 1 ? '' : 'md:flex-row-reverse'}`}>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">{s.step}</span>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-12 h-12 rounded-full bg-accent/10 border-2 border-accent/30 items-center justify-center shrink-0">
                  <s.icon size={20} className="text-accent" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
