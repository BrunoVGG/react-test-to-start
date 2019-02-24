import moment, {Moment} from 'moment';
import {User} from './User';

export class Comment {

    public id       : number;
    public message  : string;
    public date     : Moment; 
    public user     : User;  

    constructor() {
        this.id         = 0;
        this.message    = '';
        this.date       = moment();
        this.user       = new User;
    }
}
