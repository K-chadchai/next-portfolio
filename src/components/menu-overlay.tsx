import NavLink, { DataPropNavLink } from "./nav-link";

const MenuOverlay = ({ props: links }: DataPropNavLink) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((v, index) => {
        return (
          <li key={index}>
            <NavLink href={v.href} title={v.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
