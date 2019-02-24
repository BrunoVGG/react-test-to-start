export class User {

    public id           : number;
    public name         : string;
    public email        : string; 
    public avatar       : string;  

    constructor(user: User) {
        this.id         = 0;
        this.name       = user.name;
        this.email      = user.email;
        this.avatar     = user.avatar;
    }
}
