'use client'

import {
  Search,
  Clock,
  Tag,
  ArrowRight,
  BookOpen,
  Star,
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import {
  DEMO_ARTICLES,
  ARTICLE_CATEGORIES,
  Article
} from '@/constants/articles'
import { cn } from '@/lib/utils'

const InformasiPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredArticles = DEMO_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    const matchesFeatured = !showFeaturedOnly || article.featured

    return matchesCategory && matchesSearch && matchesFeatured
  })

  const featuredArticles = DEMO_ARTICLES.filter((article) => article.featured)

  const getCategoryColor = (categoryId: string) => {
    const category = ARTICLE_CATEGORIES.find((cat) => cat.id === categoryId)
    return category?.color ?? 'gray'
  }

  const getCategoryIcon = (categoryId: string) => {
    const category = ARTICLE_CATEGORIES.find((cat) => cat.id === categoryId)
    return category?.icon ?? '📄'
  }

  const ArticleCard = ({
    article,
    featured = false
  }: {
    article: Article
    featured?: boolean
  }) => {
    const categoryColor = getCategoryColor(article.category)
    const categoryIcon = getCategoryIcon(article.category)

    return (
      <Link
        href={`/informasi/${article.id}`}
        className={cn(
          'block rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group',
          featured ? 'bg-green-800' : 'bg-white'
        )}
      >
        <div className="flex items-start gap-4">
          <div
            className={cn(
              'p-3 rounded-xl text-2xl',
              categoryColor === 'green' && 'bg-green-100',
              categoryColor === 'red' && 'bg-red-100',
              categoryColor === 'blue' && 'bg-blue-100',
              categoryColor === 'purple' && 'bg-purple-100',
              categoryColor === 'orange' && 'bg-orange-100'
            )}
          >
            {categoryIcon}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={cn(
                  'text-xs font-medium px-2 py-1 rounded-full',
                  categoryColor === 'green' && 'bg-green-200 text-green-800',
                  categoryColor === 'red' && 'bg-red-200 text-red-800',
                  categoryColor === 'blue' && 'bg-blue-200 text-blue-800',
                  categoryColor === 'purple' && 'bg-purple-200 text-purple-800',
                  categoryColor === 'orange' && 'bg-orange-200 text-orange-800'
                )}
              >
                {
                  ARTICLE_CATEGORIES.find((cat) => cat.id === article.category)
                    ?.name
                }
              </span>

              {article.featured && (
                <Star className="size-4 text-yellow-500 fill-yellow-500" />
              )}

              <span
                className={cn(
                  'text-xs px-2 py-1 rounded-full',
                  article.priority === 'high' && 'bg-pink-200 text-pink-800',
                  article.priority === 'medium' &&
                    'bg-yellow-200 text-yellow-800',
                  article.priority === 'low' && 'bg-gray-200 text-gray-800'
                )}
              >
                {article.priority === 'high' && 'PENTING'}
                {article.priority === 'medium' && 'SEDANG'}
                {article.priority === 'low' && 'RENDAH'}
              </span>
            </div>

            <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-pink-600 transition-colors">
              {article.title}
            </h3>

            <p className="text-green-700 mb-4 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-green-600">
                <div className="flex items-center gap-1">
                  <Clock className="size-4" />
                  {article.readTime} menit
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  {new Date(article.publishedAt).toLocaleDateString('id-ID')}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-pink-600 group-hover:text-pink-700">
                Baca Selengkapnya
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mt-3">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-green-800">
      {/* Header */}
      <div className="px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Informasi & Panduan
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Kumpulan artikel dan panduan lengkap untuk mendukung demonstrasi
            yang aman, efektif, dan bermartabat
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <BookOpen className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">
                {DEMO_ARTICLES.length}
              </div>
              <div className="text-sm text-green-100">Artikel</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Tag className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">
                {ARTICLE_CATEGORIES.length}
              </div>
              <div className="text-sm text-green-100">Kategori</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Star className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">
                {featuredArticles.length}
              </div>
              <div className="text-sm text-green-100">Unggulan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">
                {Math.round(
                  DEMO_ARTICLES.reduce(
                    (acc, article) => acc + article.readTime,
                    0
                  ) / DEMO_ARTICLES.length
                )}
              </div>
              <div className="text-sm text-green-100">Menit Rata-rata</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Artikel Unggulan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 size-5" />
                <input
                  type="text"
                  placeholder="Cari artikel, tag, atau kata kunci..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-0 bg-white text-green-800 placeholder-green-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl border-0 bg-white text-green-800 focus:outline-none focus:ring-4 focus:ring-pink-300"
              >
                <option value="all">Semua Kategori</option>
                {ARTICLE_CATEGORIES.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>

              {/* Featured Filter */}
              <button
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className={cn(
                  'px-4 py-3 rounded-xl font-medium transition-colors flex items-center gap-2',
                  showFeaturedOnly
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-green-800 hover:bg-green-50'
                )}
              >
                <Star className="size-4" />
                Unggulan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
                <Search className="text-white size-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Tidak Ada Artikel Ditemukan
                </h3>
                <p className="text-green-100 mb-4">
                  Coba ubah kata kunci pencarian atau filter kategori
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                    setShowFeaturedOnly(false)
                  }}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Kategori Panduan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLE_CATEGORIES.map((category) => {
              const articleCount = DEMO_ARTICLES.filter(
                (article) => article.category === category.id
              ).length

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    'text-left p-6 rounded-2xl transition-all duration-300 hover:scale-105',
                    category.color === 'green' &&
                      'bg-green-100 hover:bg-green-200',
                    category.color === 'red' && 'bg-red-100 hover:bg-red-200',
                    category.color === 'blue' &&
                      'bg-blue-100 hover:bg-blue-200',
                    category.color === 'purple' &&
                      'bg-purple-100 hover:bg-purple-200',
                    category.color === 'orange' &&
                      'bg-orange-100 hover:bg-orange-200'
                  )}
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3
                    className={cn(
                      'text-xl font-bold mb-2',
                      category.color === 'green' && 'text-green-800',
                      category.color === 'red' && 'text-red-800',
                      category.color === 'blue' && 'text-blue-800',
                      category.color === 'purple' && 'text-purple-800',
                      category.color === 'orange' && 'text-orange-800'
                    )}
                  >
                    {category.name}
                  </h3>
                  <p
                    className={cn(
                      'mb-3',
                      category.color === 'green' && 'text-green-700',
                      category.color === 'red' && 'text-red-700',
                      category.color === 'blue' && 'text-blue-700',
                      category.color === 'purple' && 'text-purple-700',
                      category.color === 'orange' && 'text-orange-700'
                    )}
                  >
                    {category.description}
                  </p>
                  <div
                    className={cn(
                      'text-sm font-medium',
                      category.color === 'green' && 'text-green-600',
                      category.color === 'red' && 'text-red-600',
                      category.color === 'blue' && 'text-blue-600',
                      category.color === 'purple' && 'text-purple-600',
                      category.color === 'orange' && 'text-orange-600'
                    )}
                  >
                    {articleCount} artikel
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default InformasiPage
