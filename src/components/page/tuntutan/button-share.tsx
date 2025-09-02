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
        <WhatsappShareButton
          url="https://tuntutan-rakyat.vercel.app"
          separator=" | "
          title={title}
          className=""
        >
          <WhatsappIcon className="rounded-full size-10" />
        </WhatsappShareButton>

        <TwitterShareButton
          url="https://tuntutan-rakyat.vercel.app"
          title={title}
          className=""
        >
          <XIcon className="rounded-full size-10" />
        </TwitterShareButton>

        <ThreadsShareButton
          url="https://tuntutan-rakyat.vercel.app"
          title={title}
          className=""
        >
          <ThreadsIcon className="rounded-full size-10" />
        </ThreadsShareButton>

        <LinkedinShareButton
          url="https://tuntutan-rakyat.vercel.app"
          title={title}
          className=""
        >
          <LinkedinIcon className="rounded-full size-10" />
        </LinkedinShareButton>

        <TelegramShareButton
          url="https://tuntutan-rakyat.vercel.app"
          title={title}
          className=""
        >
          <TelegramIcon className="rounded-full size-10" />
        </TelegramShareButton>
      </div>
    </div>
  )
}

export default ButtonShare
