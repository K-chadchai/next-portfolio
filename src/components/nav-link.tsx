import Link from "next/link";

export interface DataPropNavLink {
  props: PropNavLink[];
}

export interface PropNavLink {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: PropNavLink) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
