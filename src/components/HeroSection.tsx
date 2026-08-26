import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg.asset.json";

const WHATSAPP_URL = "https://wa.me/message/Y5IWA6TBD4SRM1";

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-20 md:pt-24">
      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center md:items-center md:text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <MapPin size={14} strokeWidth={1.5} />
              Av. Fontt 032, Colina
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground text-balance mb-6">
              Sonrisas sanas, vidas felices en el corazón de{" "}
              <span className="text-primary">Colina</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed mb-8 max-w-lg">
              Especialistas en Ortodoncia, Implantes y Estética Dental. Más de 15 años cuidando la salud oral de nuestra comunidad.
            </p>
            <div className="flex flex-col sm:flex-row md:justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-lg transition-all hover:opacity-90"
              >
                <Phone size={18} strokeWidth={1.5} />
                Reserva tu hora por WhatsApp
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-base font-medium text-secondary-foreground transition-colors hover:bg-muted"
              >
                Ver especialidades
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card outline outline-1 outline-black/10 -outline-offset-1">
              <img
                src={heroImage.url}
                alt="Instalaciones modernas de Clínica Dental Mundo Médico en Colina"
                className="w-full h-[320px] md:h-[460px] object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
