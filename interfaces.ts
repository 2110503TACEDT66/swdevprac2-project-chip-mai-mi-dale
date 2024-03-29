export interface ReservationItem {
    bookDate: string,
    startTime: string,
    endTime: string,
    //ObjectId
    user: string,
    //ObjectId
    room: string,
    //ObjectId
    coworkingspace: string,
    people: number
}

  export interface ReservationJson {
    success: boolean,
    count: number,
    data: ReservationItem[]
  }

  export interface CoworkingSpaceJson {
    success: boolean,
    count: number,
    data: CoworkingSpaceItem[]
  }

  export interface CoworkingSpaceItem {
    id:string,
    name: string,
    picture: string,
    address: string,
    tel: string,
    opentime: string,
    closetime: string,
    roomcount: number,
  }
  
  export interface RoomJson {
    success: boolean,
    count: number,
    data: RoomItem[]
  }

  export interface RoomItem{
    id:string,
    name: string,
    picture: string,
    coworking: string,
    capacity: number
  }

export interface RegisterJson {
    name: string,
    tel: string,
    email: string,
    role: string,
    password: string
  }
  
  export enum Role {
    User = 'user',
    Admin = 'admin'
  }
  
  export interface UserProfile {
    success: boolean,
    data: {
      _id: string,
      name: string,
      tel: string,
      email: string,
      role: Role,
      __v: number,
    }
  }

  export interface ReservationItemGet {
    bookDate: string;
    startTime: string;
    endTime: string;
    user: {
        name: string;
        _id: string;
    };
    room: {
        id:string;
        name: string;
        _id: string;
    };
    coworkingspace: {
        id:string;
        name: string;
        address: string;
        tel: string;
        _id: string;
    };
    people: number;
    createdAt: Date;
}

  