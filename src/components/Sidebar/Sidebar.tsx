import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Eye,
  MapPin,
  ShoppingBag,
  Images,
  Sparkles,
  Star,
  Mail,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../store/AuthContext/AuthContext";

const menuItems = [
  { id: "home", label: "Home", icon: LayoutDashboard, path: "/admin/home" },
  { id: "story", label: "Our Story", icon: BookOpen, path: "/admin/story" },
  { id: "vision", label: "Our Vision", icon: Eye, path: "/admin/vision" },
  { id: "location", label: "Location", icon: MapPin, path: "/admin/location" },
  { id: "store", label: "The Store", icon: ShoppingBag, path: "/admin/store" },
  { id: "gallery", label: "Gallery", icon: Images, path: "/admin/gallery" },
  {
    id: "brand-experience",
    label: "Brand Experience",
    icon: Sparkles,
    path: "/admin/brand-experience",
  },
  {
    id: "customer-experience",
    label: "Customer Experience",
    icon: Star,
    path: "/admin/customer-experience",
  },
  { id: "contactus", label: "Messages", icon: Mail, path: "/admin/contactus" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  let timerInterval: ReturnType<typeof setInterval>;

  const handleLogout = async () => {
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

  const W = collapsed ? "5.5rem" : "19rem";

  return (
    <aside
      style={{
        width: W,
        minWidth: W,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#E8DDD2",
        borderRight: "1px solid rgba(160,125,90,0.25)",
        transition: "width 0.3s ease, min-width 0.3s ease",
        position: "relative",
        overflow: "visible",
        flexShrink: 0,
      }}
    >
      {/* ── LOGO AREA ── */}
      <div
        style={{
          height: "7rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: collapsed ? "0" : "0 1.5rem",
          borderBottom: "1px solid rgba(140,105,70,0.2)",
          flexShrink: 0,
        }}
      >
        {collapsed ? (
          /* Collapsed: just a styled "T" lettermark */
          <div
            style={{
              width: "2.6rem",
              height: "2.6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.5rem",
                color: "#3C2C20",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              Tut
            </span>
          </div>
        ) : (
          /* Expanded: logo image */
          <img
            src="/tut-logoo-removebg-preview.png"
            alt="Tut Studio"
            style={{
              height: "4.5rem",
              width: "auto",
              objectFit: "contain",
            }}
          />
        )}
      </div>

      {/* ── SECTION LABEL ── */}
     

      {/* ── NAV LINKS ── */}
      <nav
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "clip",
          padding: collapsed ? "1rem 0.65rem" : "0.75rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.15rem",
        }}
      >
        {menuItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(item.path + "/");
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              title={collapsed ? item.label : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: collapsed ? 0 : "0.9rem",
                justifyContent: collapsed ? "center" : "flex-start",
                width: "100%",
                padding: collapsed ? "0.85rem 0" : "0.75rem 1rem",
                background: isActive ? "hsl(25, 30%, 18%)" : "transparent",
                border: "none",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.18s",
                textAlign: "left",
                borderRadius: 0,
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(44,26,14,0.06)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
              }}
            >
              {/* Active right-edge glow line */}
              {isActive && !collapsed && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "3px",
                    height: "1.8rem",
                    background: "#C4A882",
                    borderRadius: "2px 0 0 2px",
                  }}
                />
              )}

              {/* Icon */}
              <Icon
                size={20}
                strokeWidth={isActive ? 2 : 1.6}
                style={{
                  color: isActive ? "#D7C3A8" : "rgba(80,55,35,0.55)",
                  flexShrink: 0,
                  transition: "color 0.15s",
                }}
              />

              {/* Label */}
              {!collapsed && (
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.99rem",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: isActive ? "0.01em" : "0",
                    color: isActive ? "#F0EAE0" : "rgba(44,26,14,0.65)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    transition: "color 0.15s, font-weight 0.15s",
                  }}
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* ── DIVIDER ── */}
      <div
        style={{
          height: "1px",
          background: "rgba(140,105,70,0.2)",
          margin: "0 1rem",
          flexShrink: 0,
        }}
      />

      {/* ── LOGOUT ── */}
      <div
        style={{
          padding: collapsed ? "0.75rem 0.65rem" : "0.75rem 1rem",
          flexShrink: 0,
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: collapsed ? 0 : "0.9rem",
            justifyContent: collapsed ? "center" : "flex-start",
            width: "100%",
            padding: collapsed ? "0.85rem 0" : "0.75rem 1rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            transition: "background 0.18s",
            borderRadius: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              "rgba(200,50,50,0.06)";
            const icon = e.currentTarget.querySelector(
              ".logout-icon",
            ) as SVGElement;
            const label = e.currentTarget.querySelector(
              ".logout-label",
            ) as HTMLElement;
            if (icon) (icon as any).style.color = "#e05555";
            if (label) label.style.color = "#e05555";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            const icon = e.currentTarget.querySelector(
              ".logout-icon",
            ) as SVGElement;
            const label = e.currentTarget.querySelector(
              ".logout-label",
            ) as HTMLElement;
            if (icon) (icon as any).style.color = "rgba(80,55,35,0.45)";
            if (label) label.style.color = "rgba(44,26,14,0.5)";
          }}
        >
          <LogOut
            size={20}
            strokeWidth={1.6}
            className="logout-icon"
            style={{
              color: "rgba(80,55,35,0.45)",
              flexShrink: 0,
              transition: "color 0.15s",
            }}
          />
          {!collapsed && (
            <span
              className="logout-label"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 500,
                color: "rgba(44,26,14,0.5)",
                transition: "color 0.15s",
              }}
            >
              Logout
            </span>
          )}
        </button>
      </div>

      {/* ── COLLAPSE TOGGLE ── */}
      <button
        onClick={() => setCollapsed((v) => !v)}
        style={{
          position: "absolute",
          right: "-0.85rem",
          top: "7.75rem",
          width: "1.7rem",
          height: "1.7rem",
          borderRadius: "50%",
          background: "#E8DDD2",
          border: "1px solid rgba(140,105,70,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "rgba(100,75,55,0.55)",
          zIndex: 20,
          transition: "border-color 0.15s, color 0.15s, box-shadow 0.15s",
          boxShadow: "0 2px 8px rgba(44,26,14,0.08)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "#C4A882";
          el.style.color = "hsl(25,30%,18%)";
          el.style.boxShadow = "0 2px 12px rgba(44,26,14,0.15)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(196,168,130,0.35)";
          el.style.color = "rgba(100,75,55,0.55)";
          el.style.boxShadow = "0 2px 8px rgba(44,26,14,0.08)";
        }}
      >
        {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
      </button>
    </aside>
  );
}
