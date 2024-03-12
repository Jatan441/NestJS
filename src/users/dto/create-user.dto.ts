export class CreateUserDto {
    name :string;
    email : string;
    role : "ADMIN" | "ENGINEER" | "INTERN";
}

// update the CreateUserDto to ensure the correct casing for "ENGINEER"
// export class CreateUserDto {
//     name: string;
//     email: string;
//     role: "ADMIN" | "INTERN" | "ENGINEER";
//   }
  