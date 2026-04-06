import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/store/AuthContext/AuthContext";
import AuthInput from "@/components/shared/AuthInput";
import AuthButton from "@/components/shared/AuthButton";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      await login(email, password);
      navigate("/admin", { replace: true });
    } catch (err: any) {
      const code = err?.code || "";
      if (
        code === "auth/user-not-found" ||
        code === "auth/wrong-password" ||
        code === "auth/invalid-credential"
      ) {
        setErrors({ general: "Invalid email or password. Please try again." });
      } else if (code === "auth/too-many-requests") {
        setErrors({ general: "Too many attempts. Please try again later." });
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Heading */}
      <div className="mb-10">
        <h2
          className="text-4xl mb-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            color: "hsl(var(--foreground))",
            letterSpacing: "0.05em",
          }}
        >
          Welcome Back
        </h2>
        <p
          className="text-sm"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "hsl(var(--muted-foreground))",
            fontSize: "1rem",
          }}
        >
          Sign in to managae your Studio
        </p>
      </div>

      {/* General error */}
      {errors.general && (
        <div
          className="mb-6 px-4 py-3 text-xs tracking-wide border"
          style={{
            borderColor: "hsl(0 60% 80%)",
            background: "hsl(0 60% 97%)",
            color: "hsl(0 60% 45%)",
          }}
        >
          {errors.general}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <AuthInput
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email)
              setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          error={errors.email}
          autoComplete="email"
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password)
              setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          error={errors.password}
          autoComplete="current-password"
        />

        {/* Forgot password link */}
        <div className="flex justify-end -mt-2">
          <Link
            to="/forget-password"
            className="text-xs tracking-wide transition-colors"
            style={{ color: "hsl(var(--muted-foreground))" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "hsl(var(--primary))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "hsl(var(--muted-foreground))")
            }
          >
            Forgot password?
          </Link>
        </div>

        <div className="pt-2">
          <AuthButton type="submit" loading={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </AuthButton>
        </div>
      </form>

      {/* Divider */}
      <div
        className="mt-10 pt-8"
        style={{ borderTop: "1px solid hsl(var(--border))" }}
      >
        <p
          className="text-xs text-center"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Authorized personnel only
        </p>
      </div>
    </div>
  );
}
