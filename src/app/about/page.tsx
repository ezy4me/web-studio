import Image from "next/image";

export default function About() {
  return (
    <div className="page about-page">
      <div className="about-page__container">
        <h1 className="about-page__title title">О СТУДИИ</h1>
        <div className="about-page__content">
          <section className="about-page__section">
            <h2 className="about-page__subtitle subtitle">
              Добро пожаловать в [qpd]
            </h2>
            <p className="about-page__text text">
              Мы – команда креативных профессионалов, специализирующихся на
              создании уникальных и высококачественных веб-сайтов. Наша студия
              объединяет дизайнеров, разработчиков и маркетологов, чтобы
              предложить вам комплексные решения для вашего бизнеса в цифровом
              мире.
            </p>
          </section>
          <section className="about-page__section">
            <h2 className="about-page__subtitle subtitle">Наша миссия</h2>
            <p className="about-page__text text">
              Мы верим, что каждый проект уникален, и наша цель – превратить
              ваши идеи в реальность, создавая веб-сайты, которые не только
              привлекают внимание, но и решают конкретные бизнес-задачи. Мы
              стремимся к тому, чтобы каждый наш клиент был доволен результатом
              и достигал своих целей благодаря нашим разработкам.
            </p>
          </section>
          <section className="about-page__section">
            <h2 className="about-page__subtitle subtitle">Наши услуги</h2>
            <ul className="about-page__list">
              <li className="about-page__list-item text">
                <Image
                  src={"/about/interface.png"}
                  alt="Design"
                  width={256}
                  height={256}
                />
                Дизайн и разработка веб-сайтов: От концептуального дизайна до
                полноценной реализации и запуска.
              </li>
              <li className="about-page__list-item text">
                <Image
                  src={"/about/scanner.png"}
                  alt="Mobile"
                  width={256}
                  height={256}
                />
                Мобильная оптимизация: Создание адаптивных сайтов, которые
                великолепно выглядят на всех устройствах.
              </li>
              <li className="about-page__list-item text">
                <Image
                  src={"/about/seo.png"}
                  alt="SEO"
                  width={256}
                  height={256}
                />
                SEO и цифровой маркетинг: Повышение видимости вашего сайта в
                поисковых системах и социальных сетях.
              </li>
              <li className="about-page__list-item text">
                <Image
                  src={"/about/api.png"}
                  alt="Support"
                  width={256}
                  height={256}
                />
                Поддержка и обслуживание: Постоянное обновление и техническая
                поддержка для вашего сайта.
              </li>
            </ul>
          </section>
          <section className="about-page__section">
            <h2 className="about-page__subtitle subtitle">Наш подход</h2>
            <p className="about-page__text text">
              Мы используем новейшие технологии и передовые методики
              проектирования, чтобы создать современные и функциональные сайты.
              В нашем подходе ключевое место занимает тесное взаимодействие с
              клиентом, понимание его целей и потребностей. Мы внимательно
              слушаем ваши пожелания и предлагаем оптимальные решения.
            </p>
          </section>
          <section className="about-page__section">
            <h2 className="about-page__subtitle subtitle">Наши достижения</h2>
            <p className="about-page__text text">
              Мы гордимся нашими многочисленными успешными проектами и
              довольными клиентами. В нашем портфолио – проекты для различных
              отраслей, от стартапов до крупных корпораций. Мы ценим
              долгосрочные партнерские отношения и всегда стремимся превзойти
              ожидания наших клиентов.
            </p>
          </section>
          <section className="about-page__section">
            <h2 className="about-page__subtitle subtitle">Свяжитесь с нами</h2>
            <p className="about-page__text text">
              Готовы преобразить ваш бизнес? Свяжитесь с нами, чтобы обсудить
              ваш проект и узнать, как мы можем помочь вам достичь ваших целей в
              цифровом пространстве.
            </p>
          <button className="btn">ОСТАВИТЬ ЗАЯВКУ</button>

          </section>
        </div>
      </div>
    </div>
  );
}
