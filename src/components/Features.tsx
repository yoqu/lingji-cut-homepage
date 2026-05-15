import { motion } from 'framer-motion'
import {
  PenLine, Film, Mic, Layers, Brain, Bot, MonitorPlay, HardDrive,
} from 'lucide-react'

const features = [
  {
    icon: PenLine,
    title: 'AI 写稿工作台',
    desc: '管理原始素材与口播稿，支持多文件标签、搜索替换、版本历史、AI 生成与 AI 审稿批注。',
  },
  {
    icon: Film,
    title: '一站式视频工作台',
    desc: '在同一界面管理素材、预览、Inspector、时间线和导出配置，所见即所得。',
  },
  {
    icon: Mic,
    title: '自动口播流程',
    desc: '从文稿触发 TTS 语音合成、字幕解析、内容分析、封面候选和视觉卡片生成。',
  },
  {
    icon: Layers,
    title: '专业时间线编辑',
    desc: '支持音频、字幕、图片、视频、文字、AI 卡片、多轨道、拖拽吸附、拆分裁剪。',
  },
  {
    icon: Brain,
    title: '多 Provider AI 配置',
    desc: '支持 OpenAI 兼容模型、Gemini、LM Studio、多种图片生成 Provider 和 MiniMax TTS。',
  },
  {
    icon: Bot,
    title: 'Agent / MCP 集成',
    desc: '内置 Claude ACP Runtime，提供 MCP 工具给 Claude Code / Codex / Gemini 操作编辑器。',
  },
  {
    icon: MonitorPlay,
    title: 'Remotion 视频导出',
    desc: '通过 Remotion 渲染引擎导出 H.264 MP4，支持分辨率、质量配置与导出进度展示。',
  },
  {
    icon: HardDrive,
    title: '本地优先架构',
    desc: '所有项目文件保存在本地目录，无需云端账号，数据完全属于你自己。',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">功能特性</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            从素材到成片，覆盖内容创作全流程的桌面级工具
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(f => (
            <motion.div
              key={f.title}
              variants={item}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:bg-card/80"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <f.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
