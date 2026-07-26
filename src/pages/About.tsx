'use client'

import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Seo } from '@/components/Seo'

const credentials = [
  'Product and platform studio focused on local businesses and lean MVPs',
  'AI lead handling: capture, qualify, book, hand off',
  'Websites shipped in days, not quarters',
  'Own product track: sprint analytics and real-time translation layers',
  'Local-first infrastructure, no vendor lock-in',
  'Full handover: you own the accounts, the code and the data',
]

const stats = [
  { value: '24h', label: 'from first message to a free roadmap' },
  { value: '5-7', label: 'days to a live, production-ready site' },
  { value: '100%', label: 'ownership handed to you at the end' },
]

const services = [
  {
    n: '01',
    title: 'Strategy & Roadmap',
    body: 'We map your business, your customers and where leads currently leak. You get a written plan with priorities, scope and timeline before anything is built.',
    points: ['Business and competitor review', 'Lead-flow audit', 'Prioritised build plan'],
  },
  {
    n: '02',
    title: 'Website & Platform Build',
    body: 'A fast, mobile-first site built on a standard stack, structured for local search and wired to your booking, messaging and analytics tools.',
    points: ['Mobile-first build', 'Local SEO structure', 'Booking and CRM integrations'],
  },
  {
    n: '03',
    title: 'AI Automation',
    body: 'Automation that answers after hours: qualifies enquiries, books the job, and hands warm leads to you with the full context attached.',
    points: ['24/7 lead capture', 'Automatic qualification', 'Warm handoff with context'],
  },
]

const process = [
  { n: '01', title: 'Discovery', body: 'One short call. We learn the business, the customers and the goal.' },
  { n: '02', title: 'Roadmap', body: 'A free written plan within 24 hours, with scope and sequence.' },
  { n: '03', title: 'Design', body: 'Look, structure and copy agreed before a line of production code.' },
  { n: '04', title: 'Build', body: 'Site and automation built in the open, with a preview you can watch.' },
  { n: '05', title: 'Launch', body: 'Domain, analytics, search console and integrations wired and tested.' },
  { n: '06', title: 'Handover', body: 'Accounts, docs and access transferred. The work is yours to keep.' },
]

export default function About() {
  const navigate = useNavigate()
  const toContact = () => navigate('/#intake')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="About | Invictus Faith Studio"
        description="A product studio building websites and AI automation for local businesses. Clear process, fast delivery, full ownership handed back to you."
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
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">About the studio</span>
              <h1
                className="font-bold leading-[1.03] tracking-tight mt-6"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
              >
                We build the system that <span className="text-accent">wins the work</span> while you do the work.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl">
                Invictus Faith Studio is a small product studio. We ship websites and AI automation for local
                businesses and early founders, then hand the whole thing over. No retainers you cannot leave, no
                platforms you cannot export.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  onClick={toContact}
                  className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold"
                >
                  Get your free roadmap <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/studio')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold border border-border hover:border-accent transition-colors"
                >
                  See the work
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">What we are</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
                Engineering discipline, studio speed
              </h2>
              <p className="text-muted-foreground mt-6 max-w-lg">
                Every project runs on the same standard stack and the same written process, so the result is
                predictable and anyone can maintain it after us.
              </p>
            </div>
            <ul className="space-y-4">
              {credentials.map((c) => (
                <li key={c} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-base">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 border-y border-border">
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
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">What we do</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">Three things, done properly</h2>
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
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">How we work</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">From first call to handover in six steps</h2>
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Tell us about your business</h2>
            <p className="text-primary-foreground/80 mt-6 text-lg">
              Send a few lines about what you do. You get a written roadmap back within 24 hours, free, with no
              obligation to build anything with us.
            </p>
            <button
              onClick={toContact}
              className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold mt-10"
            >
              Start free <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
