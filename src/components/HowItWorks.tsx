import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Register",
    description: "Register yourself as a Payfast application user",
  },
  {
    number: 2,
    title: "Add new card",
    description: "Create a new card for you to use anytime and anywhere",
  },
  {
    number: 3,
    title: "Success",
    description: "You can use payfast in peace and all its facilities",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-section-dark py-20 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-primary" />
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            How it works
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Dashed line connector */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px border-t-2 border-dashed border-primary/40 z-0" style={{ left: '20%', right: '20%' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex flex-col items-center relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold text-lg mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
