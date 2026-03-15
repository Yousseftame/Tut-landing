import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, ChevronDown, User } from "lucide-react";
import { useAuth } from "../../store/AuthContext/AuthContext";
import Swal from "sweetalert2";

const C = {
  bg: "#F7F3EE",
  border: "rgba(196,168,130,0.25)",
  brown: "#2C1A0E",
  gold: "#C4A882",
  goldDim: "rgba(196,168,130,0.5)",
  text: "#3D2512",
  textDim: "#9A7F68",
};

export default function AdminNavbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  let timerInterval: ReturnType<typeof setInterval>;

  const handleLogout = async () => {
    setDropOpen(false);
    Swal.fire({
      title: "Logging out...",
      html: "You will be logged out in <b></b> ms",
      timer: 1500,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
        const timerEl = Swal.getPopup()?.querySelector("b");
        timerInterval = setInterval(() => {
          if (timerEl) timerEl.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => clearInterval(timerInterval),
    }).then(async (result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        await logout();
        navigate("/login");
      }
    });
  };

  // Derive initials from email
  const email = currentUser?.email || "";
  const initials = email ? email.slice(0, 2).toUpperCase() : "AD";

  // Friendly display name: part before @
  const displayName = email ? email.split("@")[0] : "Administrator";

  return (
    <header
      style={{
        width: "100%",
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        background: C.bg,
        borderBottom: `1px solid ${C.border}`,
        flexShrink: 0,
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* ── Left: greeting ── */}
      <div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: C.textDim,
            margin: "0 0 0.2rem",
          }}
        >
          Good to see you again
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: C.text,
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          {displayName}
        </p>
      </div>

      {/* ── Right: profile dropdown ── */}
      <div style={{ position: "relative" }} ref={dropRef}>
        <button
          onClick={() => setDropOpen((v) => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "transparent",
            border: "none",
            padding: "0.45rem 0.5rem",
            cursor: "pointer",
          }}
        >
          {/* Avatar circle */}
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              background: "hsl(25, 30%, 18%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: C.gold,
                letterSpacing: "0.05em",
              }}
            >
              {initials}
            </span>
          </div>

          {/* Name */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: C.text,
              maxWidth: "9rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {displayName}
          </span>

          <ChevronDown
            size={14}
            style={{
              color: C.goldDim,
              transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          />
        </button>

        {/* Dropdown */}
        {dropOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 0.5rem)",
              right: 0,
              minWidth: "13rem",
              background: C.bg,
              border: `1px solid ${C.border}`,
              boxShadow: "0 8px 24px rgba(44,26,14,0.1)",
              zIndex: 50,
            }}
          >
            {/* Email label */}
            <div
              style={{
                padding: "0.85rem 1rem",
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: C.textDim,
                  margin: "0 0 0.2rem",
                }}
              >
                Signed in as
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: C.text,
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {email}
              </p>
            </div>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                width: "100%",
                padding: "0.8rem 1rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(220,60,60,0.06)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "transparent")
              }
            >
              <LogOut size={15} style={{ color: "#f87171", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#e05555",
                }}
              >
                Logout
              </span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
