import React, { useState, useEffect } from "react";
import { Layout } from "../components/layout/Layout";
import { ProjectCard } from "../components/ui/ProjectCard";
import type { Project } from "../types";
import { supabase } from "../lib/supabase";

export const Projects: React.FC = () => {
  const [activeTag, setActiveTag] = useState("Todo");
  const [projects, setProjects] = useState<Project[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch Settings
        const { data: sData } = await supabase.from("site_settings").select("*");
        const settingsMap = sData?.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.value }), {});
        setSettings(settingsMap || {});

        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;
        if (data) setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const intro = settings.projects_intro || { title: "Proyectos", description: "Selección de proyectos.", filter_tags: ["Todo"] };
  const filterTags = intro.filter_tags;

  return (
    <Layout className="max-w-[1200px] mx-auto px-4 lg:px-10 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10 text-center md:text-left">
        <div className="flex flex-col gap-3 max-w-2xl w-full">
          <p className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
            {intro.title}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
            {intro.description}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap justify-center md:justify-end w-full">
          {filterTags.map((tag: string) => (
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

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
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
      )}
    </Layout>
  );
};
