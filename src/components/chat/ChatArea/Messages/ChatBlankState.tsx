'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { useTranslations } from 'next-intl'
import { useStore } from '@/store'
import { useQueryState } from 'nuqs'
import { toast } from 'sonner'
import { Headset, Briefcase, LayoutDashboard } from 'lucide-react'

const ChatBlankState = () => {
  const t = useTranslations('welcome-message')
  const agents = useStore((state) => state.agents)
  const [, setAgentId] = useQueryState('agent')

  const AGENT_OPTIONS = [
    {
      key: 'customerService',
      searchName: '客户服务',
      icon: Headset
    },
    {
      key: 'accountManager',
      searchName: '财富管理',
      icon: Briefcase
    },
    {
      key: 'admin',
      searchName: '投资管理',
      icon: LayoutDashboard
    }
  ]

  const handleAgentSelect = (searchName: string) => {
    // 尝试根据名字匹配智能体
    const agent = agents.find((a) => a.name?.includes(searchName))

    if (agent) {
      setAgentId(agent.id)
    } else {
      toast.error(
        t('agentNotFound', { name: searchName }) ||
          `未找到包含 "${searchName}" 的智能体`
      )
    }
  }

  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center text-center font-geist"
      aria-label="Welcome message"
    >
      <div className="flex w-full max-w-4xl flex-col gap-y-12 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold tracking-tight md:text-4xl"
        >
          {t('title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
        >
          {AGENT_OPTIONS.map((option) => (
            <button
              key={option.key}
              onClick={() => handleAgentSelect(option.searchName)}
              className="bg-card/50 group flex flex-col items-center justify-center gap-2 rounded-xl border border-border p-4 transition-all hover:scale-105 hover:bg-accent hover:shadow-lg md:gap-4 md:rounded-2xl md:p-8"
            >
              <option.icon className="text-muted-foreground h-8 w-8 group-hover:text-primary md:h-12 md:w-12" />
              <div className="text-foreground text-sm font-semibold group-hover:text-primary md:text-lg">
                {t(option.key)}
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ChatBlankState
