import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Page Header */}
      <section className="relative overflow-hidden py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/40 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-red-200/30 dark:bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-200 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {t('contact_badge')}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
            {t('contact_title_1')} <span className="text-blue-600 dark:text-blue-400">{t('contact_title_2')}</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-10">
            {t('contact_desc')}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="tel:+85512345678" className="flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 shadow-md shadow-blue-200 dark:shadow-none">
              <Phone size={18} /> {t('contact_btn_call')}
            </a>
            <a href="mailto:support@khmerbank.com" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Mail size={18} /> {t('contact_btn_email')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-md dark:hover:bg-gray-800 transition-all">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-5">
                <Phone size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{t('contact_call_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact_call_hours')}</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">+855 12 345 678</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-md dark:hover:bg-gray-800 transition-all">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-5">
                <Mail size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{t('contact_email_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact_email_hours')}</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">support@khmerbank.com</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-md dark:hover:bg-gray-800 transition-all">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-5">
                <MapPin size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{t('contact_visit_title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact_visit_hours')}</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Phnom Penh, Cambodia</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-3xl mx-auto px-10">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {t('contact_form_badge')}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{t('contact_form_title')}</h2>
          </div>

          <form className="bg-white dark:bg-gray-950 rounded-2xl shadow-sm dark:shadow-none dark:border dark:border-gray-800 p-8 space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{t('contact_form_name')}</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{t('contact_form_email')}</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{t('contact_form_subject')}</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{t('contact_form_message')}</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              <Send size={18} /> {t('contact_form_submit')}
            </button>

          </form>
        </div>
      </section>

    </div>
  )
}

export default Contact