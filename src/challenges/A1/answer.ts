/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 *
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ students }: { students: Student[] }): Student[] {
  const sortByAge = (a: Student, b: Student): number => {
    if (a.age !== b.age) {
      return a.age - b.age;
    } else {
      return a.name.localeCompare(b.name);
    }
    // if (a.age > b.age) {
    //   return 1;
    // } else if (a.age < b.age) {
    //   return -1;
    // } else {
    //   if (a.name > b.name) {
    //     return 1;
    //   } else if (a.name < b.name) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // }
  };
  return students.sort(sortByAge);
}

// used interfaces, do not touch
export interface Student {
  name: string;
  age: number;
  skills: string[];
}
