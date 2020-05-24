
/**
 * Typescript 高级类型
 * 联合类型、Pick 和 Patital
 */

interface User {
  nickname: string;
  age: number;
  gender: string;
  avater: string;
};

type PartialUser = Partial<User>;
// type KeyofUser = keyof User; // union Types

type MyPick<T, Keys extends keyof T> = {
  [P in Keys] : T[P]
};

type UserAgeGender = MyPick(User, 'age' | 'gender');

type MyPartial<T> = {
  [P in keyof T]?: T[P] | undefined
};

function updateUser(dto: PartialUser) {
  if (dto.nickname) {}
}


