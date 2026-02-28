import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-bg flex flex-col items-center justify-center min-h-dvh relative">
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative element */}
          <div className="mb-6 flex justify-center">
            <div className="w-12 h-px bg-rose-gold/40" />
            <div className="mx-3 text-rose-gold-light text-xs">✦</div>
            <div className="w-12 h-px bg-rose-gold/40" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-3 tracking-tight">
            The Spellbreaker
          </h1>
          <p className="font-sans text-muted-foreground text-lg mb-10 italic">
            End the enchantment.
          </p>

          {/* Decorative divider */}
          <div className="w-24 h-px bg-rose-gold/20 mx-auto mb-10" />

          <p className="font-sans text-foreground/70 text-sm leading-relaxed mb-12 max-w-sm mx-auto">
            A moment of clarity before the impulse takes over. Four questions. One grounded truth.
          </p>

          <button
            onClick={() => navigate("/begin")}
            className="btn-spell filigree-border"
          >
            Begin
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
