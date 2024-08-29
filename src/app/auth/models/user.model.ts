import { IUser } from "../intefaces/user.interface"

export class User implements IUser {
  name!: string
  age!: number
  email!: string
  password!: string
}
