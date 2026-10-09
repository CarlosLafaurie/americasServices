import {
  Cookie,
  Database,
  FileText,
  Gift,
  LockKeyhole,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";


const LAST_UPDATE =
  "26 de agosto de 2026";

export default function LegalPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-glow" />

        <div className="container legal-hero-content">
          <span className="legal-kicker">
            INFORMACIÓN LEGAL
          </span>

          <h1>
            Transparencia,
            <br />
            privacidad y confianza.
          </h1>

          <p>
            Consulta las condiciones de uso de
            Americas Services, nuestra política
            de privacidad, tratamiento de datos
            personales y las reglas generales
            del programa de fidelización.
          </p>

          <span className="legal-update">
            Última actualización: {LAST_UPDATE}
          </span>
        </div>
      </section>

      <section className="legal-layout container">
        <aside className="legal-sidebar">
          <div className="legal-sidebar-card">
            <span>
              CONTENIDO
            </span>

            <nav>
              <a href="#terminos">
                Términos y condiciones
              </a>

              <a href="#privacidad">
                Política de privacidad
              </a>

              <a href="#datos">
                Tratamiento de datos
              </a>

              <a href="#finalidades">
                Uso de la información
              </a>

              <a href="#fidelizacion">
                Programa de fidelización
              </a>

              <a href="#cookies">
                Cookies y almacenamiento
              </a>

              <a href="#seguridad">
                Seguridad
              </a>

              <a href="#derechos">
                Derechos del titular
              </a>

              <a href="#contacto">
                Contacto
              </a>
            </nav>
          </div>
        </aside>

        <div className="legal-content">
          <LegalIntro />

          <LegalSection
            id="terminos"
            eyebrow="01"
            icon={<Scale size={21} />}
            title="Términos y condiciones"
          >
            <p>
              El acceso y utilización de la
              website de Americas Services
              implica el cumplimiento de las
              condiciones establecidas en esta
              sección.
            </p>

            <h3>
              Uso de la plataforma
            </h3>

            <p>
              La website permite consultar
              información sobre los servicios
              ofrecidos por Americas Services,
              acceder al programa de
              fidelización y utilizar las
              funcionalidades habilitadas para
              clientes registrados.
            </p>

            <p>
              El usuario se compromete a
              proporcionar información veraz,
              actualizada y completa cuando sea
              necesaria para crear o mantener su
              cuenta.
            </p>

            <h3>
              Cuenta del cliente
            </h3>

            <p>
              Cada cliente es responsable de
              conservar la confidencialidad de
              sus credenciales de acceso y de
              informar oportunamente cualquier
              uso no autorizado de su cuenta.
            </p>

            <p>
              Americas Services podrá limitar o
              suspender el acceso cuando detecte
              uso fraudulento, abuso de la
              plataforma, incumplimiento de
              estas condiciones o situaciones
              que comprometan la seguridad del
              sistema.
            </p>

            <h3>
              Información de servicios
            </h3>

            <p>
              Los precios, disponibilidad,
              horarios, beneficios y
              características publicados podrán
              actualizarse cuando cambien las
              condiciones comerciales del
              servicio.
            </p>

            <p>
              Cuando una transacción o
              prestación de servicios se
              encuentre sometida a normas de
              protección al consumidor, se
              respetarán los derechos que la
              legislación colombiana reconozca
              al consumidor.
            </p>

            <h3>
              Propiedad intelectual
            </h3>

            <p>
              Los signos distintivos, diseños,
              textos, interfaces, fotografías y
              demás contenido propio de
              Americas Services no podrán ser
              reproducidos o explotados
              comercialmente sin autorización,
              salvo los usos permitidos por la
              ley.
            </p>
          </LegalSection>

          <LegalSection
            id="privacidad"
            eyebrow="02"
            icon={<ShieldCheck size={21} />}
            title="Política de privacidad"
          >
            <p>
              Americas Services procura tratar
              únicamente la información
              necesaria para prestar sus
              servicios, administrar las cuentas
              de clientes, gestionar el programa
              de fidelización y cumplir sus
              obligaciones administrativas,
              comerciales y legales.
            </p>

            <h3>
              Información que podemos tratar
            </h3>

            <ul>
              <li>
                Nombre y datos de identificación.
              </li>

              <li>
                Correo electrónico y teléfono.
              </li>

              <li>
                Fecha de nacimiento cuando haya
                sido suministrada.
              </li>

              <li>
                Información asociada a vehículos,
                incluyendo placa y tipo de
                vehículo.
              </li>

              <li>
                Historial de servicios y
                transacciones.
              </li>

              <li>
                Información necesaria para
                facturación.
              </li>

              <li>
                Puntos acumulados, historial de
                puntos y nivel de membresía.
              </li>

              <li>
                Preferencias de comunicaciones
                comerciales.
              </li>

              <li>
                Información técnica necesaria
                para seguridad y funcionamiento
                de la plataforma.
              </li>
            </ul>

            <h3>
              Comunicaciones comerciales
            </h3>

            <p>
              La autorización para recibir
              publicidad, promociones,
              beneficios u otras comunicaciones
              comerciales es independiente del
              tratamiento necesario para
              administrar la cuenta y prestar
              los servicios solicitados.
            </p>

            <p>
              El cliente podrá modificar esta
              preferencia mediante los
              mecanismos que Americas Services
              habilite.
            </p>
          </LegalSection>

          <LegalSection
            id="datos"
            eyebrow="03"
            icon={<Database size={21} />}
            title="Tratamiento de datos personales"
          >
            <p>
              El tratamiento de información
              personal se realizará conforme a
              las finalidades informadas al
              titular y a la normativa
              colombiana aplicable en materia de
              protección de datos personales.
            </p>

            <h3>
              Responsable del tratamiento
            </h3>

            <div className="legal-data-box">
              <div>
                <span>
                  Nombre comercial
                </span>

                <strong>
                  Americas Services
                </strong>
              </div>

              <div>
                <span>
                  Ciudad
                </span>

                <strong>
                  Barranquilla, Colombia
                </strong>
              </div>

              <div>
                <span>
                  Razón social / NIT
                </span>

                <strong>
                  Pendiente de información
                  empresarial definitiva
                </strong>
              </div>

              <div>
                <span>
                  Correo de privacidad
                </span>

                <strong>
                  Pendiente de información
                  empresarial definitiva
                </strong>
              </div>
            </div>

            <p className="legal-warning">
              Estos datos empresariales deben
              completarse con la información
              jurídica real de Americas Services
              antes de publicar la versión
              definitiva de la website.
            </p>

            <h3>
              Autorización
            </h3>

            <p>
              Cuando sea requerida, la
              autorización para el tratamiento
              será solicitada de manera previa,
              expresa e informada, indicando las
              finalidades correspondientes y
              conservando evidencia susceptible
              de consulta posterior.
            </p>
          </LegalSection>

          <LegalSection
            id="finalidades"
            eyebrow="04"
            icon={<UserRoundCheck size={21} />}
            title="¿Para qué usamos tus datos?"
          >
            <p>
              La información suministrada podrá
              utilizarse para las siguientes
              finalidades, según corresponda:
            </p>

            <ul>
              <li>
                Crear, autenticar y administrar
                la cuenta del cliente.
              </li>

              <li>
                Identificar al cliente durante
                la prestación de servicios.
              </li>

              <li>
                Asociar vehículos a su
                propietario.
              </li>

              <li>
                Registrar y consultar órdenes de
                servicio.
              </li>

              <li>
                Procesar ventas y pagos.
              </li>

              <li>
                Emitir los documentos
                tributarios o facturas que
                correspondan.
              </li>

              <li>
                Gestionar el programa de puntos
                y los niveles de membresía.
              </li>

              <li>
                Gestionar solicitudes,
                consultas, reclamos y soporte.
              </li>

              <li>
                Prevenir fraude, abuso o accesos
                no autorizados.
              </li>

              <li>
                Cumplir obligaciones legales,
                contables, fiscales y
                administrativas.
              </li>

              <li>
                Enviar comunicaciones
                promocionales cuando el cliente
                las haya autorizado.
              </li>
            </ul>
          </LegalSection>

          <LegalSection
            id="fidelizacion"
            eyebrow="05"
            icon={<Gift size={21} />}
            title="Programa de fidelización"
          >
            <p>
              Los clientes registrados podrán
              participar en el programa de
              fidelización de Americas Services
              de acuerdo con las condiciones que
              se encuentren vigentes.
            </p>

            <h3>
              Puntos
            </h3>

            <p>
              Determinados productos o servicios
              podrán otorgar puntos. La cantidad
              otorgada dependerá de la
              configuración vigente del
              producto, servicio, promoción y
              nivel de membresía.
            </p>

            <p>
              Salvo que Americas Services
              indique expresamente lo contrario,
              los puntos hacen parte del
              programa de fidelización y no
              constituyen dinero, saldo bancario
              ni un instrumento de pago.
            </p>

            <h3>
              Niveles de membresía
            </h3>

            <p>
              La plataforma puede manejar
              diferentes niveles de membresía,
              cada uno con requisitos,
              multiplicadores o beneficios
              específicos.
            </p>

            <p>
              Los requisitos, beneficios,
              multiplicadores y reglas podrán
              modificarse prospectivamente.
              Los cambios relevantes serán
              comunicados por los canales
              disponibles cuando corresponda.
            </p>

            <h3>
              Redenciones
            </h3>

            <p>
              Los beneficios disponibles para
              redención estarán sujetos al saldo
              de puntos del cliente, a las
              condiciones del beneficio y a su
              disponibilidad.
            </p>

            <h3>
              Membresía digital
            </h3>

            <p>
              Cuando se habiliten las
              integraciones con billeteras
              digitales, Americas Services podrá
              permitir al cliente incorporar su
              tarjeta de membresía digital a
              servicios compatibles.
            </p>

            <p>
              Dichas funcionalidades podrán
              estar igualmente sujetas a las
              condiciones y políticas de los
              proveedores tecnológicos
              correspondientes.
            </p>
          </LegalSection>

          <LegalSection
            id="cookies"
            eyebrow="06"
            icon={<Cookie size={21} />}
            title="Cookies y tecnologías similares"
          >
            <p>
              La website puede utilizar
              almacenamiento local del navegador
              y otras tecnologías técnicas
              necesarias para mantener la
              autenticación, seguridad y
              funcionamiento de determinadas
              funcionalidades.
            </p>

            <p>
              En caso de incorporarse
              posteriormente herramientas de
              analítica, publicidad o tecnologías
              no estrictamente necesarias, esta
              política deberá actualizarse y se
              implementarán los mecanismos de
              información o consentimiento que
              correspondan.
            </p>
          </LegalSection>

          <LegalSection
            id="seguridad"
            eyebrow="07"
            icon={<LockKeyhole size={21} />}
            title="Seguridad de la información"
          >
            <p>
              Americas Services adoptará medidas
              administrativas y tecnológicas
              razonables destinadas a proteger
              los datos personales frente a
              pérdida, consulta, alteración,
              acceso o tratamiento no autorizado.
            </p>

            <p>
              Ningún sistema conectado a
              Internet puede garantizar un riesgo
              absolutamente nulo. Por ello,
              también recomendamos a los
              clientes proteger sus
              credenciales, utilizar
              contraseñas seguras y no compartir
              sus mecanismos de acceso.
            </p>
          </LegalSection>

          <LegalSection
            id="derechos"
            eyebrow="08"
            icon={<FileText size={21} />}
            title="Derechos del titular"
          >
            <p>
              De acuerdo con la legislación
              colombiana aplicable, el titular
              podrá ejercer los derechos que le
              correspondan respecto de su
              información personal.
            </p>

            <ul>
              <li>
                Conocer y acceder a sus datos
                personales.
              </li>

              <li>
                Solicitar su actualización o
                rectificación.
              </li>

              <li>
                Solicitar información sobre el
                tratamiento realizado.
              </li>

              <li>
                Presentar consultas o reclamos.
              </li>

              <li>
                Solicitar la supresión cuando
                resulte procedente.
              </li>

              <li>
                Revocar autorizaciones cuando
                legalmente sea posible.
              </li>

              <li>
                Presentar quejas ante la
                autoridad competente después de
                agotar los procedimientos que
                resulten aplicables.
              </li>
            </ul>
          </LegalSection>

          <LegalSection
            id="contacto"
            eyebrow="09"
            icon={<ShieldCheck size={21} />}
            title="Consultas, solicitudes y reclamos"
          >
            <p>
              Americas Services dispondrá de un
              canal para que los titulares
              presenten consultas, solicitudes
              de actualización, rectificación,
              supresión, revocatoria y demás
              peticiones relacionadas con sus
              datos personales.
            </p>

            <p>
              El correo, dirección y datos de
              identificación jurídica
              definitivos deberán incorporarse
              en esta sección antes de la
              publicación oficial de estas
              políticas.
            </p>
          </LegalSection>

          <section className="legal-final">
            <span>
              ACTUALIZACIONES
            </span>

            <h2>
              Cambios en estas políticas
            </h2>

            <p>
              Americas Services podrá actualizar
              estos términos y políticas cuando
              sea necesario por cambios
              operativos, tecnológicos,
              comerciales o normativos.
            </p>

            <p>
              La versión publicada en esta
              página indicará su fecha de última
              actualización.
            </p>

            <strong>
              Última actualización:
              {" "}
              {LAST_UPDATE}
            </strong>
          </section>
        </div>
      </section>
    </main>
  );
}

interface LegalSectionProps {
  id: string;
  eyebrow: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function LegalSection({
  id,
  eyebrow,
  icon,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="legal-section"
    >
      <div className="legal-section-heading">
        <div className="legal-section-icon">
          {icon}
        </div>

        <div>
          <span>
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>
        </div>
      </div>

      <div className="legal-section-body">
        {children}
      </div>
    </section>
  );
}

function LegalIntro() {
  return (
    <section className="legal-intro">
      <ShieldCheck size={30} />

      <div>
        <span>
          COMPROMISO CON EL CLIENTE
        </span>

        <h2>
          Tus datos y tus derechos importan.
        </h2>

        <p>
          Esta información explica de forma
          clara cómo funciona la plataforma y
          cómo se gestiona la información
          proporcionada por nuestros clientes.
        </p>
      </div>
    </section>
  );
}