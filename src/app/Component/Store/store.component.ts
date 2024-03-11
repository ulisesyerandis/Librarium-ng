import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from 'app/Models/Store';
import { StoreService } from 'app/Services/StoreServices/store.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: 
  [
    CommonModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export default class StoreComponent implements OnInit 
{
  
  //  for the CRUD methods values
  storeList: Store[] = [];
  storeToShow: Store | undefined;
  storeDeleted: Store | undefined;
  storeCreated: Store | undefined;
  storeUpdated: Store | undefined;

  public constructor(private storeServices: StoreService)
  { }

  ngOnInit(): void 
  {
    // this.getAllStores();
    // this.showStore('1')

    // const store: Store ={
    //   id: 0,
    //   name: 'virtual read',
    // }

    // this.createStore(store);
    // this.updateStore(store, '5');
    // this.deleteStore('4');
  }

  public getAllStores()
  {
    this.storeServices.getAllStore().subscribe({
      next: (response: any) => {
        this.storeList = response;
        let id: string = '';
        let name: string = '';

        for (let i = 0; i < this.storeList.length; i++)
        {
          id = this.storeList[i].id + '';
          name = this.storeList[i].name;
          console.log('id: ' + id + ' name: ' + name);
        }
      }
    })
  }

  public showStore(id: string)
  {
    this.storeServices.showStore(id).subscribe({
      next: (response: any) => {
        this.storeToShow = response;
        console.log('store to show:')
        console.log('id: ' + this.storeToShow?.id);
        console.log('name: ' + this.storeToShow?.name);
      },
      error: (error: any) =>{
        console.log('error showing store');
      },
    });
  }

  public createStore(store: Store)
  {
    this.storeServices.createStore(store).subscribe({
      next: (response: any) => {
        this.storeCreated = response;
      },
      error: (error: any) => {
        console.log('error creating store');
      }
    })
  }

  public updateStore(store: Store, id: string)
  {
    this.storeServices.updateStore(store, id).subscribe({
      next: (response: any) => {
        this.storeUpdated = response;
      },
      error: (error: any) => {
        console.log('error updating store');
      },
    });
  }

  public deleteStore(id: string)
  {
    this.storeServices.deleteStore(id).subscribe({
      next: (response: any) => {
        this.storeDeleted = response;
        console.log('store deleted:')
        console.log('id: ' + this.storeDeleted?.id);
        console.log('name: ' + this.storeDeleted?.name);
         },
      error: (error: any) =>{
        console.log('error deleting store');
      },
    });
  }

}
