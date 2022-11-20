class AddressBookContact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    email;
    constructor(firstName,lastName,address,city,state,zipCode,phoneNumber,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zipCode=zipCode;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
}
let contact=new AddressBookContact("ishwar","rathod","telgaon","beed","MH",431131,"9140402022","ishwar@mail.com");
console.log(contact);