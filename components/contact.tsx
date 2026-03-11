"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje")
      }

      setStatus({ type: "success", message: "¡Gracias por contactarnos! Te responderemos pronto." })
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setStatus({ type: "error", message: "No se pudo enviar el mensaje. Intenta de nuevo." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Contáctanos
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            ¿Tienes un proyecto en mente? Cuéntanos y hagámoslo realidad
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Hablemos de tu proyecto
              </h3>
              <p className="text-muted-foreground">
                Estamos listos para escuchar tus ideas y convertirlas en soluciones tecnológicas 
                que impulsen tu negocio. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">mcdevelopments@mcdevelopments.tech</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="text-foreground">+54 02615199115</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="text-foreground">Mendoza, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Nombre
              </label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Cuéntanos sobre tu proyecto..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background"
              />
            </div>
            
            <Button type="submit" className="w-full">
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </Button>

            {status && (
              <p
                className={
                  status.type === "success"
                    ? "text-sm text-emerald-600"
                    : "text-sm text-red-600"
                }
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
