import { Person } from "../personTypes";

export function createLannisterTree(): Person {
  const cerseiKids: Person[] = [
    { name: "Joffrey", children: [] },
    { name: "Myrcella", children: [] },
    { name: "Tommen", children: [] },
  ];

  const tywinKids: Person[] = [
    { name: "Cersei", children: cerseiKids },
    { name: "Ser Jaime", children: [] },
    { name: "Tyrion", children: [] },
  ];

  const tytosKids: Person[] = [
    { name: "Tywin", children: tywinKids },
    { name: "Genna", children: [] },
    { name: "Kevan", children: [] },
    { name: "Tygett", children: [] },
    { name: "Gerion", children: [] },
  ];

  const topPerson: Person = { name: "Tytos", children: tytosKids };

  return topPerson;
}
