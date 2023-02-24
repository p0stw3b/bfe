import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "../solution.css?raw";

@customElement("simple-greeting")
export class Lit extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html` <div class="outer">
      <div class="inner" />
    </div>`;
  }
}
