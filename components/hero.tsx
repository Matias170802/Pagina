import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Desarrollo de Software a Medida
        </div>
        
        <h1 className="mb-6 text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Transformamos tus ideas en{" "}
          <span className="text-accent">soluciones digitales</span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          En MCDevelopments creamos software personalizado que impulsa el crecimiento de tu negocio. 
          Desde sistemas de gestión hasta chatbots inteligentes.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="group">
            <Link href="#proyectos">
              Ver Proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contacto">Solicitar Cotización</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
