export interface ReservationItem {
    coId: string,
    coName: string,
    roomId: string,
    bookDate: string,
    startTime: string,
    endTime: string,
    peopleNum: number,
    user: string

    //not sure mak mak helpp
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