export interface IUserContacts {
  id: string,
  name: string;
  phone: string;
}

export interface IUser {
  id: string;
  name: string;
  contacts: IUserContacts[];
}

export interface IData {
  user: IUser | null;
  contactChosen: string | null,
  userDataRequested: boolean;
  userDataSuccess: boolean;
  userDataError: boolean;
}