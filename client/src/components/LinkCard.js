import { React } from "react";

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>

      <p>
        Your link:
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Where:
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Number of clicks on a link:
        <strong>{link.clicks}</strong>
      </p>
      <p>
        Created at:
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};
