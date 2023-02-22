import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import Animation from "./components/Animation";
import Navbar from "./components/Navbar";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Designs = lazy(() => import("./pages/Designs"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Suspense fallback={<Spinner animation="border" className="loader" />}>
				<Routes key={location.pathname} location={location}>
					<Route element={<Navbar />}>
						<Route element={<Animation />}>
							<Route path="/" element={<Home />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/experience" element={<Experience />} />
							<Route path="/designs" element={<Designs />} />
						</Route>
					</Route>
				</Routes>
			</Suspense>
		</AnimatePresence>
	);
}

export default App;
