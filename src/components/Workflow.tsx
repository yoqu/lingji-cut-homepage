import { motion } from 'framer-motion'
import {
  Radar, PenLine, Mic, Sparkles, Layers, MonitorPlay, Send,
} from 'lucide-react'

const stages = [
  {
    icon: Radar,
    step: '01',
    title: '选题采集',
    desc: '灵机采风 Chrome 扩展监听抖音博主、采集公开视频并本地转录，一键推送到「待创作箱」。',
    tag: '灵机采风',
  },
  {
    icon: PenLine,
    step: '02',
    title: 'AI 写稿审稿',
    desc: '在写稿工作台管理 original.md / script.md，AI 生成口播稿、审稿批注与版本历史。',
    tag: '写稿工作台',
  },
  {
    icon: Mic,
    step: '03',
    title: '语音与字幕',
    desc: '从文稿触发多 Provider TTS 语音合成，自动解析、重切分字幕并高亮关键词。',
    tag: 'TTS · 字幕',
  },
  {
    icon: Sparkles,
    step: '04',
    title: 'AI 内容分析',
    desc: '内容分析生成封面候选与信息卡，Motion Card 输出自由 Remotion 数据动画。',
    tag: '封面 · Motion Card',
  },
  {
    icon: Layers,
    step: '05',
    title: '时间线精调',
    desc: '多视觉轨 / 多音频轨拖拽吸附、拆分裁剪，逐拍调整素材、卡片与动画。',
    tag: '时间线',
  },
  {
    icon: MonitorPlay,
    step: '06',
    title: 'Remotion 导出',
    desc: '通过 Remotion 渲染引擎导出 H.264 MP4，预览与导出共用同一份编译产物。',
    tag: '导出',
  },
  {
    icon: Send,
    step: '07',
    title: '多平台发布',
    desc: '多画幅封面工作台 + 发布元数据 + B站分区 AI 推荐，发布到 B站 / 视频号 / 抖音 / 快手 / 小红书。',
    tag: '发布',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Workflow() {
  return (
    <section id="workflow" className="py-24 px-6 border-t border-border/30 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            核心亮点
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 视频创作全流程</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            从选题采集到多平台发布，七个环节串成一条完整流水线。每一步既能由 AI 自动推进，也能在桌面端逐步手动精调——全程本地优先。
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stages.map((s) => (
            <motion.div
              key={s.step}
              variants={item}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:bg-card/80"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <s.icon size={20} className="text-accent" />
                </div>
                <span className="text-xs font-mono text-accent/70 bg-accent/10 px-2 py-0.5 rounded">{s.step}</span>
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <span className="inline-block text-xs text-accent/80 bg-accent/5 border border-accent/15 rounded-md px-2 py-0.5">
                {s.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
