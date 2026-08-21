import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'sonner'
import Business from './pages/Business'

// Route-level code splitting: only the landing page ships in the initial bundle.
const Index = lazy(() => import('./pages/Index'))
const About = lazy(() => import('./pages/About'))
const Auth = lazy(() => import('./pages/Auth'))
const AdminConsole = lazy(() => import('./pages/admin/Console'))
const RequestPortal = lazy(() => import('./pages/RequestPortal'))
const Unsubscribe = lazy(() => import('./pages/Unsubscribe'))
const PersonaPage = lazy(() => import('./pages/PersonaPage'))
const Insights = lazy(() => import('./pages/Insights'))
const InsightPost = lazy(() => import('./pages/InsightPost'))
const DynamicPage = lazy(() => import('./pages/DynamicPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-border border-t-accent animate-spin" aria-label="Loading" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Business />} />
          <Route path="/studio" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/for/:persona" element={<PersonaPage />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightPost />} />
          <Route path="/p/:slug" element={<DynamicPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<AdminConsole />} />
          <Route path="/admin/inbox" element={<Navigate to="/admin" replace />} />
          <Route path="/admin/board" element={<Navigate to="/admin" replace />} />
          <Route path="/r/:token" element={<RequestPortal />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
