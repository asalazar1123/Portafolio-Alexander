import Layout from "../components/Layout.js";
import { skills, experiences, projects } from "../profile";

const index = () => (
  <Layout>
    {/** HEADER **/}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="perfil.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Alexander Salazar</h1>
              <h3>Desarrollador Web Full Stack 💻</h3>
              <p>
                Soy un desarrollador web y mobile graduado de Inacap Valparaíso,
                especializado en la creación de páginas web interactivas. Con
                sólidos conocimientos en desarrollo full stack, combino
                habilidades en frontend y backend para diseñar experiencias
                digitales innovadoras y funcionales. Mi pasión por la tecnología
                y el diseño se refleja en cada proyecto que emprendo, buscando
                siempre superar las expectativas y ofrecer soluciones creativas
                a los desafíos digitales.
              </p>
              <button type="button" className="btn btn-light">
                Descargar mi CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** SEGUNDA SECTION **/}
    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Habilidades 🔩</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar bg-dark"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experiencia 📎</h1>
            <ul>
              {/* Lista Experience */}

              {experiences.map(({ title,description, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

       {/* Portafolio */}

    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="/">Ver Proyecto</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);


export default index;
