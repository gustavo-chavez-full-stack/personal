import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

export const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Layout className="mx-auto flex w-full max-w-[1280px] flex-col px-6 py-10 lg:px-10">
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-8 py-12">
                {/* Animated 404 */}
                <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>

                    <h1 className="relative text-[120px] md:text-[200px] font-black leading-none tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-primary/40">
                            404
                        </span>
                    </h1>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-4 max-w-[600px]">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Página no encontrada
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                        Verifica la URL o regresa al inicio para encontrar lo que necesitas.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button
                        onClick={() => navigate("/")}
                        className="flex min-w-[160px] items-center justify-center gap-2 rounded bg-primary px-8 py-4 text-base font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                        <span className="material-symbols-outlined">home</span>
                        Volver al Inicio
                    </button>
                    <button
                        onClick={() => navigate("/projects")}
                        className="flex min-w-[160px] items-center justify-center gap-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent px-8 py-4 text-base font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                        <span className="material-symbols-outlined">folder_open</span>
                        Ver Proyectos
                    </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-150"></div>
            </div>
        </Layout>
    );
};
