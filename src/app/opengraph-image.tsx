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
            17+8 Tuntutan Rakyat
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              marginBottom: 20,
              color: '#EB8FBD'
            }}
          >
            Transparansi. Reformasi. Empati.
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
            Daftar lengkap 25 tuntutan rakyat Indonesia untuk reformasi
            menyeluruh. 17 tuntutan dalam 1 minggu dan 8 tuntutan dalam 1 tahun.
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
