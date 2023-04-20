/* eslint-disable @next/next/no-img-element */
import NextLink from "next/link";

import CritiqueOriginal from "../assets/critique_original.png";

export interface Project {
    name: string;
    description: string;
    image_url?: string;
    url: string;
}

function project2card(project: Project) {
    return <div className="col-6" key={project.name}>
        <div className="card">
            { project.image_url && <img src={project.image_url} className="card-img-top" alt="..."/> }
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <NextLink href={project.url} className="btn btn-primary">Go To</NextLink>
            </div>
        </div>
    </div>;
}

export default function HomePage() {
    const projects: Project[] = [
        {
            name: "Data Visualization Critique",
            description: "Critique of the CO2 Emission interactive data visualization from Our World in Data",
            image_url: CritiqueOriginal.src,
            url: "/critique"
        }
    ];

    return <section className="row">
        {projects.map(project2card)}
    </section>;
}
