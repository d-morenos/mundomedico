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
    description: "Entrada, espacios y sanitarios diseñados para personas en silla de ruedas. Espacio 100% accesible.",
  },
  {
    icon: Heart,
    title: "Ambiente Inclusivo",
    description: "Espacio seguro LGBTQ+ y amigable para todas las personas. Atención con respeto y empatía.",
  },
  {
    icon: MapPin,
    title: "Ubicación Conveniente",
    description: "En el Strip Center de Av. Fontt, con fácil acceso, farmacias y bancos a pasos de distancia.",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feat.icon size={24} strokeWidth={1.5} className="text-primary" />
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
