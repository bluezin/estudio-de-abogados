"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileMenu.module.css";
import { navLinks, site } from "@/data/site";
import { Icon } from "@/components/ui/Icon/Icon";
import { Button } from "@/components/ui/Button/Button";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  const isMounted = useIsMounted();

  const panel = (
    <div
      className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.panel}>
        <nav aria-label="Navegación móvil">
          <ul className={styles.list}>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`${styles.link} ${isActive ? styles.active : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <Icon name="arrow-right" size={18} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          <Button href="/contacto" variant="gold" fullWidth onClick={onClose}>
            Agenda tu consulta
          </Button>
          <a href={site.phoneHref} className={styles.phone}>
            <Icon name="phone" size={18} />
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  );

  if (!isMounted) return null;
  return createPortal(panel, document.body);
}