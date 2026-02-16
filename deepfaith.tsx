import { useState, useEffect } from 'react';
import { CheckCircle, Quote, Globe, Target } from 'lucide-react';

type Language = 'id' | 'en';

interface Translation {
  switch: string;
  badge: string;
  heroTitle: string;
  heroSub1: string;
  heroSub2: string;
  heroSub3: string;
  heroDesc1: string;
  heroDesc2: string;
  painNum: string;
  painLabel: string;
  painTitle: string;
  painLead1: string;
  painLead2: string;
  painLead3: string;
  painFactTitle: string;
  painFact1Label: string;
  painFact2Label: string;
  painAnalogy1: string;
  painAnalogy2: string;
  painResultTitle: string;
  painResults: string[];
  painFinal1: string;
  painFinal2: string;
  painFinal3: string;
  gainNum: string;
  gainLabel: string;
  gainTitle: string;
  gainLead1: string;
  gainLead2: string;
  gainLead3: string;
  gainLead4: string;
  gainBoxTitle: string;
  gainBoxDesc1: string;
  gainBoxDesc2: string;
  gainBoxDesc3: string;
  gainNoTitle: string;
  gainNoItems: string[];
  gainYesTitle: string;
  gainYesItems: string[];
  gainFinal: string;
  methodNum: string;
  methodLabel: string;
  methodTitle: string;
  methodRumus: string;
  methodAtom1: string;
  methodAtom2: string;
  methodAtom3: string;
  methodAtom4: string;
  methodNiat1: string;
  methodNiat2: string;
  neutronLabel: string;
  neutronTitle: string;
  neutronDesc: string;
  neutronRasakan: string;
  neutronItems: string[];
  protonLabel: string;
  protonTitle: string;
  protonDesc: string;
  protonRasakan: string;
  protonItems: string[];
  kunciTitle: string;
  kunciLead1: string;
  kunciLead2: string;
  kunciRules: string[];
  kunciBox1: string;
  kunciBox2: string;
  kunciFocusTitle: string;
  kunciFocusDesc: string;
  kunciFiftyPercent: string;
  methodFinal: string;
  statsTitle: string;
  statsSub: string;
  statsFail1Title: string;
  statsFail1Desc: string;
  statsFail2Title: string;
  statsFail2Desc: string;
  statsWinTitle: string;
  statsWinDesc: string;
  statsStatusFail: string;
  statsStatusWin: string;
  resultsTitle: string;
  resultsItems: string[];
  testiTitle: string;
  testiCommTitle: string;
  ctaTitle: string;
  ctaSub1: string;
  ctaSub2: string;
  ctaFinal: string;
  ctaWait: string;
  ctaButton: string;
  footerDesc: string;
  footerTag: string;
  footerLinks: string[];
  footerCopyright: string;
  footerSub: string;
}

export default function ElVisionLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [lang, setLang] = useState<Language>('id');

  const t: Record<Language, Translation> = {
    id: {
      switch: "English",
      badge: "eL Vision True Power",
      heroTitle: "DEEP FAITH",
      heroSub1: "KENAPA KEYAKINAN",
      heroSub2: "DAN KEINGINANMU",
      heroSub3: "HANCUR LEBUR?",
      heroDesc1: "Bukan karena kurang usaha. Tapi karena kamu menggunakan ",
      heroDesc2: "ALAT YANG SALAH.",
      painNum: "01",
      painLabel: "THE PAIN:",
      painTitle: "Kamu Bekerja di Alamat yang Salah",
      painLead1: "Selama ini, kamu menggunakan ",
      painLead2: "Alam Sadar",
      painLead3: " untuk mengejar mimpi. Dan itulah akar kehancuranmu.",
      painFactTitle: "Alam Sadar itu LAMBAT. TERBATAS. BOROS ENERGI.",
      painFact1Label: "Alam Sadar",
      painFact2Label: "Alam Bawah Sadar",
      painAnalogy1: "Kamu pakai motor bebek untuk lomba MotoGP. Kamu pakai pisau dapur untuk bedah jantung. ",
      painAnalogy2: "Salah alamat, bro.",
      painResultTitle: "Dan hasilnya?",
      painResults: [
        'Lelah mental yang luar biasa',
        'Stres berulang karena realita tidak sesuai "rencana"',
        'Obsesi yang menggerogoti ketenangan',
        'Kegagalan yang datang lagi dan lagi'
      ],
      painFinal1: "Ini bukan soal niat kurang kuat. Ini soal kamu memakai sistem yang ",
      painFinal2: "TIDAK DIDESAIN",
      painFinal3: " untuk pekerjaan ini.",
      gainNum: "02",
      gainLabel: "THE GAIN:",
      gainTitle: "Probabilitas Menang 90%++",
      gainLead1: "Bayangkan: Kamu ",
      gainLead2: "berhenti berpikir",
      gainLead3: " dengan Alam Sadar.",
      gainLead4: "Kamu berhenti ngotot. Berhenti ngoprek strategi dengan logika. Berhenti paksa semesta pakai tenaga otot.",
      gainBoxTitle: "Probabilitas kemenanganmu melonjak hingga 90%++",
      gainBoxDesc1: "Karena Alam Bawah Sadar bekerja ",
      gainBoxDesc2: "11 juta kali lebih cepat",
      gainBoxDesc3: ". Dia terhubung langsung dengan Hukum Alam—dengan Quantum Field—dengan Takdir yang Allah rancang.",
      gainNoTitle: "Kamu tidak perlu lagi:",
      gainNoItems: [
        'Overthinking strategi',
        'Menguras energi untuk "membuat sesuatu terjadi"',
        'Gelisah menunggu hasil'
      ],
      gainYesTitle: "Sebaliknya:",
      gainYesItems: [
        'Pencapaian terjadi secara alami',
        'Peluang datang tanpa kamu kejar',
        'Jalan terbuka tanpa kamu paksakan'
      ],
      gainFinal: "EFFORTLESS. EFISIEN. MASIF.",
      methodNum: "03",
      methodLabel: "THE METHOD:",
      methodTitle: "Bypass Alam Bawah Sadar",
      methodRumus: "Rumus Keseimbangan Atom:",
      methodAtom1: "Atom terbagi dua: ",
      methodAtom2: "Proton (Positif)",
      methodAtom3: " dan ",
      methodAtom4: "Neutron (Netral)",
      methodNiat1: "Begitu pula Alam Bawah Sadarmu butuh ",
      methodNiat2: "DUA NIAT SEIMBANG",
      neutronLabel: "NEUTRON",
      neutronTitle: "DEEP RELEASE",
      neutronDesc: "\"Saya melepas. Saya tidak terobsesi. Saya ikhlas pada apapun hasilnya.\"",
      neutronRasakan: "RASAKAN sensasi:",
      neutronItems: [
        'Bebas dari cengkeraman hasil',
        'Tidak ada gelisah',
        'Netral, tenang, tanpa tekanan'
      ],
      protonLabel: "PROTON",
      protonTitle: "DEEP FAITH",
      protonDesc: "\"Saya merasakan SEKARANG, saya sedang mendapatkan / ini sudah terjadi.\"",
      protonRasakan: "RASAKAN sensasi:",
      protonItems: [
        'Seolah realita SUDAH terwujud',
        'Positif, penuh, sudah ada',
        'Bukan masa depan, tapi SEKARANG'
      ],
      kunciTitle: "Kunci Eksekusi",
      kunciLead1: "Alam Sadarmu hanya punya satu tugas: ",
      kunciLead2: "DIAM.",
      kunciRules: [
        'Tidak boleh berpikir',
        'Tidak boleh analisis',
        'Tidak boleh skeptis'
      ],
      kunciBox1: "Biarkan NIAT yang bekerja—bukan pikiran.",
      kunciBox2: "Niat itu bypass. Dia langsung masuk ke Alam Bawah Sadar tanpa harus dipikirkan.",
      kunciFocusTitle: "Metode Fokus 1 Titik",
      kunciFocusDesc: "Metode utama keberhasilan adalah Fokus pada satu objek. Konsentrasi dengan damai untuk mengunci alam sadar tanpa berontak. Saat alam sadar tunduk untuk fokus pada 1 titik, ia tidak akan mengganggu niat Anda karena terlalu menikmati fokus tersebut.",
      kunciFiftyPercent: "Tahukah Anda? Fokus 1 titik adalah 50% dari seluruh pekerjaan kesuksesan ini.",
      methodFinal: "NIAT ITU DIRASAKAN. BUKAN DILOGIKAKAN.",
      statsTitle: "Dari Puluhan Ribu Orang yang Kami Saksikan",
      statsSub: "90% orang gagal karena tidak seimbang",
      statsFail1Title: "Terlalu Deep Release",
      statsFail1Desc: "Terlalu santai, pasif",
      statsFail2Title: "Terlalu Deep Faith",
      statsFail2Desc: "Terlalu agresif, obsesif",
      statsWinTitle: "Balance",
      statsWinDesc: "Deep Faith + Deep Release",
      statsStatusFail: "GAGAL",
      statsStatusWin: "MENANG",
      resultsTitle: "Hasilnya",
      resultsItems: [
        "Tujuan tercapai lebih natural",
        "Relasi tetap stabil",
        "Tubuh tidak kolaps",
        "Mental tidak hancur",
        "Hidup tetap utuh, bukan sekadar 'menang tapi rusak'"
      ],
      testiTitle: "Testimoni Nyata",
      testiCommTitle: "Testimoni Komunitas",
      ctaTitle: "Pertanyaan Terakhir Untukmu",
      ctaSub1: "Apakah kamu masih mau membuang waktu dengan \"berpikir\" pakai Alam Sadar?",
      ctaSub2: "Atau kamu siap mengaktifkan sistem yang benar—sistem yang didesain untuk mewujudkan mimpi dengan probabilitas 90%++?",
      ctaFinal: "Pilihan ada di tanganmu.",
      ctaWait: "Tapi Hukum Alam tidak menunggu.",
      ctaButton: "Aktifkan Sistem Sekarang",
      footerDesc: "by eL Vision",
      footerTag: "eL Vision True Power",
      footerLinks: ["Tentang", "Metode", "Testimoni", "Kontak"],
      footerCopyright: "© 2024 Deep Faith by eL Vision. Mind Technology for Human Excellence.",
      footerSub: "Combining Quantum Physics, Psychology, and Spiritual Wisdom."
    },
    en: {
      switch: "Bahasa",
      badge: "eL Vision True Power",
      heroTitle: "DEEP FAITH",
      heroSub1: "WHY YOUR",
      heroSub2: "FAITH AND DESIRES",
      heroSub3: "ARE SHATTERED?",
      heroDesc1: "It's not for lack of effort. It's because you're using the ",
      heroDesc2: "WRONG TOOL.",
      painNum: "01",
      painLabel: "THE PAIN:",
      painTitle: "You're Working at the Wrong Address",
      painLead1: "All this time, you've been using your ",
      painLead2: "Conscious Mind",
      painLead3: " to pursue dreams. And that is the root of your destruction.",
      painFactTitle: "The Conscious Mind is SLOW. LIMITED. ENERGY-CONSUMING.",
      painFact1Label: "Conscious Mind",
      painFact2Label: "Subconscious Mind",
      painAnalogy1: "You're using a moped for a MotoGP race. You're using a kitchen knife for heart surgery. ",
      painAnalogy2: "Wrong address, bro.",
      painResultTitle: "And the result?",
      painResults: [
        'Incredible mental exhaustion',
        'Recurring stress because reality doesn\'t match the "plan"',
        'Obsessions that eat away at your peace',
        'Failure that comes again and again'
      ],
      painFinal1: "It's not about weak intention. It's about using a system that was ",
      painFinal2: "NOT DESIGNED",
      painFinal3: " for this job.",
      gainNum: "02",
      gainLabel: "THE GAIN:",
      gainTitle: "90%++ Winning Probability",
      gainLead1: "Imagine: You ",
      gainLead2: "stop thinking",
      gainLead3: " with your Conscious Mind.",
      gainLead4: "You stop being stubborn. Stop tinkering with strategies using logic. Stop forcing the universe with muscle power.",
      gainBoxTitle: "Your winning probability jumps to 90%++",
      gainBoxDesc1: "Because the Subconscious Mind works ",
      gainBoxDesc2: "11 million times faster",
      gainBoxDesc3: ". It is directly connected to the Laws of Nature—the Quantum Field—the Destiny designed by Allah.",
      gainNoTitle: "You no longer need to:",
      gainNoItems: [
        'Overthink strategies',
        'Drain energy to "make something happen"',
        'Anxiously wait for results'
      ],
      gainYesTitle: "Instead:",
      gainYesItems: [
        'Achievement happens naturally',
        'Opportunities come without you chasing them',
        'Paths open without being forced'
      ],
      gainFinal: "EFFORTLESS. EFFICIENT. MASSIVE.",
      methodNum: "03",
      methodLabel: "THE METHOD:",
      methodTitle: "Bypass the Subconscious Mind",
      methodRumus: "Atomic Balance Formula:",
      methodAtom1: "Atoms are divided in two: ",
      methodAtom2: "Proton (Positive)",
      methodAtom3: " and ",
      methodAtom4: "Neutron (Neutral)",
      methodNiat1: "Similarly, your Subconscious Mind needs ",
      methodNiat2: "TWO BALANCED INTENTIONS",
      neutronLabel: "NEUTRON",
      neutronTitle: "DEEP RELEASE",
      neutronDesc: "\"I let go. I am not obsessed. I am at peace with whatever the outcome.\"",
      neutronRasakan: "FEEL the sensation:",
      neutronItems: [
        'Free from the grip of the outcome',
        'No anxiety',
        'Neutral, calm, without pressure'
      ],
      protonLabel: "PROTON",
      protonTitle: "DEEP FAITH",
      protonDesc: "\"I feel it NOW, I am receiving it / it has already happened.\"",
      protonRasakan: "FEEL the sensation:",
      protonItems: [
        'As if reality has ALREADY manifested',
        'Positive, full, already there',
        'Not the future, but NOW'
      ],
      kunciTitle: "Execution Key",
      kunciLead1: "Your Conscious Mind has only one task: ",
      kunciLead2: "BE SILENT.",
      kunciRules: [
        'Do not think',
        'Do not analyze',
        'Do not be skeptical'
      ],
      kunciBox1: "Let the INTENTION do the work—not the thoughts.",
      kunciBox2: "Intention is a bypass. It enters the Subconscious Mind directly without having to be thought about.",
      kunciFocusTitle: "1-Point Focus Method",
      kunciFocusDesc: "The primary method for success is focusing on a single object. Peacefully concentrate to lock the conscious mind without rebellion. When the conscious mind submits to focus on one point, it will not interfere with your intention because it is fully engaged in enjoying that focus.",
      kunciFiftyPercent: "Did you know? This 1-point focus represents 50% of the entire success of this work.",
      methodFinal: "INTENTION IS FELT. NOT LOGICIZED.",
      statsTitle: "From Tens of Thousands of People We've Witnessed",
      statsSub: "90% of people fail because they are unbalanced",
      statsFail1Title: "Too Much Deep Release",
      statsFail1Desc: "Too relaxed, passive",
      statsFail2Title: "Too Much Deep Faith",
      statsFail2Desc: "Too aggressive, obsessive",
      statsWinTitle: "Balance",
      statsWinDesc: "Deep Faith + Deep Release",
      statsStatusFail: "FAIL",
      statsStatusWin: "WIN",
      resultsTitle: "The Results",
      resultsItems: [
        "Goals achieved more naturally",
        "Relationships remain stable",
        "Body doesn't collapse",
        "Mental health intact",
        "Life remains whole, not just 'winning but broken'"
      ],
      testiTitle: "Real Testimonies",
      testiCommTitle: "Community Testimonies",
      ctaTitle: "One Last Question For You",
      ctaSub1: "Do you still want to waste time \"thinking\" with your Conscious Mind?",
      ctaSub2: "Or are you ready to activate the correct system—the system designed to realize dreams with a 90%++ probability?",
      ctaFinal: "The choice is in your hands.",
      ctaWait: "But the Laws of Nature do not wait.",
      ctaButton: "Activate System Now",
      footerDesc: "by eL Vision",
      footerTag: "eL Vision True Power",
      footerLinks: ["About", "Method", "Testimony", "Contact"],
      footerCopyright: "© 2024 Deep Faith by eL Vision. Mind Technology for Human Excellence.",
      footerSub: "Combining Quantum Physics, Psychology, and Spiritual Wisdom."
    }
  };

  const currentT = t[lang];

  const testimonies = [
    {
      name: "Agus",
      title: lang === 'id' ? "SH MH AGUS MULYADI" : "SH MH AGUS MULYADI",
      description: lang === 'id' ? "KEPALA INTELIJEN PANGANDARAN JAWA BARAT" : "CHIEF OF INTELLIGENCE PANGANDARAN WEST JAVA",
      video: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/agus.mp4",
      poster: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/agus.jpg"
    },
    {
      name: "Vio",
      title: "Influencer",
      description: "",
      video: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/vio.mp4",
      poster: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/vio.jpg"
    },
    {
      name: "Lena",
      title: lang === 'id' ? "ANAK SMA" : "HIGH SCHOOL STUDENT",
      description: "",
      video: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/lena.mp4",
      poster: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/lena.jpg"
    },
    {
      name: "Umi",
      title: lang === 'id' ? "Pemilik Pesantren" : "Islamic Boarding School Owner",
      description: "",
      video: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/umi.mp4",
      poster: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/umi.jpg"
    },
    {
      name: "Habib",
      title: "Umar",
      description: lang === 'id' ? "UStadz" : "Religious Teacher",
      video: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/habib.mp4",
      poster: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/habib.jpg"
    },
    {
      name: "Arif",
      title: lang === 'id' ? "Penyintas Kanker Otak Stage 4" : "Stage 4 Brain Cancer Survivor",
      description: "",
      video: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/arif.mp4",
      poster: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/arif.jpg"
    },
    {
      name: "Felicia",
      title: lang === 'id' ? "Pengusaha" : "Entrepreneur",
      description: "",
      video: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/felicia.mp4",
      poster: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/felicia.jpg"
    },
    {
      name: "Dr Gumilar",
      title: lang === 'id' ? "HIPNOTERAPIST AND PEJABAT DAERAH" : "HYPNOTHERAPIST AND REGIONAL OFFICIAL",
      description: "DR GUMILAR",
      video: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/dr.mp4",
      poster: "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/meta/dr.jpg"
    }
  ];

  const communityImages = [
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/photo_2025-07-12%2009.48.35_28_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi%20santri_12_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_15taun_6_11zon.jpg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_17juli_3_11zon.jpg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_28juli_5_11zon.jpg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_2jt_16_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_3minggu_17_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_audio1_9_11zon.jpg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_audio2_8_11zon.jpg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_damai_18_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_depres_27_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_eldi3_13_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_jahit_29_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testI_jahitan_19_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_JOE_26_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_karimah_4_11zon.jpg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_kelas1_14_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_marah_24_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_muklas_25_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_pelakor_22_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_pesantren_7_11zon.jpg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_pesantreren01_15_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_proyek_2_11zon.jpg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi_santet_11_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi_komunitas/testi01_20_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi03_21_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi05_23_11zon.jpeg",
    "https://tgojzhjujhjboboqygub.supabase.co/storage/v1/object/public/testi09_10_11zon.jpg"
  ];

  const quotes = [
    lang === 'id' 
      ? "Saya baru sadar, selama ini saya selalu dapat apa yang saya mau — tapi selalu dibayar mahal. Setelah eL Vision, target tetap tercapai, tapi hidup saya tidak lagi berantakan."
      : "I just realized, all this time I always got what I wanted — but it was always paid dearly. After eL Vision, targets are still achieved, but my life is no longer a mess.",
    lang === 'id'
      ? "Bukan motivasi. Bukan sugesti kosong. Yang berubah itu cara sistem dalam diri saya bekerja. Saya tidak lagi 'memaksa', tapi tetap bergerak."
      : "Not motivation. Not empty suggestions. What changed was the way the system inside me worked. I no longer 'force', but keep moving.",
    lang === 'id'
      ? "Biasanya setiap naik level bisnis, pasti ada masalah keluarga atau kesehatan. Kali ini tidak. Itu yang paling terasa berbeda."
      : "Usually every time the business level goes up, there are always family or health problems. Not this time. That's what feels most different.",
    lang === 'id'
      ? "Saya kira stres adalah harga sukses. Ternyata itu hanya efek samping dari sistem bawah sadar yang salah set."
      : "I thought stress was the price of success. It turns out it's just a side effect of a wrongly set subconscious system."
  ];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-md border border-cyan-500/30 rounded-full hover:border-cyan-400 transition-all group"
        >
          <Globe className="w-4 h-4 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-sm font-semibold text-slate-200">
            {currentT.switch}
          </span>
        </button>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Atom Visualization */}
          <div className={`relative mb-12 transition-all duration-1500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)]" />
              {[0, 60, 120].map((rotation, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-cyan-500/30 rounded-full animate-spin"
                  style={{ 
                    animationDuration: `${8 + i * 2}s`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-4 py-2 border border-cyan-500/50 rounded-full text-cyan-400 text-sm tracking-wider mb-4 bg-cyan-500/5 backdrop-blur-sm">
              {currentT.badge}
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-amber-400">
                {currentT.heroTitle}
              </span>
            </h1>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-amber-400">
                {currentT.heroSub1}
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400">
                {currentT.heroSub2}
              </span>
              <span className="block mt-2 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                {currentT.heroSub3}
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              {currentT.heroDesc1}<span className="text-cyan-400 font-semibold">{currentT.heroDesc2}</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Pain Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 text-xl font-bold">
                {currentT.painNum}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold">
                <span className="text-red-400">{currentT.painLabel}</span>
                <br />
                <span className="text-slate-200">{currentT.painTitle}</span>
              </h2>
            </div>
            
            <div className="space-y-12 text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              <p className="text-2xl font-semibold text-slate-100 text-center">
                {currentT.painLead1}<span className="text-cyan-400">{currentT.painLead2}</span>{currentT.painLead3}
              </p>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 space-y-4">
                <p className="font-bold text-xl text-amber-400 text-center">{currentT.painFactTitle}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="text-4xl font-bold text-red-400">40 bit/s</div>
                    <div className="text-sm text-slate-400 mt-1">{currentT.painFact1Label}</div>
                  </div>
                  <div className="text-center p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                    <div className="text-4xl font-bold text-cyan-400">11M bit/s</div>
                    <div className="text-sm text-slate-400 mt-1">{currentT.painFact2Label}</div>
                  </div>
                </div>
              </div>

              <p className="text-center">
                {currentT.painAnalogy1}<span className="text-red-400 font-bold">{currentT.painAnalogy2}</span>
              </p>

              <div className="space-y-3">
                <p className="font-semibold text-slate-100">{currentT.painResultTitle}</p>
                {currentT.painResults.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 pl-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-2xl font-bold text-slate-100 pt-4 text-center">
                {currentT.painFinal1}<span className="text-red-400">{currentT.painFinal2}</span>{currentT.painFinal3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gain Section */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 text-xl font-bold">
                {currentT.gainNum}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold">
                <span className="text-cyan-400">{currentT.gainLabel}</span>
                <br />
                <span className="text-slate-200">{currentT.gainTitle}</span>
              </h2>
            </div>
            
            <div className="space-y-12 text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              <p className="text-2xl font-semibold text-slate-100 text-center">
                {currentT.gainLead1}<span className="text-cyan-400">{currentT.gainLead2}</span>{currentT.gainLead3}
              </p>
              
              <p className="text-center">{currentT.gainLead4}</p>

              <div className="bg-gradient-to-br from-cyan-500/10 to-amber-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 space-y-4 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
                <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400 text-center">
                  {currentT.gainBoxTitle}
                </p>
                <p className="text-slate-200 text-center">
                  {currentT.gainBoxDesc1}<span className="font-bold">{currentT.gainBoxDesc2}</span>{currentT.gainBoxDesc3}
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-slate-100">{currentT.gainNoTitle}</p>
                {currentT.gainNoItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 pl-4">
                    <div className="w-2 h-2 bg-slate-600 rounded-full" />
                    <span className="line-through text-slate-500">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4">
                <p className="font-semibold text-slate-100">{currentT.gainYesTitle}</p>
                {currentT.gainYesItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 pl-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-300">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-3xl font-bold text-center py-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-400">
                {currentT.gainFinal}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Method Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 text-xl font-bold">
                {currentT.methodNum}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold">
                <span className="text-amber-400">{currentT.methodLabel}</span>
                <br />
                <span className="text-slate-200">{currentT.methodTitle}</span>
              </h2>
            </div>
            
            <div className="space-y-12 text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/40 backdrop-blur-sm border-l-4 border-cyan-400 rounded-r-xl p-8 text-center md:text-left">
                <p className="font-bold text-slate-100 text-xl mb-2">{currentT.methodRumus}</p>
                <p className="text-lg">{currentT.methodAtom1}<span className="text-cyan-400 font-semibold">{currentT.methodAtom2}</span>{currentT.methodAtom3}<span className="text-amber-400 font-semibold">{currentT.methodAtom4}</span>.</p>
                <p className="mt-2 text-lg">{currentT.methodNiat1}<span className="text-white font-bold">{currentT.methodNiat2}</span>.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group bg-slate-800/50 backdrop-blur-sm border-2 border-amber-500/30 hover:border-amber-500/60 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.2)] hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs text-amber-400 font-semibold tracking-wider">{currentT.neutronLabel}</div>
                      <div className="text-lg font-bold text-slate-100">{currentT.neutronTitle}</div>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-3">{currentT.neutronDesc}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-amber-400 font-semibold">{currentT.neutronRasakan}</p>
                    <ul className="space-y-1 text-slate-400">
                      {currentT.neutronItems.map((item, i) => (<li key={i}>• {item}</li>))}
                    </ul>
                  </div>
                </div>

                <div className="group bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500/30 hover:border-cyan-500/60 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-cyan-400 font-semibold tracking-wider">{currentT.protonLabel}</div>
                      <div className="text-lg font-bold text-slate-100">{currentT.protonTitle}</div>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-3">{currentT.protonDesc}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-cyan-400 font-semibold">{currentT.protonRasakan}</p>
                    <ul className="space-y-1 text-slate-400">
                      {currentT.protonItems.map((item, i) => (<li key={i}>• {item}</li>))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 space-y-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-lg" />
                  <h3 className="text-2xl font-bold text-slate-100">{currentT.kunciTitle}</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-2xl font-semibold text-slate-100">
                    {currentT.kunciLead1}<span className="text-red-400">{currentT.kunciLead2}</span>
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Tumaninah', 'Alpha', 'Theta', 'Delta'].map((state, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-300">
                        {state}
                      </span>
                    ))}
                  </div>

                  <div className="bg-slate-950/50 border border-cyan-500/30 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-cyan-400" />
                      <h4 className="text-xl font-bold text-cyan-400">{currentT.kunciFocusTitle}</h4>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed">
                      {currentT.kunciFocusDesc}
                    </p>
                    <div className="pt-4 border-t border-slate-800">
                      <p className="text-amber-400 font-bold text-xl">
                        {currentT.kunciFiftyPercent}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-700">
                    {currentT.kunciRules.map((rule, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-slate-300">{rule}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-cyan-500/30 rounded-lg p-4 mt-6">
                    <p className="text-cyan-300 font-semibold">{currentT.kunciBox1}</p>
                    <p className="text-slate-400 text-sm mt-1">{currentT.kunciBox2}</p>
                  </div>
                </div>
              </div>

              <div className="text-center py-4">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-400">
                  {currentT.methodFinal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-32 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">{currentT.statsTitle}</h2>
            <p className="text-xl text-slate-400">{currentT.statsSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
              <div className="text-5xl font-bold text-amber-400 mb-2">50%</div>
              <div className="text-lg font-semibold text-slate-200 mb-3">{currentT.statsFail1Title}</div>
              <p className="text-sm text-slate-400 mb-4">{currentT.statsFail1Desc}</p>
              <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold">{currentT.statsStatusFail}</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6">
              <div className="text-5xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-lg font-semibold text-slate-200 mb-3">{currentT.statsFail2Title}</div>
              <p className="text-sm text-slate-400 mb-4">{currentT.statsFail2Desc}</p>
              <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold">{currentT.statsStatusFail}</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-amber-500/20 backdrop-blur-sm border-2 border-emerald-500/50 rounded-xl p-6 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
              <div className="text-5xl font-bold text-emerald-400 mb-2">10%</div>
              <div className="text-lg font-semibold text-slate-200 mb-3">{currentT.statsWinTitle}</div>
              <p className="text-sm text-slate-400 mb-4">{currentT.statsWinDesc}</p>
              <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-emerald-400 text-sm font-semibold">{currentT.statsStatusWin}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-20 px-6 md:px-12 bg-slate-950">
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-6 text-center">{currentT.resultsTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentT.resultsItems.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">{currentT.testiTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                <Quote className="w-8 h-8 text-cyan-400 mb-3" />
                <p className="text-gray-200 italic">{quote}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testimonies.map((testimony, index) => (
              <div key={index} className="group bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all">
                <div className="relative aspect-[9/16]">
                  <video className="w-full h-full object-cover" poster={testimony.poster} controls preload="metadata">
                    <source src={testimony.video} type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-cyan-400">{testimony.name}</p>
                  {testimony.title && <p className="text-sm text-gray-300">{testimony.title}</p>}
                  {testimony.description && <p className="text-xs text-gray-400">{testimony.description}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">{currentT.testiCommTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {communityImages.map((imageUrl, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all">
                  <img src={imageUrl} alt={`Testimoni ${index + 1}`} className="w-full h-auto object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-8">{currentT.ctaTitle}</h2>
          <div className="space-y-6 text-xl text-slate-300 mb-12">
            <p>{currentT.ctaSub1}</p>
            <p>{currentT.ctaSub2}</p>
          </div>
          <div className="inline-block space-y-4 mb-12">
            <p className="text-2xl font-bold text-slate-100">{currentT.ctaFinal}</p>
            <p className="text-lg text-slate-400">{currentT.ctaWait}</p>
          </div>
          <div className="flex justify-center">
            <a href="https://app.elvisiongroup.com" className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-400 hover:to-amber-400 rounded-xl font-bold text-lg text-slate-950 transition-all duration-300 hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:scale-105 overflow-hidden inline-block">
              <span className="relative z-10">{currentT.ctaButton}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-4xl font-black mb-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">DEEP FAITH</span>
              </div>
              <p className="text-slate-500 text-sm mb-1">{currentT.footerDesc}</p>
              <p className="text-slate-600 italic text-sm">{currentT.footerTag}</p>
            </div>
            <div className="flex gap-8 text-sm text-slate-400">
              {currentT.footerLinks.map((link, i) => (<a key={i} href="#" className="hover:text-cyan-400 transition-colors">{link}</a>))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>{currentT.footerCopyright}</p>
            <p className="mt-2 text-xs">{currentT.footerSub}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
