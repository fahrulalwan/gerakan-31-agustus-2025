export const LayananPsikologis = {
  title: 'Layanan Psikologis | Transparansi. Reformasi. Empati.',
  description:
    'Layanan psikologis profesional bagi demonstran dan masyarakat yang terdampak untuk menghadapi trauma dan mengelola stres pasca-aksi dengan pendampingan yang tepat.'
}

export type TService = {
  name: string
  link?: string
  desc?: string
  disabled?: boolean
}

export const onlineServices: TService[] = [
  {
    name: 'temanbersama.id',
    link: 'https://bit.ly/konselingtemanbersama',
    desc: 'Ruang Aman untuk Berbagi Cerita'
  },
  {
    name: 'ibunda.id',
    link: 'https://www.google.com/search?q=WellMe+ibunda.id',
    desc: 'Menjadikan kesehatan mental sebagai gaya hidup untuk menciptakan generasi yang lebih sehat melalui inovasi dan teknologi.'
  },
  {
    name: 'HIMPSI',
    link: 'https://bit.ly/KonselingGRATIS-HIMPSI0925',
    desc: 'Menghadirkan layanan konseling psikologis gratis sebagai bentuk kepedulian kepada masyarakat.'
  },
  {
    name: 'ubahstigma x ouri.mindcare',
    link: 'https://bit.ly/konselinggratisUS',
    desc: 'Organisasi non-profit yang bertujuan untuk mematahkan persepsi negatif masyarakat (stigma) terhadap kesehatan mental',
    disabled: true
  },
  {
    name: 'HerSpace',
    link: 'https://bit.ly/KonselingGratisHerSpace',
    disabled: true
  }
]

export const hotlines: TService[] = [
  {
    name: 'Pribudaya',
    link: 'https://wa.me/6289688183036',
    desc: 'Layanan konseling online berbasis empatik dan keberpihakan pada korban.'
  },
  {
    name: 'SEJIWA',
    link: 'tel:119',
    desc: 'Hubungi 119 dan tekan 8 untuk mendapatkan bantuan Relawan Psikologi dari Himpunan Psikologi Indonesia (HIMPSI)'
  },
  {
    name: 'BISA Helpline',
    link: 'https://wa.me/628113855472',
    desc: 'Sumber Dukungan Mental dan Emosional yang disediakan oleh Yayasan Bersama Bisa.'
  }
]
