import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=clinica+dental+mundo+medico+colina#lrd=0x9662bbb162cdc551:0x168184d502f80b24,1";

const testimonials = [
  {
    name: "Carolina P.",
    text: "Excelente atención de principio a fin. La Dra. Constanza explica todo con paciencia y el lugar es impecable. Volveré sin dudarlo.",
    rating: 5,
  },
  {
    name: "Matías R.",
    text: "Llevo mi tratamiento de ortodoncia con la Dra. Lorena y los resultados son notorios. Profesionales, puntuales y muy amables.",
    rating: 5,
  },
  {
    name: "Javiera S.",
    text: "Súper recomendable. Las asistentes te hacen sentir cómoda y los precios son justos para la calidad que entregan. Una clínica de confianza en Colina.",
    rating: 5,
  },
  {
    name: "Felipe A.",
    text: "Me hicieron radiografías en el momento, sin tener que ir a otro lado. Diagnóstico rápido y trato cercano. Gran experiencia.",
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 bg-secondary/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Opiniones reales de nuestra comunidad en Colina.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="relative rounded-2xl bg-card p-6 shadow-card flex flex-col"
            >
              <Quote size={28} strokeWidth={1.5} className="text-primary/20 mb-3" />
              <p className="text-sm text-foreground/80 leading-relaxed text-pretty mb-5 flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-semibold text-foreground">{t.name}</span>
                <div className="flex gap-0.5" aria-label={`${t.rating} de 5 estrellas`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-card px-6 py-3 text-sm font-medium text-primary shadow-card transition-all hover:shadow-elevated"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
