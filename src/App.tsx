import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AccreditationPage from "./pages/services/AccreditationPage";
import SiteVisitPage from "./pages/services/SiteVisitPage";
import CompliancePage from "./pages/services/CompliancePage";
import LeadershipPage from "./pages/services/LeadershipPage";
import TrainingPage from "./pages/services/TrainingPage";
import WhoWeServePage from "./pages/WhoWeServePage";
import GovernmentPage from "./pages/GovernmentPage";
import OpportunityPage from "./pages/government/OpportunityPage";
import ProposalPage from "./pages/government/ProposalPage";
import TeamingPage from "./pages/government/TeamingPage";
import PostAwardPage from "./pages/government/PostAwardPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/accreditation" element={<AccreditationPage />} />
            <Route path="/services/site-visit" element={<SiteVisitPage />} />
            <Route path="/services/compliance" element={<CompliancePage />} />
            <Route path="/services/leadership" element={<LeadershipPage />} />
            <Route path="/services/training" element={<TrainingPage />} />
            <Route path="/who-we-serve" element={<WhoWeServePage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/government/opportunity" element={<OpportunityPage />} />
            <Route path="/government/proposal" element={<ProposalPage />} />
            <Route path="/government/teaming" element={<TeamingPage />} />
            <Route path="/government/post-award" element={<PostAwardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
