export type Hostel = {
  name: string;
  location: string;
  currency: string;
  price: number;
  imageUrl: string;
  rating?: number;
  favorite?: boolean;
};

export type HostelList = Hostel[];
