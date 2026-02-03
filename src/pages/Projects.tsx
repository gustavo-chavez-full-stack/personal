import React from "react";
import { Layout } from "../components/layout/Layout";
import { ProjectCard } from "../components/ui/ProjectCard";
import type { Project } from "../types";

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Web App Legacy",
      tags: ["Java", "WebApp", "Kubernetes", "Docker", "JMeter", "VisualVM"],
      desc: "Ejemplo para levantar una Web App en Kubernetes y hacer pruebas de carga con JMeter. Conectando VisualVM para monitoreo.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/web_app_legacy",
      screenshot: `${import.meta.env.BASE_URL}web-app-legacy-screenshot.png`,
    },
    {
      title: "Web App Login MySQL",
      tags: ["Java", "WebApp", "MySQL", "Docker"],
      desc: "Ejemplo de una Web App con login y persistencia en MySQL.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/java-web-app-login-mysql",
      screenshot: `${import.meta.env.BASE_URL}web-app-login-mysql-screenshot.png`,
    },
    {
      title: "SFTP Python Shell",
      tags: ["Python", "SFTP", "Shell", "Docker"],
      desc: "Ejemplo para levantar un servidor SFTP con Python y Shell.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/sftp-python-shell",
      screenshot: `${import.meta.env.BASE_URL}sftp-python-shell-screenshot.png`,
    },
    {
      title: "SFTP Sincronizador",
      tags: ["Python", "SFTP", "MongoDB", "Docker"],
      desc: "Ejemplo de sincronización de archivos SFTP con persistencia en MongoDB.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/sftp-sincronizador",
      screenshot: `${import.meta.env.BASE_URL}sftp-sincronizador-screenshot.png`,
    },
    {
      title: "SFTP Bandwidth",
      tags: ["Python", "SFTP", "Bandwidth", "Docker"],
      desc: "Ejemplo de sincronización de archivos SFTP con persistencia en Bandwidth.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/sftp-bandwidth",
      screenshot: `${import.meta.env.BASE_URL}go-mq-ibm-screenshot.png`,
    },
    {
      title: "Go MQ IBM",
      tags: ["Go", "IBM MQ", "Docker"],
      desc: "Consumo de mensajes de IBM MQ con Go.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/go-mq-ibm",
      screenshot: `${import.meta.env.BASE_URL}go-mq-ibm-screenshot.png`,
    },
    {
      title: "Go API REST Oracle",
      tags: ["Go", "API REST", "Oracle", "Docker"],
      desc: "API REST con Go y Oracle.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/go-api-rest-oracle",
      screenshot: `${import.meta.env.BASE_URL}go-mq-ibm-screenshot.png`,
    },
    {
      title: "NestJS Oracle 11g",
      tags: ["NestJS", "Oracle 11g", "Docker"],
      desc: "API REST con NestJS y Oracle 11g.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/nestjs-oracle-11g",
      screenshot: `${import.meta.env.BASE_URL}go-mq-ibm-screenshot.png`,
    },
    {
      title: "Oracle DB Tools",
      tags: ["Oracle", "Client Oracle", "Docker"],
      desc: "Herramientas para Oracle DB. TNS Ping, Listener, etc.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/oracle_db_tools",
      screenshot: `${import.meta.env.BASE_URL}go-mq-ibm-screenshot.png`,
    },
    {
      title: "Python Criptor",
      tags: ["Python", "Criptografía", "CLI", "Docker"],
      desc: "Herramienta de cifrado y descifrado de texto.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/python-criptor",
      screenshot: `${import.meta.env.BASE_URL}go-mq-ibm-screenshot.png`,
    },
    {
      title: "ETL NIFI",
      tags: ["ETL", "NIFI", "Docker"],
      desc: "Ejemplo de ETL con NIFI.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/ETL-NIFI",
      screenshot: `${import.meta.env.BASE_URL}go-mq-ibm-screenshot.png`,
    },
  ];

  return (
    <Layout className="max-w-[1200px] mx-auto px-4 lg:px-10 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
        <div className="flex flex-col gap-3 max-w-2xl">
          <p className="text-5xl font-black leading-tight tracking-tight">
            Proyectos
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
            Selección de proyectos.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap justify-start md:justify-end">
          <div className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary px-5 cursor-pointer">
            <p className="text-white text-sm font-semibold">Todo</p>
          </div>
          {/*["Fullstack", "Distributed Systems", "Machine Learning"].map(
            (tag) => (
              <div
                key={tag}
                className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-border-dark px-5 text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors"
              >
                <p className="text-sm font-medium">{tag}</p>
              </div>
            ),
          )*/}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="mt-16 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-border-dark text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
            1
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-border-dark text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-border-dark transition-colors">
            2
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-border-dark text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Mostrando 6 de 24 proyectos
        </p>
      </div>*/}
    </Layout>
  );
};
