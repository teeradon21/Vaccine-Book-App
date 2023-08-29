import Link from "next/link";

export default function TopMenuItem ({title, pageRef}:{title:string, pageRef:string}) {
    return (
        <Link className="w-36 flex items-center justify-center text-center px-2 font-sans text-base text-gray-500 bg-neutral-200 font-semibold" href={pageRef}>{title}</Link>
    ) 
}