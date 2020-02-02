import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastserviceService } from '../provider/toastservice.service';

@Injectable({
  providedIn: 'root'
})
export class AddgroceryService {

  constructor(
    private http: HttpClient,
    public toastService: ToastserviceService) {}

  addItem(itemForm, imageFiles) {
    return new Promise( (resolve, reject) => {
      console.log(itemForm.form, imageFiles);
      const formValues = itemForm.form.value;
      const formdata = new FormData();
      if(imageFiles) {
        Array.from(imageFiles).forEach(image => {
          // console.log(image);
          formdata.append('itemImages', image as File);
        });
      }
      formdata.append('name', formValues.name);
      formdata.append('description', formValues.description);
      formdata.append('quantity', formValues.quantity);
      formdata.append('unit', formValues.unit);
      formdata.append('shared', formValues.shared);
      formdata.append('shops', formValues.shops);
      formdata.append('pickUpDate', formValues.pickUpDate);

      this.http.post(this.toastService.URL_create_item, formdata,{
          headers: new HttpHeaders({
            phone: '91-9532250224',
          })
        })
        .subscribe(
          res => resolve(res),
          err => reject(err)
          );
      });
  }
}
