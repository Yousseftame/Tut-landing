import React from "react";
import { Loader2 } from "lucide-react";

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

export default function AuthButton({
  loading,
  children,
  disabled,
  ...props
}: AuthButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        w-full py-3 px-6 text-xs tracking-[0.3em] uppercase font-medium
        bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]
        transition-all duration-300
        hover:bg-[hsl(var(--accent))] hover:tracking-[0.4em]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:tracking-[0.3em]
        flex items-center justify-center gap-2
      `}
      style={{ borderRadius: 0 }}
    >
      {loading && <Loader2 size={14} className="animate-spin" />}
      {children}
    </button>
  );
}
