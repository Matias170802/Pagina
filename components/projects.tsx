import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MessageCircle, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión de Alquileres",
    description: "Plataforma integral para la administración de propiedades en alquiler. Gestiona contratos, pagos, inquilinos y mantenimiento desde un solo lugar.",
    icon: Building2,
    tags: ["Web App", "Dashboard", "Gestión"],
    features: [
      "Gestión de contratos y renovaciones",
      "Control de pagos y cobros",
      "Base de datos de inquilinos",
      "Reportes financieros",
      "Alertas y notificaciones",
    ],
    status: "En desarrollo",
  },
  {
    id: 2,
    title: "Chatbot de WhatsApp - Clínica",
    description: "Bot inteligente para automatizar la gestión de turnos médicos vía WhatsApp. Permite a los pacientes agendar, modificar y cancelar citas de forma autónoma.",
    icon: MessageCircle,
    tags: ["WhatsApp API", "Automatización", "Salud"],
    features: [
      "Agendamiento automático de turnos",
      "Recordatorios de citas",
      "Confirmación y cancelación",
      "Integración con agenda médica",
      "Respuestas inteligentes 24/7",
    ],
    status: "En desarrollo",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Proyectos Actuales
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Conoce las soluciones que estamos desarrollando para nuestros clientes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="group relative overflow-hidden border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
              <CardHeader className="pb-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Características principales:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
