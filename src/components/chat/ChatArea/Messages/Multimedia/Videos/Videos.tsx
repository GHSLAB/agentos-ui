'use client'

import { memo } from 'react'
import { useTranslations } from 'next-intl'

import { toast } from 'sonner'

import { type VideoData } from '@/types/os'
import Icon from '@/components/ui/icon'

const VideoItem = memo(({ video }: { video: VideoData }) => {
  const videoUrl = video.url
  // 引入 useTranslations 以修复找不到名称的问题
  const t = useTranslations('Multimedia')

  const handleDownload = async () => {
    try {
      toast.loading(t('downloadingVideo'))
      const response = await fetch(videoUrl)
      if (!response.ok) throw new Error('Network response was not ok')

      const blob = await response.blob()
      const fileExtension = videoUrl.split('.').pop() ?? 'mp4'
      const fileName = `video-${Date.now()}.${fileExtension}`

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName

      document.body.appendChild(a)
      a.click()

      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      toast.dismiss()
      toast.success(t('videoDownloaded'))
    } catch {
      toast.dismiss()
      toast.error(t('videoDownloadFailed'))
    }
  }

  return (
    <div>
      <div className="group relative w-full max-w-xl">
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          controls
          className="w-full rounded-lg"
          style={{ aspectRatio: '16 / 9' }}
        />
        <button
          type="button"
          onClick={handleDownload}
          className="absolute right-2 top-2 flex items-center justify-center rounded-sm bg-secondary/80 p-1.5 opacity-0 transition-opacity duration-200 hover:bg-secondary group-hover:opacity-100"
          aria-label={t('downloadVideo')}
        >
          <Icon type="download" size="xs" />
        </button>
      </div>
    </div>
  )
})

VideoItem.displayName = 'VideoItem'

const Videos = memo(({ videos }: { videos: VideoData[] }) => (
  <div className="flex flex-col gap-4">
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </div>
))

Videos.displayName = 'Videos'

export default Videos
