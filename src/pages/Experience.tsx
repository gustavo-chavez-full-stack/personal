import React from "react";
import { Layout } from "../components/layout/Layout";
import { TimelineItem } from "../components/ui/TimelineItem";
import { SkillBar } from "../components/ui/SkillBar";

export const Experience: React.FC = () => (
  <Layout className="flex justify-center py-10 px-6 lg:px-40">
    <div className="layout-content-container flex flex-col max-w-[1100px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4 mb-8">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-4xl font-black leading-tight tracking-tight">
            Experiencia Profesional y Educación
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">
            Más de 18 años de experiencia, especializado en core bancarios
            (desde Altamira/Alnova hasta FISA/RSAT). Fuerte experiencia práctica
            en la migración de aplicaciones legacy (COBOL, Java 1.6) a
            arquitecturas de microservicios (Java 1.8, Python 3.10, Golang)
            desplegadas en entornos Cloud (GCP, AWS) y orquestadas con
            Kubernetes y Docker. Experto en el ciclo de vida completo del
            desarrollo, desde el análisis de requerimientos y el diseño de
            soluciones hasta la implementación, pruebas de rendimiento,
            optimización y mantenimiento de sistemas críticos.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h3 className="tracking-light text-2xl font-bold leading-tight px-4 pb-6">
            Carrera Profesional
          </h3>
          <div className="grid grid-cols-[40px_1fr] gap-x-4 px-4">
            {/* Tecnova */}
            <TimelineItem
              icon="business"
              title="Desarrollador Fullstack en Tecnova"
              date="Nov 2025 - Ene 2026"
              isLast={true}
              content={[
                "CORFO (analisis): postulaciones Gerencia de Inversión de Financiamiento, analisis requerimientos, construcción diseños.",
                "CORFO (desarrollo): desarrollado Portal Web con Stack Técnologico: React 18 / Net 8 / SQL Server 2019.",
              ]}
            />
            {/* RipleyLab */}
            <TimelineItem
              icon="business"
              title="Desarrollador Fullstack Senior en RipleyLab"
              date="Nov 2021 - Oct 2025"
              content={[
                "Banco Ripley (refactorización): módulo Transferencias (webservices), metodología SCRUM, tecnología GCP, Kubernetes, Microservicios Java 8.",
                "Banco Ripley (proyecto): modernización STI Plus (comunicación casillas SFTP) - GCP - Cloud Run, Cloud Scheduler, Pub/Sub. Python 3.10.",
                "Banco Ripley (mantenimiento): módulos PACPAT/Pago Electronico de Cuenta/Transferencias/Cargos y Abonos Masivos, metodología SCRUM/KANBAN, tecnología ORACLE PLSQL, UNIX BASH SHELL, MICROFOCUS COBOL UNIX, CONTROL-M, JAVA.",
                "Banco Ripley (líder tecnológico): desarrollo de herramientas: Criptor - TNSPing - Conectores, automatización de pruebas JMETER, configuraciones cloud GCP.",
              ]}
            />
            {/* Creasys */}
            <TimelineItem
              icon="business"
              title="Analista Funcional en Creasys"
              date="Nov 2014 - Oct 2021"
              content={[
                "Banco Ripley (refactorización): módulo Transferencias (webservices), metodología SCRUM, tecnología AWS, Kubernetes, NestJS, Golang 1.16.",
                "Banco Ripley (mantenimiento): módulos PACPAT/Pago Electronico de Cuenta/Transferencias/Cargos y Abonos Masivos, metodología SCRUM/KANBAN, tecnología ORACLE PLSQL, UNIX BASH SHELL, MICROFOCUS COBOL UNIX, CONTROL-M, JAVA.",
                "Seguro Met-Life Chile (proyecto): módulos Gestión Gerencial, metodología SCRUM, tecnología IRIS Intersystem, JBOSS, DOCKER, AWS EC2.",
                "Banco Ripley Chile (proyecto): módulos Pago Automático Tarjeta de Crédito, metodología SCRUM, tecnología ORACLE PLSQL, UNIX BASH SHELL, MICROFOCUS COBOL UNIX.",
              ]}
            />
            {/* Accenture CL */}
            <TimelineItem
              icon="business"
              title="Líder Proyecto en Accenture CL"
              date="Sep 2013 - Oct 2014"
              content={[
                "Banco BBVA Chile (mantenimiento): módulos Medios de Pago, Préstamos, Avales y Garantías, metodología KANBAN, tecnología COBOL/MAINFRAME/DB2/CICS.",
              ]}
            />
            {/* Accenture AR */}
            <TimelineItem
              icon="business"
              title="Líder Proyecto/Analista Funcional en Accenture AR"
              date="Jun 2005 - Ago 2013"
              content={[
                "Proyectos: Atis Latam Chile (Man.), CANTV Venezuela (Man.), Altec-Isban Chile (Man.), BBVA-Compass USA(Man.), BBVA España (Man.), Liberbank España (Man.), Caterpillar Finning New Chile (Man.).",
                "Módulos: Banco Santander (LATAM): Préstamos, Medio de pago, Activos en general. Banco BBVA (España): Convenios, Avales y Financiación en divisas.",
                "Tecnología: COBOL/MAINFRAME/DB2/CICS/AS400/CL/Arquitectura Altamira-Alnova.",
                "Metodología: CMMi3.",
              ]}
            />
          </div>
          <h3 className="tracking-light text-2xl font-bold leading-tight px-4 pb-6">
            Educación
          </h3>
          <div className="grid grid-cols-[40px_1fr] gap-x-4 px-4">
            {/* U. Adolfo Ibañez */}
            <TimelineItem
              icon="school"
              title="Diplomado"
              date="2025 · U. Adolfo Ibañez"
              content="Titulado Diplomado en Applied Data Science."
            />
            {/* Iplacex */}
            <TimelineItem
              icon="school"
              title="Ingeniero"
              date="2021 - 2023 · Iplacex"
              content="Titulado Ingeneria en informatica."
            />
            {/* Duoc */}
            <TimelineItem
              icon="school"
              title="Analista"
              date="2016 - 2018 · Douc"
              content="Titulado Analista Programador Computacional."
            />
          </div>
        </div>
        {/* Sidebar Skills */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-border-dark">
            <h3 className="text-xl font-bold leading-tight mb-6">Expertise</h3>
            <div className="space-y-6">
              <SkillBar label="Backend Systems" percent="95" />
              <SkillBar label="Cloud Infrastructure" percent="88" />
              <SkillBar label="Frontend Dev" percent="75" />
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                Core Tech Stack
              </h4>
              <div className="flex gap-2 flex-wrap">
                {[
                  "Cobol",
                  "Java",
                  "PLSQL",
                  "Python",
                  "Go",
                  "NestJS",
                  "Angular",
                  "React",
                  "TypeScript",
                  "Kubernetes",
                  "AWS",
                  "GCP",
                  "Docker",
                  "Oracle",
                  "Microsoft SQL Server",
                  "MongoDB",
                ].map((s) => (
                  <div
                    key={s}
                    className="flex h-8 items-center justify-center rounded bg-slate-100 dark:bg-border-dark px-3"
                  >
                    <p className="text-xs font-medium">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-4 bg-primary/5 dark:bg-primary/10 rounded border border-primary/20">
              <h4 className="text-primary text-sm font-bold mb-2">
                Buscar un Ingeniero en Informatica?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Actualmente me encuentro abierto a nuevas oportunidades.
              </p>
              <a
                href="https://www.linkedin.com/in/gustavo-chavez-full-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90 transition-colors block text-center"
              >
                Estemos en Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
