import { motion } from 'framer-motion'
import { FileText, Mic, Film, Download } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: '导入素材',
    desc: '在欢迎页新建项目，导入原始文稿、音频、视频，或通过抖音链接导入。支持粘贴文本和拖拽文件。',
  },
  {
    icon: Mic,
    step: '02',
    title: 'AI 写稿与审稿',
    desc: '在写稿工作台编辑口播稿，使用 AI 生成、审稿批注、版本管理。稿件确认后触发 TTS 语音合成。',
  },
  {
    icon: Film,
    step: '03',
    title: '时间线编辑',
    desc: 'AI 自动分析内容、生成字幕、信息卡和封面。在视频工作台精调时间线、素材和动画效果。',
  },
  {
    icon: Download,
    step: '04',
    title: '导出视频',
    desc: '配置分辨率和质量参数，通过 Remotion 渲染引擎导出 H.264 MP4。全程本地处理，数据安全。',
  },
]

export function QuickStart() {
  return (
    <section id="quickstart" className="py-24 px-6 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">快速上手</h2>
          <p className="text-muted-foreground text-lg">
            四步完成从素材到成片的完整流程
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
