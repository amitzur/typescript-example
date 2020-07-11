# typescript-example

This is an example for an issue I'm having with typescript.

## The goal

To export **from a `.d.ts` file** a type (`ThingType` in this example), which can imitate the functionality of `Thing`: if `typeArg` is an instance of `Other` then the return type is a `Thing_1` instance, otherwise it's a `Thing_2` instance.

## The problem

Run `npm run build` to see the compilation error:

```sh
index.ts:5:3 - error TS2322: Type 'Thing<string>' is not assignable to type 'new <T>(value: any, typeArg: T) => T extends Other ? Thing_1<T> : Thing_2<T>'.
  Type 'Thing<string>' provides no match for the signature 'new <T>(value: any, typeArg: T): T extends Other ? Thing_1<T> : Thing_2<T>'.
```
