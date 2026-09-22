"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import { Icon } from "@/components/ui/Icon/Icon";

type Field = "nombre" | "email" | "telefono" | "asunto" | "mensaje";

const emptyForm: Record<Field, string> = {
  nombre: "",
  email: "",
  telefono: "",
  asunto: "",
  mensaje: "",
};

export function ContactForm() {
  const [form, setForm] = useState<Record<Field, string>>(emptyForm);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm(emptyForm);
  };

  if (sent) {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" size={30} />
        </span>
        <h3>Solicitud enviada</h3>
        <p>
          Gracias por escribirnos. Un integrante de nuestro equipo se contactará
          con vos dentro de las próximas 24 horas hábiles.
        </p>
        <button
          type="button"
          className={styles.reset}
          onClick={() => setSent(false)}
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="nombre">
            Nombre y apellido <span aria-hidden="true">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Juan Pérez"
            autoComplete="name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="juan@correo.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            placeholder="+54 11 0000-0000"
            autoComplete="tel"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="asunto">
            Área de consulta <span aria-hidden="true">*</span>
          </label>
          <select
            id="asunto"
            name="asunto"
            required
            value={form.asunto}
            onChange={handleChange}
          >
            <option value="" disabled>
              Seleccioná un área
            </option>
            <option value="civil">Derecho Civil</option>
            <option value="penal">Derecho Penal</option>
            <option value="laboral">Derecho Laboral</option>
            <option value="corporativo">Derecho Corporativo</option>
            <option value="familia">Derecho de Familia</option>
            <option value="tributario">Derecho Tributario</option>
            <option value="inmobiliario">Derecho Inmobiliario</option>
            <option value="sucesiones">Sucesiones</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="mensaje">
          Contanos tu caso <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Describinos brevemente tu consulta. La información es confidencial."
        />
      </div>

      <button type="submit" className={styles.submit}>
        Enviar consulta
        <Icon name="arrow-right" size={18} />
      </button>

      <p className={styles.note}>
        * Campos obligatorios. Tus datos están protegidos y nunca serán
        compartidos con terceros.
      </p>
    </form>
  );
}