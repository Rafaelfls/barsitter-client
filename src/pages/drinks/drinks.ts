import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { DrinksListServices } from '../../services/drinks-list/drinks-list.services';
import { Observable } from 'rxjs/Observable';
import { Drink } from '../../model/drink/drink.model';
import { RequestListServices } from '../../services/request-drinks/request-list.services';
import { AddDrinkPage } from '../add-drink/add-drink';
import { Request } from '../../model/request/drink.model';

import * as _ from 'lodash';


/**
 * Generated class for the DrinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {

  drinksList$: Observable<Drink[]>;
  drink: Drink ={
    name: '',
    descricao: '',
    nameClient: '',
    drinkImagem: '',
    drinkReady: false,
  }
  // drinkUnready = [];

  request: Request ={
    name: '',
    descricao: '',
    nameClient: '',
    drinkReady: false,
    drinkImagem: '',
  }

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private requesting: RequestListServices,  private drinking: DrinksListServices, public loadingController : LoadingController) {
    let nome = this.navParams.get('usuario');
    let loader = this.loadingController.create({content: "Getting drinks..."});
    loader.present().then(()=>{
      this.drinksList$ = this.requesting
      .getRequestList()
      .snapshotChanges()
      .map(
        changes =>{
          return changes.map(c=>({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        });
       
    });
    loader.dismiss();    
  }

  checkboxClicked(request,$event){
    console.log("antes --> "+ this.request.drinkReady);
    this.request.drinkReady = true;
    this.requesting.updateRequestList(request);
    console.log("depois --> "+ this.request.drinkReady);
  }
  
  // presentConfirm(drink:Drink, request:Request) {
  //   let alert = this.alertCtrl.create({
  //     title: drink.name,
  //     message: "drink pronto?",
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Sim',
  //         handler: () => {
  //           // console.log(drink);
  //           // this.requesting.drinkReady(drink);
  //           // this.requesting.updateRequestList(drink);
  //           // console.log(drink);
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  goToAddDrink(){
    this.navCtrl.push(AddDrinkPage);
  }


  // filtrarItems(ready) {

  //   this.drinksList$ = this.drinking
  //     .getDrinkList()
  //     .snapshotChanges()
  //     .map(changes => {
  //       return changes.map(x => ({
  //         key: x.payload.key, ...x.payload.val()
  //       })
  //       );
  //     });


  //   var q = ready.srcElement.value;
  //   if (!q) {
  //     return;
  //   }

  //   this.drinkUnready = _.chain(this.drinksList$).filter(v => v.drinkReady ==this.request.drinkReady).value();


  // }

}



