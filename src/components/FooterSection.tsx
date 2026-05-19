import { MapPin, Phone, Clock, Coffee } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/Y5IWA6TBD4SRM1";

const FooterSection = () => {
  return (
    <footer id="ubicacion" className="py-24 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold mb-8">Encuéntranos</h2>

            <div className="space-y-5">
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
                <Coffee size={20} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Pausa Almuerzo</p>
                  <p className="text-primary-foreground/70 text-sm tabular-nums">
                    13:00 – 14:00 (Lunes a Sábado)
                  </p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <Phone size={18} strokeWidth={1.5} />
              Reserva tu hora por WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[320px] lg:h-auto">
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

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Clínica Dental Mundo Médico. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
