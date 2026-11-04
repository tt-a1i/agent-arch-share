# 一个人，怎么同时带好几个 Agent？

面向团队的技术分享：读 DeepSeek《Super-agent》设计文和开源原型的笔记。从「人的注意力成了瓶颈」讲起，依次介绍前台/Worker 两层、两道过滤、按话题直送、异步工具、状态分离、Watchdog，再看他们的实验和原型，最后是可以先试的做法和留给大家的问题。

**在线观看：** https://tt-a1i.github.io/agent-arch-share/

![主幻灯片预览](shots/contact-main.jpg)

## 键盘操作
- `←` / `→`、空格：翻页 / 下一步
- `f`：全屏
- `N`：显示 / 隐藏演讲者备注
- `Esc`：从详情页返回主幻灯片
- 架构动画页（detail/architecture-in-motion.html）按 `A`：自动播放

## 本地运行
直接用浏览器打开 `index.html`，或者：
```bash
python3 -m http.server 8000
# 打开 http://localhost:8000/
```

## 回退
本仓库 Pages 源为 `main` 根目录。若需回到上一版，可用：
```bash
git revert HEAD
# 或：git reset --hard <上一 commit> && git push
```
