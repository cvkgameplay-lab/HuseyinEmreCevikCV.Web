const skills = [
  "C#",
  ".NET",
  ".NET 8",
  "Java",
  "JavaScript",
  "PostgreSQL",
  "MSSQL",
  "React",
  "jQuery",
  "Git",
  "TFS",
  "Camunda BPM",
  "Unit Testing",
  "OOP",
  "Microservices",
  "Frontend",
  "Backend",
  "Full-Stack",
];

type Experience = {
  role: string;
  company: string;
  logo?: string;
  logoText?: string;
  logoTone?: "dark" | "light" | "mono";
  period: string;
  place: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Fimple",
    logo: "/brand/fimple.png",
    logoTone: "dark",
    period: "03/2026 - Devam",
    place: "İstanbul, Türkiye",
    bullets: [
      "Fimple bünyesinde Tera Bank müşterisine özel geliştirilen dijital bankacılık platformunda görev alıyorum.",
      "Kredi başvurusu, tahsis, kullandırım, tahsilat ve risk süreçlerine yönelik geliştirmeler gerçekleştiriyorum.",
      "Yeni özelliklerin geliştirilmesi, mevcut servislerin bakımının yapılması ve üretim ortamında karşılaşılan hataların giderilmesi süreçlerinde aktif rol alıyorum.",
      "Üçüncü parti servislerle (Experian, Telco, AML ve DMS) entegrasyon geliştirmeleri ve iyileştirmeleri gerçekleştiriyorum.",
      "REST API geliştirme, veritabanı sorgularının optimize edilmesi ve performans iyileştirme çalışmalarını yürütüyorum.",
      "İş birimleri ve banka ekipleriyle koordineli çalışarak analiz, geliştirme, test ve canlıya alma süreçlerine katkı sağlıyorum.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Dgpays",
    logo: "/brand/dgpays.svg",
    logoTone: "light",
    period: "01/2023 - 03/2026",
    place: "İstanbul, Türkiye",
    bullets: [
      "Temel bankacılık departmanı altında krediler ekibinde çalıştım.",
      "Kredi, tahsilat, teminat, müşteri başvuru, yasal takip ve risk domainleri için bağımsız mikro servisler geliştirdim.",
      "CRUD API'leri, .NET 8 backend servisleri ve React arayüz geliştirmelerini destekledim.",
      "İş akışları ve süreç otomasyonu için Camunda Modeler kullanarak süreç tasarımı gerçekleştirdim.",
      "Dolt ve Trino kullanarak veri yönetimi, entegrasyon ve veritabanı script süreçlerini yürüttüm.",
      "Git versiyon kontrol sistemi kullanarak kod yönetimi ve iş birliği süreçlerini etkin şekilde yönettim.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Softtech",
    logo: "/brand/softtech.svg",
    logoTone: "light",
    period: "09/2021 - 01/2023",
    place: "İstanbul, Türkiye",
    bullets: [
      "Sermaye piyasaları alım satım sistemleri departmanı altında alım-satım ve risk kontrol sistemleri biriminde çalıştım.",
      "Borsa emirlerinin kontrolü ve borsaya aktarımı için web servis geliştirmeleri yaptım.",
      "Trademaster client uygulaması ve ilgili servislerin geliştirme ve destek süreçlerinde rol aldım.",
      "Akıllı Emir API entegrasyonu, tarihli emir, şartlı emir ve zincir emir ekranları geliştirdim.",
      "Mobil ve web cihazları için RESTful ve SOAP servisleri ile entegrasyon çalışmalarına destek verdim.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Upenerji",
    logoText: "UP",
    logoTone: "mono",
    period: "11/2020 - 09/2021",
    place: "Konya, Türkiye",
    bullets: [
      "Enerji sektöründeki firmalara danışmanlık ve yazılım hizmeti verdim.",
      "MEDAŞ için kurum içinde kullanılan web projeleri geliştirdim.",
      ".NET MVC, MSSQL ve Android teknolojileriyle puantaj, proje yönetim ve ziyaretçi takip sistemleri üzerinde çalıştım.",
    ],
  },
];

const personalDetails = [
  ["Doğum Tarihi", "14.08.1998"],
  ["Medeni Durum", "Evli"],
  ["Askerlik", "Tamamlandı"],
  ["Adres", "Gölcük / Kocaeli"],
  ["Ehliyet", "B Sınıfı"],
  ["Dil", "Türkçe, İngilizce"],
];

const achievements = [
  "GNO: 3.04",
  "Yüksek Onur Belgesi: Konya Teknik Üniversitesi, 12/2019",
  "Yüksek Onur Belgesi: Konya Teknik Üniversitesi, 06/2020",
];

export default function Home() {
  return (
    <main className="resume-stage">
      <div className="resume-actions" aria-label="CV işlemleri">
        <a href="/huseyin-emre-cevik-cv.pdf" download>
          PDF İndir
        </a>
        <a href="mailto:hemrecevik@gmail.com">Mail Gönder</a>
      </div>

      <article className="resume-sheet" aria-label="Hüseyin Emre Çevik CV">
        <header className="resume-hero">
          <img src="/profile.jpg" alt="Hüseyin Emre Çevik portre fotoğrafı" />
          <div>
            <h1>Hüseyin Emre Çevik</h1>
            <p>Senior Software Developer</p>
            <nav aria-label="İletişim bilgileri">
              <a href="tel:+905414981116">+90 541 498 1116</a>
              <a href="mailto:hemrecevik@gmail.com">hemrecevik@gmail.com</a>
              <span>Gölcük / Kocaeli</span>
              <span>hemrecevik</span>
            </nav>
          </div>
        </header>

        <Section title="Yetkinlikler">
          <div className="skill-row">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </Section>

        <Section title="Deneyimler">
          <div className="experience-stack">
            {experiences.map((job) => (
              <article className="resume-job" key={`${job.company}-${job.period}`}>
                <div className="job-topline">
                  <div className={`company-mark company-mark--${job.logoTone ?? "light"}`}>
                    {job.logo ? (
                      <img src={job.logo} alt={`${job.company} logosu`} />
                    ) : (
                      <strong>{job.logoText}</strong>
                    )}
                  </div>
                  <h3>{job.role}</h3>
                  <strong>{job.company}</strong>
                  <span>{job.place}</span>
                  <time>{job.period}</time>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Eğitim">
          <div className="education-grid">
            <strong>Mühendislik Fakültesi</strong>
            <span>Konya Teknik Üniversitesi</span>
            <span>Konya, Türkiye</span>
            <time>2016 - 2020</time>
            <p>Bilgisayar Mühendisliği</p>
          </div>
        </Section>

        <Section title="Kişisel Bilgiler">
          <dl className="detail-grid">
            {personalDetails.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Diğerleri">
          <ul className="compact-list">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="resume-section">
      <h2>
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}
