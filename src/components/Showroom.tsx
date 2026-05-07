import { motion } from "motion/react";

const cars = [
  {
    name: "G-Class",
    description: "Biểu tượng của sự bản lĩnh.",
    price: "Từ 11,750,000,000 VNĐ",
    image: "https://images.unsplash.com/photo-1520031441872-265e4938a72a?auto=format&fit=crop&q=80&w=1200",
    tag: "SUV"
  },
  {
    name: "S-Class",
    description: "Chuẩn mực của sự sang trọng.",
    price: "Từ 5,039,000,000 VNĐ",
    image: "https://images.unsplash.com/photo-1621932953986-156ce0cf42b1?auto=format&fit=crop&q=80&w=1200",
    tag: "Sedan"
  },
  {
    name: "EQS Sedan",
    description: "Tương lai của xe điện.",
    price: "Từ 4,839,000,000 VNĐ",
    image: "https://images.unsplash.com/photo-1617469767053-d3b508a0d825?auto=format&fit=crop&q=80&w=1200",
    tag: "Electric"
  }
];

export default function Showroom() {
  return (
    <section id="models" className="py-32 px-12 luxury-gradient">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-gold font-display font-medium tracking-[0.4em] text-[10px] uppercase mb-4 block">Bộ Sưu Tập</span>
          <h2 className="text-5xl font-serif tracking-tight">Dòng Xe <span className="italic">Nổi Bật</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-lg glass-card">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-white/80">
                  {car.tag}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-2">{car.name}</h3>
                  <p className="text-white/50 text-sm mb-4 font-light">{car.description}</p>
                </div>
                <div className="text-gold font-display font-bold text-sm">
                  {car.price}
                </div>
              </div>
              <button className="w-full mt-4 py-3 border border-white/10 group-hover:border-gold group-hover:text-gold transition-all font-display font-bold text-[10px] tracking-widest uppercase">
                Chi Tiết Sản Phẩm
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
