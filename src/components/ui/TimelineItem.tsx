import React from 'react';
import type { TimelineItemProps } from '../../types';

export const TimelineItem: React.FC<TimelineItemProps> = ({ icon, title, date, badge, content, isLast }) => (
    <>
        <div className="flex flex-col items-center gap-1 pt-2">
            <div className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 flex items-center justify-center border-2 ${badge ? 'bg-primary/10 border-primary' : 'bg-slate-100 dark:bg-border-dark border-slate-200 dark:border-border-dark'}`}>
                <span className={`material-symbols-outlined text-sm ${badge ? 'text-primary' : 'text-slate-500'}`}>{icon}</span>
            </div>
            {!isLast && <div className="w-[2px] bg-slate-200 dark:bg-border-dark h-2 grow"></div>}
        </div>
        <div className={`flex flex-1 flex-col ${isLast ? '' : 'pb-10'}`}>
            <div className="flex justify-between items-start mb-1">
                <p className="text-lg font-bold leading-normal">{title}</p>
                {badge && <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">{badge}</span>}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-3">{date}</p>
            {Array.isArray(content) ? (
                <ul className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed space-y-2 list-disc pl-4">
                    {content.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            ) : (
                <p className="text-slate-500 dark:text-slate-400 text-sm">{content}</p>
            )}
        </div>
    </>
);
