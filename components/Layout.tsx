import { ReactNode } from "react";

import { TheSidebar } from "./TheSidebar";



export interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return <div className="container-fluid vh-100 vw-100">
        <div className="row h-100 w-100">
            <TheSidebar className="col-3 h-100 shadow-lg"/>
            <div className="col-9 pt-4">
                <main className="container">
                    {children}
                </main>
            </div>
        </div>
    </div>;
}
