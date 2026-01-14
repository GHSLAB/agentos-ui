'use client'

import ChatInput from './ChatInput'
import MessageArea from './MessageArea'
import { useStore } from '@/store'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { useTranslations } from 'next-intl'

const ChatArea = () => {
  const { setIsMobileSidebarOpen } = useStore()
  const t = useTranslations('Chat')

  return (
    <main className="bg-background relative m-1.5 flex flex-grow flex-col overflow-hidden rounded-xl">
      <div className="absolute right-3 top-3 z-20 flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-2 p-3 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileSidebarOpen(true)}
          className="-ml-2"
        >
          <Icon type="menu" size="sm" />
        </Button>
        <span className="font-medium">{t('agentUI')}</span>
      </div>
      <MessageArea />
      <div className="sticky bottom-0 px-2 pb-2 md:ml-9 md:px-4">
        <ChatInput />
      </div>
    </main>
  )
}

export default ChatArea
