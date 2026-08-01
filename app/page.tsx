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

const highlights = [
  {
    value: "5+",
    label: "yıl yazılım deneyimi",
  },
  {
    value: "Core",
    label: "bankacılık ve sermaye piyasası alanları",
  },
  {
    value: "Full-stack",
    label: "backend ağırlıklı ürün geliştirme",
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Dgpays",
    place: "İstanbul, Türkiye",
    period: "01/2023 - Devam",
    summary:
      "Temel bankacılık departmanında krediler ekibinde, farklı finans domainleri için bağımsız mikro servisler geliştiriyor.",
    bullets: [
      "Kredi, tahsilat, teminat, müşteri başvuru, yasal takip ve risk domainleri için mikro servisler tasarladı.",
      "CRUD API'leri ve backend servislerini .NET 8 ile geliştirdi; React arayüz geliştirmelerini destekledi.",
      "Camunda Modeler ile iş akışı ve süreç otomasyonu tasarımları yaptı.",
      "Dolt ve Trino kullanarak veri yönetimi, entegrasyon ve veritabanı script süreçlerini yürüttü.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Softtech",
    place: "İstanbul, Türkiye",
    period: "09/2021 - 01/2023",
    summary:
      "Sermaye piyasaları alım satım sistemleri ekibinde emir iletimi, risk kontrolü ve aracı kurum uygulamaları üzerinde çalıştı.",
    bullets: [
      "Borsa emirlerinin kontrolü ve borsaya aktarımı için web servis geliştirmeleri yaptı.",
      "Trademaster client uygulaması ve ilgili servislerin geliştirme ve destek süreçlerinde rol aldı.",
      "Akıllı Emir API entegrasyonu, tarihli emir, şartlı emir ve zincir emir ekranları için geliştirmeler yaptı.",
      "Mobil ve web istemcileri için RESTful ve SOAP servis entegrasyonları sağladı.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Upenerji",
    place: "Konya, Türkiye",
    period: "11/2020 - 09/2021",
    summary:
      "Enerji sektöründeki firmalara danışmanlık ve yazılım hizmeti veren ekipte full-stack projeler geliştirdi.",
    bullets: [
      "İki milyonun üzerinde abonesi olan MEDAŞ için sıfırdan web projeleri geliştirdi.",
      ".NET MVC, MSSQL ve Android teknolojileriyle puantaj, proje yönetimi ve ziyaretçi takip sistemleri üzerinde çalıştı.",
      "Halen kurum içinde kullanılan iş uygulamalarının tasarım ve geliştirme süreçlerine katkıda bulundu.",
    ],
  },
];

const projectDomains = [
  "Kredi servisleri",
  "Tahsilat ve teminat",
  "Müşteri başvuru",
  "Yasal takip",
  "Risk sistemleri",
  "Emir iletim servisleri",
  "Proje yönetim uygulamaları",
  "Ziyaretçi takip sistemleri",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#161616]">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Backend ağırlıklı full-stack engineer</p>
            <h1>Hüseyin Emre Çevik</h1>
            <p className="lead">
              Finans, bankacılık, sermaye piyasası ve enerji alanlarında
              mikro servisler, API'ler ve iş uygulamaları geliştiren yazılım
              mühendisi.
            </p>
            <div className="hero-actions" aria-label="İletişim bağlantıları">
              <a href="mailto:hemrecevik@gmail.com">Mail gönder</a>
              <a href="tel:+905414981116">Telefon</a>
              <a href="#experience">Deneyimi incele</a>
            </div>
          </div>

          <div className="profile-panel" aria-label="Profil özeti">
            <div className="monogram">HEC</div>
            <div>
              <p className="panel-kicker">Uzmanlık odağı</p>
              <p className="panel-title">.NET, microservices, API design</p>
            </div>
            <div className="signal-grid">
              {highlights.map((item) => (
                <div key={item.label} className="signal-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-band intro-band">
        <div className="section-shell two-column">
          <div>
            <p className="section-label">Profil</p>
            <h2>Domain bilgisi güçlü, servis odaklı geliştirme.</h2>
          </div>
          <p className="section-text">
            Kredi, tahsilat, teminat, risk, emir iletimi ve operasyonel iş
            uygulamaları gibi kritik iş alanlarında çalıştı. Backend tarafında
            servis tasarımı ve veri entegrasyonu ağırlıklı deneyimini React ve
            full-stack uygulama geliştirme pratiğiyle destekliyor.
          </p>
        </div>
      </section>

      <section className="content-band" id="experience">
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-label">Deneyim</p>
            <h2>Üretim ortamında kullanılan finans ve iş uygulamaları.</h2>
          </div>

          <div className="timeline">
            {experiences.map((job) => (
              <article className="experience-card" key={`${job.company}-${job.period}`}>
                <div className="experience-meta">
                  <span>{job.period}</span>
                  <span>{job.place}</span>
                </div>
                <div className="experience-body">
                  <p className="role">{job.role}</p>
                  <h3>{job.company}</h3>
                  <p>{job.summary}</p>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band skill-band">
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-label">Teknik set</p>
            <h2>Backend, veritabanı ve süreç otomasyonu ekseni.</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band domain-band">
        <div className="section-shell two-column">
          <div>
            <p className="section-label">Çalışma alanları</p>
            <h2>Farklı ekiplerin ihtiyacına göre şekillenen servisler.</h2>
          </div>
          <div className="domain-list">
            {projectDomains.map((domain) => (
              <span key={domain}>{domain}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="section-shell footer-grid">
          <div>
            <p className="section-label">Egitim</p>
            <h2>Konya Teknik Universitesi</h2>
            <p className="section-text">
              Bilgisayar Mühendisliği, Mühendislik Fakültesi - 2016-2020.
              Genel not ortalaması 3.04. Yüksek Onur Belgesi: 12/2019 ve
              06/2020.
            </p>
          </div>

          <div className="contact-card">
            <p className="section-label">Iletisim</p>
            <a href="mailto:hemrecevik@gmail.com">hemrecevik@gmail.com</a>
            <a href="tel:+905414981116">+90 541 498 1116</a>
            <span>Gölcük / Kocaeli</span>
            <span>Türkçe, İngilizce</span>
          </div>
        </div>
      </section>
    </main>
  );
}
