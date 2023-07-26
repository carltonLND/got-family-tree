import { Person } from "./personTypes";

export function logAllPeopleInTree(topPerson: Person): string[] {
  const nameArray: string[] = [];

  const workStack: Person[] = [];
  workStack.push(topPerson);

  while (workStack.length !== 0) {
    const currentPerson = workStack.pop() as Person;
    nameArray.push(currentPerson.name);
    workStack.push(...currentPerson.children);
  }

  return nameArray;
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  const nameArray: string[] = [];

  const workQueue: Person[] = [];
  workQueue.push(topPerson);

  while (workQueue.length !== 0) {
    const currentPerson = workQueue.shift() as Person;
    nameArray.push(currentPerson.name);
    workQueue.push(...currentPerson.children);
  }

  return nameArray;
}

export function inTree(targetName: string, topOfTree: Person): boolean {
  const workStack: Person[] = [];
  workStack.push(topOfTree);

  while (workStack.length !== 0) {
    const currentPerson = workStack.pop() as Person;
    if (currentPerson.name === targetName) {
      return true;
    }

    workStack.push(...currentPerson.children);
  }

  return false;
}
