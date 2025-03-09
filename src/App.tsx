
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Platform pages
import Features from "./pages/platform/Features";
import Solutions from "./pages/platform/Solutions";
import Pricing from "./pages/platform/Pricing";
import Catalog from "./pages/Catalog";

// Company pages
import About from "./pages/company/About";
import Blog from "./pages/company/Blog";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";

// Resources pages
import Documentation from "./pages/resources/Documentation";
import Support from "./pages/resources/Support";
import Partners from "./pages/resources/Partners";
import Legal from "./pages/resources/Legal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Platform Routes */}
          <Route path="/features" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/catalog" element={<Catalog />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Resources Routes */}
          <Route path="/docs" element={<Documentation />} />
          <Route path="/support" element={<Support />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/legal" element={<Legal />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
