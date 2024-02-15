export class VectorN<Components extends number[]> {
  constructor(public components: Components) {}

  clone() {
    return new VectorN([...this.components]);
  }

  magnitude() {
    return Math.sqrt(
      this.components.reduce(
        (accumulator, component) => accumulator + component ** 2
      )
    );
  }

  add(...vectors: VectorN<Components>[]) {
    vectors.forEach((vector) => {
      this.assertDimensionEquality(vector);
      vector.components.forEach((component, index) => {
        this.components[index] += component;
      });
    });
    return this;
  }
  subtract(...vectors: VectorN<Components>[]) {
    vectors.forEach((vector) => {
      this.assertDimensionEquality(vector);
      vector.components.forEach((component, index) => {
        this.components[index] -= component;
      });
    });
    return this;
  }
  multiply(...vectors: VectorN<Components>[]) {
    vectors.forEach((vector) => {
      this.assertDimensionEquality(vector);
      vector.components.forEach((component, index) => {
        this.components[index] *= component;
      });
    });
    return this;
  }
  divide(...vectors: VectorN<Components>[]) {
    vectors.forEach((vector) => {
      this.assertDimensionEquality(vector);
      vector.components.forEach((component, index) => {
        this.components[index] /= component;
      });
    });
    return this;
  }

  addScalar(scalar: number) {
    this.components.forEach((component) => {
      component += scalar;
    });
    return this;
  }
  subtractScalar(scalar: number) {
    this.components.forEach((component) => {
      component -= scalar;
    });
    return this;
  }
  multiplyScalar(scalar: number) {
    this.components.forEach((component) => {
      component *= scalar;
    });
    return this;
  }
  divideScalar(scalar: number) {
    this.components.forEach((component) => {
      component /= scalar;
    });
    return this;
  }

  dot(vector: VectorN<Components>) {
    this.assertDimensionEquality(vector);
    return this.components.reduce((accumulator, component, index) => {
      return accumulator + component * vector.components[index];
    });
  }
  cross(vector: VectorN<Components>) {
    this.assert3Dimensions();
    this.assertDimensionEquality(vector);
    this.components = [
      this.components[1] * vector.components[2] -
        vector.components[1] * this.components[2],
      this.components[2] * vector.components[0] -
        vector.components[2] * this.components[0],
      this.components[0] * vector.components[1] -
        vector.components[0] * this.components[1],
    ] as Components;
  }
  normalize() {
    this.divideScalar(this.magnitude());
  }

  compareDimension(vector: VectorN<number[]>): boolean {
    return vector.components.length === this.components.length;
  }
  private assertDimensionEquality(vector: VectorN<number[]>): void {
    if (!this.compareDimension(vector)) {
      throw new Error(
        `Vectors must have same dimensions. Expected ${this.components.length}, got ${vector.components.length}`
      );
    }
  }
  private assert3Dimensions(): void {
    if (this.components.length !== 3) {
      throw new Error(
        `Vectors must have 3 dimensions. Expected 3, got ${this.components.length}`
      );
    }
  }
}
