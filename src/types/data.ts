export interface IUser {
  id: number;
  name: string;
  contacts: {
    id: number,
    name: string;
    phone: string;
  }[]
}

export interface IData {
  user: IUser | null;
  contactChosen: string | null,
  userDataRequested: boolean;
  userDataSuccess: boolean;
  userDataError: boolean;
}

export interface IDBResponse {
  
}