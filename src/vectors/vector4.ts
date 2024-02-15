import { VectorN } from "./vectorN";

export class Vector4 extends VectorN<[number, number, number, number]> {
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

  get z() {
    return this.components[2];
  }
  set z(z: number) {
    this.components[2] = z;
  }

  get w() {
    return this.components[3];
  }
  set w(w: number) {
    this.components[3] = w;
  }
}
