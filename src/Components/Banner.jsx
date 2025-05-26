import { motion } from "motion/react";
import team1 from "../assets/Teams/Team .jpg";
import team2 from "../assets/Teams/team.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-4xl rounded-br-4xl border-l-8 border-b-8 border-green-600 shadow-2xl"
          />
          <motion.img
          animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10,delay:5, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-4xl rounded-br-4xl border-l-8 border-b-8 border-green-600 shadow-2xl"
          />
        </div>
        <div>
          <motion.h1 animate={{ rotate: 700,transition:{duration:5} }} className="text-5xl font-bold">
            Box Office News!
          </motion.h1>
          
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
