// Intersection types allow you to combine multiple types into one. This means that the resulting type will hace all the properties of in the intersected types.

// // Example:
// Combining Multiple Interfaces or Types:

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  departement: string;
}

type PersonEmployee = Person & Employee;

const john: PersonEmployee = {
  name: 'John Doe',
  age: 30,
  employeeId: 123,
  departement: 'Engineering',
};

// 2. Reusability
// by using intersection Types, you can build reusable and composable components or types. This encourages code reuse and reduces duplication.

interface Address {
  street: string;
  city: string;
  country: string;
}

interface ContactDetails {
  phone: string;
  email: string;
}

type FullContact = Address & ContactDetails;

const contract: FullContact = {
  street: '123 Main St',
  city: 'Anytown',
  country: 'USA',
  phone: '123-456-789',
  email: 'example@example.com',
};

// Type Ssafety
function printEmployeeDetails(employee: Person & Employee) {
  console.log(`Name: ${employee.name}`);
  console.log(`Age: ${employee.age}`);
  console.log(`Departement: ${employee.employeeId}`);
  console.log(`Departement: ${employee.departement}`);
}

const doe: Person & Employee = {
  name: 'John Doe',
  age: 35,
  employeeId: 5878,
  departement: 'HR',
};

printEmployeeDetails(doe);

interface UserDetails {
  username: string;
  email: string;
}

interface Permission {
  isAdmin: boolean;
  canEdit: boolean;
}

interface Setting {
  theme: string;
  notificationsEnabled: boolean;
}

type UserProfile = UserDetails & Permission & Setting;

const user: UserProfile = {
  username: 'malika',
  email: 'malika@email.com',
  isAdmin: true,
  canEdit: true,
  theme: 'dark',
  notificationsEnabled: true,
};

function printUserDetails(userDetail: UserProfile) {
  console.log(`Username: ${userDetail.username}`);
  console.log(`Email ${userDetail.email}`);
  console.log(`isAdmin: ${userDetail.isAdmin}`);
  console.log(`canEdit: ${userDetail.canEdit}`);
  console.log(`theme: ${userDetail.theme}`);
  console.log(`Notification: ${userDetail.notificationsEnabled}`);
}

printUserDetails(user);
