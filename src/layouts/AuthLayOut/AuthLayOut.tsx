import { Outlet, Link } from "react-router-dom";

export default function AuthLayOut() {
  return (
    <div
      className="min-h-screen flex"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* ── Left decorative panel ── */}
      <div
        className="hidden lg:flex lg:w-[45%] xl:w-[42%] flex-col justify-between relative overflow-hidden"
        style={{ background: "hsl(25, 30%, 18%)", padding: "3.5rem 4rem" }}
      >
        {/* Top-right ornamental corner lines */}
        <svg
          className="absolute top-0 right-0 pointer-events-none"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          style={{ opacity: 0.18 }}
        >
          <line
            x1="120"
            y1="0"
            x2="0"
            y2="0"
            stroke="hsl(35,60%,72%)"
            strokeWidth="0.5"
          />
          <line
            x1="120"
            y1="0"
            x2="120"
            y2="120"
            stroke="hsl(35,60%,72%)"
            strokeWidth="0.5"
          />
          <line
            x1="120"
            y1="30"
            x2="30"
            y2="30"
            stroke="hsl(35,60%,72%)"
            strokeWidth="0.5"
          />
          <line
            x1="90"
            y1="0"
            x2="90"
            y2="90"
            stroke="hsl(35,60%,72%)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Bottom-left ornamental corner lines */}
        <svg
          className="absolute bottom-0 left-0 pointer-events-none"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          style={{ opacity: 0.18 }}
        >
          <line
            x1="0"
            y1="120"
            x2="120"
            y2="120"
            stroke="hsl(35,60%,72%)"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="120"
            x2="0"
            y2="0"
            stroke="hsl(35,60%,72%)"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="90"
            x2="90"
            y2="90"
            stroke="hsl(35,60%,72%)"
            strokeWidth="0.5"
          />
          <line
            x1="30"
            y1="120"
            x2="30"
            y2="26"
            stroke="hsl(35,60%,72%)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Large faint background monogram */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0.04 }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(18rem, 30vw, 26rem)",
              color: "hsl(35,60%,72%)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            T
          </span>
        </div>

        {/* ── TOP: wordmark + back to site ── */}
        <div className="relative z-10 flex items-center justify-between">
          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect
                x="5"
                y="0"
                width="7"
                height="7"
                transform="rotate(45 5 5)"
                fill="none"
                stroke="hsl(35,60%,62%)"
                strokeWidth="0.8"
              />
            </svg>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "hsl(35,40%,58%)",
                margin: 0,
              }}
            >
              Tut Studio
            </p>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect
                x="5"
                y="0"
                width="7"
                height="7"
                transform="rotate(45 5 5)"
                fill="none"
                stroke="hsl(35,60%,62%)"
                strokeWidth="0.8"
              />
            </svg>
          </div>

          {/* Back to site */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(35,30%,48%)",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              transition: "color 0.25s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "hsl(35,55%,65%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "hsl(35,30%,48%)")
            }
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line
                x1="10"
                y1="6"
                x2="2"
                y2="6"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <polyline
                points="5,3 2,6 5,9"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
            </svg>
            Back to site
          </Link>
        </div>

        {/* ── CENTRE: editorial headline ── */}
        <div className="relative z-10">
          <div
            style={{
              width: "2.5rem",
              height: "1px",
              background: "hsl(35,55%,55%)",
              marginBottom: "2rem",
              opacity: 0.7,
            }}
          />
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 4vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "hsl(35,25%,88%)",
              letterSpacing: "0.01em",
              marginBottom: "1.75rem",
            }}
          >
            Where Every
            <br />
            <em style={{ fontStyle: "italic", color: "hsl(35,55%,72%)" }}>
              Detail
            </em>{" "}
            Speaks
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "hsl(35,20%,60%)",
              maxWidth: "22rem",
              fontWeight: 400,
            }}
          >
            Curate your brand's narrative with precision — from story to
            experience, all in one refined space.
          </p>

          {/* Diamond separator */}
          <div
            className="flex items-center gap-4 mt-8"
            style={{ opacity: 0.45 }}
          >
            <div
              style={{
                flex: 1,
                height: "0.5px",
                background: "hsl(35,30%,50%)",
              }}
            />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <rect
                x="4"
                y="0"
                width="5.6"
                height="5.6"
                transform="rotate(45 4 4)"
                fill="hsl(35,55%,62%)"
              />
            </svg>
            <div
              style={{
                flex: 1,
                height: "0.5px",
                background: "hsl(35,30%,50%)",
              }}
            />
          </div>
        </div>

        {/* ── BOTTOM: three pillars + copyright ── */}
        <div className="relative z-10">
          <div className="flex gap-8">
            {["Story", "Vision", "Experience"].map((word) => (
              <div key={word}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem",
                    color: "hsl(35,25%,52%)",
                    letterSpacing: "0.08em",
                    marginBottom: "0.3rem",
                  }}
                >
                  {word}
                </p>
                <div
                  style={{
                    width: "1.25rem",
                    height: "0.5px",
                    background: "hsl(35,45%,42%)",
                  }}
                />
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "hsl(35,15%,34%)",
              marginTop: "1.75rem",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            © {new Date().getFullYear()} — Admin Portal
          </p>
        </div>
      </div>
      {/* ── End left panel ── */}

      {/* ── Right form panel ── */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-sm">
          {/* Mobile brand mark */}
          <div className="lg:hidden mb-10">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-1"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Tut Studio
            </p>
            <div
              className="w-8 h-px"
              style={{ background: "hsl(var(--primary))" }}
            />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
