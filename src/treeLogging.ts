import { Person } from "./personTypes";

// function logAllPeopleInTree(rootPerson)
//     workStack = empty stack of Person objects
//     push rootPerson onto workStack

// 		while workStack is not empty:
//         currentPerson = pop person off workStack
//         log the name property of currentPerson
//         push each element of currentPerson's children onto the workStack

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
