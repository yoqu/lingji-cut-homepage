import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check, Apple, Monitor } from 'lucide-react'

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden border border-border/50 bg-[#0d0d0d]">
      {label && (
        <div className="px-4 py-2 border-b border-border/30 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{label}</span>
          <button onClick={handleCopy} className="text-muted-foreground hover:text-foreground transition-colors">
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="text-green-400">{code}</code>
      </pre>
    </div>
  )
}

export function Installation() {
  const [tab, setTab] = useState<'source' | 'release'>('release')

  return (
    <section id="installation" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">安装教程</h2>
          <p className="text-muted-foreground text-lg">
            支持 macOS 和 Windows，推荐直接下载 Release
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-muted p-1">
            <button
              onClick={() => setTab('release')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${tab === 'release' ? 'bg-accent text-white' : 'text-muted-foreground hover:text-foreground'}`}
            >
              下载安装
            </button>
            <button
              onClick={() => setTab('source')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${tab === 'source' ? 'bg-accent text-white' : 'text-muted-foreground hover:text-foreground'}`}
            >
              源码构建
            </button>
          </div>
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tab === 'release' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <a
                  href="https://github.com/yoqu/lingji-cut/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Apple size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">macOS</h3>
                    <p className="text-sm text-muted-foreground">下载 .dmg 或 .app 安装包</p>
                  </div>
                </a>
                <a
                  href="https://github.com/yoqu/lingji-cut/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Monitor size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Windows</h3>
                    <p className="text-sm text-muted-foreground">下载 .exe 安装包</p>
                  </div>
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/50">
                <h3 className="font-semibold mb-3">安装步骤</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-mono shrink-0">1.</span>
                    <span>前往 <a href="https://github.com/yoqu/lingji-cut/releases" target="_blank" className="text-accent hover:underline">GitHub Releases</a> 页面下载最新版本对应平台的安装包。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-mono shrink-0">2.</span>
                    <span>macOS：打开 .dmg 文件，将「灵机剪影」拖入 Applications 文件夹。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-mono shrink-0">3.</span>
                    <span>Windows：双击 .exe 安装程序，按照向导完成安装。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-mono shrink-0">4.</span>
                    <span>首次启动后，在「设置」页面配置 AI Provider 和 TTS 服务。</span>
                  </li>
                </ol>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <CodeBlock
                label="1. 克隆仓库"
                code="git clone https://github.com/yoqu/lingji-cut.git
cd lingji-cut"
              />
              <CodeBlock
                label="2. 安装依赖"
                code="npm install"
              />
              <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 text-sm text-yellow-200/80">
                <strong>提示：</strong>仓库内置 .npmrc 配置了 npmmirror 镜像，适合国内网络。如果 Electron 下载失败，可手动设置环境变量：
                <code className="block mt-2 text-xs bg-black/30 p-2 rounded">
                  export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
                </code>
              </div>
              <CodeBlock
                label="3. 启动开发服务"
                code="npm run dev"
              />
              <CodeBlock
                label="4. 构建与打包"
                code={`# 构建
npm run build

# macOS 打包
npm run dist:mac

# Windows 打包
npm run dist:win`}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
