import {Injectable} from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Drink } from "../../model/drink/drink.model";
import { Request } from "../../model/request/drink.model"

@Injectable()
export class RequestListServices{
    private requestListRef = this.db.list<Drink>('request-list');
    
    constructor(private db:AngularFireDatabase){}

    getRequestList(){
        return this.requestListRef;
    }
    
    requestDrink(drink:Drink){
        return this.requestListRef.push(drink);
    }
    
    drinkReady(request:Request){
        return request.drinkReady=true;
    }

    updateRequestList(request:Request){
        return this.requestListRef.update(request.key , request);
    }

    
}