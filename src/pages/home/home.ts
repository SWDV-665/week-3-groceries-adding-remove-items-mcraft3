import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2 
  },
  {
    name: "Bread",
    quantity: 1 
  },    
  {
    name: "Banana",
    quantity: 3 
  },
  {
    name: "Sugar",
    quantity: 1 
  },
];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
    ) {

  }

  removeItem(item, index) {
    console.log("Removing item - ", item, "index: ", index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + 'index: ' + index + " ...",
      duration: 3000,
      position: 'bottom',
      showCloseButton: true,
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

    this.items.splice(index, 1);
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data  => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
      });
      prompt.present();
    }

}