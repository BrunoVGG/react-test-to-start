import moment, {Moment} from 'moment';
import {User} from './User';

export class Comment {

    public id           : number;
    public message      : string;
    public date         : Moment; 
    public user         : User;  

    constructor(message: string, user: User) {
        this.id         = 0;
        this.message    = message;
        this.date       = moment();
        this.user       = user;
    }
}
