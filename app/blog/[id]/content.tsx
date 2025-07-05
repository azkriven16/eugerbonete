import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
    h1: (props: any) => <h1 className="text-4xl font-bold my-4" {...props} />,
    h2: (props: any) => (
        <h2 className="text-3xl font-semibold my-3" {...props} />
    ),
    h3: (props: any) => <h3 className="text-2xl font-medium my-3" {...props} />,
    p: (props: any) => <p className="my-4 leading-relaxed" {...props} />,
    a: (props: any) => (
        <a className="text-blue-500 hover:underline" {...props} />
    ),
    ul: (props: any) => <ul className="my-4 list-disc pl-8" {...props} />,
    ol: (props: any) => <ol className="my-4 list-decimal pl-8" {...props} />,
    li: (props: any) => <li className="my-1" {...props} />,
    blockquote: (props: any) => (
        <blockquote
            className="my-4 border-l-4 border-gray-300 pl-4 italic"
            {...props}
        />
    ),
    code: (props: any) => (
        <code
            className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
            {...props}
        />
    ),
    pre: (props: any) => (
        <pre
            className="my-4 overflow-x-auto bg-gray-900 text-white p-4 rounded-lg"
            {...props}
        />
    ),
    img: (props: any) => (
        <img className="my-4 max-w-full h-auto rounded-lg" {...props} />
    ),
    hr: (props: any) => <hr className="my-8 border-gray-300" {...props} />,
    table: (props: any) => (
        <table
            className="my-4 w-full border-collapse border border-gray-300"
            {...props}
        />
    ),
    th: (props: any) => (
        <th
            className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold"
            {...props}
        />
    ),
    td: (props: any) => (
        <td className="border border-gray-300 px-4 py-2" {...props} />
    ),
};

export default function Content({ children }: { children: string }) {
    return (
        <div className="prose prose-lg max-w-none">
            <MDXRemote source={children} components={components} />
        </div>
    );
}
