export const Informasi = {
  title: 'Untuk Tetap Kuat & Terkoneksi | Transparansi. Reformasi. Empati.',
  description:
    'Kumpulan informasi penting, layanan psikologis gratis, dan tautan ke jaringan solidaritas.'
}

export const similarActions: {
  url: string
  img: string
  title: string
  desc: string
}[] = [
  {
    url: 'https://rakyatmenuntut.net',
    img: '/img/similar_actions/rakyatmenuntut_net.png',
    title: 'rakyatmenuntut.net',
    desc: 'Kompilasi 17+8 tuntutan dan dukungan karya perjuangan komunitas'
  },
  {
    url: 'https://indonesiademands.com',
    img: '/img/similar_actions/indonesiademands_com.png',
    title: 'indonesiademands.com',
    desc: '17+8 English version of rakyatmenuntut, with detailed description'
  },
  {
    url: 'https://178tuntutanrakyat.id',
    img: '/img/similar_actions/178tuntutanrakyat_id.webp',
    title: '178tuntutanrakyat.id',
    desc: 'Community-driven progress update untuk masing-masing poin dari 17+8 tuntutan'
  },
  {
    url: 'https://brave-pink-hero-green.lovable.app/',
    img: '/img/similar_actions/brave_pink_hero_green.png',
    title: 's.id/pinkgreen',
    desc: 'Ikut gerakan ubah foto Green+Pink disini!'
  },
  {
    url: 'https://goodkind.id/profil/pantau-tuntutan-warga?tab=rekam-jejak',
    img: '/img/similar_actions/goodkind_id.jpeg',
    title: 'goodkind.id',
    desc: 'Pantau 17+8 tuntutan yang komprehensif'
  },
  {
    url: 'https://s.id/anak-paham-tuntutan-rakyat',
    img: '/img/similar_actions/s_id.png',
    title: 's.id/anak-paham-tuntutan-rakyat',
    desc: 'Informasi 17+8 tuntutan yang mudah dipahami oleh anak'
  }
]

type TService = {
  name: string
  link?: string
  desc?: string
}

export const onlineServices: TService[] = [
  {
    name: 'ubahstigma x ouri.mindcare',
    link: 'https://bit.ly/konselinggratisUS'
  },
  { name: 'HerSpace', link: 'https://bit.ly/KonselingGratisHerSpace' },
  { name: 'temanbersama.id', link: 'https://bit.ly/konselingtemanbersama' },
  { name: 'ibunda.id', desc: 'Download app WellMe di App Store/Google Play' },
  { name: 'HIMPSI', link: 'https://bit.ly/KonselingGRATIS-HIMPSI0925' }
]

export const hotlines: TService[] = [
  {
    name: 'Pribudaya',
    link: 'https://wa.me/6289688183036',
    desc: '+62 896-8818-3036 (WhatsApp)'
  },
  {
    name: 'SEJIWA',
    desc: 'Hubungi 119 dan tekan 8 untuk mendapatkan bantuan Relawan Psikologi dari Himpunan Psikologi Indonesia (HIMPSI)'
  },
  {
    name: 'BISA Helpline',
    link: 'https://wa.me/628113855472',
    desc: '08113855472 (WhatsApp)'
  }
]
