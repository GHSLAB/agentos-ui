import { type FC } from 'react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

interface DeleteSessionModalProps {
  isOpen: boolean
  onClose: () => void
  onDelete: () => Promise<void>
  isDeleting: boolean
}

const DeleteSessionModal: FC<DeleteSessionModalProps> = ({
  isOpen,
  onClose,
  onDelete,
  isDeleting
}) => {
  const t = useTranslations('Session')
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="font-geist">
        <DialogHeader>
          <DialogTitle>{t('confirmDelete')}</DialogTitle>
          <DialogDescription>{t('deleteWarning')}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            className="rounded-xl border-border font-geist"
            onClick={onClose}
            disabled={isDeleting}
          >
            {t('cancel')}
          </Button>
          <Button
            variant="destructive"
            onClick={onDelete}
            disabled={isDeleting}
            className="rounded-xl font-geist"
          >
            {t('delete')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteSessionModal
