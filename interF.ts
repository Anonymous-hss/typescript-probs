interface People {
  name: string;
  age: number;
  greet: () => string;
}

let person: People = {
  name: "John",
  age: 30,
  greet() {
    return "Hello";
  },
};

const greeting = person.greet();

console.log(greeting);
