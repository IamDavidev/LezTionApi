import { type Alias } from '../interface/Alias.type.ts';
import { type Status } from '../interface/Status.enum.ts';

export class UserModel {
  constructor(
    public readonly uuid: string,
    public name: string,
    public email: string,
    public profilePicture: string,
    public password: string,
    public status: Status,
    public alias: Alias,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}

  public static create(
    uuid: string,
    name: string,
    email: string,
    profilePicture: string,
    password: string,
    status: Status,
    alias: Alias,
    createdAt: Date,
    updatedAt: Date
  ) {
    return new UserModel(
      uuid,
      name,
      email,
      profilePicture,
      password,
      status,
      alias,
      createdAt,
      updatedAt
    );
  }
}
