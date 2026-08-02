const skills = [
  "C#",
  ".NET 8",
  "Java",
  "JavaScript",
  "React",
  "PostgreSQL",
  "MSSQL",
  "Microservices",
  "Camunda BPM",
  "Trino",
  "Dolt",
  "Git",
  "TFS",
  "Unit Testing",
  "OOP",
];

const companyLogos = [
  {
    name: "Fimple",
    src: "/brand/fimple.png",
  },
  {
    name: "Dgpays",
    src: "/brand/dgpays.svg",
  },
  {
    name: "Softtech",
    src: "/brand/softtech.svg",
  },
  {
    name: "Upenerji",
    initials: "UP",
  },
];

const currentFocus = [
  "Kredi başvurusu",
  "Tahsis",
  "Kullandırım",
  "Tahsilat",
  "Risk",
  "Experian",
  "Telco",
  "AML",
  "DMS",
];

type Experience = {
  role: string;
  company: string;
  logo?: string;
  logoText?: string;
  place: string;
  period: string;
  tone: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Fimple",
    logo: "/brand/fimple.png",
    place: "İstanbul, Türkiye",
    period: "03/2026 - Devam",
    tone: "current",
    bullets: [
      "Fimple bünyesinde Tera Bank müşterisine özel geliştirilen dijital bankacılık platformunda görev alıyor.",
      "Kredi başvurusu, tahsis, kullandırım, tahsilat ve risk süreçlerine yönelik geliştirmeler gerçekleştiriyor.",
      "Yeni özelliklerin geliştirilmesi, mevcut servislerin bakımı ve üretim ortamında karşılaşılan hataların giderilmesi süreçlerinde aktif rol alıyor.",
      "Experian, Telco, AML ve DMS gibi üçüncü parti servislerle entegrasyon geliştirmeleri ve iyileştirmeleri gerçekleştiriyor.",
      "REST API geliştirme, veritabanı sorgularının optimize edilmesi ve performans iyileştirme çalışmalarını yürütüyor.",
      "İş birimleri ve banka ekipleriyle koordineli çalışarak analiz, geliştirme, test ve canlıya alma süreçlerine katkı sağlıyor.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Dgpays",
    logo: "/brand/dgpays.svg",
    place: "İstanbul, Türkiye",
    period: "01/2023 - 03/2026",
    tone: "past",
    bullets: [
      "Temel bankacılık departmanında krediler ekibinde çalıştı.",
      "Kredi, tahsilat, teminat, müşteri başvuru, yasal takip ve risk domainleri için bağımsız mikro servisler geliştirdi.",
      "CRUD API'leri, .NET 8 backend servisleri ve React arayüz geliştirmelerini destekledi.",
      "Camunda Modeler ile iş akışı ve süreç otomasyonu tasarımları yaptı.",
      "Dolt ve Trino kullanarak veri yönetimi, entegrasyon ve veritabanı script süreçlerini yürüttü.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Softtech",
    logo: "/brand/softtech.svg",
    place: "İstanbul, Türkiye",
    period: "09/2021 - 01/2023",
    tone: "past",
    bullets: [
      "Sermaye piyasaları alım satım sistemleri departmanında emir iletimi ve risk kontrol sistemleri üzerinde çalıştı.",
      "Borsa emirlerinin kontrolü ve borsaya aktarımı için web servis geliştirmeleri yaptı.",
      "Trademaster client uygulaması ve ilgili servislerin geliştirme ve destek süreçlerinde rol aldı.",
      "Akıllı Emir API entegrasyonu, tarihli emir, şartlı emir ve zincir emir ekranları geliştirdi.",
      "Mobil ve web istemcileri için RESTful ve SOAP servis entegrasyonları sağladı.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Upenerji",
    logoText: "UP",
    place: "Konya, Türkiye",
    period: "11/2020 - 09/2021",
    tone: "past",
    bullets: [
      "Enerji sektöründeki firmalara danışmanlık ve yazılım hizmeti verdi.",
      "MEDAŞ için sıfırdan web projeleri geliştirdi; projeler kurum içinde kullanılmaya devam ediyor.",
      ".NET MVC, MSSQL ve Android teknolojileriyle puantaj sistemi, proje yönetim uygulaması ve ziyaretçi takip sistemi üzerinde çalıştı.",
    ],
  },
];

export default function Home() {
  return (
    <main className="site">
      <div className="fixed-stage" aria-hidden="true">
        <span>Digital Banking</span>
        <strong>Microservices · API · Risk · Credit</strong>
      </div>

      <nav className="topbar" aria-label="Sayfa bölümleri">
        <a href="#home">Hüseyin Emre Çevik</a>
        <div>
          <a href="#now">Şu an</a>
          <a href="#experience">Deneyim</a>
          <a href="#stack">Stack</a>
          <a href="/huseyin-emre-cevik-cv.pdf" download>
            PDF İndir
          </a>
          <a href="mailto:hemrecevik@gmail.com">İletişim</a>
        </div>
      </nav>

      <section className="hero snap-panel" id="home">
        <div className="screen-card hero-card">
          <div className="hero-copy">
            <p className="eyebrow">Senior Software Developer</p>
            <h1>Hüseyin Emre Çevik</h1>
            <div className="hero-links" aria-label="İletişim bağlantıları">
              <a className="download-link" href="/huseyin-emre-cevik-cv.pdf" download>
                Güncel PDF CV İndir
              </a>
              <a href="mailto:hemrecevik@gmail.com">hemrecevik@gmail.com</a>
              <a href="tel:+905414981116">+90 541 498 1116</a>
              <span>Gölcük / Kocaeli</span>
            </div>
            <div className="logo-rail" aria-label="Çalışılan firmalar">
              {companyLogos.map((logo) => (
                <span className="logo-tile" key={logo.name}>
                  {logo.src ? (
                    <img src={logo.src} alt={`${logo.name} logosu`} />
                  ) : (
                    <strong>{logo.initials}</strong>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Profil özeti">
            <img src="/profile.jpg" alt="Hüseyin Emre Çevik portre fotoğrafı" />
            <div className="visual-caption">
              <span>Current Role</span>
              <strong>Senior Developer · Fimple</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="focus-section snap-panel" id="now">
        <div className="screen-card focus-screen">
          <div className="section-intro">
            <p className="eyebrow">Şu an</p>
            <h2>Fimple’da dijital bankacılık platformu geliştiriyorum.</h2>
          </div>
          <div className="focus-grid">
            <article className="focus-card main-focus">
              <span>03/2026 - Devam</span>
              <h3>Software Engineer · Fimple</h3>
              <p>
                Tera Bank müşterisine özel geliştirilen platformda analiz,
                geliştirme, test ve canlıya alma süreçlerine katkı sağlıyorum.
                Üretim ortamında karşılaşılan hataların giderilmesi ve mevcut
                servislerin bakımı da günlük sorumluluk alanımda.
              </p>
            </article>
            <div className="focus-tags" aria-label="Fimple çalışma alanları">
              {currentFocus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section snap-panel" id="experience">
        <div className="screen-card experience-card">
          <div className="section-intro compact">
            <p className="eyebrow">Deneyim</p>
            <h2>Finans ve yazılım odaklı kariyer akışı.</h2>
          </div>
          <div className="timeline-list">
            {experiences.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.period}`}>
                <div className="company-logo">
                  {job.logo ? (
                    <img src={job.logo} alt={`${job.company} logosu`} />
                  ) : (
                    <strong>{job.logoText}</strong>
                  )}
                </div>
                <div>
                  <div className="timeline-head">
                    <div>
                      <p className="eyebrow">{job.role}</p>
                      <h3>{job.company}</h3>
                    </div>
                    <span>{job.period}</span>
                  </div>
                  <p>{job.bullets[0]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stack-section snap-panel" id="stack">
        <div className="screen-card stack-card final-card">
          <div>
            <p className="eyebrow">Teknik set</p>
            <h2>.NET, mikro servisler ve bankacılık domainleri çevresinde.</h2>
            <div className="education-summary">
              <p className="eyebrow">Eğitim</p>
              <h3>Konya Teknik Üniversitesi</h3>
              <p>Bilgisayar Mühendisliği · 2016 - 2020 · GNO 3.04</p>
            </div>
          </div>
          <div className="final-column">
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="contact-panel">
              <a href="/huseyin-emre-cevik-cv.pdf" download>
                Güncel PDF CV İndir
              </a>
              <a href="mailto:hemrecevik@gmail.com">Mail gönder</a>
              <span>Türkçe, İngilizce</span>
              <span>Askerlik tamamlandı · B sınıfı ehliyet</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
