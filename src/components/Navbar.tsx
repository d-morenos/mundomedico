import { useState } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

const INSTAGRAM_URL = "https://www.instagram.com/clinicamundomedico";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipo", href: "#equipo" },
  { label: "Ubicación", href: "#ubicacion" },
];

const WHATSAPP_URL = "https://wa.me/message/Y5IWA6TBD4SRM1";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20 gap-3">
        <a href="#inicio" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 lg:flex-none lg:mr-8">
          <img
            src={logoIcon}
            alt="Logo Mundo Médico"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain shrink-0"
          />
          <span className="font-heading font-bold text-sm sm:text-base md:text-lg lg:text-2xl tracking-tight leading-tight truncate">
            <span className="text-foreground">Clínica Dental </span>
            <span className="text-primary">Mundo Médico</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Síguenos en Instagram"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] shadow-elevated transition-transform hover:scale-105"
          >
            <Instagram size={20} className="text-white" strokeWidth={2} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:opacity-90"
          >
            <Phone size={16} strokeWidth={1.5} />
            Reserva tu hora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground shrink-0"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
          <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white pl-1 pr-6 py-1 shadow-md transition-transform hover:scale-105 self-center"
                aria-label="Síguenos en Instagram"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]">
                  <Instagram size={20} className="text-white" strokeWidth={2} />
                </span>
                <span className="ml-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] to-[#bc1888]">
                  Síguenos en Instagram!
                </span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
              >
                <Phone size={18} strokeWidth={1.5} />
                Reserva tu hora por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
