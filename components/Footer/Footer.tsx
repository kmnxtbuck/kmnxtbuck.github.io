import { garamond } from '@/lib/fonts';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    const text = "text-sm md:text-base lg:text-xl text-stroke opacity z-75 text-slate-300";
    const padding = "p-4 md:p-6 lg:p-8";
    const margin = "m-4 md:m-6 lg:m-8";
    const size="w-1/4 h-1/4";
    const socialsSize="size-3 md:size-5 lg:size-7";
    const socialsEffect="hover:text-amber-400";

    return (
        <div className="flex flex-row justify-evenly">
            <div className={`${text} ${padding} ${garamond.className} ${margin} ${size}`}>©2025</div>
            <Link href="/privacy-policy" className={`${text} ${padding} ${garamond.className} ${margin} ${size} hover:underline`}>Privacy</Link>
            <Link href="/terms-of-service" className={`${text} ${padding} ${garamond.className} ${margin} ${size} hover:underline`}>Terms of Service</Link>
            <div className={`text-slate-300 ${padding} ${margin} ${size} flex flex-row justify-evenly`}>
                <BsFacebook className={`${socialsSize} ${socialsEffect}`} />
                <FaInstagram className={`${socialsSize} ${socialsEffect}`} />
                <FaLinkedin className={`${socialsSize} ${socialsEffect}`} />
            </div>
        </div>
    )
}