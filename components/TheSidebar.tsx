import NextLink from "next/link";

import styles from "./TheSidebar.module.css";

export interface TheSidebarProps {
    className?: string;
}

export function TheSidebar({ className }: TheSidebarProps) {


    return <nav className={`${styles.sidebar} ${className || ""} p-4`}>
        <NextLink className={`${styles.sidebarHeader} row`} href={"/"}>
            <h1>Scott Fasone</h1>
            <sub>Dashboard for CS6024 Projects</sub>
        </NextLink>
    </nav>;
}
