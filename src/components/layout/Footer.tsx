import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export const Footer: React.FC = () => {
  const [footerText, setFooterText] = useState("© 2026 Gustavo Chavez.");

  useEffect(() => {
    const fetchFooter = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", "footer")
        .single();
      
      if (data?.value?.text) {
        setFooterText(data.value.text);
      }
    };
    fetchFooter();
  }, []);

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-border-dark py-10 px-10">
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 dark:text-slate-400 text-sm">
        <p>{footerText}</p>
      </div>
    </footer>
  );
};
