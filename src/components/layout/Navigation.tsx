import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
              <span className="material-symbols-outlined text-xl">terminal</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Gustavo Chavez</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
            >
              Inicio
            </Link>
            <Link
              to="/experience"
              className={`text-sm font-medium transition-colors ${isActive("/experience") ? "text-primary" : "hover:text-primary"}`}
            >
              Experiencia
            </Link>
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors ${isActive("/projects") ? "text-primary" : "hover:text-primary"}`}
            >
              Proyectos
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[73px] right-0 h-[calc(100vh-73px)] w-72 bg-background-light dark:bg-background-dark border-l border-slate-200 dark:border-border-dark z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col gap-2 p-6">
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive("/")
                ? "bg-primary/10 text-primary"
                : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
          >
            <span className="material-symbols-outlined">home</span>
            Inicio
          </Link>
          <Link
            to="/experience"
            onClick={() => handleNavClick("/experience")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive("/experience")
                ? "bg-primary/10 text-primary"
                : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
          >
            <span className="material-symbols-outlined">work</span>
            Experiencia
          </Link>
          <Link
            to="/projects"
            onClick={() => handleNavClick("/projects")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive("/projects")
                ? "bg-primary/10 text-primary"
                : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
          >
            <span className="material-symbols-outlined">folder_open</span>
            Proyectos
          </Link>

          {/* Mobile CTA Button */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-border-dark">
            <a
              href="https://www.linkedin.com/in/gustavo-chavez-full-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined">contact_mail</span>
              Contacto
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
