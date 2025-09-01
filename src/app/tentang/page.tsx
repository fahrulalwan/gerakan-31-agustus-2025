import { Target, Users, Heart, Shield, Scale, Calendar } from 'lucide-react'

const TentangPage = () => {
  const visiMisi = [
    {
      title: 'Visi',
      icon: Target,
      content:
        'Mewujudkan Indonesia yang demokratis, adil, dan sejahtera melalui partisipasi aktif rakyat dalam proses politik dan pengambilan keputusan.',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Misi',
      icon: Users,
      content:
        'Mengorganisir gerakan rakyat yang damai, terstruktur, dan berkelanjutan untuk memperjuangkan tuntutan reformasi yang menyeluruh.',
      color: 'bg-pink-100 text-pink-800'
    }
  ]

  const nilaiNilai = [
    {
      title: 'Demokrasi',
      icon: Scale,
      description:
        'Menghormati proses demokratis dan hak-hak konstitusional setiap warga negara'
    },
    {
      title: 'Kedamaian',
      icon: Heart,
      description:
        'Menjunjung tinggi demonstrasi damai tanpa kekerasan dalam bentuk apapun'
    },
    {
      title: 'Transparansi',
      icon: Shield,
      description:
        'Keterbukaan dalam setiap proses dan pengambilan keputusan gerakan'
    },
    {
      title: 'Persatuan',
      icon: Users,
      description:
        'Mengedepankan persatuan di atas perbedaan untuk kepentingan bangsa'
    }
  ]

  return (
    <div className="min-h-screen bg-green-800">
      {/* Hero Section */}
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tentang 17+8 Tuntutan Rakyat
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tuntutan rakyat Indonesia yang lahir dari semangat untuk mewujudkan
            perubahan menyeluruh menuju Indonesia yang lebih demokratis, adil,
            dan sejahtera.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Calendar className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">2025</div>
              <div className="text-sm text-green-100">Dimulai</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Target className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">25</div>
              <div className="text-sm text-green-100">Tuntutan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Users className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">Rakyat</div>
              <div className="text-sm text-green-100">Bersatu</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Heart className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">Damai</div>
              <div className="text-sm text-green-100">Selalu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latar Belakang */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
              Latar Belakang
            </h2>
            <div className="prose prose-lg max-w-none text-green-700">
              <p className="mb-6 leading-relaxed">
                Gerakan 31 Agustus 2025 lahir dari keprihatinan mendalam
                terhadap kondisi demokrasi Indonesia yang mengalami kemunduran.
                Demonstrasi pada 28-30 Agustus 2024 menjadi titik awal kesadaran
                kolektif bahwa rakyat Indonesia membutuhkan perubahan yang
                menyeluruh dan terstruktur.
              </p>
              <p className="mb-6 leading-relaxed">
                Gerakan ini tidak hanya fokus pada isu-isu sesaat, tetapi
                mengangkat permasalahan struktural yang memerlukan reformasi
                jangka panjang. Dari transparansi DPR, reformasi kepolisian,
                hingga perlindungan hak asasi manusia, semua menjadi bagian
                integral dari agenda perubahan.
              </p>
              <p className="leading-relaxed">
                Dengan semangat Pancasila dan UUD 1945, gerakan ini berkomitmen
                untuk memperjuangkan aspirasi rakyat melalui cara-cara yang
                demokratis, damai, dan bermartabat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Visi & Misi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visiMisi.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl ${item.color}`}>
                      <Icon className="size-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-green-700 leading-relaxed text-lg">
                    {item.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nilai-Nilai */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Nilai-Nilai Gerakan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nilaiNilai.map((nilai) => {
              const Icon = nilai.icon
              return (
                <div
                  key={nilai.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="bg-white/20 rounded-xl p-4 w-fit mx-auto mb-4">
                    <Icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {nilai.title}
                  </h3>
                  <p className="text-green-100 leading-relaxed">
                    {nilai.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Kontak & Dukungan */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Bergabung dengan Gerakan
            </h2>
            <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
              Gerakan ini milik rakyat Indonesia. Setiap dukungan, partisipasi,
              dan kontribusi Anda sangat berarti untuk mewujudkan perubahan yang
              kita cita-citakan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <Users className="text-white size-8 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Ikut Demonstrasi</h3>
                <p className="text-green-100 text-sm">
                  Berpartisipasi dalam aksi damai sesuai panduan keamanan
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Heart className="text-white size-8 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">
                  Sebarkan Informasi
                </h3>
                <p className="text-green-100 text-sm">
                  Bagikan tuntutan dan informasi ke jaringan Anda
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Shield className="text-white size-8 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Jaga Kedamaian</h3>
                <p className="text-green-100 text-sm">
                  Pastikan semua aksi tetap damai dan bermartabat
                </p>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Prinsip Partisipasi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="text-green-100 text-sm">
                  ✓ Demonstrasi damai tanpa kekerasan
                </div>
                <div className="text-green-100 text-sm">
                  ✓ Menghormati hukum dan peraturan
                </div>
                <div className="text-green-100 text-sm">
                  ✓ Menjaga persatuan dan kesatuan
                </div>
                <div className="text-green-100 text-sm">
                  ✓ Mengutamakan dialog dan musyawarah
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TentangPage
