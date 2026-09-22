"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon/Icon";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu/MobileMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label={site.name}>
            <span className={styles.logo}>
              <Icon name="balance" size={26} ariaHidden />
            </span>
            <span className={styles.brandText}>
              <strong>{site.name}</strong>
              <small>{site.tagline}</small>
            </span>
          </Link>

          <Navbar />

          <a href={site.phoneHref} className={styles.ctaPhone}>
            <Icon name="phone" size={18} />
            <span>{site.phone}</span>
          </a>

          <button
            type="button"
            className={styles.toggle}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <Icon name={isOpen ? "close" : "menu"} size={26} />
          </button>
        </div>

        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </header>
      <div className={styles.spacer} aria-hidden="true" />
    </>
  );
}