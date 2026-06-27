import { motion } from 'framer-motion'
import {
  Radar, PenLine, Mic, Sparkles, Layers, Brain, Bot, Send, Terminal, MonitorPlay, HardDrive, Film, History,
} from 'lucide-react'

const features = [
  {
    icon: Radar,
    title: '灵机采风 Chrome 扩展',
    desc: '监听抖音博主、主页滚动采集、无水印优先取流、本地转录，再把爆款拆解推送到待创作箱。',
  },
  {
    icon: PenLine,
    title: 'AI 写稿工作台',
    desc: '管理 original.md 与 script.md，支持口播模板、版本历史、AI 审稿和一键重新生成。',
  },
  {
    icon: Mic,
    title: '自动口播流程',
    desc: '从文稿触发 TTS 语音合成、字幕解析、内容分析、封面候选和视觉卡片生成，增量流式呈现。',
  },
  {
    icon: Sparkles,
    title: 'Motion Card 与逐拍动画',
    desc: 'AI 生成 Remotion TSX 信息卡，并在出卡前写出动画脚本，让节奏、强调和转场更稳定。',
  },
  {
    icon: Layers,
    title: '多比例封面工作台',
    desc: '16:9、4:3、3:4 封面按平台取用，支持缺失比例补全、单独重生和提示词追溯。',
  },
  {
    icon: Brain,
    title: '多 Provider AI 配置',
    desc: '新增火山方舟、OpenAI Responses、Claude Code ACP 等 Provider，并支持默认模型和步骤级绑定。',
  },
  {
    icon: Bot,
    title: '内置 Pi Agent',
    desc: '开箱即用的对话 agent，零安装、复用应用 LLM 配置，直接改稿改视频，编辑器实时热重载。',
  },
  {
    icon: Film,
    title: '外部 Agent / MCP',
    desc: 'lingji-editor MCP Server 提供工具给 Claude Code / Codex / Gemini，配合 file-first 契约编辑项目。',
  },
  {
    icon: Terminal,
    title: '命令行与自动化',
    desc: '无头 lingji CLI 在终端里驱动音频、字幕分析、卡片、封面、导出等完整流水线。',
  },
  {
    icon: MonitorPlay,
    title: 'Remotion 视频导出',
    desc: '构建期预打包 Remotion 合成工程，导出 H.264 MP4，并把长耗时任务接入系统通知。',
  },
  {
    icon: Send,
    title: '一键多平台发布',
    desc: '多画幅封面、发布元数据与 B 站分区 AI 推荐，发布到 B 站、视频号、抖音、快手和小红书。',
  },
  {
    icon: History,
    title: '发布历史与就地重登',
    desc: '记录最近发布任务，账号失效时可在发布流程中重新登录后继续，不必从头来过。',
  },
  {
    icon: HardDrive,
    title: '本地优先架构',
    desc: '项目、转录、摘要、配置和 Agent 编辑结果都优先保存在本机目录，数据不被平台锁死。',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">1.3 之后，创作链路闭环了</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            不是堆按钮，而是把选题、写稿、制作、导出、发布这些割裂步骤接成一条线。
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
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
