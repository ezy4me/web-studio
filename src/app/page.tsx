
export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Проект 1",
      description: "Описание проекта 1",
      imageUrl: "/images/project1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Проект 2",
      description: "Описание проекта 2",
      imageUrl: "/images/project2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Проект 3",
      description: "Описание проекта 3",
      imageUrl: "/images/project3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Проект 4",
      description: "Описание проекта 4",
      imageUrl: "/images/project4.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Проект 5",
      description: "Описание проекта 5",
      imageUrl: "/images/project5.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Проект 6",
      description: "Описание проекта 6",
      imageUrl: "/images/project6.jpg",
      link: "#",
    },
    {
      id: 7,
      title: "Проект 7",
      description: "Описание проекта 7",
      imageUrl: "/images/project7.jpg",
      link: "#",
    },
    {
      id: 8,
      title: "Проект 8",
      description: "Описание проекта 8",
      imageUrl: "/images/project8.jpg",
      link: "#",
    },
  ];

  return (
    <main>
      <div className="page home-page">
        <div className="page__container">
          <p className="home-page__title title">
            Превратим вашу идею в цифровую реальность
          </p>
          <button className="btn">Наши проекты</button>
        </div>
      </div>
      <div className="projects">
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card__content">
                <h2 className="card__title">{project.title}</h2>
                <p className="card__description">{project.description}</p>
                <a href={project.link} className="card__link">
                  Подробнее
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
