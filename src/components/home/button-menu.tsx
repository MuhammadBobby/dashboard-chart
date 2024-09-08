import Link from "next/link";

export default function ButtonMenu({ children, href, bgColor }: { children: React.ReactNode; href: string; bgColor: string }) {
  return (
    <Link href={href} className={`text-white px-4 py-2 rounded-lg shadow-xl ${bgColor} hover:bg-opacity-90`}>
      {children}
    </Link>
  );
}
