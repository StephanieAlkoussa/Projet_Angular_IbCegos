import { Employe } from "./employe.model"


export const EMPLOYE:Employe [] =
    [{ 
      "id": 1, 
      "level": 3, 
      "seniority": 8,
      "name": "Dupont",
      "picture": "assets/photos/user01.png",
      "roles": [ "architect"],
      "birthDate": new Date("1984-05-16")
      },
      
      { "id": 2, 
      "level": 2,
       "seniority": 3,
      "name": "Rodriguez",
      "picture": "assets/photos/user02.png", 
      "roles": [ "lead dev"],
      "birthDate": new Date("1999-12-12")
      }, 
      
      { "id": 3, 
      "level": 0, 
      "seniority": 1,
      "name": "Snow",
      "picture": "assets/photos/user03.png", 
      "roles": [ "lead dev"],
      "birthDate": new Date("2000-10-12")
      }
    ]