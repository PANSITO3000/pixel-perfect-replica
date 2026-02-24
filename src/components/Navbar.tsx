import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="flex items-center gap-2">
        <Wallet className="w-6 h-6 text-primary" />
        <span className="text-xl font-bold font-display text-foreground tracking-wider">PAY</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase">
          Get Card
        </a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase">
          About Us
        </a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase">
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          Log In
        </button>
        <button className="px-5 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-lime-glow transition-colors">
          Sign up
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
