import { Component, OnInit } from '@angular/core';
import { NavController , LoadingController, ToastController} from '@ionic/angular';
import { Location } from "@angular/common";
import { NgForm } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AddgroceryService } from './addgrocery.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastserviceService } from '../provider/toastservice.service';
import { UploadserviceService } from '../provider/Uploadservice.service';
import { ActionSheetController } from '@ionic/angular';

//multi-file upload
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';

@Component({
  selector: 'app-addgrocery',
  templateUrl: './addgrocery.page.html',
  styleUrls: ['./addgrocery.page.scss'],
})
export class AddgroceryPage implements OnInit {
  
  imageList: any = {};
  fileUrl: any;
  respData: any;
  imageURI: any;
  imageFileName:any;
  croppedImagepath1 = "";  croppedImagepath2 = ""; croppedImagepath3 = ""; 
  isLoading1 = false; isLoading2 = false; isLoading3 = false;

  constructor(
    public navCtrl: NavController, 
    public location: Location,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private transfer: FileTransfer,
    private base64: Base64,
    public loadingCtrl: LoadingController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    private uploadService: UploadserviceService,
    public toastService: ToastserviceService) {     
  }
  

  //========================================================  image select part ==========
  async selectImage(num: number) {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, num);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA, num);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
  pickImage(sourceType, num) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.cropImage(imageData, num)
    }, (err) => {
      // Handle error
    });
  }
  cropImage(fileUrl, num) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0], num)
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }
  showCroppedImage(ImagePath, num) {
    if(num == 1) {
        this.isLoading1 = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];

        this.file.readAsDataURL(filePath, imageName).then(base64 => {
          this.croppedImagepath1 = base64;
          this.isLoading1 = false;
        }, error => {
          alert('Error in showing image' + error);
          this.isLoading1 = false;
        });
    } else if(num == 2) {
        this.isLoading2 = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];

        this.file.readAsDataURL(filePath, imageName).then(base64 => {
          this.croppedImagepath2 = base64;
          this.isLoading2 = false;
        }, error => {
          alert('Error in showing image' + error);
          this.isLoading2 = false;
        });
    } else if(num == 3) {
        this.isLoading3 = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];

        this.file.readAsDataURL(filePath, imageName).then(base64 => {
          this.croppedImagepath3 = base64;
          this.isLoading3 = false;
        }, error => {
          alert('Error in showing image' + error);
          this.isLoading3 = false;
        });
    }
  }
  //================================================= image select end ========================


  onItemSubmit(itemForm: NgForm) {
    if (!itemForm.invalid) {
      // if(this.croppedImagepath1 != undefined) this.imageList.push(this.croppedImagepath1);
      // if(this.croppedImagepath2 != undefined) this.imageList.push(this.croppedImagepath2);
      // if(this.croppedImagepath3 != undefined) this.imageList.push(this.croppedImagepath3);
      this.uploadService.addItem(itemForm, this.croppedImagepath1, this.croppedImagepath2, this.croppedImagepath3)
      .then(res => {
        console.log(res);
        itemForm.reset();
        this.toastService.presentToast("Successful uploading");
      })
      .catch(err => console.log(err));
    } else {
      this.toastService.presentToast("please fill out empty fields");
    }
  }
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      this.toastService.presentToast(this.imageURI);
    }, (err) => {
      console.log(err);
      this.toastService.presentToast(err);
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }
}
