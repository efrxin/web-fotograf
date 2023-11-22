import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const photos = [
    { id: 1, url: 'photo1.jpg', title: 'Foto 1' },
    { id: 2, url: 'photo2.jpg', title: 'Foto 2' },
    // Agrega más fotos según sea necesario
  ];

  return (
    <div>
      {/* Barra de Navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="LogoRf.png" alt="Fotografía Platform" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#gallery">
                  Galería
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">
                  Cursos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marketplace">
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tools">
                  Herramientas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido de la Página */}
      <div className="container mt-5">
        <header className="text-center mb-4">
          <h1>El rincón fotografico</h1>
        </header>

        {/* Galería de Trabajos Fotográficos */}
        <section id="gallery" className="mb-4">
          <h2>Galería de Trabajos Fotográficos</h2>
          <div className="row">
            {photos.map((photo) => (
              <div key={photo.id} className="col-md-4 mb-3">
                <div className="card">
                  <img src={`/photos/${photo.url}`} alt={photo.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agrega más secciones según sea necesario (cursos, blog, marketplace, herramientas) */}

        {/* Pie de Página */}
        <footer className="text-center mt-5">
          <p>&copy; 2023 Fotografía Platform</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
