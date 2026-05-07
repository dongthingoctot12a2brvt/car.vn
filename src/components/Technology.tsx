import { motion } from "motion/react";
import { Zap, Shield, Cpu, Sparkles } from "lucide-react";

export default function Technology() {
  return (
    <section id="tech" className="py-32 px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-display font-medium tracking-[0.4em] text-[10px] uppercase mb-4 block">Sáng Tạo</span>
            <h2 className="text-5xl font-serif tracking-tight mb-8">Trải Nghiệm <span className="italic text-white">Số Đột Phá</span></h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="mt-1 p-3 rounded-full bg-white/5 border border-white/10 text-gold">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold mb-2 tracking-wide">Hệ Thông MBUX Hyperscreen</h4>
                  <p className="text-white/50 font-light leading-relaxed">
                    Màn hình rộng trải dài trên toàn bộ bảng taplo, mang đến trải nghiệm điều khiển trực quan và cá nhân hóa tuyệt đối thông qua trí tuệ nhân tạo.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1 p-3 rounded-full bg-white/5 border border-white/10 text-gold">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold mb-2 tracking-wide">Intelligent Drive</h4>
                  <p className="text-white/50 font-light leading-relaxed">
                    Hệ thống hỗ trợ lái xe tiên tiến nhất thế giới, giúp hành trình của bạn trở nên an toàn và thư thái hơn bao giờ hết.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mt-1 p-3 rounded-full bg-white/5 border border-white/10 text-gold">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-display font-semibold mb-2 tracking-wide">Hiệu Suất Điện Năng</h4>
                  <p className="text-white/50 font-light leading-relaxed">
                    Kiến trúc xe điện EQS đột phá mang lại phạm vi hoạt động ấn tượng và khả năng sạc nhanh vượt trội.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" 
              alt="Mercedes Interior" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
              referrerPolicy="no-referrer"
            />
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 p-6 glass-card rounded-xl hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <Sparkles className="text-gold" />
                <div>
                  <div className="text-[10px] text-white/40 tracking-widest uppercase">Mood Ambient</div>
                  <div className="font-serif">Violet Dream</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/10 blur-[120px] -z-0 rounded-full" />
        </div>
      </div>
    </section>
  );
}
