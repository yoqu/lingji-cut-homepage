import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'macOS 提示"已损坏，无法打开"或"无法验证开发者"怎么办？',
    a: `由于当前版本未进行 Apple 签名和公证（notarization），macOS Gatekeeper 会阻止打开未签名应用。你可以通过以下方式解决：

**方法一：系统偏好设置**
1. 打开「系统设置」→「隐私与安全性」
2. 在底部找到被阻止的应用提示，点击「仍要打开」

**方法二：终端命令（推荐）**
\`\`\`
sudo xattr -rd com.apple.quarantine /Applications/灵机剪影.app
\`\`\`
执行后即可正常打开应用。

**方法三：临时允许任何来源**
\`\`\`
sudo spctl --master-disable
\`\`\`
安装完成后建议重新启用：
\`\`\`
sudo spctl --master-enable
\`\`\``,
  },
  {
    q: 'macOS 上应用闪退或无法启动？',
    a: `请检查以下几点：
1. 确认 macOS 版本 ≥ 12.0（Monterey）
2. Apple Silicon（M1/M2/M3/M4）Mac 可能需要安装 Rosetta：\`softwareupdate --install-rosetta\`
3. 如果从旧版本升级，尝试删除应用数据后重新启动：在 Finder 中前往 \`~/Library/Application Support/灵机剪影/\` 并备份后删除配置文件`,
  },
  {
    q: '支持哪些 AI 模型和服务？',
    a: `灵机剪影支持多种 AI 服务：

**LLM 模型**：任何 OpenAI API 兼容的模型（包括通义千问、DeepSeek、豆包、Moonshot 等）、Google Gemini、LM Studio 本地模型。

**图片生成**：即梦（Jimeng）、OpenAI DALL-E、MiniMax、豆包、Google Imagen、通义万相（Wanx）、以及任何兼容 API 的自定义 Provider。

**语音合成（TTS）**：MiniMax TTS，支持多种音色、语速、音调和情绪配置。

**AI Agent**：Claude ACP Runtime，支持 Claude Code / Codex / Gemini 通过 MCP 协议操作编辑器。

所有 AI 配置都在应用内「设置」页面完成，无需修改代码或环境变量。`,
  },
  {
    q: '项目数据存储在哪里？',
    a: `灵机剪影采用本地优先架构，所有数据都保存在你选择的本地项目目录中：

- \`project.json\`：主工程文件（时间线、AI 分析、脚本状态）
- \`original.md\`：原始素材文本
- \`script.md\`：口播成稿
- \`podcast-audio.mp3\`：TTS 生成的音频
- \`podcast-subtitles.srt\`：字幕文件
- \`covers/\`、\`ai-cards/\`：封面和 AI 卡片资源

应用不会将你的项目数据上传到任何云端服务。AI 请求会发送到你配置的 Provider API，但项目文件始终保存在本地。`,
  },
  {
    q: '如何导出视频？支持哪些格式？',
    a: `在视频工作台右上角点击「导出」按钮，配置分辨率（默认 1920×1080）、帧率和质量参数后开始导出。

当前支持的导出格式为 H.264 MP4，通过 Remotion 渲染引擎在本地完成渲染。导出过程中可以在底部状态栏查看进度。

导出不依赖云服务，所有渲染都在本地完成。`,
  },
  {
    q: '支持 Windows 吗？',
    a: `是的，灵机剪影支持 Windows 平台。你可以从 GitHub Releases 下载 Windows 安装包，或从源码构建：

\`\`\`
npm run dist:win
\`\`\`

Windows 版本功能与 macOS 版本一致。建议使用 Windows 10 或更高版本。`,
  },
  {
    q: '如何参与贡献？',
    a: `欢迎通过以下方式参与：

1. **提交 Issue**：在 GitHub Issues 中报告 Bug 或提出功能建议
2. **提交 PR**：Fork 仓库，开发后提交 Pull Request
3. **讨论**：在 GitHub Discussions 中参与社区讨论

建议在较大改动前先在 Issue 中说明你的计划，特别是涉及时间线、工程存储、IPC、导出和 AI Provider 的改动。

项目使用 Apache 2.0 许可证。`,
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-border/50 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-card/50 transition-colors"
      >
        <span className="font-medium text-sm md:text-base">{item.q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
          <div className="border-t border-border/30 pt-4 whitespace-pre-line">
            {item.a.split('```').map((part, i) => {
              if (i % 2 === 1) {
                return (
                  <pre key={i} className="my-2 p-3 rounded-lg bg-[#0d0d0d] border border-border/30 overflow-x-auto">
                    <code className="text-green-400 text-xs">{part.replace(/^\w*\n/, '')}</code>
                  </pre>
                )
              }
              return <span key={i}>{part.split('**').map((seg, j) =>
                j % 2 === 1 ? <strong key={j} className="text-foreground">{seg}</strong> : seg
              )}</span>
            })}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
          <p className="text-muted-foreground text-lg">
            遇到问题？这里可能有你需要的答案
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
