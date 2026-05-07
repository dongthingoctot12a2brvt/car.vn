import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1920" 
          alt="Mercedes Hero" 
          className="w-full h-full object-cover filter brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gold font-display font-medium tracking-[0.5em] text-xs uppercase mb-6 block">
            Kỷ Nguyên Mới Của Sự Sang Trọng
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-8 tracking-tighter">
            The Best or <span className="italic">Nothing.</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/60 font-light text-lg mb-12 leading-relaxed">
            Khám phá sự kết hợp hoàn hảo giữa công nghệ tiên phong, hiệu suất vượt trội và thiết kế đẳng cấp thế giới.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-white text-black px-10 py-4 font-display font-semibold text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300">
              Khám Phá Các Dòng Xe
            </button>
            <button className="group flex items-center gap-2 text-white font-display font-semibold text-xs tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white transition-all">
              Đăng ký lái thử <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-12 left-12 right-12 z-10 hidden lg:flex items-center justify-between border-t border-white/10 pt-8">
        <div className="flex gap-16">
          <div>
            <div className="text-2xl font-serif">0-100 km/h</div>
            <div className="text-[10px] text-white/40 tracking-widest uppercase mt-1">Trong 3.8 giây</div>
          </div>
          <div>
            <div className="text-2xl font-serif">770 km</div>
            <div className="text-[10px] text-white/40 tracking-widest uppercase mt-1">Phạm vi hoạt động (WLTP)</div>
          </div>
          <div>
            <div className="text-2xl font-serif">536 HP</div>
            <div className="text-[10px] text-white/40 tracking-widest uppercase mt-1">Công suất cực đại</div>
          </div>
        </div>
        <div className="text-[10px] text-white/40 tracking-widest uppercase">EQS 580 4MATIC Sedan</div>
      </div>
    </section>
  );
}
