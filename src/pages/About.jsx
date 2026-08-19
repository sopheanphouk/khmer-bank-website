import { Heart, ShieldCheck, Lightbulb, Building2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import storyImage from '../assets/banner.avif'

function About() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-center transition-colors">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-10 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl mx-auto px-10">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
            🇰🇭 {t('about_badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            {t('about_title')}
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
            {t('about_desc1')}
          </p>
          <p className="text-blue-200 text-sm mb-8 max-w-xl mx-auto">
            {t('about_desc2')}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50">
              {t('about_btn_open')}
            </button>
            <button className="text-white px-6 py-3 rounded-lg font-medium border border-white/40 hover:bg-white/10">
              {t('about_btn_team')}
            </button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">10+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('about_stat_years')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">2M+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('about_stat_customers')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">500+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('about_stat_branches')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">24/7</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('about_stat_support')}</div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-10 flex items-center gap-14 flex-wrap">

          <div className="flex-1 min-w-[300px] rounded-3xl overflow-hidden shadow-xl">
            <img src={storyImage} alt="Our story" className="w-full h-80 object-cover" />
          </div>

          <div className="flex-1 min-w-[300px]">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {t('about_story_badge')}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {t('about_story_title')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              {t('about_story_p1')}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              {t('about_story_p2')}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                <Building2 size={18} />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t('about_hq')} <span className="font-semibold text-gray-800 dark:text-gray-100">Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {t('about_values_badge')}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{t('about_values_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="relative bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:bg-gray-800 hover:-translate-y-1 transition-all">
              <span className="absolute top-4 right-5 text-4xl font-extrabold text-gray-100 dark:text-gray-800">01</span>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-5">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg mb-2">{t('about_value1_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('about_value1_desc')}</p>
            </div>

            <div className="relative bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:bg-gray-800 hover:-translate-y-1 transition-all">
              <span className="absolute top-4 right-5 text-4xl font-extrabold text-gray-100 dark:text-gray-800">02</span>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-5">
                <Lightbulb size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg mb-2">{t('about_value2_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('about_value2_desc')}</p>
            </div>

            <div className="relative bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:bg-gray-800 hover:-translate-y-1 transition-all">
              <span className="absolute top-4 right-5 text-4xl font-extrabold text-gray-100 dark:text-gray-800">03</span>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-5">
                <Heart size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg mb-2">{t('about_value3_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('about_value3_desc')}</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default About