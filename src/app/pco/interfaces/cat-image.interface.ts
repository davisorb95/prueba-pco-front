import { IBreed } from "./breed.interface"

export interface ICatImage {
  id: string
  url: string
  breeds: IBreed[]
  width: number
  height: number
}