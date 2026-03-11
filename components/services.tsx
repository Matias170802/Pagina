import { Code2, Smartphone, Bot, Database, Cloud, Shield } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y responsivas con las últimas tecnologías.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma para iOS y Android.",
  },
  {
    icon: Bot,
    title: "Chatbots",
    description: "Automatización inteligente para atención al cliente y procesos.",
  },
  {
    icon: Database,
    title: "Sistemas de Gestión",
    description: "ERPs y CRMs personalizados para tu negocio.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-card/50 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Soluciones tecnológicas completas para impulsar tu negocio
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
