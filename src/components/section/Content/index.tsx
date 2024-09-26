import { ReactElement, ReactNode, useMemo } from 'react';

type TContentItem = {
  label: string;
  content: ReactNode;
}

interface IContentProps {
  items: TContentItem[];
}

export const Content = ({
  items
}: IContentProps): ReactElement => {
  const renderContent = useMemo(() => {
    const emptyContentPlaceholder = (
      <i>В этой секции пока что ничего нет, но скоро здесь что-то будет</i>
    );

    return items.map((item) => {
      const { label, content } = item;

      return (
        <article key={`${label}_content`} className="block mb-6" style={{ opacity: content ? 1 : 0.4 }}>
            <h2 className="subtitle is-3 mb-2">{label}</h2>
            {content || emptyContentPlaceholder}
        </article>
      );
    })
  }, [items]);

  return (
    <div>{renderContent}</div>
  );
};
