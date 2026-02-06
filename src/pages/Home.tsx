import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { ExpertiseCard } from "../components/ui/ExpertiseCard";
import { ProjectPreviewCard } from "../components/ui/ProjectPreviewCard";


export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout className="mx-auto flex w-full max-w-[1280px] flex-col px-6 py-10 lg:px-10">
      {/* Hero Section */}
      <div className="min-[480px]:gap-12 min-[864px]:flex-row flex flex-col gap-8 py-12 items-center">
        <div className="relative w-full max-w-[480px] min-[864px]:w-1/2 group">
          {/* Fondo decorativo suave */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          <div className="relative aspect-square overflow-hidden rounded-[2rem] border-8 border-white dark:border-slate-900 shadow-2xl transition-all duration-500 group-hover:shadow-primary/20 group-hover:translate-y-[-8px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none"></div>
            <img
              alt="Professional headshot"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={`${import.meta.env.BASE_URL}profile.jpg`}
            />
          </div>

          {/* Adorno geométrico */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
        </div>
        <div className="flex flex-col gap-6 min-[864px]:w-1/2 min-[864px]:justify-center">
          <div className="flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary max-w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Disponible para nuevos desafíos
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Diseñando <span className="text-primary">Soluciones</span> de
              Software.
            </h1>
            <p className="text-lg font-normal text-slate-600 dark:text-slate-400 max-w-[540px]">
              Ingeniero informático especializado en análisis y solución de
              requerimientos.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`${import.meta.env.BASE_URL}CVGustavoChavez20250203.pdf`}
              download="CV_Gustavo_Chavez.pdf"
              className="flex min-w-[160px] items-center justify-center gap-2 rounded bg-primary px-6 py-3 text-base font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined">download</span>
              Descargar CV
            </a>
            <button
              onClick={() => navigate("/projects")}
              className="flex min-w-[160px] items-center justify-center gap-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent px-6 py-3 text-base font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex flex-wrap gap-4 py-8">
        {[
          { label: "Años de Experiencia", val: "20+" },
          { label: "Proyectos Participados", val: "11+" },
        ].map((stat, i) => (
          <div
            key={i}
            className="flex min-w-[158px] flex-1 flex-col gap-2 rounded bg-white dark:bg-card-dark p-6 border border-slate-200 dark:border-border-dark"
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="text-3xl font-bold tracking-tight text-primary">
              {stat.val}
            </p>
          </div>
        ))}
      </div>

      {/* Expertise Section */}
      <div className="flex flex-col gap-10 py-16" id="experience">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Experiencia Central
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-[720px]">
            Encontrando la solución a lo que se necesites.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ExpertiseCard
            icon="developer_mode_tv"
            title="Diseño Sistemas"
            desc="Diseñando funcionalidades que cumplan los requerimientos de todos los clientes (interno/externo)."
          />
          <ExpertiseCard
            icon="memory"
            title="Desarrollo"
            desc="Experiencia en sistemas legados COBOL/JAVA. Experiencia en lenguajes actuales NodeJS, Golang, PL/SQL."
          />
          <ExpertiseCard
            icon="cloud_done"
            title="Migraciones"
            desc="Migraciones a AWS/GCP de sistemas legados."
          />
        </div>
      </div>

      {/* Projects Preview */}
      {<div className="py-16" id="projects">
        <div className="flex items-center justify-between pb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Proyectos Recientes
          </h2>
          <button
            onClick={() => navigate("/projects")}
            className="text-primary font-bold hover:underline flex items-center gap-1"
          >
            Ver todos los proyectos{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectPreviewCard
            tags={["Java", "WebApp", "Kubernetes", "Docker", "JMeter", "VisualVM"]}
            title="Web App Legacy"
            desc="Ejemplo para levantar una Web App en Kubernetes y hacer pruebas de carga con JMeter. Conectando VisualVM para monitoreo."
            img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80"
          />
          <ProjectPreviewCard
            tags={["Python", "SFTP", "MongoDB", "Docker"]}
            title="SFTP Sincronizador"
            desc="Ejemplo de sincronización de archivos SFTP con persistencia en MongoDB."
            img="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80"
          />
        </div>
      </div>}

      {/* CTA */}
      <div className="mt-16 rounded-xl bg-primary px-8 py-16 text-center text-white">
        <h2 className="text-3xl font-black md:text-5xl mb-6">
          Construyendo soluciones.
        </h2>
        <p className="mx-auto max-w-xl text-lg text-white/80 mb-10 leading-relaxed">
          Buscas a un ingeniero que te ayude a solucionar problemas? Actualmente
          me encuentro abierto a nuevas oportunidades.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/gustavo-chavez-full-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-white px-10 py-4 text-primary font-bold hover:bg-slate-100 transition-all inline-block"
          >
            Estemos en Contacto
          </a>
        </div>
      </div>
    </Layout>
  );
};
