import { assert } from 'chai';
import { IComponent } from "../interface/IComponent";
import { ExampleComponent } from "../components/ExampleComponent";

describe("Example component", () => {
  describe("example operation", () => {
    it("should return a string", async () => {

      const exampleComponent: IComponent = new ExampleComponent();
      assert.equal(await exampleComponent.exampleOperation(), "Je suis un chevreuil.");

    });
  });
});