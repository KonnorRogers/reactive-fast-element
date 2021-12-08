import { html, customElement } from "@microsoft/fast-element";
import { ReactiveFASTElement } from "../../";
import {
  LocalizeController,
  registerTranslation,
  Translation
} from "@shoelace-style/localize/dist";

const enTranslation: Translation = {
  $code: "en",
  $name: "English",
  $dir: "ltr",

  close: "Close"
};
const esTranslation: Translation = {
  $code: "es",
  $name: "Español",
  $dir: "ltr",

  close: "Cerrar"
};

const frTranslation: Translation = {
  $code: "fr",
  $name: "Français",
  $dir: "ltr",

  close: "Fermer"
};

registerTranslation(enTranslation);
registerTranslation(esTranslation);
registerTranslation(frTranslation);

const template = html<LocalizeElement>`
  <div>
    ${(x) => x.localize.term("close")}: ${(x) => x.localize.term("$name")}
  </div>
`;

@customElement({
  name: "shoelace-localize",
  template
})
class LocalizeElement extends ReactiveFASTElement {
  localize: LocalizeController = new LocalizeController(this);
}

const button = document.querySelector("button");

document.documentElement.lang = "en";
let count = 0;

function changeTranslation() {
  const langs = ["en", "es", "fr"];

  count++;
  if (count >= langs.length) {
    count = 0;
  }
  document.documentElement.lang = langs[count];
}
button?.addEventListener("click", changeTranslation);
