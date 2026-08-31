import { useState } from 'react';

const services = [
  [
    '01',
    'Producto que avanza',
    'Convierto ideas y necesidades de negocio en productos digitales claros, útiles y listos para validar.',
  ],
  [
    '02',
    'Sistemas conectados',
    'Uno tus herramientas, plataformas y servicios para que la información fluya y el equipo pueda moverse más rápido.',
  ],
  [
    '03',
    'Escala con criterio',
    'Construyo una base cloud confiable para crecer sin pagar el precio de improvisar después.',
  ],
  [
    '04',
    'Operación más simple',
    'Automatizo lo repetitivo para recuperar tiempo, reducir errores y enfocarte en hacer crecer el negocio.',
  ],
];

const projects = [
  {
    number: '01',
    title: 'Un camino más corto al cliente',
    problem: 'Demasiadas herramientas y datos aislados frenan cada decisión.',
    built:
      'Un flujo conectado para que el producto, las operaciones y los servicios externos trabajen juntos.',
    tags: ['APIs', 'Integraciones', 'AWS'],
  },
  {
    number: '02',
    title: 'Una base para crecer',
    problem: 'El producto tiene tracción, pero cada cambio cuesta demasiado.',
    built:
      'Una arquitectura backend que permite lanzar, aprender y evolucionar sin frenar al equipo.',
    tags: ['Backend', 'Diseño de sistemas', 'Testing'],
  },
  {
    number: '03',
    title: 'Más foco, menos fricción',
    problem:
      'El crecimiento se pierde en tareas manuales y procesos dispersos.',
    built:
      'Automatizaciones que convierten el trabajo operativo en flujos simples y medibles.',
    tags: ['Automatización', 'Cloud', 'APIs'],
  },
];

const architecture = [
  ['Client', 'La experiencia que tus clientes usan y recuerdan.'],
  [
    'API gateway',
    'El puente que conecta cada oportunidad con la acción correcta.',
  ],
  [
    'Services',
    'La lógica que convierte una idea en una experiencia que funciona.',
  ],
  [
    'Data layer',
    'La información que permite decidir mejor y aprender del producto.',
  ],
  [
    'External systems',
    'Bancos, herramientas y aliados que amplían lo que puedes ofrecer.',
  ],
];

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function SystemIcon({
  type,
}: {
  type: 'app' | 'connect' | 'cloud' | 'data' | 'bank';
}) {
  const paths = {
    app: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 18h6" />
      </>
    ),
    connect: (
      <>
        <path d="M8 8l8 8M16 8l-8 8" />
        <path d="M5 11l-2 2a3 3 0 004 4l2-2M19 13l2-2a3 3 0 00-4-4l-2 2" />
      </>
    ),
    cloud: <path d="M6 18h12a4 4 0 00.7-7.9A6 6 0 007 8.2 4 4 0 006 18Z" />,
    data: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),
    bank: (
      <>
        <path d="M3 9l9-6 9 6M5 10v7M9 10v7M15 10v7M19 10v7M3 20h18" />
      </>
    ),
  };

  return (
    <svg
      className="system-icon"
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function App() {
  const [activeLayer, setActiveLayer] = useState(2);

  return (
    <main>
      <nav className="nav wrap" aria-label="Navegación principal">
        <a className="brand" href="#top" aria-label="Luis Montano, inicio">
          <span>LM</span> Luis Montano
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#work">Proyectos</a>
          <a href="#about">Sobre mí</a>
        </div>
        <a className="nav-cta" href="#contact">
          <i /> Hablemos <Arrow />
        </a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse" /> Growth partner · Software engineer
          </p>
          <h1>
            Crecimiento que
            <br />
            <em>se puede construir.</em>
          </h1>
          <p className="hero-text">
            Te ayudo a convertir oportunidades en productos, procesos y sistemas
            que hacen avanzar el negocio con velocidad y criterio técnico.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Hablemos de cómo crecer <Arrow />
            </a>
            <a className="text-link" href="#work">
              Ver mi trabajo <span>↓</span>
            </a>
          </div>
        </div>
        <div
          className="system-map"
          aria-label="Mapa de cómo un producto conecta clientes, datos y servicios para crecer"
        >
          <div className="map-orbit orbit-one" />
          <div className="map-orbit orbit-two" />
          <svg viewBox="0 0 500 430" role="presentation" aria-hidden="true">
            <path d="M96 78L250 145L404 78M250 145V315M96 78L106 340M404 78L394 340M106 340L250 315L394 340" />
            <path className="data-line" d="M96 78L250 145L404 78M250 145V315" />
          </svg>
          <div className="map-node node-client">
            <SystemIcon type="app" />
            <span>
              <b>Tu producto</b>
              <small>La experiencia</small>
            </span>
          </div>
          <div className="map-node node-api">
            <SystemIcon type="connect" />
            <span>
              <b>Conexiones</b>
              <small>Todo comunica</small>
            </span>
          </div>
          <div className="map-node node-cloud">
            <SystemIcon type="cloud" />
            <span>
              <b>En la nube</b>
              <small>Siempre disponible</small>
            </span>
          </div>
          <div className="map-node node-data">
            <SystemIcon type="data" />
            <span>
              <b>Datos</b>
              <small>Ordenados y seguros</small>
            </span>
          </div>
          <div className="map-node node-external">
            <SystemIcon type="bank" />
            <span>
              <b>Bancos y servicios</b>
              <small>Integraciones</small>
            </span>
          </div>
          <div className="map-label">
            TU PRODUCTO <span>● listo para crecer</span>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          <span>BUILD WITH INTENT</span>
          <b>✳</b>
          <span>ARCHITECTURE</span>
          <b>✳</b>
          <span>INTEGRATION</span>
          <b>✳</b>
          <span>RELIABILITY</span>
          <b>✳</b>
          <span>BUILD WITH INTENT</span>
        </div>
      </div>

      <section className="section wrap" id="expertise">
        <div className="section-heading">
          <p className="eyebrow">01 / Cómo desbloqueo crecimiento</p>
          <h2>
            El crecimiento real
            <br />
            <em>necesita una base.</em>
          </h2>
        </div>
        <div className="services-grid">
          {services.map(([number, title, text]) => (
            <article className="service" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      <section className="problems-band">
        <div className="wrap problems-layout">
          <div>
            <p className="eyebrow">02 / De oportunidad a resultado</p>
            <h2>
              No solo construyo.
              <br />
              <em>Hago avanzar.</em>
            </h2>
            <p className="muted">
              Cada oportunidad empieza con una pregunta de negocio. Mi trabajo
              es convertirla en una apuesta clara, una solución útil y una base
              que aguante.
            </p>
          </div>
          <div className="problem-list">
            <div>
              “Estamos perdiendo oportunidades.” <b>→</b>
            </div>
            <div>
              “Queremos lanzar y aprender más rápido.” <b>→</b>
            </div>
            <div>
              “El equipo pierde tiempo en operación.” <b>→</b>
            </div>
            <div>
              “Tenemos una idea, necesitamos validarla.” <b>→</b>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="work">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">03 / Trabajo que mueve la aguja</p>
            <h2>
              La tecnología debe
              <br />
              <em>hacerte avanzar.</em>
            </h2>
          </div>
          <span className="placeholder-note">
            Casos de muestra · reemplazar con proyectos reales
          </span>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-visual">
                <span>{project.number}</span>
                <div className="visual-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <strong>{project.title}</strong>
              </div>
              <div className="project-copy">
                <span className="eyebrow">
                  {project.number} / Caso de muestra
                </span>
                <h3>{project.title}</h3>
                <p>
                  <b>Problema</b>
                  {project.problem}
                </p>
                <p>
                  <b>Lo que construí</b>
                  {project.built}
                </p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="wrap architecture-layout">
          <div>
            <p className="eyebrow">04 / La base para crecer</p>
            <h2>
              Crecer no es solo
              <br />
              <em>vender más.</em>
            </h2>
            <p className="muted">
              Diseño el flujo completo: qué necesita tu cliente, qué puede
              automatizarse y cómo sabremos que el producto sigue funcionando.
            </p>
            <div className="architecture-detail">
              <span>0{activeLayer + 1}</span>
              <p>{architecture[activeLayer][1]}</p>
            </div>
          </div>
          <div className="architecture-stack">
            {architecture.map(([name], index) => (
              <button
                className={activeLayer === index ? 'layer active' : 'layer'}
                key={name}
                onMouseEnter={() => setActiveLayer(index)}
                onFocus={() => setActiveLayer(index)}
                onClick={() => setActiveLayer(index)}
              >
                <span>0{index + 1}</span>
                <b>{name}</b>
                <Arrow />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section about wrap" id="about">
        <div>
          <p className="eyebrow">05 / Tu socio técnico</p>
          <h2>
            Pensamiento técnico
            <br />
            <em>con mirada de negocio.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            No me interesa programar por programar. Me interesa entender dónde
            está la oportunidad, qué frena al equipo y qué solución puede crear
            valor hoy y seguir siendo útil dentro de un año.
          </p>
          <p>
            Trabajo entre producto, backend, integraciones, cloud y desarrollo
            web. Aprendo lo que hace falta, documento las decisiones y construyo
            con los pies puestos en la realidad del negocio.
          </p>
          <div className="signature">
            Luis Montano <span>Growth Partner · Software Engineer</span>
          </div>
        </div>
      </section>

      <section className="process wrap">
        <div className="section-heading">
          <p className="eyebrow">06 / Cómo crecemos juntos</p>
          <h2>
            De la oportunidad
            <br />
            <em>a algo que crece.</em>
          </h2>
        </div>
        <div className="process-grid">
          {[
            ['01', 'Enfocar', 'Qué oportunidad vale la pena perseguir.'],
            ['02', 'Diseñar', 'La ruta más clara para llegar al resultado.'],
            ['03', 'Validar', 'Construir lo necesario y aprender rápido.'],
            ['04', 'Conectar', 'Unir producto, equipo y operación.'],
            ['05', 'Acelerar', 'Una base confiable para seguir lanzando.'],
            [
              '06',
              'Optimizar',
              'Medir, corregir y encontrar el siguiente paso.',
            ],
          ].map(([n, t, d]) => (
            <div className="process-step" key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-inner">
          <p className="eyebrow">07 / Construyamos el siguiente paso</p>
          <h2>
            ¿Qué quieres hacer
            <br />
            <em>crecer de verdad?</em>
          </h2>
          <p>
            Cuéntame qué oportunidad estás explorando, qué fricción quieres
            quitar o qué producto quieres llevar más lejos.
          </p>
          <a className="button button-light" href="mailto:hola@luismontano.dev">
            Hablemos <Arrow />
          </a>
        </div>
      </section>
      <footer className="footer wrap">
        <a className="brand" href="#top">
          <span>LM</span> Luis Montano
        </a>
        <p>
          Growth Partner · Software Engineer
          <br />
          <small>Strategy · Product · Backend · Cloud · Integrations</small>
        </p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="mailto:hola@luismontano.dev">Email ↗</a>
        </div>
        <small>© 2026 Luis Montano</small>
      </footer>
    </main>
  );
}

export default App;
