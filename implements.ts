interface People {
  name: string;
  age: number;
  //   greet: () => void;
}

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let user = new Manager("John", 30);
