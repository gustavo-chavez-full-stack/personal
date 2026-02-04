import React, { useState } from 'react';
import type { Project } from '../../types';
import { Modal } from './Modal';

export const ProjectCard: React.FC<Project> = ({ title, tags, desc, img, btn, icon, link, screenshot }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="group flex flex-col bg-white dark:bg-card-dark rounded-xl overflow-hidden border border-slate-200 dark:border-border-dark hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="w-full relative aspect-video overflow-hidden">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url("${img}")` }}></div>
                    <div className="absolute top-3 left-3 flex gap-2">
                        {tags.map(t => <span key={t} className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{t}</span>)}
                    </div>
                </div>
                <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-normal mb-6 leading-relaxed">{desc}</p>
                    <div className="mt-auto flex gap-3">
                        {btn === "YouTube" ? (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 rounded h-10 px-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider hover:brightness-110 transition-all"
                            >
                                <span className="material-symbols-outlined text-sm">{icon}</span>
                                {btn}
                            </a>
                        ) : (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                disabled={!screenshot}
                                className="flex-1 flex items-center justify-center gap-2 rounded h-10 px-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="material-symbols-outlined text-sm">{icon}</span>
                                {btn}
                            </button>
                        )}
                        
                        <a
                            href={btn === "YouTube" ? undefined : link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 rounded h-10 px-4 bg-slate-100 dark:bg-border-dark text-slate-900 dark:text-white text-[10px] font-bold uppercase tracking-wider transition-all ${
                                btn === "YouTube" || !link ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:bg-slate-200 dark:hover:bg-slate-700"
                            }`}
                        >
                            <span className="material-symbols-outlined text-sm">code</span>
                            Source
                        </a>
                    </div>
                </div>
            </div>

            {screenshot && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title}>
                    <div className="p-6">
                        <img
                            src={screenshot}
                            alt={`${title} screenshot`}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </Modal>
            )}
        </>
    );
};

