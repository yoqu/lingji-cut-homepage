import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  { src: 'screenshots/sonar-workbench.png', title: '灵机采风工作台', desc: '监听博主、同步动态、管理视频库与工作流' },
  { src: 'screenshots/sonar-sidepanel.png', title: '采风侧边栏', desc: '在 Chrome 里粘贴链接快速入库' },
  { src: 'screenshots/script-workbench.png', title: '写稿工作台', desc: '从 original.md 到 script.md 的口播创作流程' },
  { src: 'screenshots/script-agent.png', title: 'Pi Agent 协作', desc: 'Agent 直接读写稿件并返回可追踪改动' },
  { src: 'screenshots/video-editor-agent.png', title: '视频编辑器 + Agent', desc: '编辑器、时间线、素材和 AI 对话并排协作' },
  { src: 'screenshots/prompt-config.png', title: '提示词与模板', desc: '发布文案、动画指导、卡片生成、口播模板集中配置' },
  { src: 'screenshots/agent-skills.png', title: 'Agent 与 Skills', desc: 'Pi、审批模式、发布技能和图像生成技能统一管理' },
  { src: 'screenshots/ai-config.png', title: 'AI 基础配置', desc: 'Provider、默认模型和 Claude Code ACP 本机运行时' },
  { src: 'screenshots/publish-workbench.png', title: '发布工作台', desc: '多比例封面、标题简介标签和平台元数据' },
  { src: 'screenshots/publish-platforms.png', title: '一键发布', desc: '抖音、快手、B 站、视频号账号统一勾选发布' },
  { src: 'screenshots/publish-accounts.png', title: '发布账号', desc: '账号登录状态、校验、重登和有头浏览器兜底' },
]

export function Screenshots() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox(i => i !== null ? (i - 1 + screenshots.length) % screenshots.length : null)
  const next = () => setLightbox(i => i !== null ? (i + 1) % screenshots.length : null)

  return (
    <section id="screenshots" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">最新产品截图</h2>
          <p className="text-muted-foreground text-lg">
            重新采集自当前版本，覆盖采风插件、写稿、Agent、视频编辑与发布。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <div className="rounded-xl overflow-hidden border border-border/50 group-hover:border-accent/30 transition-all bg-card">
                {/* Window chrome */}
                <div className="bg-[#1c1c1e] px-3 py-2 flex items-center gap-1.5 border-b border-border/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[10px] text-muted-foreground">{shot.title}</span>
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}${shot.src}`}
                  alt={shot.title}
                  className="w-full aspect-video object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 px-1">
                <h3 className="font-medium text-sm">{shot.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{shot.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white" onClick={closeLightbox}>
            <X size={28} />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); prev() }}>
            <ChevronLeft size={32} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); next() }}>
            <ChevronRight size={32} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-xl overflow-hidden border border-border/30">
              <div className="bg-[#1c1c1e] px-4 py-2.5 flex items-center gap-2 border-b border-border/30">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-muted-foreground">{screenshots[lightbox].title}</span>
              </div>
              <img
                src={`${import.meta.env.BASE_URL}${screenshots[lightbox].src}`}
                alt={screenshots[lightbox].title}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              {screenshots[lightbox].desc} — {lightbox + 1} / {screenshots.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
