import React from 'react';

interface ProjectPreviewCardProps {
    tags: string[];
    title: string;
    desc: string;
    img: string;
}

export const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({ tags, title, desc, img }) => (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark">
        <div className="aspect-video w-full overflow-hidden">
            <img alt={title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} />
        </div>
        <div className="p-6">
            <div className="flex gap-2 mb-3">
                {tags.map(t => <span key={t} className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{t}</span>)}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{desc}</p>
        </div>
    </div>
);
