import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[88vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 shadow-sm">
            <Rocket className="h-4 w-4" />
            Healthtech + AI Nutrisi
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Kelola Nutrisi Lebih Cerdas dengan Foto Makanan Anda
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600">
            Analisis otomatis dan rekomendasi diet untuk mendukung pemulihan kesehatan Anda.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#mulai"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-600/20 transition-transform hover:scale-[1.02] hover:bg-emerald-700 active:scale-[0.98]"
            >
              Mulai Analisis
            </a>
            <a
              href="#cara-kerja"
              className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white px-6 py-3 text-sky-700 font-semibold shadow-sm transition-colors hover:bg-sky-50"
            >
              Lihat Cara Kerja
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
