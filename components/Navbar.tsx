import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-xl border-b border-white/5 bg-[#080810]/80">
      <div className="flex items-center">
        <Image
          src="/pmt-logo.png"
          alt="PMT logo"
          width={108}
          height={42}
          priority
          className="h-8 w-auto object-contain"
        />
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
        <a href="#services" className="hover:text-white/90 transition-colors">서비스</a>
        <a href="#about" className="hover:text-white/90 transition-colors">회사 소개</a>
        <a href="#why" className="hover:text-white/90 transition-colors">왜 PMT인가</a>
      </div>
      <button className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all">
        문의하기
      </button>
    </nav>
  );
}
