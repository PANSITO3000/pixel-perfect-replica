import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import phoneTransfer from "@/assets/phone-transfer.png";
import phonePayments from "@/assets/phone-payments.png";
import phoneCard from "@/assets/phone-card.png";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-24">
      {/* Lime glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-lime-glow pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground uppercase tracking-tight">
            Make Payments
            <br />
            Easy and Simplify
            <br />
            Your Finances
          </h1>

          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
            A new way to make payments easy, reliable and secure. You can manage all your transactions from your mobile phone.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button
              onClick={() => navigate("/signup")}
              className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-lime-glow transition-all hover:scale-105"
            >
              Get Started
            </button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="User"
                    className="w-9 h-9 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">100+</span>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex items-center gap-10"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-10 h-10 text-primary fill-primary/20" />
              <div>
                <p className="text-2xl font-bold text-foreground">$ 12M+</p>
                <p className="text-xs text-muted-foreground">Transactions</p>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">1200+</p>
              <p className="text-xs text-muted-foreground">Active Users</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Phone mockups */}
        <div className="flex-1 relative flex justify-center items-end min-h-[500px] lg:min-h-[600px]">
          {/* Phone 1 - Back left */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-0 lg:left-4 bottom-0 animate-float-3 z-10"
          >
            <img
              src={phoneCard}
              alt="Card details"
              className="w-44 md:w-52 lg:w-56 rounded-[2rem] phone-shadow"
            />
          </motion.div>

          {/* Phone 2 - Center front */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-20 animate-float-1"
          >
            <img
              src={phoneTransfer}
              alt="Transfer screen"
              className="w-52 md:w-64 lg:w-72 rounded-[2rem] phone-shadow"
            />
          </motion.div>

          {/* Phone 3 - Back right */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute right-0 lg:right-4 bottom-0 animate-float-2 z-10"
          >
            <img
              src={phonePayments}
              alt="Payments dashboard"
              className="w-44 md:w-52 lg:w-56 rounded-[2rem] phone-shadow"
            />
          </motion.div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L1440 120L1440 60C1440 60 1200 0 720 0C240 0 0 60 0 60L0 120Z"
            fill="hsl(0 0% 10%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
