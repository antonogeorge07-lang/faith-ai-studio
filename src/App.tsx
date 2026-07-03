import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Business from "./pages/Business";
import PersonaPage from "./pages/PersonaPage";
import Insights from "./pages/Insights";
import InsightPost from "./pages/InsightPost";
import DynamicPage from "./pages/DynamicPage";
import Auth from "./pages/Auth";
import AdminConsole from "./pages/AdminConsole";
import RequestPortal from "./pages/RequestPortal";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Root Domain points directly to your master WAT Sandbox Index page */}
          <Route path="/" element={<Index />} />
          <Route path="/studio" element={<Business />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
