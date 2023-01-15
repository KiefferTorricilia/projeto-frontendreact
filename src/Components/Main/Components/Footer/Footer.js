import React from "react";
import { StyleFooter, StyleAncora } from "./styled";

export function Footer() {
  return (
    <footer>
      <StyleFooter>
        <p>Criado por: Arthur Prado</p>
        <p>
          LinkedIn:
          <StyleAncora
            href="https://www.linkedin.com/in/arthur-matheus-prado-b74aa8181/"
            target="_blank"
          >
            Arthur Prado
          </StyleAncora>
        </p>
        <p>
          GitHub:
          <StyleAncora href="https://github.com/TioArthurPrado" target="_blank">
            Arthur Prado
          </StyleAncora>
        </p>
      </StyleFooter>
    </footer>
  );
}
