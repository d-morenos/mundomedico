import { motion } from "framer-motion";

const team = [
  { name: "Dra. Constanza Moreno", role: "Odontóloga", initials: "CM" },
  { name: "Dra. Lorena Salazar", role: "Ortodoncista", initials: "LS" },
  { name: "Dannae Rivera", role: "Asistente dental", initials: "DR" },
  { name: "Lía Sabah", role: "Asistente dental", initials: "LS" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const TeamSection = () => {
  return (
    <section id="equipo" className="py-24 bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Profesionales con experiencia, comprometidas con tu salud bucal y bienestar.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-card p-6 shadow-card text-center transition-shadow hover:shadow-elevated"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-semibold text-primary">{member.initials}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
