import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const CHANNELS = [
  { key: 'wechat', label: '微信支付', src: 'donate-wechat.jpg', accent: '#07c160' },
  { key: 'alipay', label: '支付宝', src: 'donate-alipay.jpg', accent: '#1677ff' },
]

export function Donate() {
  return (
    <section id="donate" className="py-20 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <Heart size={20} className="text-accent" />
            赞赏支持
          </h2>
          <p className="text-sm text-muted-foreground">
            灵剪是免费开源项目，如果它帮到了你，欢迎扫码请作者喝杯咖啡 ☕
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 items-start"
        >
          {CHANNELS.map((c) => (
            <div
              key={c.key}
              className="flex flex-col items-center gap-3 px-6 py-4 rounded-xl bg-muted border border-border/50"
            >
              <span className="text-sm font-medium" style={{ color: c.accent }}>
                {c.label}
              </span>
              <img
                src={`${import.meta.env.BASE_URL}${c.src}`}
                alt={`${c.label}收款码`}
                className="w-36 h-52 rounded-lg object-contain bg-white p-1"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
