import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MCDevelopments Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-sm text-muted-foreground">
              Desarrollo de Software
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#inicio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Inicio
            </Link>
            <Link href="#proyectos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Proyectos
            </Link>
            <Link href="#servicios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Servicios
            </Link>
            <Link href="#contacto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contacto
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MCDevelopments. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
