export interface IUsers {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number;
      geo: {
        lat: number;
        lng: number;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

export interface IProviderProps {
  children?: React.ReactNode;
}

export interface AppGlobalProps {
  users: IUsers[] | [];
  setUsers: (arg: IUsers[] | []) => void;
}
