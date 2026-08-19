import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { ArrowUp, Landmark } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 px-10 md:px-40 py-12 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between flex-wrap gap-10">

                    {/* Left: Logo + Address */}
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-sm">
                                <Landmark className="text-white" size={16} />
                            </div>
                            <span className="text-xl font-extrabold text-gray-800 dark:text-gray-100">
                                Khmer <span className="text-blue-600 dark:text-blue-400">Bank</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            {t('footer_address')}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{t('footer_swift')}</p>
                    </div>

                    {/* Right: Social + Links */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">{t('footer_follow')}</span>
                            {[FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
                                >
                                    <Icon size={14} />
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">{t('footer_terms')}</span>
                            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">{t('footer_privacy')}</span>
                            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">{t('footer_conditions')}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex-wrap gap-4">
                    <p className="text-sm text-gray-400 dark:text-gray-500">{t('footer_copyright')}</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-1.5 bg-blue-600 dark:bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                        <ArrowUp size={14} /> {t('footer_top')}
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer