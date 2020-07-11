export class Thing_1<T> {
  prop:T;
  constructor(x : T) {
    this.prop = x
  }
}

export class Thing_2<T> {
  prop:T;
  constructor(x : T) {
    this.prop = x
  }
}

export class Other {}

export class Thing<T> {
  constructor(value: T, typeArg) {
    if (typeArg instanceof Other) {
      return new Thing_1(value)
    } else {
      return new Thing_2(value)
    }
  }
}

export var ThingType: new <T>(value: any, typeArg: T) => T extends Other ? Thing_1<T> : Thing_2<T>;
