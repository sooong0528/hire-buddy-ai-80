import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import RecruitDashboard from "./pages/recruit/RecruitDashboard.tsx";
import JobsList from "./pages/recruit/JobsList.tsx";
import JobNew from "./pages/recruit/JobNew.tsx";
import ResumeLibrary from "./pages/recruit/ResumeLibrary.tsx";
import CandidateList from "./pages/recruit/CandidateList.tsx";
import CandidateDetail from "./pages/recruit/CandidateDetail.tsx";
import CandidateLedger from "./pages/recruit/CandidateLedger.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recruit" element={<RecruitDashboard />} />
          <Route path="/recruit/jobs" element={<JobsList />} />
          <Route path="/recruit/jobs/new" element={<JobNew />} />
          <Route path="/recruit/jobs/:jobId/candidates" element={<CandidateList />} />
          <Route path="/recruit/resumes" element={<ResumeLibrary />} />
          <Route path="/recruit/candidates" element={<CandidateLedger />} />
          <Route path="/recruit/candidates/:id" element={<CandidateDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
