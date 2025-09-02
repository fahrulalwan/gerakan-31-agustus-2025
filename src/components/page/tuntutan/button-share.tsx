'use client'
import {
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
  TwitterShareButton,
  ThreadsShareButton,
  ThreadsIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon
} from 'react-share'

const ButtonShare = () => {
  const title = `TETAP KAWAL HINGGA TUNTUTAN JADI KENYATAAN
Bersuara perlu strategi, bukan sekadar emosi. TuntutanRakyat menyediakan panduan lengkap: persiapan sebelum dan setelah demo, informasi hak hukum, kontak darurat. Jangan turun tanpa bekal.
`
  return (
    <div className="px-6 space-y-2 pb-10">
      <p className="text-center text-white text-lg font-bold">Share via:</p>
      <div className="flex gap-2 justify-center">
        <TelegramShareButton
          url="https://tuntutanrakyat.vercel.app"
          title={title}
          className=""
        >
          <TelegramIcon className="rounded-full size-10" />
        </TelegramShareButton>

        <WhatsappShareButton
          url="https://tuntutanrakyat.vercel.app"
          title={title}
          className=""
        >
          <WhatsappIcon className="rounded-full size-10" />
        </WhatsappShareButton>

        <ThreadsShareButton
          url="https://tuntutanrakyat.vercel.app"
          title={title}
          className=""
        >
          <ThreadsIcon className="rounded-full size-10" />
        </ThreadsShareButton>

        <TwitterShareButton
          url="https://tuntutanrakyat.vercel.app"
          title={title}
          className=""
        >
          <XIcon className="rounded-full size-10" />
        </TwitterShareButton>

        <LinkedinShareButton
          url="https://tuntutanrakyat.vercel.app"
          title={title}
          className=""
        >
          <LinkedinIcon className="rounded-full size-10" />
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default ButtonShare
