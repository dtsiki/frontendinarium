import { ReactElement } from 'react';

export const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Фронтендинариум</strong> by <a href="https://dtsiki.github.io/">@dtsiki</a>
        </p>
      </div>
    </footer>
  );
};
