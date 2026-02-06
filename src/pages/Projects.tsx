import React, { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { ProjectCard } from "../components/ui/ProjectCard";
import type { Project } from "../types";

export const Projects: React.FC = () => {
  const [activeTag, setActiveTag] = useState("Todo");

  const filterTags = ["Todo", "Java", "Python", "Go", "Oracle", "NestJS", "Docker"];

  const projects: Project[] = [
    {
      title: "Web App Legacy",
      tags: ["Java", "WebApp", "Kubernetes", "Docker", "JMeter", "VisualVM"],
      desc: "Ejemplo para levantar una Web App en Kubernetes y hacer pruebas de carga con JMeter. Conectando VisualVM para monitoreo.",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/web_app_legacy",
      screenshot: `${import.meta.env.BASE_URL}web-app-legacy-screenshot.png`,
    },
    {
      title: "Web App Login MySQL",
      tags: ["Java", "WebApp", "MySQL", "Docker"],
      desc: "Ejemplo de una Web App con login y persistencia en MySQL.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/java-web-app-login-mysql",
      screenshot: `${import.meta.env.BASE_URL}web-app-login-mysql-screenshot.png`,
    },
    {
      title: "SFTP Python Shell",
      tags: ["Python", "SFTP", "Shell", "Docker"],
      desc: "Ejemplo para levantar un servidor SFTP con Python y Shell.",
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/sftp-python-shell",
      screenshot: `${import.meta.env.BASE_URL}sftp-python-shell-screenshot.png`,
    },
    {
      title: "SFTP Sincronizador",
      tags: ["Python", "SFTP", "MongoDB", "Docker"],
      desc: "Ejemplo de sincronización de archivos SFTP con persistencia en MongoDB.",
      img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/sftp-sincronizador",
      screenshot: `${import.meta.env.BASE_URL}sftp-sincronizador-screenshot.png`,
    },
    {
      title: "SFTP Bandwidth",
      tags: ["Python", "SFTP", "Bandwidth", "Docker"],
      desc: "Ejemplo de sincronización de archivos SFTP con persistencia en Bandwidth.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/sftp-bandwidth",
      screenshot: `${import.meta.env.BASE_URL}sftp-bandwidth-screenshot.png`,
    },
    {
      title: "Go MQ IBM",
      tags: ["Go", "IBM MQ", "Docker"],
      desc: "Consumo de mensajes de IBM MQ con Go.",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/go-mq-ibm",
      screenshot: `${import.meta.env.BASE_URL}go-mq-ibm-screenshot.png`,
    },
    {
      title: "Go API REST Oracle",
      tags: ["Go", "API REST", "Oracle", "Docker"],
      desc: "API REST con Go y Oracle.",
      img: "https://images.unsplash.com/photo-1554672408-730436b60dde?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/go-api-rest-oracle",
      screenshot: `${import.meta.env.BASE_URL}go-api-rest-oracle-screenshot.png`,
    },
    {
      title: "NestJS Oracle 11g",
      tags: ["NestJS", "Oracle 11g", "Docker"],
      desc: "API REST con NestJS y Oracle 11g.",
      img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/nestjs-oracle-11",
      screenshot: `${import.meta.env.BASE_URL}nestjs-oracle-11-screenshot.png`,
    },
    {
      title: "Oracle DB Tools",
      tags: ["Oracle", "Client Oracle", "Docker"],
      desc: "Herramientas para Oracle DB. TNS Ping, Listener, etc.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/oracle_db_tools",
      screenshot: `${import.meta.env.BASE_URL}oracle_db_tools-screenshot.png`,
    },
    {
      title: "Python Criptor",
      tags: ["Python", "Criptografía", "CLI", "Docker"],
      desc: "Herramienta de cifrado y descifrado de texto.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/python-criptor",
      screenshot: `${import.meta.env.BASE_URL}python-criptor-screenshot.png`,
    },
    {
      title: "ETL NIFI",
      tags: ["ETL", "NIFI", "Docker"],
      desc: "Ejemplo de ETL con NIFI.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gustavo-chavez-full-stack/ETL-NIFI",
      screenshot: `${import.meta.env.BASE_URL}ETL-NIFI-screenshot.png`,
    },
    {
      title: "Gestor Prestamos",
      tags: [".Net", "Mysql", "Docker", "AWS EC2", "JMETER"],
      desc: "Ejemplo MVC de Gestor de Prestamos.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
      btn: "Preview",
      icon: "visibility",
      link: "https://github.com/gchavez-dev-2023/SolucionWebAppGestorPrestamos",
      screenshot: `${import.meta.env.BASE_URL}gestor-prestamos-screenshot.png`,
    },
    {
      title: "Análisis Fuga Memoria - Proyecto Java 8",
      tags: ["Java 8", "Kubernetes", "Docker", "JMeter", "VisualVM"],
      desc: "Instalación herramientas y configuración de proyecto en JAVA 8 (legado), para despliegue en Kubernetes y monitoreo de fuga de memoria con VisualVM.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      btn: "YouTube",
      icon: "play_circle",
      link: "https://youtu.be/L7VRMP-J9xA",
    },
    {
      title: "Open Fortivpn - Ubuntu Server",
      tags: ["Ubuntu Server", "Open Fortivpn", "Docker"],
      desc: "Se agrega una nueva conexión vía VPN para poder acceder a una Base de Datos Oracle que se encuentra en un destino remoto.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      btn: "YouTube",
      icon: "play_circle",
      link: "https://youtu.be/6yuww5QyWhE",
    },
    {
      title: "NestJS Microservicio gRPC",
      tags: ["Nestjs", "Oracle 11", "gRPC", "BloomRPC"],
      desc: "Microservicio gRPC Nestjs con BloomRPC.",
      img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&auto=format&fit=crop&q=80",
      btn: "YouTube",
      icon: "play_circle",
      link: "https://youtu.be/6yuww5QyWhE",
    },
    {
      title: "Nestjs Rest HTTP",
      tags: ["Nestjs", "Oracle 11", "Rest HTTP", "Postman"],
      desc: "Orientados al desarrollo de NODE JS conectado a una instancia Oracle.",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=80",
      btn: "YouTube",
      icon: "play_circle",
      link: "https://youtu.be/6YwcoAHsuOc",
    },
    {
      title: "Configurar Visual Code Java",
      tags: ["Visual Code", "JDK 1.8", "Maven 3.6", "Tomcat 7", "Git", "Windows 10", "JAVA 1.6"],
      desc: "Para proyectos JAVA muy viejitos (1.6 o anteriores) VS Code es una buena alternativa a ECLIPSE.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
      btn: "YouTube",
      icon: "play_circle",
      link: "https://youtu.be/wTKWSexVFV4",
    },
    {
      title: "Configurar Cliente Oracle 11.2 en Ubuntu Server 18.4",
      tags: ["Docker", "Oracle 11 XE", "Cliente Oracle 11.2", "Visual Code", "Ubuntu server 18.4"],
      desc: "Configurar una instancia Oracle 11g XE en docker y el cliente Oracle 11g para poder acceder via SQLPLUS.",
      img: "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&auto=format&fit=crop&q=80",
      btn: "YouTube",
      icon: "play_circle",
      link: "https://youtu.be/0QpEmB6C1_M",
    },
    {
      title: "Configurar Visual Code Remote SSH",
      tags: ["Visual Code", "Remote SSH", "UbuntuServer", "Docker", "JDK 1.8", "Tomcat", "Maven", "Windows 10"],
      desc: "Configurar Visual Code Remote SSH - UbuntuServer + Docker + JDK 1.8 + Tomcat + Maven en Windows 10.",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      btn: "YouTube",
      icon: "play_circle",
      link: "https://youtu.be/d4U6peX8DUo",
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
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-5 transition-colors cursor-pointer ${
                activeTag === tag
                  ? "bg-primary text-white"
                  : "bg-slate-100 dark:bg-border-dark text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <p className="text-sm font-semibold">{tag}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter((p) =>
            activeTag === "Todo"
              ? true
              : p.tags.some(
                  (t) => t.toLowerCase() === activeTag.toLowerCase()
                )
          )
          .map((p, i) => (
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
