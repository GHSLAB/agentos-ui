# Agent UI

一个基于 Next.js、Tailwind CSS 和 TypeScript 构建的现代化 AgentOS 聊天界面。该模板提供了一个开箱即用的 UI，用于通过 Agno 平台连接并与您的 AgentOS 实例进行交互。

<img src="https://agno-public.s3.us-east-1.amazonaws.com/assets/agent_ui_banner.svg" alt="agent-ui" style="border-radius: 10px; width: 100%; max-width: 800px;" />

## 功能特性

- 🔗 **AgentOS 集成**：无缝连接到本地和远程 AgentOS 实例
- 💬 **现代化聊天界面**：简洁的设计，支持实时流式传输
- 🧩 **工具调用支持**：可视化智能体工具调用及其结果
- 🧠 **推理步骤**：显示智能体的推理过程（如果可用）
- 📚 **参考资料支持**：展示智能体使用的来源
- 🖼️ **多模态支持**：处理各种内容类型，包括图像、视频和音频
- 🎨 **可定制 UI**：使用 Tailwind CSS 构建，易于样式调整
- 🧰 **现代化技术栈**：Next.js、TypeScript、shadcn/ui、Framer Motion 等

## 版本支持

- **Main 分支**：支持 Agno v2.x（推荐）
- **v1 分支**：支持 Agno v1.x 以保持旧版本兼容性

## 快速上手

### 前置条件

在设置 Agent UI 之前，您需要一个正在运行的 AgentOS 实例。如果您尚未创建，请参考我们的 [创建您的第一个 OS](/agent-os/creating-your-first-os) 指南。

> **注意**：Agent UI 通过 Agno 平台连接到 AgentOS 实例。请在尝试连接之前确保您的 AgentOS 正在运行。

### 安装

### 自动安装（推荐）

```bash
npx create-agent-ui@latest
```

### 手动安装

1. 克隆仓库：

```bash
git clone https://github.com/agno-agi/agent-ui.git
cd agent-ui
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

## 连接到您的 AgentOS

Agent UI 直接连接到您的 AgentOS 实例，允许您通过现代化的聊天界面与您的智能体进行交互。

> **前置条件**：在将 Agent UI 连接到 AgentOS 之前，您需要一个正在运行的 AgentOS 实例。如果您尚未创建，请参考我们的 [创建您的第一个 OS](https://docs.agno.com/agent-os/creating-your-first-os) 指南。

## 分步连接流程

### 1. 配置端点 (Endpoint)

默认情况下，Agent UI 连接到 `http://localhost:7777`。您可以通过以下方式轻松更改：

1. 将鼠标悬停在左侧边栏的端点 URL 上
2. 点击编辑选项以修改连接设置

### 2. 选择您的环境

- **本地开发**：使用 `http://localhost:7777`（默认）或您的自定义本地端口
- **生产环境**：输入您的生产环境 AgentOS HTTPS URL

> **警告**：在尝试连接之前，请确保您的 AgentOS 确实运行在指定的端点上。

### 3. 配置身份验证（可选）

如果您的 AgentOS 实例需要身份验证，您可以通过两种方式进行配置：

#### 选项 1：环境变量（推荐）

设置 `OS_SECURITY_KEY` 环境变量：

```bash
# 在您的 .env.local 文件或 shell 环境中
NEXT_PUBLIC_OS_SECURITY_KEY=您的身份验证令牌
```

> **注意**：这使用与 AgentOS 相同的环境变量，因此如果您在同一台机器上运行两者，只需设置一次即可。应用程序启动时将自动加载该令牌。

#### 选项 2：UI 配置

1. 在左侧边栏中，找到“Auth Token”部分
2. 点击令牌字段进行编辑
3. 输入您的身份验证令牌
4. 令牌将被安全存储并包含在所有 API请求中

> **安全提示**：身份验证令牌存储在本地全局存储中，并在发送到 AgentOS 实例的 API 请求中作为 Bearer 令牌包含在内。

### 4. 测试连接

配置好端点后：

1. Agent UI 将自动尝试连接到您的 AgentOS
2. 如果成功，您将在聊天界面中看到可用的智能体
3. 如果出现连接问题，请检查您的 AgentOS 是否正在运行且可访问。请查看此处的 [故障排除指南](https://docs.agno.com/faq/agentos-connection)

## 贡献

欢迎贡献！请参阅 [CONTRIBUTING.md](./CONTRIBUTING.md) 获取贡献指南。

## 许可证

本项目采用 [MIT 许可证](./LICENSE) 开源。
