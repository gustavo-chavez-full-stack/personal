import React from "react";
import { Layout } from "../components/layout/Layout";
import { ProjectCard } from "../components/ui/ProjectCard";
import type { Project } from "../types";

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Go MQ IBM",
      tags: ["Go", "IBM MQ", "Docker"],
      desc: "Consumo de mensajes de IBM MQ con Go.",
      img: "https://github.com/gustavo-chavez-full-stack/go-mq-ibm",
      btn: "Preview",
      icon: "visibility",
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
