import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Animation() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Outlet />
		</motion.div>
	);
}
