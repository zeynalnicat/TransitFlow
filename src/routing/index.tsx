import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import PasswordProtection from "../components/PasswordProtection";
import Liceses from "../components/licenses";
import ChangeLog from "../pages/ChangeLog";
import Project from "../pages/Project";
import ServiceSingle from "../pages/ServiceSingle";
import AboutUsPage from "../pages/AboutUsPage";
import BlogPage from "../pages/BlogPage";
import BlogSingle from "../pages/BlogSingle";
import ContactPage from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";
import PricingPage from "../pages/PricingPage";
import ProjectPage from "../pages/ProjectSingle";
import Services from "../pages/Services";
import TeamPage from "../pages/Team-Page";

const HomePage = lazy(() => import("../pages/Home"));

const WebRouting = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-single" element={<ProjectPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogSingle />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/change-log" element={<ChangeLog />} />
        <Route path="/licenses" element={<Liceses />} />
        <Route path="/password-protection" element={<PasswordProtection />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Suspense>
  );
};

export default WebRouting;
