import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function AuthInput({
  label,
  error,
  type,
  ...props
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        width: "100%",
      }}
    >
      {/* Label */}
      <label
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: error
            ? "hsl(0, 60%, 50%)"
            : focused
              ? "hsl(var(--primary))"
              : "hsl(var(--foreground))",
          transition: "color 0.2s",
        }}
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div style={{ position: "relative" }}>
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "3px",
            background: error
              ? "hsl(0, 60%, 52%)"
              : focused
                ? "hsl(var(--primary))"
                : "hsl(var(--border))",
            transition: "background 0.2s",
          }}
        />

        <input
          type={inputType}
          {...props}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          style={{
            width: "100%",
            paddingLeft: "1rem",
            paddingRight: isPassword ? "2.75rem" : "1rem",
            paddingTop: "0.85rem",
            paddingBottom: "0.85rem",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 400,
            color: "hsl(var(--foreground))",
            background: focused ? "hsl(var(--card))" : "hsl(var(--secondary))",
            border: "none",
            borderRadius: 0,
            outline: "none",
            transition: "background 0.2s",
            boxSizing: "border-box",
          }}
          placeholder={props.placeholder}
        />

        {isPassword && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((v) => !v)}
            style={{
              position: "absolute",
              right: "0.85rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              color: "hsl(var(--muted-foreground))",
              display: "flex",
              alignItems: "center",
            }}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 500,
            color: "hsl(0, 60%, 50%)",
            margin: 0,
            paddingLeft: "1rem",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
