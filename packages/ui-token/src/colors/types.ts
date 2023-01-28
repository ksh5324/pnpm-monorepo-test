const colors = ["gray", "black", "green", "white"] as const;
type Colors = typeof colors;

export type TokenKinds<
  T extends string,
  U extends any[] = [100, 200, 300, 400, 500, 600, 700, 800, 900]
> = MyRecord<`${T}${U[number]}`, string>;

type MyRecord<K extends keyof any, T> = {
  readonly [P in K]?: T;
};

type AllOfKindsToken<T extends readonly any[], U = {}> = T extends readonly [
  infer Current,
  ...infer Rest
]
  ? Current extends T[number]
    ? AllOfKindsToken<Rest, U & TokenKinds<Current>>
    : never
  : U;

export type AllOfColorToken = AllOfKindsToken<Colors>;
