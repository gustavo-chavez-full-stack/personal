import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
    className?: string; // for the main element
}

export const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
    return (
        <div className="flex min-h-screen flex-col align-top">
            <Navigation />
            <main className={`flex-1 ${className}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};
