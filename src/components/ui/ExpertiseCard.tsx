import React from 'react';
import type { ExpertiseCardProps } from '../../types';

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, desc }) => (
    <div className="flex flex-col gap-4 rounded border border-slate-200 dark:border-border-dark bg-white dark:bg-card-dark p-8 hover:border-primary/50 transition-colors group">
        <div className="flex h-12 w-12 items-center justify-center rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);
