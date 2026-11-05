# 从单会话到 Super-agent

21 页 HTML 技术分享：DeepSeek Super-agent 的常驻 Agent 架构解读与思考。保留交互图和分步动画。

## 键盘操作
- `←` / `→`、空格：下一步 / 上一页（部分页面分步出现，按 `→` 逐步展开）
- `f`：全屏
- `Esc`：从详情页返回主幻灯片
- 架构动画页（detail/architecture-in-motion.html）按 `A`：自动播放

## 本地运行
直接用浏览器打开 `index.html`，或者：
```bash
python3 -m http.server 8000
# 打开 http://localhost:8000/
```

## 发布

GitHub Pages 从 `main` 分支根目录发布：
https://tt-a1i.github.io/agent-arch-share/

推送到 `main` 后由 GitHub Pages 构建。Cloudflare 保留既有版本，不执行 Cloudflare 部署。

公开版共 24 页，含经用户确认公开的 Grok bot 与 Hive 实践截图。
