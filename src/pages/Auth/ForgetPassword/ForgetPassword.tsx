import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import AuthInput from "@/components/shared/AuthInput";
import AuthButton from "@/components/shared/AuthButton";

export default function ForgetPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!success) return;
    if (countdown === 0) {
      navigate("/login", { replace: true });
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [success, countdown, navigate]);

  const validate = () => {
    if (!email) return "Email address is required.";
    if (!/\S+@\S+\.\S+/.test(email))
      return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err: any) {
      const code = err?.code || "";
      if (code === "auth/user-not-found" || code === "auth/invalid-email") {
        setError("No account found with this email address.");
      } else if (code === "auth/too-many-requests") {
        setError("Too many attempts. Please wait a moment and try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ── Heading ── */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "2.8rem",
            color: "hsl(var(--foreground))",
            letterSpacing: "0.05em",
            margin: "0 0 0.5rem",
            lineHeight: 1,
          }}
        >
          Reset Password
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 400,
            color: "hsl(var(--muted-foreground))",
            margin: 0,
          }}
        >
          {success
            ? "Check your inbox — the link is on its way."
            : "Enter your email and we'll send you a reset link."}
        </p>
      </div>

      {/* ── SUCCESS STATE ── */}
      {success ? (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Success card */}
          <div
            style={{
              background: "hsl(142, 30%, 95%)",
              borderLeft: "4px solid hsl(142, 50%, 42%)",
              padding: "1.4rem 1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "hsl(142, 50%, 30%)",
                margin: "0 0 0.6rem",
              }}
            >
              ✓ Email Sent
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                fontWeight: 400,
                color: "hsl(142, 25%, 28%)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              A reset link was sent to{" "}
              <span
                style={{
                  fontWeight: 700,
                  color: "hsl(142, 40%, 25%)",
                }}
              >
                {email}
              </span>
              . Please check your{" "}
              <span style={{ fontWeight: 600 }}>inbox and spam folder</span>.
            </p>
          </div>

          {/* Countdown */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 1.25rem",
              background: "hsl(var(--secondary))",
              borderLeft: "4px solid hsl(var(--border))",
            }}
          >
            {/* SVG countdown ring */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              style={{ flexShrink: 0 }}
            >
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                strokeDasharray={`${((5 - countdown) / 5) * 87.96} 87.96`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                style={{ transition: "stroke-dasharray 0.9s linear" }}
              />
              <text
                x="18"
                y="18"
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                  fontSize: "11px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fill: "hsl(var(--foreground))",
                }}
              >
                {countdown}
              </text>
            </svg>

            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "hsl(var(--foreground))",
                  margin: "0 0 0.15rem",
                }}
              >
                Redirecting to login…
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.73rem",
                  fontWeight: 400,
                  color: "hsl(var(--muted-foreground))",
                  margin: 0,
                }}
              >
                in {countdown} second{countdown !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Manual link */}
          <div
            style={{
              borderTop: "1px solid hsl(var(--border))",
              paddingTop: "1.25rem",
            }}
          >
            <Link
              to="/login"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "hsl(var(--primary))",
                textDecoration: "none",
              }}
            >
              Go to login now →
            </Link>
          </div>
        </div>
      ) : (
        /* ── FORM STATE ── */
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          noValidate
        >
          {/* Error banner */}
          {error && (
            <div
              style={{
                background: "hsl(0, 60%, 97%)",
                borderLeft: "4px solid hsl(0, 60%, 52%)",
                padding: "1rem 1.25rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "hsl(0, 60%, 42%)",
                  margin: "0 0 0.3rem",
                }}
              >
                ✕ Error
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  color: "hsl(0, 40%, 38%)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                {error}
              </p>
            </div>
          )}

          <AuthInput
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            autoComplete="email"
          />

          <div style={{ paddingTop: "0.25rem" }}>
            <AuthButton type="submit" loading={loading}>
              {loading ? "Sending…" : "Send Reset Link"}
            </AuthButton>
          </div>

          {/* Back to login */}
          <div
            style={{
              borderTop: "1px solid hsl(var(--border))",
              paddingTop: "1.25rem",
            }}
          >
            <Link
              to="/login"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "hsl(var(--muted-foreground))",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "hsl(var(--primary))")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "hsl(var(--muted-foreground))")
              }
            >
              ← Back to login
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
