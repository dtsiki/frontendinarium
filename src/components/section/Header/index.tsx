import { ReactElement, ReactNode } from 'react';

interface IHeaderProps {
  title: ReactNode;
  description: ReactNode;
}

export const Header = ({
  title,
  description
}: IHeaderProps): ReactElement => {
  return (
    <div className="block mb-6">
      <h1 className="title is-1 mb-4">{title}</h1>
      <p className="mb-4">{description}</p>
    </div>
  );
};
