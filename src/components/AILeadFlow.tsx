'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Sparkles, CalendarCheck, PhoneCall, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export function AILeadFlow() {
  const { t } = useLanguage()

  const steps = [
    { icon: MessageSquare, title: t('biz.flow1Title'), desc: t('biz.flow1Desc'), stat: t('biz.flow1Stat') },
    { icon: Sparkles, title: t('biz.flow2Title'), desc: t('biz.flow2Desc'), stat: t('biz.flow2Stat') },
    { icon: CalendarCheck, title: t('biz.flow3Title'), desc: t('biz.flow3Desc'), stat: t('biz.flow3Stat') },
    { icon: PhoneCall, title: t('biz.flow4Title'), desc: t('biz.flow4Desc'), stat: t('biz.flow4Stat') },
  ]

  return (
    <section id="how" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">{t('biz.flowKicker')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            {t('biz.flowTitle')}
          </h2>
          <p className="text-muted-foreground text-lg font-light">{t('biz.flowSub')}</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <motion.div
              initial={{ x: '-10%', opacity: 0 }}
              whileInView={{ x: '110%', opacity: [0, 1, 0] }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-accent shadow-[0_0_12px_hsl(var(--accent))]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-accent/40 transition-colors">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <s.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-xs font-semibold text-accent">{s.stat}</span>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex lg:hidden absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
