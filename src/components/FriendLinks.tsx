import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const friends = [
  {
    name: 'LINUX DO',
    url: 'https://linux.do',
    desc: '新一代开源社区',
  },
]

export function FriendLinks() {
  return (
    <section className="py-20 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">友情链接</h2>
          <p className="text-sm text-muted-foreground">感谢以下社区与项目的支持</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {friends.map(f => (
            <a
              key={f.name}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-muted border border-border/50 hover:border-accent/30 hover:bg-muted/80 transition-colors group"
            >
              <span className="text-sm font-medium">{f.name}</span>
              <span className="text-xs text-muted-foreground">{f.desc}</span>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-accent transition-colors ml-1" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
