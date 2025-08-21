//tour type related interface
export interface ITourTypeData {
  name: string;
}

export interface ITourTypeResponse {
  name: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
export interface Meta {
  total: number;
}

export interface TourTypeData {
  _id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IResponseTourTypeData {
  data: TourTypeData[];
  meta: Meta;
}

//tour related interface
export interface ITourData {
  title: string;
  description: string;
  images: string[];
  location: string;
  costFrom: number;
  departureLocation: string;
  arrivalLocation: string;
  included: string[];
  excluded: string[];
  amenities: string[];
  tourPlan: string[];
  maxGuest: number;
  minAge: number;
  division: string;
  tourType: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}
