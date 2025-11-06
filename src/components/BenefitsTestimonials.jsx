import React from 'react';
import { HeartPulse, Sparkles, Quote } from 'lucide-react';

const Benefits = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-emerald-700">
        <HeartPulse className="h-6 w-6" />
        <h4 className="text-lg font-semibold text-slate-900">Dukungan Pemulihan</h4>
      </div>
      <p className="mt-2 text-slate-600">
        Membantu pasien pasca perawatan menjaga diet sesuai kebutuhan medis.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-emerald-700">
        <Sparkles className="h-6 w-6" />
        <h4 className="text-lg font-semibold text-slate-900">Pantau Tanpa Ribet</h4>
      </div>
      <p className="mt-2 text-slate-600">
        Memudahkan pemantauan nutrisi tanpa menghitung manual.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-emerald-700">
        <Sparkles className="h-6 w-6" />
        <h4 className="text-lg font-semibold text-slate-900">Wawasan & Grafik</h4>
      </div>
      <p className="mt-2 text-slate-600">
        Memberikan wawasan dan grafik asupan harian yang mudah dipahami.
      </p>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-slate-500">
        <Quote className="h-5 w-5" />
        <span className="text-sm">Testimoni</span>
      </div>
      <p className="mt-3 text-slate-800 italic">
        “Sebagai ahli gizi klinis, saya melihat pendekatan ini sangat membantu pasien
        untuk mematuhi diet medis dengan cara yang mudah dan terukur.”
      </p>
      <p className="mt-2 text-slate-600">— dr. Andini, Sp.GK</p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-slate-500">
        <Quote className="h-5 w-5" />
        <span className="text-sm">Pengguna</span>
      </div>
      <p className="mt-3 text-slate-800 italic">
        “Cukup foto makanan, saya langsung tahu asupan kalori dan nutrisi hari itu. Praktis banget!”
      </p>
      <p className="mt-2 text-slate-600">— Rani, 28 tahun</p>
    </div>
  </div>
);

const BenefitsTestimonials = () => {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-emerald-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Manfaat & Kepercayaan</h2>
          <p className="mt-3 text-slate-600">Dirancang untuk hasil nyata dalam perjalanan kesehatan Anda.</p>
        </div>

        <div className="mt-10">
          <Benefits />
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default BenefitsTestimonials;
