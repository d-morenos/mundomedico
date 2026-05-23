import { motion } from "framer-motion";
import { Calendar, Accessibility, Heart, MapPin } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Desde 2010 en Colina",
    description: "Más de 15 años de experiencia atendiendo a familias de la comuna con compromiso y cercanía.",
  },
  {
    icon: Accessibility,
    title: "Accesibilidad Total",
    description: "Entrada diseñada para personas en silla de ruedas, facilitando el acceso a la clínica.",
  },
  {
    icon: MapPin,
    title: "Ubicación Conveniente",
    description: "Contamos con estacionamiento exclusivo y nos encuentras a pasos de farmacias, comercios y servicios locales.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Desde 2010 cuidando a Colina. Espacio 100% accesible y seguro para todos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl bg-card p-8 shadow-card text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <feat.icon size={28} strokeWidth={1.5} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
