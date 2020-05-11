export class ElementHelpers {
  public static isInput(element): boolean {
    return element.tagName.toLowerCase() === 'input';
  }
}
