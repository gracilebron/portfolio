import { motion } from "framer-motion";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Animation() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.1 }}
		>
			<Suspense fallback={<Spinner className="loader" />}>
				<Outlet />
			</Suspense>
		</motion.div>
	);
}
