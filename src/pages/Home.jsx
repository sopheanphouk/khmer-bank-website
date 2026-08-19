import { PiggyBank, Send, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";
import banner from "../assets/banner.avif";
import appImage from "../assets/as-gp.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/40 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-red-200/30 dark:bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-10 flex items-center justify-between flex-wrap gap-10">
          <div className="max-w-xl">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🇰🇭 {t("hero_badge")}
            </span>

            <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
              {t("hero_title_1")}{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {t("hero_title_2")}
              </span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
              {t("hero_desc")}
            </p>

            <div className="flex items-center gap-4 mb-10">
              <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 shadow-md shadow-blue-200 dark:shadow-none">
                {t("hero_btn_open")}
              </button>
              <button className="text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                {t("hero_btn_learn")}
              </button>
            </div>

            <div className="flex gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  2M+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {t("hero_stat_users")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  500+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {t("hero_stat_branches")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  24/7
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {t("hero_stat_support")}
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg h-80 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={banner}
              alt="Banking illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-10">
            {t("services_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-md dark:hover:shadow-none dark:hover:bg-gray-800 transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {t("services_savings_title")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("services_savings_desc")}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-md dark:hover:shadow-none dark:hover:bg-gray-800 transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {t("services_transfers_title")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("services_transfers_desc")}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-md dark:hover:shadow-none dark:hover:bg-gray-800 transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {t("services_loans_title")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("services_loans_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Promo Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 px-10 py-16 flex items-center justify-between flex-wrap gap-10">
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-16 right-40 w-40 h-40 bg-red-400/20 rounded-full blur-2xl"></div>

            <div className="relative max-w-lg">
              <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                📱 {t("promo_badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                {t("promo_title")}
              </h2>
              <p className="text-blue-100 text-lg mb-8">{t("promo_desc")}</p>
            </div>

            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl">
              <img
                src={appImage}
                alt="Download on Google Play and App Store"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              {t("testimonials_title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3">
              {t("testimonials_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg dark:hover:bg-gray-800 transition-all">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                "Switching to Khmer Bank was the best decision. Transfers are
                instant and the app just works, every time."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  S
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    Sophea K.
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    Small Business Owner
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg dark:hover:bg-gray-800 transition-all">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                "Opening my savings account took less than 10 minutes on my
                phone. No branch visit needed at all."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  D
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    Dara P.
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    University Student
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg dark:hover:bg-gray-800 transition-all">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                "Customer support actually picks up fast and solves problems.
                That's rare for a bank these days."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  M
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    Makara T.
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    Freelance Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-3xl mx-auto px-10">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {t("faq_badge")}
            </span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              {t("faq_title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3">
              {t("faq_subtitle")}
            </p>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((n) => (
              <details
                key={n}
                className="group bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-5 shadow-sm hover:shadow-md open:shadow-md open:border-blue-200 dark:open:border-blue-800 transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-800 dark:text-gray-100 list-none">
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center">
                      {n}
                    </span>
                    {t(`faq_q${n}`)}
                  </span>
                  <span className="ml-4 shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 group-open:bg-blue-600 dark:group-open:bg-blue-500 text-gray-500 dark:text-gray-300 group-open:text-white flex items-center justify-center transition-all group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 pl-10 leading-relaxed">
                  {t(`faq_a${n}`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
