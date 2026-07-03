INSERT INTO public.posts (slug, title, excerpt, body_md, status, published_at, tags)
VALUES
(
  'shipping-mvps-in-seven-days',
  'Shipping an MVP in seven days without cutting the corners that matter',
  'A practical playbook for founders: what to keep, what to cut, and how to ship a working product in a week that real users will actually open twice.',
  $md$# Shipping an MVP in seven days without cutting the corners that matter

Most MVPs do not fail because they shipped fast. They fail because they shipped the wrong thing slowly. After building dozens of MVPs at Invictus Faith Studio, the pattern is consistent: the founders who learn fastest are the ones who get a working product in front of real users inside a week, then iterate against what those users actually do.

Here is the playbook we use to compress a typical six-month build into seven days, without leaving the corners that matter to chance.

## Day 1: ruthless scope

Write down every feature you think the MVP needs. Cross out everything that is not required for the **single core action** a user must take to prove your hypothesis. If your product is "AI tutor for school kids", the core action is probably "ask a question, get a useful answer." Onboarding, billing, profiles, history, dashboards: none of that is day-one scope.

The rule we use: if a feature does not change whether the core action works, it ships in week two.

## Day 2 to 4: build the spine

Build the smallest end-to-end version of the product. Real database. Real auth. Real AI calls. No stubs, no fake data. The point is to test the **whole pipeline**, not a slice of it. A working prototype with one screen beats a beautiful demo of five.

Tools that earn their keep here:
- Supabase or Lovable Cloud for database, auth, and storage on day one
- Lovable AI Gateway when the product needs an LLM
- Stripe for payments only if money on day one is part of the hypothesis

## Day 5: real users, not friends

By day five, the product is in front of five strangers who match your target user. Friends and family will be nice; they will not tell you the truth. Recruit through a small post on X, a niche subreddit, or a paid call on UserInterviews. Watch them use it without prompts. Note every place they pause, frown, or close the tab.

## Day 6: cut and sharpen

You will discover that two of the features you fought to keep are confusing, and one feature you cut on day one is the actual product. Reshape the build around what the users did, not what they said.

## Day 7: ship publicly

Post a public launch. Personal network, X, LinkedIn, a small Product Hunt or Indie Hackers thread. The goal is not virality, it is **a second cohort of users** who arrived without you handing them the link.

## Corners we never cut

A fast MVP does not mean a fragile one. Even on a seven-day build we keep:

- Row Level Security on every database table from the first migration
- A real auth flow, not a hardcoded admin
- A free SSL certificate and a real domain
- Sentry or equivalent error tracking, even on day one
- A backup plan for the database (daily snapshots are free on most providers)

Skipping these does not save time. It hides bugs you will pay for in week two.

## What a seven-day MVP is not

It is not a hackathon project, it is not a Figma mock with a fake button, and it is not a long landing page with a waitlist. It is a working product, on a real domain, that a stranger can use without you in the room. Anything less and you have not actually tested your hypothesis, you have tested whether you can make a slide deck.

If you are sitting on an idea and the build keeps slipping, the bottleneck is almost never the engineering. It is the scope. Cut harder than feels comfortable, ship a working spine, and let real users tell you what to build in week two.$md$,
  'published',
  now() - interval '3 days',
  ARRAY['mvp', 'founders', 'shipping']
),
(
  'ai-for-small-business-without-the-hype',
  'AI for small business without the hype: three things that actually save you hours',
  'Forget the magic-wand demos. Three concrete AI workflows that a hairdresser, a plumber, or a coffee shop can wire up this week and feel the difference next week.',
  $md$# AI for small business without the hype: three things that actually save you hours

If you run a small business, the AI conversation in 2026 is exhausting. Every week there is a new tool, a new model, a new founder on LinkedIn promising that AI will replace your accountant, your bookings clerk, and your marketing agency by Q3. Most of it is noise.

Here is the part that is not noise. There are three AI workflows that any small business, from a hairdresser to a plumber to a corner coffee shop, can wire up in a week and feel the difference within the next. None of them require you to learn a new tool, hire a developer, or rethink your business.

## 1. The first-reply assistant for messages

Every small business has the same leak: a customer messages on Instagram, WhatsApp, or the website contact form, and nobody replies for six hours because you were cutting hair, fixing a pipe, or pulling shots. By then the customer has booked the competitor.

The fix is not "an AI that books for you." It is much simpler: an AI that sends a useful first reply in under a minute. Something like:

> Thanks for reaching out. I will get back to you personally by 6pm today. In the meantime, here are our opening hours and the fastest way to book.

That single message, sent automatically, holds the customer attention long enough for you to reply properly. We have measured it on client sites: it lifts conversion from inbound messages by 20 to 40 percent. The setup is one form, one webhook, and a five-line prompt.

## 2. The weekly review of your own numbers

You almost certainly have a spreadsheet, a Square dashboard, or a booking system with numbers you never look at. AI is genuinely good at turning that mess into one paragraph every Monday morning.

Set up a weekly job that pulls last week revenue, bookings, and top services, then asks an LLM:

> Compare this week to the previous four weeks. What is up, what is down, and what is one specific thing the owner should consider doing this week?

You get a Monday email that reads like a sharp junior analyst wrote it. It does not replace your judgement; it just makes sure you actually look at the numbers.

## 3. The "rewrite this for me" button on everything you publish

Customers judge small businesses on the polish of their writing. Menus, service descriptions, Instagram captions, the auto-reply above. AI rewrites all of it in your voice in seconds, if you give it three examples of how you actually talk.

The trick is to **save your voice once**. Paste three of your favourite past captions or emails into a prompt that starts with:

> You write in this voice. Rewrite the text below in the same voice, same length, same energy.

Then any time you draft something, you paste it under that prompt and get back a tighter version that still sounds like you. This is the single biggest quality jump most small businesses can make in a week.

## What we do not recommend

- **A chatbot on your website that answers everything** — they hallucinate prices, hours, and policies. Customers lose trust the moment they catch one out.
- **Replacing your team with AI** — your team is not the bottleneck. The bottleneck is the boring, repetitive work around them.
- **Buying a "complete AI platform"** — the three workflows above can be wired up with tools you already pay for and a few hours of setup.

AI is not going to magically grow your business. It is going to quietly remove the small friction points that cost you customers every week. Start with the inbox.$md$,
  'published',
  now() - interval '1 day',
  ARRAY['ai', 'small-business', 'workflows']
)
ON CONFLICT (slug) DO NOTHING;