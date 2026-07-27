'use client'

import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Seo } from '@/components/Seo'
import { useLanguage } from '@/i18n/LanguageContext'
import founderPhotoAsset from '@/assets/antono-george.png.asset.json'

export default function About() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const toContact = () => navigate('/#intake')

  const beliefs = [
    t('about.belief1'),
    t('about.belief2'),
    t('about.belief3'),
    t('about.belief4'),
    t('about.belief5'),
    t('about.belief6'),
  ]

  const stats = [
    { value: t('about.stats.24h.value'), label: t('about.stats.24h.label') },
    { value: t('about.stats.7d.value'), label: t('about.stats.7d.label') },
    { value: t('about.stats.100.value'), label: t('about.stats.100.label') },
  ]

  const services = [
    {
      n: t('about.service1.n'),
      title: t('about.service1.title'),
      body: t('about.service1.body'),
      points: [t('about.service1.point1'), t('about.service1.point2'), t('about.service1.point3')],
    },
    {
      n: t('about.service2.n'),
      title: t('about.service2.title'),
      body: t('about.service2.body'),
      points: [t('about.service2.point1'), t('about.service2.point2'), t('about.service2.point3')],
    },
    {
      n: t('about.service3.n'),
      title: t('about.service3.title'),
      body: t('about.service3.body'),
      points: [t('about.service3.point1'), t('about.service3.point2'), t('about.service3.point3')],
    },
  ]

  const process = [
    { n: t('about.process1.n'), title: t('about.process1.title'), body: t('about.process1.body') },
    { n: t('about.process2.n'), title: t('about.process2.title'), body: t('about.process2.body') },
    { n: t('about.process3.n'), title: t('about.process3.title'), body: t('about.process3.body') },
    { n: t('about.process4.n'), title: t('about.process4.title'), body: t('about.process4.body') },
    { n: t('about.process5.n'), title: t('about.process5.title'), body: t('about.process5.body') },
    { n: t('about.process6.n'), title: t('about.process6.title'), body: t('about.process6.body') },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={t('about.seoTitle')}
        description={t('about.seoDescription')}
        path="/about"
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">{t('about.heroLabel')}</span>
              <h1
                className="font-bold leading-[1.03] tracking-tight mt-6"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
              >
                {t('about.heroHeadline')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl">
                {t('about.heroSubtext')}
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  onClick={toContact}
                  className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold"
                >
                  {t('about.ctaPrimary')} <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/studio')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold border border-border hover:border-accent transition-colors"
                >
                  {t('about.ctaSecondary')}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder statement */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border bg-background">
                <img
                  src={founderPhoto}
                  alt={t('about.founderPhotoAlt')}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">{t('about.founderLabel')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
                {t('about.founderTitle')}
              </h2>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                {t('about.founderBody')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="py-20 border-y border-border">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">{t('about.beliefsLabel')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
                {t('about.beliefsTitle')}
              </h2>
              <p className="text-muted-foreground mt-6 max-w-lg">
                {t('about.beliefsBody')}
              </p>
            </div>
            <ul className="space-y-4">
              {beliefs.map((c) => (
                <li key={c} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-base">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="container mx-auto px-6 grid sm:grid-cols-3 gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-accent">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-3 max-w-[220px] mx-auto">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">{t('about.servicesLabel')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">{t('about.servicesTitle')}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-3xl p-8 border border-border relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
                  <p className="text-sm font-mono text-accent">{s.n}</p>
                  <h3 className="text-xl font-bold mt-3">{s.title}</h3>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{s.body}</p>
                  <ul className="mt-6 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">{t('about.processLabel')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">{t('about.processTitle')}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-3xl p-7 bg-background border border-border"
                >
                  <p className="text-4xl font-bold text-accent/30">{p.n}</p>
                  <h3 className="text-lg font-bold mt-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t('about.ctaTitle')}</h2>
            <p className="text-primary-foreground/80 mt-6 text-lg">
              {t('about.ctaBody')}
            </p>
            <button
              onClick={toContact}
              className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold mt-10"
            >
              {t('about.ctaPrimary')} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
