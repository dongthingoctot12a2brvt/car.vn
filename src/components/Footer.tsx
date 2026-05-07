import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-32 pb-16 px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="space-y-8">
            <h3 className="text-xl font-display font-bold tracking-tighter">MERCEDES-BENZ</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Chúng tôi không chỉ bán xe, chúng tôi mang tới một phong cách sống đẳng cấp và những trải nghiệm không bao giờ quên.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-gold font-display font-bold text-xs tracking-widest uppercase">Liên Hệ</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group">
                <MapPin size={18} className="text-gold" />
                <span className="text-sm">HCM: 811 Nguyễn Văn Linh, Q7</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group">
                <Phone size={18} className="text-gold" />
                <span className="text-sm">1800 4001</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group">
                <Mail size={18} className="text-gold" />
                <span className="text-sm">contact@mercedes.com.vn</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-gold font-display font-bold text-xs tracking-widest uppercase">Khám Phá</h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Dòng xe điện EQ</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mercedes-AMG</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mercedes-Maybach</li>
              <li className="hover:text-white transition-colors cursor-pointer">Đặt lịch lái thử</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-gold font-display font-bold text-xs tracking-widest uppercase">Bản Tin</h4>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Nhận những thông tin mới nhất về các dòng xe và sự kiện của chúng tôi.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors flex-1"
              />
              <button className="bg-white text-black px-4 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-white transition-all">Gửi</button>
            </div>
          </div>

        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-white/20 tracking-widest uppercase">
            © 2024 Mercedes-Benz Vietnam. All rights reserved.
          </div>
          <div className="flex gap-8 text-[10px] text-white/20 tracking-widest uppercase font-bold">
            <a href="#" className="hover:text-white transition-colors">Bảo Mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều Khoản</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
