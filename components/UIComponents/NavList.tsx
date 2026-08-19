interface NavListProps {
  label: string;
  url: string;
  isLast: boolean;
}

function NavList({ label, url, isLast }: NavListProps) {
  let lastEleClass = "";
  if (isLast) {
    lastEleClass =
      "text-white bg-primary hover:bg-primary-shade-1 py-[1.2] px-[2.4] rounded-9";
  }
  return (
    <li
      className={`inline-block text-18 font-medium text-grey-dark ${lastEleClass}`}
    >
      <a href={`#${url}`}>{label}</a>
    </li>
  );
}

export default NavList;
