export interface ITour {
  name: string;
  description: string;
  location: string;
  price: number;
}

export interface ITourClient extends ITour {
  status: boolean;
}
