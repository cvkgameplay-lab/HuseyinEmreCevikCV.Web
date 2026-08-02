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
];

const domains = [
  "Kredi başvurusu, tahsis, kullandırım ve tahsilat",
  "Risk, yasal takip ve teminat süreçleri",
  "Experian, Telco, AML ve DMS entegrasyonları",
  "REST API, performans ve sorgu optimizasyonu",
];

type Experience = {
  role: string;
  company: string;
  logo?: string;
  logoText?: string;
  period: string;
  place: string;
  contrast?: "light";
  bullets: string[];
};

const experiences: Experience[] = [
  {
    role: "Full-Stack Engineer",
    company: "Upenerji",
    logoText: "UP",
    period: "11/2020 - 09/2021",
    place: "Konya, Türkiye",
    bullets: [
      "Enerji sektöründeki firmalara danışmanlık ve yazılım hizmeti verdi.",
      "MEDAŞ için kurum içinde kullanılan web projeleri geliştirdi.",
      ".NET MVC, MSSQL ve Android teknolojileriyle puantaj, proje yönetim ve ziyaretçi takip sistemleri üzerinde çalıştı.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Softtech",
    logo: "/brand/softtech.svg",
    period: "09/2021 - 01/2023",
    place: "İstanbul, Türkiye",
    bullets: [
      "Sermaye piyasaları alım satım sistemleri departmanında emir iletimi ve risk kontrol sistemleri üzerinde çalıştı.",
      "Borsa emirlerinin kontrolü ve borsaya aktarımı için web servis geliştirmeleri yaptı.",
      "Trademaster client uygulaması ve ilgili servislerin geliştirme ve destek süreçlerinde rol aldı.",
      "Akıllı Emir API entegrasyonu, tarihli emir, şartlı emir ve zincir emir ekranları geliştirdi.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Dgpays",
    logo: "/brand/dgpays.svg",
    period: "01/2023 - 03/2026",
    place: "İstanbul, Türkiye",
    contrast: "light",
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
    company: "Fimple",
    logo: "/brand/fimple.png",
    period: "03/2026 - Devam",
    place: "İstanbul, Türkiye",
    bullets: [
      "Fimple bünyesinde Tera Bank müşterisine özel geliştirilen dijital bankacılık platformunda görev alıyor.",
      "Kredi başvurusu, tahsis, kullandırım, tahsilat ve risk süreçlerine yönelik geliştirmeler gerçekleştiriyor.",
      "Yeni özellik geliştirme, mevcut servis bakımı ve üretim ortamı hata çözümü süreçlerinde aktif rol alıyor.",
      "Experian, Telco, AML ve DMS gibi üçüncü parti servislerle entegrasyon geliştirmeleri ve iyileştirmeleri yapıyor.",
      "REST API geliştirme, veritabanı sorgu optimizasyonu ve performans iyileştirme çalışmalarını yürütüyor.",
    ],
  },
];

export default function Home() {
  return (
    <main className="cv-page">
      <nav className="cv-toolbar" aria-label="CV işlemleri">
        <strong>Hüseyin Emre Çevik</strong>
        <div>
          <a href="/huseyin-emre-cevik-cv.pdf" download>
            PDF İndir
          </a>
          <a href="mailto:hemrecevik@gmail.com">Mail Gönder</a>
        </div>
      </nav>

      <section className="cv-sheet" aria-label="Hüseyin Emre Çevik CV">
        <aside className="cv-sidebar">
          <img src="/profile.jpg" alt="Hüseyin Emre Çevik portre fotoğrafı" />
          <h1>Hüseyin Emre Çevik</h1>
          <p className="role">Senior Software Developer</p>

          <section>
            <h2>İletişim</h2>
            <p>hemrecevik@gmail.com</p>
            <p>+90 541 498 1116</p>
            <p>Gölcük / Kocaeli</p>
          </section>

          <section>
            <h2>Teknik Set</h2>
            <div className="chip-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section>
            <h2>Domain</h2>
            <ul>
              {domains.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Bilgiler</h2>
            <p>Türkçe, İngilizce</p>
            <p>Askerlik tamamlandı</p>
            <p>B sınıfı ehliyet</p>
          </section>
        </aside>

        <div className="cv-content">
          <section className="profile-block">
            <h2>Profil</h2>
            <p>
              Finans ve bankacılık domainlerinde backend ağırlıklı full-stack
              geliştirme yapan Senior Software Developer. Mikro servisler, kredi
              yaşam döngüsü, entegrasyonlar, servis bakımı ve üretim ortamı hata
              çözümü konularında aktif rol alır.
            </p>
          </section>

          <section>
            <h2>Deneyim</h2>
            <div className="experience-list">
              {experiences.map((job) => (
                <article className="cv-job" key={`${job.company}-${job.period}`}>
                  <div className="job-header">
                    <div className={`job-logo ${job.contrast === "light" ? "light-logo" : ""}`}>
                      {job.logo ? (
                        <img src={job.logo} alt={`${job.company} logosu`} />
                      ) : (
                        <strong>{job.logoText}</strong>
                      )}
                    </div>
                    <div>
                      <h3>
                        {job.role} - {job.company}
                      </h3>
                      <p>{job.place}</p>
                    </div>
                    <span>{job.period}</span>
                  </div>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="education-block">
            <h2>Eğitim</h2>
            <p>Konya Teknik Üniversitesi - Bilgisayar Mühendisliği, 2016 - 2020, GNO 3.04</p>
          </section>
        </div>
      </section>
    </main>
  );
}
