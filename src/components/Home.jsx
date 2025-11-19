/* eslint-disable no-unused-vars */
import BusinessCard from "./BusinessCard";
import { motion } from "framer-motion";

function Home({ person }) {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-xl"
      >
        <BusinessCard person={person} />
      </motion.div>
    </div>
  );
}
export default Home;
