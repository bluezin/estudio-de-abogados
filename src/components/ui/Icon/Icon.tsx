import styles from "./Icon.module.css";

export type IconName =
  | "balance"
  | "gavel"
  | "briefcase"
  | "family"
  | "building"
  | "home"
  | "handshake"
  | "receipt"
  | "suit"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "arrow-right"
  | "check"
  | "menu"
  | "close"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "shield"
  | "scale"
  | "users";

const paths: Record<IconName, React.ReactNode> = {
  balance: (
    <path d="M12 3v18m-7 0h14M4.5 6h15l-1-2h-13l-1 2Zm0 0 3.5 8a4 4 0 0 0 8 0L19.5 6M12 21c0-4 3-6 7-6" />
  ),
  gavel: (
    <path d="m14 13-7.5 7.5a1.6 1.6 0 0 1-2.3 0 1.6 1.6 0 0 1 0-2.3L11.7 10.6M14 13l1.5-1.5-2-2L12 11M14 13l-2-2M20 20l-6.5-6.5M5 21h14M8 4l8 8 3-3-8-8-3 3Zm5-3 5 5" />
  ),
  briefcase: (
    <path d="M3 8h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm5-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3H8V5Zm-5 6h18M12 12h.01" />
  ),
  family: (
    <path d="M4 11a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.5a4.5 4.5 0 0 1-4.5 4.5H8.5A4.5 4.5 0 0 1 4 11.5V11Zm3-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4 11a4 4 0 0 0-4-4m4 4v1m0-1v-1a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v1m-2 0h2m-4-4a3 3 0 0 1 3 3" />
  ),
  building: (
    <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16m-6 0V8h-2v13M8 8h2m-2 4h2m-2 4h2m6-4h.01M19 12h1a1 1 0 0 1 1 1v8h-2m-8-7h2m-2 4h2M7 10h.01" />
  ),
  home: (
    <path d="m3 10 9-8 9 8M5 9v12h5v-6h4v6h5V9" />
  ),
  handshake: (
    <path d="m11 17 1.5-1.5a1 1 0 0 0-1.4-1.4L9.5 15.5a1 1 0 0 0 0 1.4L11 18.4m0-1.4L13 19m-2-2h4a2 2 0 0 1 2 2v1m-6-5 1.5 1.5M4 12 5.5 8.5h3M5.5 8.5 4 12l3 3H6m7-6.5h4a2 2 0 0 1 2 2M17 8.5v1h-3l1.5-1h1.5Zm0 0L20 12l-1.5 3M8 6 9 3.5h4L14 6m-2-2.5V6m-5-1h7" />
  ),
  receipt: (
    <path d="M7 3h10a1 1 0 0 1 1 1v16l-2-1.5L14 20l-2-1.5L10 20l-2-1.5L6 20V4a1 1 0 0 1 1-1Zm1 5h8m-8 4h8m-8 4h4" />
  ),
  suit: (
    <path d="M6 14 9 5l3-2 3 2 3 9-3 2H9l-3-2ZM9 5l-1 6m8-6-1 6M11 7.5h2L12 10l-1-2.5ZM9 7h6m-6 9v5h6v-5" />
  ),
  phone: (
    <path d="M5 3h4l1.5 4-2 1.5a12 12 0 0 0 7 7L17 13l4 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm0 0 9 6 9-6" />
  ),
  pin: (
    <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  clock: (
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2.5" />
  ),
  "arrow-right": <path d="M5 12h14m-6-6 6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  linkedin: (
    <path d="M6.5 8.5A1.75 1.75 0 1 0 6.5 5a1.75 1.75 0 0 0 0 3.5ZM5 9.5h3V19H5V9.5Zm5.5 0h2.9v1.35a3 3 0 0 1 2.7-1.5c2.9 0 3.9 1.9 3.9 4.4V19h-3v-4.6c0-1.1-.4-2-1.5-2s-2 .9-2 2V19h-3V9.5Z" />
  ),
  twitter: (
    <path d="M3 4.5c3.6.3 6 1.6 7 4.2a7.8 7.8 0 0 1 4.6-1.2 4 4 0 0 1 2.6 4.2A9 9 0 0 1 18 18a12 12 0 0 1-7.5 1M3 4.5c-1.2 2 .3 3.5 1.6 4.2C4 8.5 4 8.6 3.5 9m0-4.5C3 8 5 9.5 6.5 10M7 18a9 9 0 0 1-4 1M6.5 10c1.5.5 3 1 4.5.5m-5 7.5 7.4-7.5m2.6 3.5c0-.5.3-1 .8-1.3M15 13l-6.5 6" />
  ),
  instagram: (
    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.5-2.25h.01" />
  ),
  shield: (
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Zm-3 9 2.2 2.2L15.5 10" />
  ),
  scale: (
    <path d="M12 3v2m0 0h4m-4 0H8m4 0v.5M6 7h12l1.5 4a2.5 2.5 0 0 1-5 0L15 7m-6 0-1.5 4a2.5 2.5 0 0 1-5 0L6 7Zm7 12h-2m0 0v-4a2 2 0 0 0-4 0v4m4 0H7m8 0 2.5-1M12 4.5V3" />
  ),
  users: (
    <path d="M8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-5 9a5 5 0 0 1 10 0M15 5a3 3 0 0 1 0 6m.5 3a6 6 0 0 1 5.5 6H16m0-1.5c-.5 0-1 0-1.5.1" />
  ),
};

type Props = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  ariaHidden?: boolean;
};

export function Icon({
  name,
  size = 24,
  strokeWidth = 1.6,
  className = "",
  ariaHidden = true,
}: Props) {
  return (
    <svg
      className={`${styles.icon} ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaHidden}
    >
      {paths[name]}
    </svg>
  );
}