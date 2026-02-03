import React from "react";

export const Footer: React.FC = () => (
  <footer className="mt-20 border-t border-slate-200 dark:border-border-dark py-10 px-10">
    <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 dark:text-slate-400 text-sm">
      <p>© 2026 Gustavo Chavez.</p>
      {/*<div className="flex gap-8">
        <a className="hover:text-primary transition-colors" href="#">
          Privacy Policy
        </a>
        <a className="hover:text-primary transition-colors" href="#">
          Terms of Service
        </a>
        <a className="hover:text-primary transition-colors" href="#">
          Sitemap
        </a>
      </div>*/}
    </div>
  </footer>
);
