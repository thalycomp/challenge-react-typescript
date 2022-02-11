export interface IUsers {
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
}

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IProviderProps {
  children?: React.ReactNode;
}

export interface AppGlobalProps {
  users: IUsers[] | [];
  posts: IPosts[] | [];
  getPosts: (userId: number) => void;
}
