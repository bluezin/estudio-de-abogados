import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "outline-onDark" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: React.ReactNode;
};

type AsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type Props = AsLink | AsButton;

export function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    children,
    className = "",
    ...rest
  } = props;

  const classNames = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    const { href, ...anchorRest } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const linkHref = href as string;
    const isInternal = linkHref.startsWith("/");
    if (isInternal) {
      return (
        <Link href={linkHref} className={classNames} {...anchorRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={linkHref} className={classNames} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}