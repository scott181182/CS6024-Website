import { NextPage } from "next";
import NextImage from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

import md from "../../docs/critique.md";



function string2kebab(str: string) {
    return str.toLowerCase().trim().replaceAll(/\s+/g, "-");
}

const CritiquePage: NextPage = () => {
    return <section className="row">
        <ReactMarkdown
            className="col-12"
            rehypePlugins={[ rehypeRaw ]}
            remarkPlugins={[
                remarkGfm,
                [remarkToc, {
                    tight: true,
                    ordered: true,
                    prefix: "toc-h-"
                }]
            ]}
            components={{
                h1: ({ children }) => <h1 id={string2kebab(`toc h ${children}`)}>{children}</h1>,
                h2: ({ children }) => <h2 id={string2kebab(`toc h ${children}`)}>{children}</h2>,
                h3: ({ children }) => <h3 id={string2kebab(`toc h ${children}`)}>{children}</h3>,
                h4: ({ children }) => <h4 id={string2kebab(`toc h ${children}`)}>{children}</h4>,
                h5: ({ children }) => <h5 id={string2kebab(`toc h ${children}`)}>{children}</h5>,
                h6: ({ children }) => <h6 id={string2kebab(`toc h ${children}`)}>{children}</h6>
            }}
        >
            {md}
        </ReactMarkdown>
    </section>;
};

export default CritiquePage;
