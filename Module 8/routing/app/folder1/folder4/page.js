import Link from "next/link";

export default function Folder4() {
    return (
        <div className="p-20 flex flex-col gap-10">
            <h1 className="text-2xl">Folder 4</h1>

            <Link href='/folder1/folder3' className="text-blue-500"> Folder 3 </Link>

            <Link href='/contact' className="text-green-500"> Contact </Link>
        </div>
    )
}
