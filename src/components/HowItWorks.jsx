import React from 'react';
import { ArrowRight } from 'lucide-react';

const Step = ({ number, title, desc }) => (
  <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 font-bold">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        <p className="text-slate-600">{desc}</p>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="cara-kerja" className="relative bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Cara Kerja</h2>
          <p className="mt-3 text-slate-600">Tiga langkah sederhana untuk mulai mengelola nutrisi Anda.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <Step number="1️⃣" title="Ambil foto makanan" desc="Gunakan kamera ponsel atau unggah dari galeri." />
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="h-8 w-8 text-slate-400" />
          </div>
          <Step number="2️⃣" title="Analisis otomatis" desc="Sistem AI menganalisis nutrisi secara instan." />
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="h-8 w-8 text-slate-400" />
          </div>
          <Step number="3️⃣" title="Rekomendasi & pantau" desc="Terima saran personal dan lacak progres harian." />
        </div>

        <div id="mulai" className="mt-10 flex justify-center">
          <a
            href="#cta"
            className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-600/20 transition-transform hover:scale-[1.02] hover:bg-emerald-700 active:scale-[0.98]"
          >
            Mulai Analisis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
