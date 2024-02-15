import { VectorN } from "./vectorN";

export class Vector2 extends VectorN<[number, number]> {
  get x() {
    return this.components[0];
  }
  set x(x: number) {
    this.components[0] = x;
  }

  get y() {
    return this.components[1];
  }
  set y(y: number) {
    this.components[1] = y;
  }
}
