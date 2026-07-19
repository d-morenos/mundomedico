import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=clinica+dental+mundo+medico+colina#lrd=0x9662bbb162cdc551:0x168184d502f80b24,1";

const testimonials = [
  {
    name: "Dailin León",
    text: "La atención es maravillosa. Llevo 2 años atendiendo a mi hija con la doctora, a la cual agradezco siempre la evolución que ha tenido mi niña. 🥰",
    rating: 5,
  },
  {
    name: "Beatriz Nuñez",
    text: "Estuve recientemente en un tratamiento dental con la Dra. Moreno y su equipo. Solo tengo que decir que su tratamiento resultó exitoso y que el ambiente es relajado, centrado en el paciente y del todo informado. Su amplia experiencia y dedicación son garantía de éxito.",
    rating: 5,
  },
  {
    name: "Felipe Toro Fuentealba",
    text: "Muy buena atención profesional. Los valores de los tratamientos están un poco debajo del promedio. A un costado de la consulta existe un estacionamiento con costo de solamente la propina a los cuidadores. El tiempo de espera no supera los 10 minutos. La ortodoncista trabaja los lunes en la tarde, desde las 14:00.",
    rating: 5,
  },
  {
    name: "Leonel Fuentes",
    text: "Muy buena la atención, destaco el profesionalismo y la preocupación que tienen con sus pacientes.",
    rating: 5,
  },
  {
    name: "Andrés Infante",
    text: "Buena atención y un excelente servicio, todos muy cordiales.",
    rating: 5,
  },
  {
    name: "José Tomás Contreras",
    text: "Excelente clínica, servicio y personal. Recomendado para quienes necesitan un cambio urgente en sus frenillos.",
    rating: 5,
  },
  {
    name: "Ursula Niklitschek",
    text: "Excelente equipo de profesionales. 100% recomendables! Sin duda una clínica recomendable.",
    rating: 5,
  },
  {
    name: "Victoria Salgado",
    text: "Un lugar súper acogedor, la doctora y su asistente son secas! Tuve mi cirugía de extracción de muela del juicio y no tengo nada que decir, una doctora con mucha paciencia y mucho cuidado 🩷",
    rating: 5,
  },
  {
    name: "Guillermo Trivelli",
    text: "Recomiendo el servicio clínico dental de Mundo Médico. Extraordinaria la atención de la Dra. Moreno. Me sentí cómodo y escuchado, fue una intervención exitosa.",
    rating: 5,
  },
  {
    name: "Leydi Sierra Zapata",
    text: "Estoy satisfecha con el servicio ofrecido, en este centro de salud bucal tienen buena atención y un trabajo impecable, muchas gracias.",
    rating: 5,
  },
  {
    name: "Daniel Oyaneder",
    text: "Mi experiencia y la de mi familia en este centro dental ha sido excelente, las doctoras son cercanas, amorosas, confiables y muy profesionales. De verdad es un agrado asistir.",
    rating: 5,
  },
  {
    name: "Francisca Añasco",
    text: "Centro médico con una gran profesional, excelente atención y contención, disposición en las urgencias, pero lo más destacado es la gran responsabilidad para sus pacientes.",
    rating: 5,
  },
  {
    name: "Verónica Vilches",
    text: "Muy buena atención, preocupación por los pacientes, teniendo en cuenta también darle al paciente poder escoger el horario que más le acomode. Realizan recordatorios de citas al paciente. 👏",
    rating: 5,
  },
  {
    name: "Roxana Valencia Acuña",
    text: "Año y medio, ya casi terminando mi tratamiento de ortodoncia, gracias totales a la doc. A todo el equipo. Mis hijos van quedando con excelentes resultados 😁",
    rating: 5,
  },
  {
    name: "Keily Barrientos",
    text: "Excelente personal médico, agradecida con la Dra. Constanza Moreno por su trabajo y dedicación. Tenía un malestar y un dolor molesto en una muela desde hace ya 13 años aprox, fui a varios odontólogos en varios lugares y ninguno pudo descifrar qué tenía; en cambio, ella me detectó la molestia y sanó el malestar. Su trabajo es de maravilla. Recomendada al 100%.",
    rating: 5,
  },
];

// Duplicate testimonials to create a seamless loop
const loop = [...testimonials, ...testimonials];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div className="relative rounded-2xl bg-card p-4 sm:p-5 md:p-6 shadow-card flex flex-col w-[280px] sm:w-[320px] md:w-[380px] shrink-0">
    <Quote strokeWidth={1.5} className="text-primary/20 mb-3 w-6 h-6 sm:w-7 sm:h-7" />
    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed text-justify mb-4 sm:mb-5 flex-1">
      "{t.text}"
    </p>
    <div className="flex items-center justify-between pt-4 border-t border-border">
      <span className="text-xs sm:text-sm font-semibold text-foreground">{t.name}</span>
      <div className="flex gap-0.5" aria-label={`${t.rating} de 5 estrellas`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={12} className="sm:w-3.5 sm:h-3.5 fill-primary text-primary" />
        ))}
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

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
            Opiniones reales de nuestra comunidad.
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="flex gap-4 sm:gap-6 w-max items-stretch animate-marquee"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {loop.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

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
