import { ReactElement, useMemo } from 'react';
import Link from 'next/link';


export const Menu = (): ReactElement => {
  const pages = useMemo(() => [
    {
      path: '/',
      label: 'Главная'
    },
    {
      path: 'javascript',
      label: 'JavaScript'
    },
    {
      path: 'about',
      label: 'О проекте'
    },
  ], []);

  const renderMenuList = useMemo(() => {
    return pages.map((page) => {
      const { path, label } = page;

      return (
        <li
          key={label} className="navbar-item">
          <Link href={path}>{label}</Link>
        </li>
      );
    })
  }, [pages]);


  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <ul className="navbar-menu">
          {renderMenuList}
        </ul>
      </nav>
    </header>
  );
};
