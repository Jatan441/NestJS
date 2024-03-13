import { IsEmail, IsEnum, IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {

  @IsNotEmpty ()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN' , 'ENGINEER' , 'INTERN'], {message : "Valid role required"})
  role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}
