import { IsString, IsInt } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  readonly _name: string;

  @IsInt()
  readonly _age: number;
  
  @IsInt()
  readonly _id: number;
}