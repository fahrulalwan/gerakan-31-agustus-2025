import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Gerakan 31 Agustus 2025 - Tuntutan Rakyat Indonesia'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#037033',
          fontSize: 32,
          fontWeight: 600
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '40px'
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              marginBottom: 20,
              color: 'white'
            }}
          >
            Gerakan 31 Agustus 2025
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              marginBottom: 20,
              color: '#EB8FBD'
            }}
          >
            Tuntutan Rakyat Indonesia
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: '#E8F5E8',
              maxWidth: 700,
              textAlign: 'center'
            }}
          >
            Demonstrasi Aman • Perubahan Bermartabat
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
