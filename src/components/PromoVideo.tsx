import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useRef, useState } from 'react'

export function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section id="promo" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">43 秒看完本次更新</h2>
          <p className="text-muted-foreground text-lg">
            使用最新界面截图和真人口播重渲染，展示从采风到发布的完整闭环。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-border/50 glow-blue"
        >
          {/* macOS window chrome */}
          <div className="bg-[#1c1c1e] px-4 py-3 flex items-center gap-2 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-muted-foreground">灵机剪影 1.3.1 — 宣传动画</span>
          </div>

          <div className="relative bg-black">
            <video
              ref={videoRef}
              src={`${import.meta.env.BASE_URL}promo.mp4`}
              className="w-full h-auto"
              controls={playing}
              onEnded={() => setPlaying(false)}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
              preload="metadata"
            />
            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-1" />
                </div>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
