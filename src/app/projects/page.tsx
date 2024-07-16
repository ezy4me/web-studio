import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Проект 1",
      description: "Описание проекта 1",
      imageUrl: "/projects/project-1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Проект 2",
      description: "Описание проекта 2",
      imageUrl: "/projects/project-2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Проект 3",
      description: "Описание проекта 3",
      imageUrl: "/projects/project-3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Проект 4",
      description: "Описание проекта 4",
      imageUrl: "/projects/project-4.jpg",
      link: "#",
    },
  ];

  return (
    <div className="page projects-page">
      <div className="projects-page__container">
        <h1 className="projects-page__title title">НАШИ ПРОЕКТЫ</h1>
        <div className="projects-page__content projects">
          <div className="projects__grid">
            {projects.map((project) => (
              <div key={project.id} className="projects__grid-item card">
                <div className="card__image">
                  <Image
                    src={project.imageUrl}
                    alt={project.link}
                    width={512}
                    height={512}
                  />
                </div>
                <div className="card__content">
                  <h2 className="card__title subtitle">{project.title}</h2>
                  <p className="card__description text">
                    {project.description}
                  </p>
                  <a href={project.link} className="card__link link">
                    Подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
