import { Person } from "./personTypes";

export function logAllPeopleInTree(topPerson: Person): void {
  const workStack: Person[] = [];
  workStack.push(topPerson);

  while (workStack.length !== 0) {
    const currentPerson = workStack.pop() as Person;
    console.log(currentPerson.name);
    workStack.push(...currentPerson.children);
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  console.log("TODO!  First person is " + topPerson.name);
}
