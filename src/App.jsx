import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Designs = lazy(() => import("./pages/Designs"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Certifications = lazy(() => import("./pages/Certifications"));

function App() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes key={location.pathname} location={location}>
				<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/designs" element={<Designs />} />
						<Route path="/certifications" element={<Certifications />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
}

export default App;
