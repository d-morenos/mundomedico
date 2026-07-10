import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Wrench, Scissors, ScanLine, Badge, Activity, Gem } from "lucide-react";

const specialties = [
  {
    icon: Stethoscope,
    title: "Ortodoncia y Ortopedia Maxilar",
    description: "Especialistas en guiar el crecimiento óseo infantil mediante ortopedia maxilar, y en alineación dental avanzada para niños y adultos con brackets metálicos, estéticos e Invisalign®️.",
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description: "Blanqueamiento, carillas, reconstrucción de piezas dentales y diseño de sonrisa para resultados naturales y duraderos.",
  },
  {
    icon: Wrench,
    title: "Rehabilitación Oral",
    description: "Implantes dentales, coronas, prótesis fija y removible, planos de alivio y de relajación, con una alta precisión para mejorar la función y estética.",
  },
  {
    icon: Activity,
    title: "Endodoncia",
    description: "Tratamientos de conducto para piezas anteriores y posteriores (vitales y no vitales), enfocados en aliviar el dolor y mantener la integridad de la pieza dentaria.",
  },
  {
    icon: Scissors,
    title: "Cirugía Oral",
    description: "Extracciones realizadas con técnicas mínimamente invasivas y máxima comodidad.",
  },
  {
    icon: ScanLine,
    title: "Radiología Dental",
    description: "Radiografías retroalveolares para diagnóstico y detección de patologías del paciente en el momento, sin derivaciones.",
    badge: "En el mismo lugar",
  },
  {
    icon: Gem,
    title: "Grillz y Estética Urbana",
    description: "Diseño de joyería dental personalizada y exclusiva para hacer brillar tu sonrisa con el mejor estilo urbano.",
    badge: "Próximamente",
    wide: true,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras Especialidades
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto text-pretty">
            Tecnología dental avanzada sin salir de Colina. Todo lo que necesitas en un solo lugar.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {specialties.map((spec) => (
            <motion.div
              key={spec.title}
              variants={item}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl bg-card shadow-card transition-shadow hover:shadow-elevated ${
                spec.wide ? "lg:col-span-6 lg:col-start-4 p-6" : "lg:col-span-4 p-6"
              }`}
            >
              {spec.badge && !spec.wide && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <Badge size={12} strokeWidth={1.5} />
                  {spec.badge}
                </span>
              )}
              {spec.wide ? (
                <div className="flex flex-col">
                  {spec.badge && (
                    <span className="absolute top-4 right-5 inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <Badge size={12} strokeWidth={1.5} />
                      {spec.badge}
                    </span>
                  )}
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <spec.icon size={22} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-nowrap">
                    {spec.description}
                  </p>
                </div>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <spec.icon size={22} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    {spec.description}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
