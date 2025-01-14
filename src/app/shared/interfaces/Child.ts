import {Kindergarden} from "./Kindergarden";

export interface Child {
  id: string;
  name: string;
  birthDate: string,
  kindergardenId: number,
  registerDate: string,
}


export interface ChildResponse {
  id: string;
  name: string;
  birthDate: string,
  registerDate: string,
  kindergarden: Kindergarden,
  kindergardenId: number,
  isLoading: boolean,
}
