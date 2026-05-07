import { motion } from "motion/react";
import { Search, Menu, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-12">
        <div className="text-2xl font-display font-bold tracking-tighter cursor-pointer">
          MERCEDES-BENZ
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-display font-medium tracking-[0.2em] text-white/60">
          <a href="#models" className="hover:text-white transition-colors">DÒNG XE</a>
          <a href="#tech" className="hover:text-white transition-colors">CÔNG NGHỆ</a>
          <a href="#about" className="hover:text-white transition-colors">DỊCH VỤ</a>
          <a href="#contact" className="hover:text-white transition-colors">LIÊN HỆ</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="hover:text-gold transition-colors"><Search size={20} /></button>
        <button className="hover:text-gold transition-colors"><User size={20} /></button>
        <button className="hover:text-gold transition-colors"><ShoppingBag size={20} /></button>
        <button className="md:hidden"><Menu size={20} /></button>
      </div>
    </motion.nav>
  );
}
