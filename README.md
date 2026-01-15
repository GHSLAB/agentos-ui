# AgentOS-UI

本地化AgentOS的用户界面。

### 安装

1. 克隆仓库：

```bash
git clone https://github.com/GHSLAB/agentos-ui.git
cd agentos-ui
```

2. 安装依赖：

```bash
pnpm install
```

3. 启动开发服务器：

```bash
pnpm dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

```bash
pnpm run validate

#[warn] src/components/chat/ChatArea/Messages/ChatBlankState.tsx
#[warn] Code style issues found in the above file. Run Prettier with --write to fix.

pnpm exec prettier --write

pnpm run format
```
