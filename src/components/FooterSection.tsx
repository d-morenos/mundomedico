import { MapPin, Phone, Clock, Coffee, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/Y5IWA6TBD4SRM1";
const INSTAGRAM_URL = "https://www.instagram.com/clinicamundomedico?igsi=d2tsb2Rnc3hrcGNt";

const FooterSection = () => {
  return (
    <footer id="ubicacion" className="pt-16 pb-10 bg-foreground text-primary-foreground">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold mb-6 text-center">Encuéntranos</h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:items-center">
          {/* Info + WhatsApp */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-x-8">
              <div className="flex items-start gap-3">
                <MapPin size={20} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-primary-foreground/70 text-sm">
                    Av. Fontt 032, Colina — Al lado de WOM y Dr. Simi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Horario</p>
                  <p className="text-primary-foreground/70 text-sm tabular-nums">
                    Lun - Vie: 08:00 – 20:00
                  </p>
                  <p className="text-primary-foreground/70 text-sm tabular-nums">
                    Sáb: 08:00 – 15:30
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Teléfonos</p>
                  <p className="text-primary-foreground/70 text-sm tabular-nums">
                    Fijo: (2) 2844 9710
                  </p>
                  <p className="text-primary-foreground/70 text-sm tabular-nums">
                    WhatsApp: +56 9 6334 3550
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Coffee size={20} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Pausa Almuerzo</p>
                  <p className="text-primary-foreground/70 text-sm tabular-nums">
                    13:00 – 14:00 (Lunes a Sábado)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                <Phone size={18} strokeWidth={1.5} />
                Reserva tu hora por WhatsApp
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white pl-1 pr-6 py-1 shadow-md transition-transform hover:scale-105"
                aria-label="Síguenos en Instagram"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]">
                  <Instagram size={20} className="text-white" strokeWidth={2} />
                </span>
                <span className="ml-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] to-[#bc1888]">
                  Síguenos!
                </span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-card w-full h-[320px] lg:h-[360px]">
              <iframe
                src="https://www.google.com/maps?q=-33.204922728175774,-70.67528928777486&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Clínica Dental Mundo Médico en Colina"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Clínica Dental Mundo Médico · Atendiendo en Colina desde 2010 · Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
