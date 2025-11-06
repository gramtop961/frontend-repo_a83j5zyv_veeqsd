import React from 'react';
import { Camera, Brain, User, History, BarChart3, HelpCircle } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Upload Foto Makanan',
    desc: 'Unggah dari kamera atau file untuk mulai analisis nutrisi.'
  },
  {
    icon: Brain,
    title: 'Analisis AI Otomatis',
    desc: 'Deteksi makanan dan perkirakan makro & mikro nutrisi secara cerdas.'
  },
  {
    icon: User,
    title: 'Profil & Preferensi',
    desc: 'Sesuaikan target dan pantangan diet sesuai kebutuhan Anda.'
  },
  {
    icon: History,
    title: 'Riwayat Harian',
    desc: 'Timeline konsumsi yang rapi untuk memantau pola makan.'
  },
  {
    icon: BarChart3,
    title: 'Grafik Nutrisi',
    desc: 'Visualisasi asupan makro & mikro agar mudah dipahami.'
  },
  {
    icon: HelpCircle,
    title: 'Tutorial Foto',
    desc: 'Panduan memotret makanan dengan sudut & pencahayaan optimal.'
  },
];

const Features = () => {
  return (
    <section id="fitur" className="relative bg-gradient-to-b from-white to-sky-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Fitur Utama</h2>
          <p className="mt-3 text-slate-600">Enam kemampuan inti yang membuat pengelolaan nutrisi lebih mudah.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
