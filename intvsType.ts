interface Admin {
  name: string;
  permissions: string;
}

interface User {
  name: string;
  age: number;
}

type UserOrAdim = User | Admin;
