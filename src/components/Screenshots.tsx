import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  { src: 'screenshots/welcome.png', title: '欢迎页', desc: '项目管理、多种导入方式' },
  { src: 'screenshots/welcome-document-import.png', title: '文稿导入', desc: '支持粘贴或拖拽 .md / .txt 文件' },
  { src: 'screenshots/welcome-douyin-import.png', title: '抖音视频导入', desc: '通过分享链接一键导入抖音视频' },
  { src: 'screenshots/script-workbench.png', title: '写稿工作台', desc: 'AI 写稿、审稿、批注、版本历史' },
  { src: 'screenshots/video-workbench.png', title: '视频工作台', desc: '素材面板、预览、时间线、Inspector' },
  { src: 'screenshots/ai-config.png', title: 'AI 基础配置', desc: '多 LLM Provider 与图片生成 Provider' },
  { src: 'screenshots/prompt-config.png', title: '提示词配置', desc: '管理内置 / 全局 / 项目级提示词' },
  { src: 'screenshots/ai-agent.png', title: 'AI Agent', desc: 'Claude ACP Runtime 配置与权限策略' },
  { src: 'screenshots/config-backup.png', title: '配置备份', desc: '导出与导入全局设置备份' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">产品截图</h2>
          <p className="text-muted-foreground text-lg">
            macOS 原生体验的专业创作界面
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
              <div className="rounded-xl overflow-hidden border border-border/50 group-hover:border-accent/30 transition-all">
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
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
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
