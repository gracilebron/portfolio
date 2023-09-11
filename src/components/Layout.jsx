import { motion } from "framer-motion";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout() {
	return (
		<>
			<Navigation />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.1 }}
			>
				<Suspense fallback={<Spinner animation="border" role="status" />}>
					<div className="content">
						<Outlet />
					</div>
				</Suspense>
			</motion.div>
			<Footer />
		</>
	);
}
