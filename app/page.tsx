import Image from "next/image";

type SkillCategory = {
  title: string;
  items: string[];
};

type Experience = {
  role: string;
  company: string;
  logo?: string;
  initials: string;
  logoTone: "dark" | "light" | "mono" | "upenerji";
  period: string;
  place: string;
  bullets: string[];
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: "phone" | "mail" | "location";
};

type Education = {
  school: string;
  department: string;
  faculty: string;
  place: string;
  period: string;
  gpa?: string;
};

const contactItems: ContactItem[] = [
  {
    label: "Telefon",
    value: "+90 541 498 1116",
    href: "tel:+905414981116",
    icon: "phone",
  },
  {
    label: "E-posta",
    value: "hemrecevik@gmail.com",
    href: "mailto:hemrecevik@gmail.com",
    icon: "mail",
  },
  {
    label: "Konum",
    value: "Gölcük / Kocaeli",
    icon: "location",
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    items: ["C#", ".NET", ".NET 8", "Java", "OOP", "Microservices"],
  },
  {
    title: "Frontend",
    items: ["JavaScript", "React", "jQuery"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MSSQL"],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "TFS", "Camunda BPM", "Unit Testing"],
  },
];

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Fimple",
    logo: "/brand/fimple.png",
    initials: "FI",
    logoTone: "light",
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
    initials: "DG",
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
    initials: "ST",
    logoTone: "dark",
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
    logo: "/brand/upenerji.jpg",
    initials: "UP",
    logoTone: "upenerji",
    period: "11/2020 - 09/2021",
    place: "Konya, Türkiye",
    bullets: [
      "Enerji sektöründeki firmalara danışmanlık ve yazılım hizmeti verdim.",
      "MEDAŞ için kurum içinde kullanılan web projeleri geliştirdim.",
      ".NET MVC, MSSQL ve Android teknolojileriyle puantaj, proje yönetim ve ziyaretçi takip sistemleri üzerinde çalıştım.",
    ],
  },
];

const certificates = [
  "Yüksek Onur Belgesi - Konya Teknik Üniversitesi, 12/2019",
  "Yüksek Onur Belgesi - Konya Teknik Üniversitesi, 06/2020",
];

const education: Education[] = [
  {
    school: "Konya Teknik Üniversitesi",
    department: "Bilgisayar Mühendisliği - Yüksek Lisans",
    faculty: "Mühendislik Fakültesi",
    place: "Konya, Türkiye",
    period: "Devam",
  },
  {
    school: "Konya Teknik Üniversitesi",
    department: "Bilgisayar Mühendisliği",
    faculty: "Mühendislik Fakültesi",
    place: "Konya, Türkiye",
    period: "2016 - 2020",
    gpa: "3.04",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="portfolio-page">
      <div className="portfolio-shell">
        <ProfilePanel />

        <div className="content-column">
          <Section eyebrow="Kariyer" title="Deneyim">
            <div className="timeline" aria-label="İş deneyimleri">
              {experiences.map((experience) => (
                <ExperienceCard experience={experience} key={`${experience.company}-${experience.period}`} />
              ))}
            </div>
          </Section>

          <Section eyebrow="Akademik" title="Eğitim">
            <div className="education-list">
              {education.map((item) => (
                <article className="info-card education-card" key={`${item.department}-${item.period}`}>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.department}</p>
                    <p className="card-kicker">{item.faculty}</p>
                  </div>
                  <dl>
                    <div>
                      <dt>Konum</dt>
                      <dd>{item.place}</dd>
                    </div>
                    <div>
                      <dt>Tarih</dt>
                      <dd>{item.period}</dd>
                    </div>
                    {item.gpa ? (
                      <div>
                        <dt>GNO</dt>
                        <dd>{item.gpa}</dd>
                      </div>
                    ) : null}
                  </dl>
                </article>
              ))}
            </div>
          </Section>

          <Section eyebrow="Belgeler" title="Başarılar ve Belgeler">
            <div className="certificate-grid">
              {certificates.map((certificate) => (
                <article className="info-card certificate-card" key={certificate}>
                  <h3>{certificate.split(" - ")[0]}</h3>
                  <p>{certificate.split(" - ")[1]}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section eyebrow="Profil" title="Ek Bilgiler">
            <article className="info-card simple-details">
              <div>
                <span>Konum</span>
                <strong>Gölcük / Kocaeli</strong>
              </div>
              <div>
                <span>Diller</span>
                <strong>Türkçe, İngilizce</strong>
              </div>
            </article>
          </Section>

          <footer className="site-footer">© {currentYear} Hüseyin Emre Çevik</footer>
        </div>
      </div>
    </main>
  );
}

function ProfilePanel() {
  return (
    <header className="profile-panel">
      <div className="profile-media">
        <Image
          src="/profile.jpg"
          alt="Hüseyin Emre Çevik profil fotoğrafı"
          width={120}
          height={120}
          priority
          unoptimized
        />
      </div>

      <div className="profile-heading">
        <p className="availability">Senior Software Developer</p>
        <h1>
          <span>Hüseyin Emre</span>
          <span>Çevik</span>
        </h1>
      </div>

      <address className="contact-list" aria-label="İletişim bilgileri">
        {contactItems.map((item) => (
          <ContactRow item={item} key={item.label} />
        ))}
      </address>

      <div className="action-group" aria-label="CV aksiyonları">
        <a className="primary-action" href="/Huseyin-Emre-Cevik-CV.pdf" download="Huseyin-Emre-Cevik-CV.pdf">
          PDF İndir
        </a>
        <a className="secondary-action" href="mailto:hemrecevik@gmail.com">
          Mail Gönder
        </a>
      </div>

      <section className="skills-panel" aria-labelledby="skills-title">
        <h2 id="skills-title">Yetenekler</h2>
        <div className="skill-groups">
          {skillCategories.map((category) => (
            <div className="skill-group" key={category.title}>
              <h3>{category.title}</h3>
              <div className="chip-list">
                {category.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
}

function ContactRow({ item }: Readonly<{ item: ContactItem }>) {
  const content = (
    <>
      <Icon name={item.icon} />
      <span>
        <small>{item.label}</small>
        <strong>{item.value}</strong>
      </span>
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} className="contact-row">
        {content}
      </a>
    );
  }

  return <div className="contact-row">{content}</div>;
}

function Section({
  eyebrow,
  title,
  children,
}: Readonly<{
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}>) {
  const titleId = `${title.toLocaleLowerCase("tr-TR").replace(/\s+/g, "-")}-title`;

  return (
    <section className="content-section" aria-labelledby={titleId}>
      <div className="section-heading">
        <p>{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ExperienceCard({ experience }: Readonly<{ experience: Experience }>) {
  return (
    <article className="experience-card">
      <div className="experience-header">
        <CompanyLogo experience={experience} />
        <div className="experience-title">
          <p>{experience.company}</p>
          <h3>{experience.role}</h3>
        </div>
      </div>

      <div className="experience-meta" aria-label={`${experience.company} detayları`}>
        <span>{experience.place}</span>
        <time>{experience.period}</time>
      </div>

      <ul className="experience-list">
        {experience.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

function CompanyLogo({ experience }: Readonly<{ experience: Experience }>) {
  return (
    <div className={`company-logo company-logo--${experience.logoTone}`} aria-hidden={experience.logo ? undefined : true}>
      {!experience.logo ? <span className="logo-fallback">{experience.initials}</span> : null}
      {experience.logo ? (
        <Image src={experience.logo} alt={`${experience.company} logosu`} width={160} height={80} unoptimized />
      ) : null}
    </div>
  );
}

function Icon({ name }: Readonly<{ name: ContactItem["icon"] }>) {
  return (
    <span className={`contact-icon contact-icon--${name}`} aria-hidden="true">
      <span />
    </span>
  );
}
