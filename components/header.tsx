"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="MCDevelopments Logo"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contacto">Contáctanos</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="#inicio"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#proyectos"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="#servicios"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#contacto"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild className="w-full">
              <Link href="#contacto">Contáctanos</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
