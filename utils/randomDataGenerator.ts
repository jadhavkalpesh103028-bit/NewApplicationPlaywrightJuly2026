import{faker}from '@faker-js/faker';
export class RandomDataUtil{
    static getfirstname(){
        return faker.person.firstName();
    }
    static getlastname(){
        return faker.person.lastName();

    }
static getEmail(){
        return faker.internet.email();
        
    }
static getTelephone(){
        return faker.phone.number();
        
    }
static getPassword(){
        return faker.phone.number();
        
}

}