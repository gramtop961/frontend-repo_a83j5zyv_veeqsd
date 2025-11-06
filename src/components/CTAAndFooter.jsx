import React from 'react';

const CTAAndFooter = () => {
  return (
    <section id="cta" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-sky-600 p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-semibold">Siap mulai perjalanan nutrisi yang lebih cerdas?</h3>
          <p className="mt-3 text-white/90">Coba gratis dan rasakan kemudahan analisis nutrisi berbasis foto.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#mulai" className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Mulai Analisis Sekarang
            </a>
            <a href="#fitur" className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white/90 hover:bg-white/10">
              Lihat Fitur
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-slate-700 font-semibold">NutriLens</div>
          <nav className="flex items-center gap-6 text-slate-600 justify-center md:justify-start">
            <a className="hover:text-slate-900" href="#">Tentang</a>
            <a className="hover:text-slate-900" href="#">Privasi</a>
            <a className="hover:text-slate-900" href="#">Kontak</a>
          </nav>
          <div className="text-slate-500 text-sm md:text-right">© {new Date().getFullYear()} NutriLens. Hak Cipta Dilindungi.</div>
        </div>
      </footer>
    </section>
  );
};

export default CTAAndFooter;
