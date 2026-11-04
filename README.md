# 当瓶颈从模型能力变成人的注意力

面向团队的技术分享（共 28 页主幻灯片 + 12 个交互动画/结构详情页）：
DeepSeek《Super-agent》架构精读，兼谈 Hive、bot 团队与多 Agent 协作。从 DeepSeek Harness《Exploring Super-agent Design》长文与开源原型 `dsh-superagent-prototype` 讲起，完整拆解两层架构（Router + Worker）、两段事件过滤、Thread 订阅直送、上下文缓存与逐跳召回（Inline & Spill / Chain of Recall）、全双工异步工具、存算环境分离（BYOM Daemon）与独立 Watchdog，复盘两组合成负载实验与原型边界；进一步结合我们的开源项目 **Hive**、日常运行的 **bot 团队** 以及 OpenAI **ChatGPT dots**，深入探讨三个核心工程权衡（入口管理成本 vs 认知切换成本、共享事件 vs 跨任务冲突、Router 轻重选择与提示缓存账），最后延伸到组织级协作的信息缺口、工作现场线索与共享状态层。

**在线观看：** https://tt-a1i.github.io/agent-arch-share/

![主幻灯片预览](shots/contact-main.jpg)

## 键盘操作
- `←` / `→`、空格：翻页 / 下一步
- `O`：打开 / 关闭全片 28 页章节目录网格（点击任意页直接跳转）
- `N`：显示 / 隐藏演讲者备注
- `F`：全屏
- `Esc`：关闭目录或从详情页返回主幻灯片
- 动态详情页（如 `detail/architecture-in-motion.html`、`detail/thread-conflict.html`、`detail/org-state.html`）按 `A`：自动播放

## 12 个交互与动画详情页
1. `detail/attention.html`：注意力容量模拟（直接盯每个会话 vs 统一入口过滤小确认）
2. `detail/entry-cognition.html`：入口切换次数 vs 大脑认知重载次数对比动画
3. `detail/architecture-in-motion.html`：一条消息走完 8 步动画（第 8 步平滑变形为我们的 bot 团队）
4. `detail/arch-deepseek.html`：DeepSeek Super-agent 五列分层可点击结构图
5. `detail/handoff.html`：经前台转达 vs 按话题代码直送（5 条后续消息实时计数对比）
6. `detail/thread-conflict.html`：Thread 广播三层拆解（信息可见 ≠ 状态一致 ≠ 行动协调）5 步动画
7. `detail/router-tradeoff.html`：Router 消息频率、模型档位与批处理排队模拟器
8. `detail/cache.html`：Prompt Cache 前缀命中与多任务成本交互计算器
9. `detail/arch-dots.html`：ChatGPT dots 架构图（明确标出官方未公开部分）
10. `detail/arch-ours.html`：Hive ↔ 我们的 bot 团队并排同构交互图
11. `detail/org-state.html`：从组织信息碎片到可验证共享状态的 5 步动效
12. `detail/org-modes.html`：组织级 A2A 三种拓扑模式（中心大脑 / 分布式 / 共享状态层）切换对照

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
# 或：git reset --hard b4f30f5 && git push -f
```
