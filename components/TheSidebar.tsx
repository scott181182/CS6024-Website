

export interface TheSidebarProps {
    className?: string;
}

export function TheSidebar({ className }: TheSidebarProps) {


    return <nav className={className}>
        <div className="row">
            <h1>Scott Fasone</h1>
            <sub>Dashboard for CS6024 Projects</sub>
        </div>
    </nav>;
}
