export class ElementData {
  tagName: string;
  attributes: AttributeMap = {};
}

type AttributeMap = { [k: string]: string }