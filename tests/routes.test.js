//import { getusers } from '../services/UserServices.js'
const getusers = require('../services/UserServices')


describe('UserServices', () => {
    
    describe("updateUsersById", () => {
        it("check updateUserById from api", () => {
            const expectedResult = {
                "address": {
                    "zip": "zip",
                    "country": "country",
                    "city": "city",
                    "street": "street",
                    "id": 6,
                    "state": "state"
                },
                "name": "name",
                "id": 0,
                "birthDate": "birthDate",
                "email": "email"
            }
          return  expect(getusers.updateUsersById(1)).resolves.toEqual(expectedResult)
        })
    })



    describe("deleteUsersById", () => {

        it("chet deleteUsersById from api", () => {
            
            return expect(getusers.deleteUsersById(1)).resolves.toEqual('user deleted')
        })
    })

    describe("createUsers", () => {

        it("check createUsers from api", () => {
            const expectedValue = {
                "address": {
                    "zip": "zip",
                    "country": "country",
                    "city": "city",
                    "street": "street",
                    "id": 6,
                    "state": "state"
                },
                "name": "name",
                "id": 0,
                "birthDate": "birthDate",
                "email": "email"
            };

            return (

                expect(getusers.createUsers({ "name": "Jonny" })).resolves.toEqual({ "name": "Jonny" })
               
            )
        })
    })

    


})