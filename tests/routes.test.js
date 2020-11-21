//import { getusers } from '../services/UserServices.js'
const getusers = require('../services/UserServices')
const users = require('../controllers/Users')

describe('UserServices', () => {
    
    describe("updateUsersById", () => {
        it("lskdjf", () => {
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

        it("lskdjf", () => {
            
            return expect(getusers.deleteUsersById(1)).resolves.toEqual(undefined)
        })
    })

    describe("createUsers", () => {

        it("lskdjf", () => {
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