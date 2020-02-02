import { Component, OnInit } from '@angular/core';
import { NavController , LoadingController, ToastController} from '@ionic/angular';
import { Location } from "@angular/common";
import { NgForm } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ToastserviceService } from '../provider/toastservice.service';
import { UploadserviceService } from '../provider/Uploadservice.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.page.html',
  styleUrls: ['./signup3.page.scss'],
})
export class Signup3Page implements OnInit {
  imageURI: any;
  profile_name: string;
  croppedImageBuffer: any;
  croppedImagepath = "";
  isLoading = false;
  imageList: FileList;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private camera: Camera,
    private crop: Crop,
    public navCtrl: NavController, 
    public actionSheetController: ActionSheetController,
    private transfer: FileTransfer,
    public toastService: ToastserviceService,
    public uploadService: UploadserviceService,
    private file: File
  ) { }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
    });
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsArrayBuffer(filePath, imageName).then(buffer => {
      this.croppedImageBuffer = buffer;
    }, error => {
    });

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.croppedImagepath = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
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

  onProfileSubmit(itemForm: NgForm) {
    if (!itemForm.invalid) {
      this.uploadService.addProfile(itemForm, this.croppedImageBuffer)
      .then(res => {
        console.log(res);
        itemForm.reset();
        this.navCtrl.navigateForward(['/tabs']);
      })
      .catch(err => console.log(err));
    } else {
      this.toastService.presentToast("please enter username and profile photo");
    }
  }
  
  ngOnInit() {
  }

}
