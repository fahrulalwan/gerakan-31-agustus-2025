import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.'
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
          fontWeight: 600,
          fontFamily: 'Inter, system-ui, sans-serif'
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
              color: 'white',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: 1.2
            }}
          >
            17+8 Tuntutan Rakyat
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              marginBottom: 20,
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: 1.2,
              color: '#EB8FBD'
            }}
          >
            Transparansi. Reformasi. Empati.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(
            new URL(
              'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap'
            )
          ).then((res) => res.arrayBuffer())
        }
      ]
    }
  )
}
