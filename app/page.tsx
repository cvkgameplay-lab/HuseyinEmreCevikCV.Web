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

const experiences = [
  {
    role: "Software Engineer",
    company: "Fimple",
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

const impactAreas = [
  {
    title: "Dijital bankacılık",
    text: "Kredi yaşam döngüsü, risk ve tahsilat süreçlerinde üretim ortamına dokunan servisler.",
  },
  {
    title: "Entegrasyonlar",
    text: "Experian, Telco, AML, DMS ve finansal servis ekosistemleriyle güvenilir veri akışı.",
  },
  {
    title: "Performans",
    text: "REST API geliştirme, sorgu optimizasyonu ve mevcut servislerin sürdürülebilir bakımı.",
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
          <a href="mailto:hemrecevik@gmail.com">İletişim</a>
        </div>
      </nav>

      <section className="hero snap-panel" id="home">
        <div className="screen-card hero-card">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · Digital Banking</p>
            <h1>Bankacılık ürünlerini servis mimarisiyle hayata geçiriyorum.</h1>
            <p>
              Fimple bünyesinde Tera Bank için geliştirilen dijital bankacılık
              platformunda kredi, tahsilat, risk ve üçüncü parti entegrasyonları
              üzerinde çalışan backend ağırlıklı full-stack yazılım mühendisiyim.
            </p>
            <div className="hero-links" aria-label="İletişim bağlantıları">
              <a href="mailto:hemrecevik@gmail.com">hemrecevik@gmail.com</a>
              <a href="tel:+905414981116">+90 541 498 1116</a>
              <span>Gölcük / Kocaeli</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profil özeti">
            <img src="/profile.jpg" alt="Hüseyin Emre Çevik portre fotoğrafı" />
            <div className="visual-caption">
              <span>Current</span>
              <strong>Fimple · Tera Bank platformu</strong>
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

      <section className="impact-section snap-panel">
        <div className="screen-card impact-grid">
          {impactAreas.map((area) => (
            <article key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section snap-panel" id="experience">
        <div className="screen-card intro-screen section-intro compact">
          <p className="eyebrow">Deneyim</p>
          <h2>Finansal servislerden operasyonel iş uygulamalarına.</h2>
        </div>
      </section>

      {experiences.map((job) => (
        <section
          className={`experience-slide snap-panel ${job.tone}`}
          key={`${job.company}-${job.period}`}
        >
          <div className="screen-card slide-card">
            <div className="slide-meta">
              <span>{job.period}</span>
              <span>{job.place}</span>
            </div>
            <div className="slide-copy">
              <p className="eyebrow">{job.role}</p>
              <h2>{job.company}</h2>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="stack-section snap-panel" id="stack">
        <div className="screen-card stack-card">
          <div>
            <p className="eyebrow">Teknik set</p>
            <h2>.NET, mikro servisler ve bankacılık domainleri çevresinde.</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section snap-panel">
        <div className="screen-card education-card">
          <div>
            <p className="eyebrow">Eğitim</p>
            <h2>Konya Teknik Üniversitesi</h2>
            <p>Bilgisayar Mühendisliği · 2016 - 2020 · GNO 3.04</p>
          </div>
          <div className="contact-panel">
            <a href="mailto:hemrecevik@gmail.com">Mail gönder</a>
            <span>Türkçe, İngilizce</span>
            <span>Askerlik tamamlandı · B sınıfı ehliyet</span>
          </div>
        </div>
      </section>
    </main>
  );
}
