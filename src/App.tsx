/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showroom from "./components/Showroom";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white overflow-x-hidden">
      {/* Custom Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Showroom />
        
        {/* Quote Section */}
        <section className="py-40 px-6 text-center border-y border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 max-w-4xl mx-auto leading-tight">
              "Đỉnh cao của sự sang trọng không nằm ở những gì phô trương, mà nằm ở <span className="italic">những chi tiết hoàn hỏa</span>."
            </h2>
            <div className="h-20 w-[1px] bg-gold mx-auto mt-12" />
          </motion.div>
        </section>

        <Technology />

        {/* Brand Promise Section */}
        <section className="py-32 px-12 bg-white text-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-gray-100 p-8 flex flex-col justify-end"
              >
                <div className="text-4xl font-serif mb-2">99%</div>
                <div className="text-[10px] tracking-widest font-bold uppercase opacity-40">Khách hàng hài lòng</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-square bg-black text-white p-8 flex flex-col justify-end"
              >
                <div className="text-4xl font-serif mb-2">128+</div>
                <div className="text-[10px] tracking-widest font-bold uppercase opacity-40">Năm di sản</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-square bg-gold text-white p-8 flex flex-col justify-end"
              >
                <div className="text-4xl font-serif mb-2">24/7</div>
                <div className="text-[10px] tracking-widest font-bold uppercase opacity-40">Hỗ trợ cao cấp</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-square bg-gray-100 p-8 flex flex-col justify-end"
              >
                <div className="text-4xl font-serif mb-2">5★</div>
                <div className="text-[10px] tracking-widest font-bold uppercase opacity-40">Tiêu chuẩn an toàn</div>
              </motion.div>
            </div>
            <div>
              <span className="text-gold font-display font-medium tracking-[0.4em] text-[10px] uppercase mb-4 block">Di Sản</span>
              <h2 className="text-5xl font-serif tracking-tight mb-8">Cam Kết Từ <span className="italic">Mercedes-Benz</span></h2>
              <p className="text-black/60 text-lg font-light leading-relaxed mb-8">
                Hơn cả một phương tiện di chuyển, mỗi chiếc Mercedes-Benz là một tác phẩm nghệ thuật kỹ thuật, được chế tác để mang lại sự an tâm tuyệt đối và niềm tự hào cho chủ nhân.
              </p>
              <button className="bg-black text-white px-10 py-4 font-display font-semibold text-xs tracking-widest uppercase hover:bg-gold transition-all duration-300">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
