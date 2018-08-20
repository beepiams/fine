import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Camera, CameraOptions } from '@ionic-native/camera';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';


@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {

  constructor(public navCtrl: NavController, 
              // private camera: Camera,
              private mediaCapture: MediaCapture,
             ) 
  {

    let options: CaptureImageOptions = { limit: 3, };
    this.mediaCapture.captureVideo(options)
      .then(
        (data: MediaFile[]) => console.log(data),
        (err: CaptureError) => console.error(err)
      );

    // const options: CameraOptions = {
    //   // quality: 100,
    //   destinationType: this.camera.DestinationType.NATIVE_URI,
    //   // encodingType: this.camera.EncodingType.JPEG,
    //   sourceType: this.camera.PictureSourceType.CAMERA,
    //   mediaType: this.camera.MediaType.VIDEO,
    // }
    
    // this.camera.getPicture(options).then((imageData) => {
    //  // imageData is either a base64 encoded string or a file URI
    //  // If it's base64 (DATA_URL):

    // //  let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //  // Handle error
    // });
  
  }


}
