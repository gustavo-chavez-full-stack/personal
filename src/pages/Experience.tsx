import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { TimelineItem } from "../components/ui/TimelineItem";
import { SkillBar } from "../components/ui/SkillBar";
import { supabase } from "../lib/supabase";

interface ExperienceItem {
  id: number;
  type: "work" | "education";
  title: string;
  company_or_school: string;
  date_range: string;
  content: string | string[];
  is_last?: boolean;
}

export const Experience: React.FC = () => {
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        // Fetch Settings
        const { data: sData } = await supabase.from("site_settings").select("*");
        const settingsMap = sData?.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.value }), {});
        setSettings(settingsMap || {});

        // Fetch Skills
        const { data: skData } = await supabase
          .from("skills")
          .select("*")
          .order("display_order", { ascending: true });
        setSkills(skData || []);

        // Fetch Experience Items
        const { data, error } = await supabase
          .from("experience_items")
          .select("*")
          .order("display_order", { ascending: true });

        if (error) throw error;
        if (data) {
          setExperience(data.map(item => ({
            ...item,
            content: typeof item.content === 'string' ? JSON.parse(item.content) : item.content
          })));
        }
      } catch (err) {
        console.error("Error fetching experience data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const intro = settings.experience_intro || { title: "Experiencia Profesional y Educación", description: "Cargando..." };
  const cta = settings.cta || { title: "Contacto", description: "", button_text: "LinkedIn", linkedin_url: "#" };

  const skillBars = skills.filter(s => s.type === 'bar');
  const skillTags = skills.filter(s => s.type === 'tag');

  return (
    <Layout className="flex justify-center py-10 px-6 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[1100px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4 mb-8 text-center sm:text-left">
          <div className="flex min-w-72 w-full flex-col gap-3">
            <p className="text-4xl font-black leading-tight tracking-tight">
              {intro.title}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-2xl mx-auto sm:mx-0">
              {intro.description}
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h3 className="tracking-light text-2xl font-bold leading-tight px-4 pb-6">
                Carrera Profesional
              </h3>
              <div className="grid grid-cols-[40px_1fr] gap-x-4 px-4">
                {experience
                  .filter((i) => i.type === "work")
                  .map((item) => (
                    <TimelineItem
                      key={item.id}
                      icon="business"
                      title={`${item.title} en ${item.company_or_school}`}
                      date={item.date_range}
                      isLast={item.is_last}
                      content={item.content as string[]}
                    />
                  ))}
              </div>

              <h3 className="tracking-light text-2xl font-bold leading-tight px-4 pb-6 mt-12">
                Educación
              </h3>
              <div className="grid grid-cols-[40px_1fr] gap-x-4 px-4">
                {experience
                  .filter((i) => i.type === "education")
                  .map((item) => (
                    <TimelineItem
                      key={item.id}
                      icon="school"
                      title={item.title}
                      date={`${item.date_range} · ${item.company_or_school}`}
                      content={typeof item.content === 'string' ? item.content : item.content[0]}
                    />
                  ))}
              </div>
            </div>

            {/* Sidebar Skills */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-border-dark position-sticky top-6">
                <h3 className="text-xl font-bold leading-tight mb-6">Expertise</h3>
                <div className="space-y-6">
                  {skillBars.map((sk, i) => (
                    <SkillBar key={i} label={sk.name} percent={sk.value.toString()} />
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                    Core Tech Stack
                  </h4>
                  <div className="flex gap-2 flex-wrap">
                    {skillTags.map((sk) => (
                      <div
                        key={sk.id}
                        className="flex h-8 items-center justify-center rounded bg-slate-100 dark:bg-border-dark px-3"
                      >
                        <p className="text-xs font-medium">{sk.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 p-4 bg-primary/5 dark:bg-primary/10 rounded border border-primary/20">
                  <h4 className="text-primary text-sm font-bold mb-2">
                    {cta.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {cta.description}
                  </p>
                  <a
                    href={cta.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90 transition-colors block text-center"
                  >
                    {cta.button_text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};


