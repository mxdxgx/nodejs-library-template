import { IComponent } from "../interface/IComponent";

export class ExampleComponent implements IComponent {
  public async exampleOperation(): Promise<string> {
    return "Je suis un chevreuil.";
  }
}