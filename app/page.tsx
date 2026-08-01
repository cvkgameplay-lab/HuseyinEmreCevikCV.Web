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

const experiences = [
  {
    role: "Software Engineer",
    company: "Dgpays",
    place: "İstanbul, Türkiye",
    period: "01/2023 - Devam",
    bullets: [
      "Temel bankacılık departmanında krediler ekibinde çalışıyor.",
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
    bullets: [
      "Enerji sektöründeki firmalara danışmanlık ve yazılım hizmeti verdi.",
      "MEDAŞ için sıfırdan web projeleri geliştirdi; projeler kurum içinde kullanılmaya devam ediyor.",
      ".NET MVC, MSSQL ve Android teknolojileriyle puantaj sistemi, proje yönetim uygulaması ve ziyaretçi takip sistemi üzerinde çalıştı.",
    ],
  },
];

const domains = [
  "Kredi",
  "Tahsilat",
  "Teminat",
  "Müşteri Başvuru",
  "Yasal Takip",
  "Risk",
  "Emir İletimi",
  "Operasyonel İş Uygulamaları",
];

export default function Home() {
  return (
    <main className="resume-page">
      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">Software Engineer</p>
            <h1>Hüseyin Emre Çevik</h1>
            <p className="summary">
              Bankacılık, sermaye piyasaları ve enerji alanlarında mikro
              servisler, API'ler ve iş uygulamaları geliştiren backend ağırlıklı
              full-stack yazılım mühendisi.
            </p>
          </div>

          <div className="header-side">
            <img
              className="profile-photo"
              src="/profile.jpg"
              alt="Hüseyin Emre Çevik portre fotoğrafı"
            />
            <div className="contact-block" aria-label="İletişim bilgileri">
              <a href="mailto:hemrecevik@gmail.com">hemrecevik@gmail.com</a>
              <a href="tel:+905414981116">+90 541 498 1116</a>
              <span>Gölcük / Kocaeli</span>
              <span>Türkçe, İngilizce</span>
            </div>
          </div>
        </header>

        <div className="resume-body">
          <aside className="sidebar">
            <section>
              <h2>Yetkinlikler</h2>
              <div className="skill-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>

            <section>
              <h2>Çalışma Alanları</h2>
              <ul className="plain-list">
                {domains.map((domain) => (
                  <li key={domain}>{domain}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Eğitim</h2>
              <p className="compact-title">Konya Teknik Üniversitesi</p>
              <p>Bilgisayar Mühendisliği</p>
              <p>2016 - 2020</p>
              <p>GNO: 3.04</p>
            </section>

            <section>
              <h2>Diğerleri</h2>
              <ul className="plain-list">
                <li>Yüksek Onur Belgesi - 12/2019</li>
                <li>Yüksek Onur Belgesi - 06/2020</li>
                <li>Askerlik: Tamamlandı</li>
                <li>Ehliyet: B Sınıfı</li>
              </ul>
            </section>
          </aside>

          <section className="main-column" id="experience">
            <h2>Deneyimler</h2>
            <div className="experience-list">
              {experiences.map((job) => (
                <section className="experience-item" key={`${job.company}-${job.period}`}>
                  <div className="experience-heading">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>
                    <div className="experience-meta">
                      <span>{job.place}</span>
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
