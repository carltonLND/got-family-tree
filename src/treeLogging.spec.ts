import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./treeLogging";
import { createBaratheonTree } from "./families/baratheon";

test("stack works in FILO order", () => {
  const topPerson = createBaratheonTree();

  const expected = [
    "Rhaelle",
    "Steffon",
    "Renly",
    "Stannis",
    "Robert",
    "Bella",
    "Barra",
    "Gendry",
    "Mya",
    "Edric",
  ];

  expect(logAllPeopleInTree(topPerson)).toEqual(expected);
  expect(logAllPeopleInTree(topPerson).length).toBe(10);
});

test("queue works in FIFO order", () => {
  const topPerson = createBaratheonTree();

  const expected = [
    "Rhaelle",
    "Steffon",
    "Robert",
    "Stannis",
    "Renly",
    "Edric",
    "Mya",
    "Gendry",
    "Barra",
    "Bella",
  ];

  expect(logAllPeopleInTreeWithQueue(topPerson)).toEqual(expected);
  expect(logAllPeopleInTreeWithQueue(topPerson).length).toBe(10);
});
