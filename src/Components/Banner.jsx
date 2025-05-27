import { motion } from "framer-motion";
import team1 from "../assets/Teams/Team .jpg";
import team2 from "../assets/Teams/team.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Image section with wider gap */}
        <div className="flex items-center justify-center">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 4, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-4xl rounded-br-4xl border-l-8 border-b-8 border-green-600 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 6, delay: 2, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-4xl rounded-br-4xl border-l-8 border-b-8 border-green-600 shadow-2xl"
          />
        </div>

        {/* Text section with entrance animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-5xl font-bold text-green-600"
          >
            New Jobs Alert!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="py-6"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            transition={{ type: "spring", stiffness: 300 }}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
