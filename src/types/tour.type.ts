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
  createdAt: string;
  updatedAt: string;
}

export interface IResponseTourTypeData {
  data: TourTypeData[];
  meta: Meta;
}
