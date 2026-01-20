import wait from "@/lib/wait";
import Link from "next/link";

export default async function Notifications() {
    await wait(3000)
    return (
        <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center gap-5">
            <span> ALL NOTIFICATIONS </span>
            <div> <Link href='/parallel-dashboard/seen' className="text-blue-500">SEEN</Link> </div>
        </div>
    );
}