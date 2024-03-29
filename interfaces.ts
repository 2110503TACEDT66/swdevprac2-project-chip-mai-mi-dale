export interface ReservationItem {
  bookDate: string;
  startTime: string;
  endTime: string;
  //ObjectId
  user: string;
  //ObjectId
  room: string;
  //ObjectId
  coworkingspace: string;
  people: number;
}

export interface ReservationJson {
  success: boolean;
  count: number;
  data: ReservationItem[];
}

export interface CoworkingSpaceJson {
  success: boolean;
  count: number;

  data: CoworkingSpaceItem[];
}

export interface CoworkingSpaceItemJson {
  success: true;
  data: {
    _id: string;
    name: string;
    address: string;
    tel: string;
    closetime: string;
    opentime: string;
    roomcount: number;
    rooms: RoomCoworkingItem[];
  };
}

export interface RoomCoworkingItem {
  _id: string;
  name: string;
  capacity: number;
  id: string;
}

export interface CoworkingSpaceItem {
  id: string;
  name: string;
  picture: string;
  address: string;
  tel: string;
  opentime: string;
  closetime: string;
  roomcount: number;
}

export interface RoomJson {
  success: boolean;
  count: number;
  data: RoomItem[];
}

export interface RoomItem {
  id: string;
  name: string;
  picture: string;
  coworking: string;
  capacity: number;
}

export interface RegisterJson {
  name: string;
  tel: string;
  email: string;
  role: string;
  password: string;
}

export enum Role {
  User = "user",
  Admin = "admin",
}

export interface UserProfile {
  success: boolean;
  data: {
    _id: string;
    name: string;
    tel: string;
    email: string;
    role: Role;
    __v: number;
  };
}

export interface ReservationItemGet {
  _id: string;
  bookDate: string;
  startTime: string;
  endTime: string;
  user: {
    _id: string;
    name: string;
  };
  room: {
    _id: string;
    name: string;
    id: string;
  };
  coworkingspace: {
    _id: string;
    name: string;
    address: string;
    tel: string;
    id: string;
  };
  people: number;
  createdAt: string;
  __v: number;
}

export interface ReserveItemJson {
  success: boolean;
  count: number;
  data: ReservationItemGet;
}
