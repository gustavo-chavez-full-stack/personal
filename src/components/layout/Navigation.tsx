import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
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
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
            >
              Home
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
          {/* <button className="flex items-center justify-center rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary/90 transition-colors">
            Hire Me
          </button> */}
        </div>
      </div>
    </div>
  );
};
