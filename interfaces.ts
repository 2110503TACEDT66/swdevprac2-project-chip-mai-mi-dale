export interface ReservationItem {
    // coId: string,
    // coName: string,
    // roomId: string,
    // bookDate: string,
    // startTime: string,
    // endTime: string,
    // peopleNum: number,
    // user: string

    //not sure mak mak helpp

    bookDate: string,
    startTime: string,
    endTime: string,
    user: string,
    room: string,
    coworkingspace: string,
    people: number
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
    name: string,
    picture: string,
    address: string,
    tel: string,
    opentime: string,
    closetime: string,
    roomcount: number,
  }

  export interface Room{
    name: string,
    picture: string,
    coworking: string,
    capacity: number
  }