import { Check, Copy, Download, ExternalLink, Globe, Package, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'

const EXTENSION_VERSION = '0.1.0'
const EXTENSION_FILE = `lingji-caifeng-chrome-extension-v${EXTENSION_VERSION}.zip`
const EXTENSION_SHA256 = '5e6451ed56e7202e52a961c3b7e665d7756551e7ee0f8c4624914731929b8a3e'
const EXTENSION_SIZE = '9.9 MB'

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    void navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
      aria-label={label}
    >
      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
      {copied ? '已复制' : '复制'}
    </button>
  )
}

export function ChromeExtension() {
  const downloadUrl = useMemo(
    () => `${import.meta.env.BASE_URL}downloads/${EXTENSION_FILE}`,
    [],
  )
  const checksumUrl = `${downloadUrl}.sha256`

  const installSteps = [
    '下载 ZIP 后先解压，得到 lingji-caifeng-chrome-extension-v0.1.0 文件夹。',
    '打开 Chrome 地址栏 chrome://extensions/，右上角开启「开发者模式」。',
    '点击「加载已解压的扩展程序」，选择刚解压出来的插件文件夹。',
    '打开灵机剪影桌面端的「待创作箱」，在插件设置里点击「一键连接灵机剪影」。',
  ]

  return (
    <section id="chrome-extension" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium text-accent">Chrome 采风插件</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">把抖音素材直接送进待创作箱</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              灵机采风负责监听博主、采集视频、下载原片和推送转录稿，和桌面端联动后就能从选题一路进入二创成稿。
            </p>
          </div>
          <a
            href={downloadUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Download size={18} />
            下载插件 ZIP
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Package size={22} />
              </div>
              <div>
                <h3 className="font-semibold">灵机采风 v{EXTENSION_VERSION}</h3>
                <p className="text-sm text-muted-foreground">Chrome / Chromium 116+</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3 rounded-lg bg-muted px-3 py-2">
                <span className="text-muted-foreground">文件大小</span>
                <span className="font-mono text-foreground">{EXTENSION_SIZE}</span>
              </div>
              <div className="rounded-lg bg-muted px-3 py-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">下载地址</span>
                  <CopyButton value={new URL(downloadUrl, window.location.origin).toString()} label="复制插件下载地址" />
                </div>
                <code className="block break-all text-xs text-foreground/80">
                  {new URL(downloadUrl, window.location.origin).toString()}
                </code>
              </div>
              <div className="rounded-lg bg-muted px-3 py-3">
                <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck size={15} />
                  SHA256
                </div>
                <code className="block break-all text-xs text-green-300">{EXTENSION_SHA256}</code>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={downloadUrl}
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <Download size={16} />
                下载 ZIP
              </a>
              <a
                href={checksumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/60 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <ExternalLink size={16} />
                校验文件
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Globe size={22} />
              </div>
              <div>
                <h3 className="font-semibold">安装方式</h3>
                <p className="text-sm text-muted-foreground">Chrome 扩展暂按开发者模式安装</p>
              </div>
            </div>

            <ol className="space-y-4">
              {installSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm text-muted-foreground">
              插件会复用你浏览器里的正常登录态，不导出 Cookie / Token；素材、转录和设置保存在本机浏览器本地存储里。
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
