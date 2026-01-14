'use client'

import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import useChatActions from '@/hooks/useChatActions'
import { useStore } from '@/store'
import { useTranslations } from 'next-intl'

function NewChatButton() {
  const { clearChat } = useChatActions()
  const { messages } = useStore()
  const t = useTranslations('Common')
  return (
    <Button
      className="bg-brand text-primary hover:bg-brand/80 z-10 cursor-pointer rounded px-4 py-2 font-bold disabled:cursor-not-allowed disabled:opacity-50"
      onClick={clearChat}
      disabled={messages.length === 0}
    >
      <div className="flex items-center gap-2">
        <p>{t('newChat')}</p>{' '}
        <Icon type="menu" size="xs" className="text-background" />
      </div>
    </Button>
  )
}

export default NewChatButton
