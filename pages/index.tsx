/* eslint-disable @next/next/no-img-element */

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
                <a href={project.url} className="btn btn-primary">Go To</a>
            </div>
        </div>
    </div>;
}

export default function HomePage() {
    const projects: Project[] = [];

    return <section className="container">
        <div className="row">
            {projects.map(project2card)}
        </div>
    </section>;
}
