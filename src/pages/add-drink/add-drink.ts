import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Drink } from '../../model/drink/drink.model';
import { DrinksPage } from '../drinks/drinks';


import { DrinksListServices } from '../../services/drinks-list/drinks-list.services';

/**
 * Generated class for the AddDrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-drink',
  templateUrl: 'add-drink.html',
})
export class AddDrinkPage {

  drink: Drink = {
    name: '',
    descricao:'',
    nameClient:'',
    drinkImagem:'',
    drinkReady: false,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private drinking: DrinksListServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDrinkPage');
  }

  addDrink(drink:Drink){
    this.drinking.addDrink(drink)
    .then(ref=>{
      this.navCtrl.setRoot(DrinksPage)
    });
  }



}
