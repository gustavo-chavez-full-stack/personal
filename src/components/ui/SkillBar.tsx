import React from 'react';
import type { SkillBarProps } from '../../types';

export const SkillBar: React.FC<SkillBarProps> = ({ label, percent }) => (
    <div>
        <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold">{label}</span>
            <span className="text-xs text-slate-500">{percent}%</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-border-dark h-2 rounded-full">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${percent}%` }}></div>
        </div>
    </div>
);
