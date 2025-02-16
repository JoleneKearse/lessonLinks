import { IsString, Length } from "class-validator";

export class CreateSubjectDto {
  @IsString()
  @Length(3, 100)
  name: string;
}