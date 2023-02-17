import React from "react";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Quienes Somos</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Somos un equipo de dentistas que trabajamos con el fin de ofrecer 
                        a nuestros pacientes la mejor atención odontológica asi como el 
                        asesoramiento necesario para realizar su tratamiento.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Comodidad</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Instalaciones seguras y accesibles</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-file-image-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Tecnologìa</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Utilizaciòn de tecnologia avanzada</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Calidad</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Tratamientos seguros y de calidad</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                      <h3>Excelente Ubicaciòn</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Nos encontramos en el centro de la ciudad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Nuestros servicios</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/design-development.jpg"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Ortodoncia</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Es una especialidad de la odontología que se encarga de la corrección 
                          de los dientes y huesos posicionados incorrectamente.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/e-commarce.jpg"
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Endodoncia</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          La endodoncia es un procedimiento que tiene como finalidad 
                          preservar las piezas dentales dañadas, evitando así su pérdida.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/analytics.jpg"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Odontopediatrìa</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Es la especialidad de la Odontología que se enfoca en atender pacientes desde su nacimiento hasta la edad adulta..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/mobile-friendly.jpg"
                          alt="mobile-friendly"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Cirugìa Oral</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Hace referencia a cualquier procedimiento quirúrgico en la boca y la mandíbula o alrededor de estas.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/website-audit.jpg"
                          alt="website-audit"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Implantologìa</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Es la rama de la Odontología que se dedica a la realización de tratamientos con implantes dentales.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/content-management.jpg"
                          alt="content-management"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Protesis Dental</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Es un elemento artificial que sirve para restaurar la anatomía de uno o varios dientes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>

        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contacto</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Siempre a su disposiciòn por cualquier duda o comentario en nuestros medios de contacto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Direcciòn</h3>
                        <p>Santiago de Queretaro, Queretaro, Centro</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:jacky.camacho@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          jacky.camacho@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Telefono</h3>
                        <a
                          href="tel:4425617986"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          +52 4425617986
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-television contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Pagina Web</h3>
                        <p>https://dentalcarey.com/</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid map-col">
                  <div class="col-md-12 col-sm-12 map-col">
                    <div class="google-maps">
                      <div class="map-wrap">
                        <iframe
                          title="google-maps"
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3734.977532777301!2d-100.3950491!3d20.5889751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b2acef8c63b%3A0x9b4a572b5f5bc366!2sDental%20Carey!5e0!3m2!1ses-419!2smx!4v1675900167230!5m2!1ses-419!2smx"
                          width="100%"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
