// import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  // @ApiModelProperty()
  readonly _id: number;

  // @ApiModelProperty()
  readonly Name: string;

  // @ApiModelProperty()
  readonly Age: number;
}