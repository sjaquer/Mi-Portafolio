import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-colors duration-150 ease-standard " +
  "active:translate-y-px aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "rounded-md bg-accent-600 text-on-accent hover:bg-accent-700",
  secondary:
    "rounded-md border border-border-strong bg-surface text-ink-900 hover:bg-surface-muted",
  ghost: "rounded-md text-accent-600 hover:bg-accent-50",
  link: "text-accent-600 underline underline-offset-4 hover:text-accent-700",
};

// sm 36 px · md 44 px · lg 52 px (§19.1). El área táctil de sm se amplía a 44 px con ::before.
const sizes: Record<Size, string> = {
  sm: "relative h-control-sm px-4 text-small before:absolute before:-inset-x-0 before:-inset-y-1 before:content-['']",
  md: "h-control-md px-5 text-body",
  lg: "h-control-lg px-5 text-lead",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** Identificador de medición obligatorio (CLAUDE.md, regla 6). */
  cta: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = CommonProps &
  Omit<ComponentProps<"a">, keyof CommonProps> & { href: string; external?: boolean };
type NativeButtonProps = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function classes({ variant = "primary", size = "md", className = "" }: CommonProps) {
  const sizing = variant === "link" ? "" : sizes[size];
  return `${base} ${variants[variant]} ${sizing} ${className}`;
}

/**
 * Botón del sistema (§19.1). Con `href` se renderiza como enlace.
 * Regla: máximo un `primary` visible por pantalla.
 */
export function Button(props: ButtonProps) {
  const { cta, icon, children } = props;
  const content = (
    <>
      {children}
      {icon && (
        <span className="inline-flex transition-transform duration-200 ease-standard group-hover/btn:translate-x-1 motion-reduce:transform-none">
          {icon}
        </span>
      )}
    </>
  );

  if (props.href !== undefined) {
    const { variant, size, className, cta: _cta, icon: _icon, external, href, ...rest } = props;
    const cls = classes({ variant, size, className, cta, children });
    if (external || rest.download !== undefined) {
      return (
        <a
          href={href}
          data-cta={cta}
          className={cls}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} data-cta={cta} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  const {
    variant,
    size,
    className,
    cta: _cta,
    icon: _icon,
    type = "button",
    disabled,
    ...rest
  } = props;
  return (
    <button
      type={type}
      data-cta={cta}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={`${classes({ variant, size, className, cta, children })} disabled:cursor-not-allowed disabled:opacity-50`}
      {...rest}
    >
      {content}
    </button>
  );
}
