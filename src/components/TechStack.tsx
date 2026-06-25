import { motion } from 'framer-motion'

const techs = [
  { name: 'Electron 41', desc: '桌面应用框架' },
  { name: 'React 19', desc: 'UI 渲染引擎' },
  { name: 'TypeScript 6', desc: '类型安全' },
  { name: 'Remotion 4', desc: '视频渲染引擎' },
  { name: 'Zustand', desc: '状态管理' },
  { name: 'CodeMirror 6', desc: '代码编辑器' },
  { name: 'Framer Motion', desc: '动画引擎' },
  { name: 'TailwindCSS 4', desc: '样式系统' },
  { name: 'MCP SDK', desc: 'AI 工具协议' },
  { name: '内置 Pi Agent', desc: 'Agent 运行时' },
  { name: 'CRXJS + Vite', desc: '灵机采风扩展' },
]

export function TechStack() {
  return (
    <section className="py-20 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">技术栈</h2>
          <p className="text-sm text-muted-foreground">基于现代开源技术构建</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techs.map(t => (
            <div
              key={t.name}
              className="px-4 py-2.5 rounded-xl bg-muted border border-border/50 hover:border-accent/20 transition-colors"
            >
              <span className="text-sm font-medium">{t.name}</span>
              <span className="text-xs text-muted-foreground ml-2">{t.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
