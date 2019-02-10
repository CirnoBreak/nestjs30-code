import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
  readonly ID: number;

  @ApiModelProperty()
  readonly Name: string;

  @ApiModelProperty()
  readonly Age: number;
}