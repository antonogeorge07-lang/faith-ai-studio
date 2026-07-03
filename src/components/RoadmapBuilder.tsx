'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

type Answers = {
  business: string
  pain: string
  leads: string
}

type Props = {
  onContinue: (summary: { business: string; pain: string; leads: string; message: string }) => void
}

const BIZ_OPTS = [
  { id: 'trades', label: 'Trades / Home services', emoji: '🔧' },
  { id: 'food', label: 'Restaurant / Café', emoji: '🍽️' },
  { id: 'health', label: 'Clinic / Wellness', emoji: '💆' },
  { id: 'beauty', label: 'Salon / Barber', emoji: '💇' },
  { id: 'retail', label: 'Retail / Shop', emoji: '🛍️' },
  { id: 'other', label: 'Something else', emoji: '✨' },
]

const PAIN_OPTS = [
  { id: 'missed', label: 'Missed calls & slow replies' },
  { id: 'noshow', label: 'No-shows & bad scheduling' },
  { id: 'invisible', label: 'Not found on Google' },
  { id: 'quotes', label: 'Too much time on quotes' },
  { id: 'reviews', label: 'Not enough reviews' },
]

const LEAD_OPTS = [
  { id: 'lt10', label: 'Under 10' },
  { id: '10-50', label: '10 to 50' },
  { id: '50-200', label: '50 to 200' },
  { id: 'gt200', label: '200+' },
]

function buildRoadmap(a: Answers) {
  const biz = BIZ_OPTS.find((o) => o.id === a.business)?.label ?? a.business
  const pain = PAIN_OPTS.find((o) => o.id === a.pain)?.label ?? a.pain
  const leads = LEAD_OPTS.find((o) => o.id === a.leads)?.label ?? a.leads

  const steps: { title: string; detail: string }[] = []

  steps.push({
    title: 'Week 1 - Local Launch Pack',
    detail: `Fast, mobile-first site tuned for ${biz.toLowerCase()}. Google Business profile, schema and local keywords set up so you start showing on Maps.`,
  })

  if (a.pain === 'missed') {
    steps.push({
      title: 'Week 2 - AI receptionist live',
      detail: 'WhatsApp + web chat replies in under 60 seconds, 24/7. Every enquiry captured, none dropped.',
    })
  } else if (a.pain === 'noshow') {
    steps.push({
      title: 'Week 2 - Booking + reminder automation',
      detail: 'Online booking wired to your calendar, with SMS + email reminders that cut no-shows by up to 60%.',
    })
  } else if (a.pain === 'invisible') {
    steps.push({
      title: 'Week 2 - Ranking sprint',
      detail: 'Location pages, review flow and technical SEO to move you into the Google 3-pack for your city.',
    })
  } else if (a.pain === 'quotes') {
    steps.push({
      title: 'Week 2 - Quote bot trained on your services',
      detail: 'AI drafts branded quotes from a short client brief. You approve in one tap.',
    })
  } else {
    steps.push({
      title: 'Week 2 - Automatic review collection',
      detail: 'Every finished job triggers a review request. Ratings climb, trust compounds.',
    })
  }

  steps.push({
    title: 'Week 3 - Follow-up sequences',
    detail: `With ${leads.toLowerCase()} leads/month, we layer email + SMS sequences so no warm lead goes cold.`,
  })

  steps.push({
    title: 'Ongoing - Monthly tuning',
    detail: 'Performance report, AI retraining and one content update every month. You focus on the work.',
  })

  const message = [
    `Interactive roadmap request`,
    ``,
    `Business type: ${biz}`,
    `Biggest bottleneck: ${pain}`,
    `Monthly leads: ${leads}`,
    ``,
    `Please send the full 24h roadmap based on this.`,
  ].join('\n')

  return { steps, biz, pain, leads, message }
}

export function RoadmapBuilder({ onContinue }: Props) {
  const { t } = useLanguage()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({ business: '', pain: '', leads: '' })

  const questions = [
    { key: 'business' as const, label: t('biz.rbQ1'), options: BIZ_OPTS },
    { key: 'pain' as const, label: t('biz.rbQ2'), options: PAIN_OPTS },
    { key: 'leads' as const, label: t('biz.rbQ3'), options: LEAD_OPTS },
  ]

  const isPreview = step === 3
  const progress = ((step) / 3) * 100
  const roadmap = isPreview ? buildRoadmap(answers) : null

  const pick = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }))
    setTimeout(() => setStep((s) => s + 1), 150)
  }

  const reset = () => {
    setStep(0)
    setAnswers({ business: '', pain: '', leads: '' })
  }

  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">{t('biz.rbKicker')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            {t('biz.rbTitle')}
          </h2>
          <p className="text-muted-foreground text-lg font-light">{t('biz.rbSub')}</p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                {isPreview ? t('biz.rbPreviewTitle') : t('biz.rbStep', { n: String(step + 1) })}
              </span>
              {!isPreview && step > 0 && (
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="text-xs text-muted-foreground hover:text-accent inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" /> {t('biz.rbBack')}
                </button>
              )}
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={false}
                animate={{ width: `${isPreview ? 100 : progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isPreview ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {questions[step].label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {questions[step].options.map((opt) => {
                    const selected = answers[questions[step].key] === opt.id
                    return (
                      <button
                        key={opt.id}
                        onClick={() => pick(questions[step].key, opt.id)}
                        className={`text-left px-5 py-4 rounded-2xl border-2 transition-all ${
                          selected
                            ? 'border-accent bg-accent/10 text-foreground'
                            : 'border-border bg-background hover:border-accent/50 hover:bg-accent/5 text-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {'emoji' in opt && <span className="text-xl">{(opt as { emoji: string }).emoji}</span>}
                          <span className="font-medium">{opt.label}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-muted-foreground mb-6">{t('biz.rbPreviewSub')}</p>
                <ol className="space-y-4 mb-8">
                  {roadmap!.steps.map((s, i) => (
                    <motion.li
                      key={s.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-accent/5 border border-accent/15"
                    >
                      <div className="mt-0.5 w-7 h-7 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{s.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onContinue({ business: roadmap!.biz, pain: roadmap!.pain, leads: roadmap!.leads, message: roadmap!.message })}
                    className="btn-electric flex-1 px-6 py-4 rounded-2xl font-semibold text-base inline-flex items-center justify-center gap-2"
                  >
                    {t('biz.rbContinue')} <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={reset}
                    className="px-5 py-4 rounded-2xl font-medium text-sm border border-border text-muted-foreground hover:bg-muted transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> {t('biz.rbRestart')}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
