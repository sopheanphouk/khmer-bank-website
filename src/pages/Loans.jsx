import { Home, Car, Briefcase, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Loans() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden py-32 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/40 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-red-200/30 dark:bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl mx-auto px-10 text-center">
          <span className="inline-block bg-white dark:bg-gray-800 shadow-sm text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            💰 {t('loans_badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-5 leading-tight">
            {t('loans_title_1')} <span className="text-blue-600 dark:text-blue-400">{t('loans_title_2')}</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-4">
            {t('loans_desc')}
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm max-w-lg mx-auto mb-10">
            {t('loans_subdesc')}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-14">
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 shadow-md shadow-blue-200 dark:shadow-none">
              {t('loans_btn_apply')}
            </button>
            <button className="text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
              {t('loans_btn_calc')}
            </button>
          </div>

          <div className="flex items-center justify-center gap-10">
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">4.9%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t('loans_stat_rates')}</div>
            </div>
            <div className="w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">24 hr</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t('loans_stat_approval')}</div>
            </div>
            <div className="w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">25 yr</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t('loans_stat_term')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-5xl mx-auto px-10">

          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {t('loans_options_badge')}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{t('loans_options_title')}</h2>
          </div>

          <div className="space-y-6">

            <div className="flex flex-col md:flex-row items-center gap-8 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md dark:hover:bg-gray-900 transition-all">
              <div className="w-16 h-16 shrink-0 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                <Home size={28} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{t('loans_home_title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t('loans_home_desc')}</p>
              </div>
              <div className="flex gap-8 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">6.5%</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">interest from</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">25 yr</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">max term</div>
                </div>
              </div>
              <button className="shrink-0 bg-gray-900 dark:bg-gray-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600">
                {t('loans_btn_apply')}
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 border-2 border-blue-600 dark:border-blue-500 rounded-2xl p-8 relative hover:shadow-md transition-all">
              <span className="absolute -top-3 left-8 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Most Requested
              </span>
              <div className="w-16 h-16 shrink-0 bg-blue-600 dark:bg-blue-500 text-white rounded-2xl flex items-center justify-center">
                <Briefcase size={28} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{t('loans_personal_title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t('loans_personal_desc')}</p>
              </div>
              <div className="flex gap-8 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">24 hr</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">approval</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">$0</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">collateral</div>
                </div>
              </div>
              <button className="shrink-0 bg-blue-600 dark:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600">
                {t('loans_btn_apply')}
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md dark:hover:bg-gray-900 transition-all">
              <div className="w-16 h-16 shrink-0 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                <Car size={28} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{t('loans_auto_title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t('loans_auto_desc')}</p>
              </div>
              <div className="flex gap-8 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">4.9%</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">interest from</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">7 yr</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">max term</div>
                </div>
              </div>
              <button className="shrink-0 bg-gray-900 dark:bg-gray-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600">
                {t('loans_btn_apply')}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Requirements
          </span>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">{t('loans_eligibility_title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12">{t('loans_eligibility_desc')}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">21+</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('loans_req1')}</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">6mo</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('loans_req2')}</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">🇰🇭</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('loans_req3')}</p>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">✓</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('loans_req4')}</p>
            </div>
          </div>

          <button className="mt-12 bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 shadow-md shadow-blue-200 dark:shadow-none">
            {t('accounts_cta')}
          </button>
        </div>
      </section>

    </div>
  )
}

export default Loans