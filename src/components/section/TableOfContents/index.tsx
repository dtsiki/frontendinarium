import Link from 'next/link';
import { ReactElement, ReactNode, useMemo } from 'react';

type TTableOfContentItem = {
  label: string;
  link: string;
  content: ReactNode;
}

interface ITableOfContentsProps {
  title?: string;
  items: TTableOfContentItem[];
}

export const TableOfContents = ({
  title,
  items
}: ITableOfContentsProps): ReactElement => {
  const renderItems = useMemo(() => {
    return items.map((item) => {
      const { label, link } = item;

      return (
        <li key={label}>
          <Link href={`#${link}`}>{label}</Link>
        </li>
      )
    })
  }, [items]);

  return (
    <div className="block mb-6">
        <aside className="menu">
            <p className="subtitle is-4 mb-2">{title || "Оглавление"}</p>
            <ul className="menu-list">
              {renderItems}
            </ul>
        </aside>
    </div>
  );
};
