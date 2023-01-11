import { ReactNode } from "react";

import { TheSidebar } from "./TheSidebar";



export interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return <div className="container-fluid vh-100 vw-100">
        <div className="row h-100 w-100">
            <TheSidebar className="col-3 h-100 bg-secondary-subtle"/>
            <div className="col-9">
                <section className="container">
                    {children}
                </section>
            </div>
        </div>
    </div>;
}
