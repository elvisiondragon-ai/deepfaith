import { useState, useEffect } from 'react';
import { CheckCircle, Quote, Globe, Target, Zap, Triangle, HelpCircle, AlertTriangle, ArrowRight, XCircle } from 'lucide-react';

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
  painFact2Desc: string;
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
  methodStepsTitle: string;
  methodStep0: string;
  methodStep0Desc: string;
  methodStep1: string;
  methodStep1Title: string;
  methodStep1Desc: string;
  methodStep1Feel: string;
  methodStep1Items: string[];
  methodStep2: string;
  methodStep2Title: string;
  methodStep2Desc: string;
  methodStep2Feel: string;
  methodStep2Items: string[];
  methodStep3: string;
  methodStep3Title: string;
  methodStep3Desc: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
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
  polarTitle: string;
  polarWarning: string;
  polarLead: string;
  polarItems: { from: string; to: string }[];
  polarCompass: string;
  polarMessage: string;
  polarFinal: string;
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
      painFact2Desc: "11M bit/s",
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
      methodStepsTitle: "Alur Eksekusi Energi",
      methodStep0: "STEP 0: Charge Energy",
      methodStep0Desc: "Fokus pada satu objek (Nafas/Audio). Konsentrasi dengan damai hingga energi terkumpul dan Alam Sadar terkunci.",
      methodStep1: "STEP 1: Deep Faith",
      methodStep1Title: "Fase Proton (Positive)",
      methodStep1Desc: "Rasakan keyakinan sangat dalam bahwa kamu SEDANG mendapatkannya. Semakin dalam Deep Faith, semakin cepat hasilnya. Lakukan selama 5 menit.",
      methodStep1Feel: "RASAKAN sensasi:",
      methodStep1Items: [
        'Seolah realita SUDAH terwujud',
        'Positif, penuh, sudah ada',
        'Bukan masa depan, tapi SEKARANG'
      ],
      methodStep2: "STEP 2: Deep Release",
      methodStep2Title: "Fase Neutron (Neutral)",
      methodStep2Desc: "Rasakan kamu mendapatkan keinginan itu dalam keadaan lepas plong. Semakin dalam lepasnya, semakin cepat hasilnya. Lakukan selama 5 menit.",
      methodStep2Feel: "RASAKAN sensasi:",
      methodStep2Items: [
        'Bebas dari cengkeraman hasil',
        'Tidak ada gelisah',
        'Netral, tenang, tanpa tekanan'
      ],
      methodStep3: "STEP 3: eL Triangle",
      methodStep3Title: "The Synergy",
      methodStep3Desc: "Gabungkan Deep Faith + Deep Release. Rasakan sensasi campur aduk antara yakin dan lepas secara bersamaan. Inilah puncak eL Triangle.",
      faqTitle: "Pertanyaan Umum",
      faq1Q: "Haruskah dilakukan step by step, atau bisa langsung ke Step 3?",
      faq1A: "WAJIB step by step. Tidak bisa langsung ke Step 3 karena energi tidak akan cukup dan tubuh belum siap mengingat semua rasa sekaligus.",
      faq2Q: "Apakah saat melakukan Deep Faith kita mengalihkan fokus dari 1 titik tadi?",
      faq2A: "TIDAK. Pikiran sadar tetap fokus ke 1 titik (Nafas/Audio). Ini terjadi sekilas di alam sadar, lalu kembali dirasakan. Ciri-cirinya Anda menyadari penuh fokus 1 titik tersebut.",
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
      polarTitle: "POLAR MARKETING: WHAT YOU GET",
      polarWarning: "Peringatan Penting",
      polarLead: "Setelah Menguasai Teknik ini, banyak anggota yang berhasil dan menjadi sombong karena bisa mengatur takdir sendiri secara otomatis:",
      polarItems: [
        { from: "Kehilangan Pasangan", to: "Mencari pengganti lebih baik dengan mudah" },
        { from: "Finansial Jatuh", to: "Mencari peluang lebih besar dengan mudah" },
        { from: "Sakit / Kolaps", to: "Mendapat kesehatan holistik dengan mudah" },
        { from: "Kusam / Kurang Menarik", to: "Aura Internal & Fisik yang memikat (Korea/Thailand Standard)" }
      ],
      polarCompass: "Ini menjadi Divine Compass (kompas ilahi anggota).",
      polarMessage: "Pesan saya: Kesombongan adalah tanda rusaknya keseimbangan energi dan tidak akan bertahan lama. Tetaplah tawadhu (rendah hati) karena sejatinya ini semua kasih sayang Allah yang terbukukan dalam Ilmu.",
      polarFinal: "Dan segala sesuatu melalui Izin-Nya.",
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
      painFact2Desc: "11M bit/s",
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
      methodStepsTitle: "Energy Execution Flow",
      methodStep0: "STEP 0: Charge Energy",
      methodStep0Desc: "Focus on a single object (Breath/Audio). Concentrate peacefully until energy is gathered and the Conscious Mind is locked.",
      methodStep1: "STEP 1: Deep Faith",
      methodStep1Title: "Proton Phase (Positive)",
      methodStep1Desc: "Feel a very deep conviction that you ARE receiving it. The deeper the Deep Faith, the faster the result. Do this for 5 minutes.",
      methodStep1Feel: "FEEL the sensation:",
      methodStep1Items: [
        'As if reality has ALREADY manifested',
        'Positive, full, already there',
        'Not the future, but NOW'
      ],
      methodStep2: "STEP 2: Deep Release",
      methodStep2Title: "Neutron Phase (Neutral)",
      methodStep2Desc: "Feel yourself receiving that desire in a state of total release (letting go). The deeper the release, the faster the result. Do this for 5 minutes.",
      methodStep2Feel: "FEEL the sensation:",
      methodStep2Items: [
        'Free from the grip of the outcome',
        'No anxiety',
        'Neutral, calm, without pressure'
      ],
      methodStep3: "STEP 3: eL Triangle",
      methodStep3Title: "The Synergy",
      methodStep3Desc: "Combine Deep Faith + Deep Release. Feel the mixed sensation of conviction and release simultaneously. This is the peak of eL Triangle.",
      faqTitle: "Common Questions",
      faq1Q: "Should it be done step by step, or can I jump to Step 3?",
      faq1A: "Step by step is MANDATORY. You cannot skip to Step 3 because energy won't be enough and the body isn't ready to remember all sensations at once.",
      faq2Q: "Do we divert focus from the 1-point during Deep Faith?",
      faq2A: "NO. The conscious mind stays focused on the 1-point (Breath/Audio). It happens briefly in the conscious realm, then back to feeling. You remain fully aware of that 1-point focus.",
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
      polarTitle: "POLAR MARKETING: WHAT YOU GET",
      polarWarning: "Important Warning",
      polarLead: "After mastering this technique, many members succeed and become arrogant because they can automatically manage their own destiny:",
      polarItems: [
        { from: "Losing a Partner", to: "Finding a better replacement easily" },
        { from: "Financial Crisis", to: "Finding bigger opportunities easily" },
        { from: "Illness / Collapse", to: "Gaining holistic health easily" },
        { from: "Dull / Unattractive", to: "Captivating Internal & Physical Aura (Korea/Thailand Standard)" }
      ],
      polarCompass: "This becomes a Divine Compass for members.",
      polarMessage: "My message: Arrogance is a sign of broken energy balance and will not last. Stay humble (tawadhu) because, in truth, all of this is Allah's mercy documented in Knowledge.",
      polarFinal: "And everything happens through His Permission.",
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
      title: "SH MH AGUS MULYADI",
      description: lang === 'id' ? "KEPALA INTELIJEN PANGANDARAN JAWA BARAT" : "CHIEF OF INTELLIGENCE PANGANDARAN WEST JAVA",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/AGUS_WA.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/agus.jpg"
    },
    {
      name: "Vio",
      title: "Influencer",
      description: "",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/VIOVIDEO_WA.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/vio2.jpg"
    },
    {
      name: "Lena",
      title: lang === 'id' ? "ANAK SMA" : "HIGH SCHOOL STUDENT",
      description: "",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/LENA_WA.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/lena.jpg"
    },
    {
      name: "Umi",
      title: lang === 'id' ? "Pemilik Pesantren" : "Islamic Boarding School Owner",
      description: "",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/UMIVIDEO_WA.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/umi.jpg"
    },
    {
      name: "Habib",
      title: "Umar",
      description: lang === 'id' ? "UStadz" : "Religious Teacher",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/HABIBVIDEO_WA.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/habib.jpg"
    },
    {
      name: "Arif",
      title: lang === 'id' ? "Penyintas Kanker Otak Stage 4" : "Stage 4 Brain Cancer Survivor",
      description: "",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/arif.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/arif.jpg"
    },
    {
      name: "Arif (Interview)",
      title: lang === 'id' ? "Penyintas Kanker Otak Stage 4" : "Stage 4 Brain Cancer Survivor",
      description: "",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/arif_inte.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/arif_inte.jpg"
    },
    {
      name: "Arif (Update)",
      title: lang === 'id' ? "Penyintas Kanker Otak Stage 4" : "Stage 4 Brain Cancer Survivor",
      description: "",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/arif2.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/arif2.jpg"
    },
    {
      name: "Felicia",
      title: lang === 'id' ? "Pengusaha" : "Entrepreneur",
      description: "",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/FELVIDEO_WA.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/felicia.jpg"
    },
    {
      name: "Dr Gumilar",
      title: lang === 'id' ? "HIPNOTERAPIST AND PEJABAT DAERAH" : "HYPNOTHERAPIST AND REGIONAL OFFICIAL",
      description: "DR GUMILAR",
      video: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/DRVIDEO_WA.mp4",
      poster: "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi/dr.jpg"
    }
  ];

  const communityImages = [
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_15taun.png",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_17juli.png",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_28juli.png",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_2jt.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_3minggu.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_agustinus.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_audio1.png",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_audio2.png",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_damai.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_depres.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_eldi3.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_jahit.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testI_jahitan.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_jauh.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_JOE.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_karimah.png",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_kelas1.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_marah.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_muklas.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_pelakor.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_pesantren.png",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_pesantreren01.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_proyek.jpg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_santet.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi_santri.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi01.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi03.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi05.jpeg",
    "https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/testi_jpg/testi09.png"
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

      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
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
                    <div className="text-4xl font-bold text-cyan-400">{currentT.painFact2Desc}</div>
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
            
            <div className="space-y-16 text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/40 backdrop-blur-sm border-l-4 border-cyan-400 rounded-r-xl p-8 text-center md:text-left">
                <p className="font-bold text-slate-100 text-xl mb-2">{currentT.methodRumus}</p>
                <p className="text-lg">{currentT.methodAtom1}<span className="text-cyan-400 font-semibold">{currentT.methodAtom2}</span>{currentT.methodAtom3}<span className="text-amber-400 font-semibold">{currentT.methodAtom4}</span>.</p>
                <p className="mt-2 text-lg">{currentT.methodNiat1}<span className="text-white font-bold">{currentT.methodNiat2}</span>.</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 space-y-10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-lg" />
                  <h3 className="text-2xl font-bold text-slate-100">{currentT.kunciTitle}</h3>
                </div>
                <div className="space-y-10">
                  <p className="text-3xl font-semibold text-slate-100 text-center md:text-left">
                    {currentT.kunciLead1}<span className="text-red-400">{currentT.kunciLead2}</span>
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {['Tumaninah', 'Alpha', 'Theta', 'Delta'].map((state, i) => (
                      <span key={i} className="px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-full text-lg text-slate-300">
                        {state}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-6 pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <Target className="w-10 h-10 text-cyan-400" />
                      <h4 className="text-2xl font-bold text-cyan-400">{currentT.kunciFocusTitle}</h4>
                    </div>
                    <p className="text-slate-200 text-xl leading-relaxed">{currentT.kunciFocusDesc}</p>
                    <div className="py-6 border-y border-slate-700/50">
                      <p className="text-amber-400 font-black text-2xl text-center md:text-left">{currentT.kunciFiftyPercent}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {currentT.kunciRules.map((rule, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-slate-200 text-lg font-medium">{rule}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-cyan-500/30 rounded-xl p-6">
                    <p className="text-cyan-300 font-bold text-xl text-center md:text-left mb-2">{currentT.kunciBox1}</p>
                    <p className="text-slate-400 text-lg text-center md:text-left">{currentT.kunciBox2}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <h3 className="text-4xl font-bold text-center text-slate-100">{currentT.methodStepsTitle}</h3>
                <div className="grid gap-8">
                  <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                      <Zap className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-3xl font-bold text-cyan-400 mb-3">{currentT.methodStep0}</h4>
                      <p className="text-slate-300 text-lg">{currentT.methodStep0Desc}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-800/30 border border-cyan-500/30 rounded-2xl p-10 space-y-8">
                      <div className="flex justify-between items-start">
                        <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-bold uppercase tracking-wider">Step 1</span>
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-slate-100 mb-4">{currentT.methodStep1Title}</h4>
                        <p className="text-slate-300 text-lg mb-6">{currentT.methodStep1Desc}</p>
                        <div className="space-y-3 bg-slate-950/50 p-6 rounded-2xl border border-cyan-500/20">
                          <p className="text-cyan-400 font-bold text-base uppercase tracking-widest">{currentT.methodStep1Feel}</p>
                          <ul className="space-y-2 text-slate-300 text-lg">
                            {currentT.methodStep1Items.map((item, i) => (<li key={i}>• {item}</li>))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-800/30 border border-amber-500/30 rounded-2xl p-10 space-y-8">
                      <div className="flex justify-between items-start">
                        <span className="px-4 py-2 bg-amber-500/20 rounded-full text-amber-400 text-sm font-bold uppercase tracking-wider">Step 2</span>
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-slate-100 mb-4">{currentT.methodStep2Title}</h4>
                        <p className="text-slate-300 text-lg mb-6">{currentT.methodStep2Desc}</p>
                        <div className="space-y-3 bg-slate-950/50 p-6 rounded-2xl border border-cyan-500/20">
                          <p className="text-amber-400 font-bold text-base uppercase tracking-widest">{currentT.methodStep2Feel}</p>
                          <ul className="space-y-2 text-slate-300 text-lg">
                            {currentT.methodStep2Items.map((item, i) => (<li key={i}>• {item}</li>))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 via-slate-800/50 to-amber-500/10 border-2 border-slate-700 rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-amber-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                      <Triangle className="w-12 h-12 text-slate-950" />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400 mb-3">{currentT.methodStep3}</h4>
                      <p className="text-slate-100 font-bold text-xl mb-2">{currentT.methodStep3Title}</p>
                      <p className="text-slate-300 text-lg">{currentT.methodStep3Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10 bg-slate-900/50 rounded-3xl p-12 border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-4 justify-center mb-10">
                  <HelpCircle className="w-10 h-10 text-cyan-400" />
                  <h3 className="text-4xl font-bold text-slate-100">{currentT.faqTitle}</h3>
                </div>
                <div className="space-y-10 divide-y divide-slate-800">
                  <div className="pt-0">
                    <h4 className="text-2xl font-bold text-cyan-400 mb-4">Q: {currentT.faq1Q}</h4>
                    <p className="text-slate-300 text-xl leading-relaxed italic border-l-4 border-slate-700 pl-6">A: {currentT.faq1A}</p>
                  </div>
                  <div className="pt-10">
                    <h4 className="text-2xl font-bold text-cyan-400 mb-4">Q: {currentT.faq2Q}</h4>
                    <p className="text-slate-300 text-xl leading-relaxed italic border-l-4 border-slate-700 pl-6">A: {currentT.faq2A}</p>
                  </div>
                </div>
              </div>

              <div className="text-center py-6">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-400">{currentT.methodFinal}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        {/* Polar Marketing Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-red-950/80 via-red-900/40 to-slate-900 border border-red-500/30 rounded-3xl p-10 md:p-16 shadow-[0_0_60px_rgba(239,68,68,0.1)]">
            <div className="flex flex-col items-center space-y-10">
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50 animate-pulse">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-red-500 tracking-tighter">{currentT.polarWarning}</h2>
                <p className="text-xl text-slate-300 font-medium max-w-3xl mx-auto">{currentT.polarLead}</p>
              </div>

              {/* Polar Transition Items */}
              <div className="grid gap-6 w-full max-w-4xl">
                {currentT.polarItems.map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 bg-slate-950/40 p-8 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all group">
                    <div className="flex items-center gap-3 md:w-1/3">
                      <XCircle className="w-6 h-6 text-red-500/60" />
                      <span className="text-red-400/80 font-bold text-lg text-left">{item.from}</span>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <ArrowRight className="w-8 h-8 text-slate-600 group-hover:text-green-500 transition-colors rotate-90 md:rotate-0" />
                    </div>

                    <div className="flex items-center gap-3 flex-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-green-400 font-bold text-xl text-left">{item.to}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-8 pt-8">
                <p className="text-red-400 font-black text-3xl py-4 border-y border-red-500/20 uppercase tracking-widest">{currentT.polarCompass}</p>
                <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-medium">{currentT.polarMessage}</p>
                <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">{currentT.polarFinal}</p>
              </div>
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
