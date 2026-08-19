import { PiggyBank, Wallet, TrendingUp, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Accounts() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden py-20 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                💳 {t('accounts_badge')}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
                {t('accounts_title_1')} <span className="text-blue-600 dark:text-blue-400">{t('accounts_title_2')}</span> {t('accounts_title_3')}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
                {t('accounts_desc')}
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">3</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t('accounts_stat_types')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">0%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t('accounts_stat_fees')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">5 min</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t('accounts_stat_time')}</div>
                </div>
              </div>
            </div>

            <div className="relative h-72 hidden md:block">
              <div className="absolute top-0 right-10 w-48 h-32 bg-blue-600 dark:bg-blue-700 rounded-2xl shadow-xl rotate-3 flex items-center justify-center">
                <Wallet className="text-white" size={32} />
              </div>
              <div className="absolute bottom-0 right-24 w-48 h-32 bg-blue-100 dark:bg-blue-900/40 rounded-2xl shadow-lg -rotate-6 flex items-center justify-center">
                <PiggyBank className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <div className="absolute top-16 left-0 w-40 h-28 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md rotate-6 flex items-center justify-center">
                <TrendingUp className="text-gray-600 dark:text-gray-300" size={28} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-10">

          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {t('accounts_plans_badge')}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{t('accounts_plans_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 flex flex-col border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:bg-gray-800 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                  <PiggyBank size={24} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">5%</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">per year</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t('accounts_savings_title')}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{t('accounts_savings_desc')}</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" /> Up to 5% annual interest
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" /> No minimum balance
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" /> Free mobile banking
                </li>
              </ul>
              <button className="bg-gray-900 dark:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600">
                {t('accounts_savings_title')}
              </button>
            </div>

            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 rounded-2xl p-8 flex flex-col shadow-2xl md:-mt-4 md:mb-4">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                ⭐ {t('accounts_popular')}
              </span>
              <div className="flex items-center justify-between mb-6 mt-2">
                <div className="w-14 h-14 bg-white/15 text-white rounded-2xl flex items-center justify-center">
                  <Wallet size={24} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-white">0</div>
                  <div className="text-xs text-blue-200">monthly fees</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('accounts_current_title')}</h3>
              <p className="text-blue-100 text-sm mb-6">{t('accounts_current_desc')}</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-blue-50">
                  <Check size={16} className="text-white mt-0.5 shrink-0" /> Unlimited free transfers
                </li>
                <li className="flex items-start gap-2 text-sm text-blue-50">
                  <Check size={16} className="text-white mt-0.5 shrink-0" /> Free debit card
                </li>
                <li className="flex items-start gap-2 text-sm text-blue-50">
                  <Check size={16} className="text-white mt-0.5 shrink-0" /> 24/7 account access
                </li>
              </ul>
              <button className="bg-white text-blue-700 px-5 py-3 rounded-lg font-medium hover:bg-blue-50">
                {t('accounts_current_title')}
              </button>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 flex flex-col border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:bg-gray-800 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">8%</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">fixed return</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t('accounts_fixed_title')}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{t('accounts_fixed_desc')}</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" /> Up to 8% fixed return
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" /> Flexible term lengths
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" /> Guaranteed payout
                </li>
              </ul>
              <button className="bg-gray-900 dark:bg-gray-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600">
                {t('accounts_fixed_title')}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* How to Open an Account */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-10">

          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {t('accounts_steps_badge')}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{t('accounts_steps_title')}</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3">{t('accounts_steps_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-0.5 bg-blue-100 dark:bg-blue-900/40"></div>

            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-5 relative z-10">
                1
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{t('accounts_step1_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('accounts_step1_desc')}</p>
            </div>

            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-5 relative z-10">
                2
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{t('accounts_step2_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('accounts_step2_desc')}</p>
            </div>

            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-5 relative z-10">
                3
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{t('accounts_step3_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('accounts_step3_desc')}</p>
            </div>
          </div>

          <div className="text-center mt-14">
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 shadow-md shadow-blue-200 dark:shadow-none">
              {t('accounts_cta')}
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Accounts