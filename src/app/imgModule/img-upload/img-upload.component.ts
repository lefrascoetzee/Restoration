import { Component, OnInit, Input, Output } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore'; // Firestore
import { User} from '@firebase/auth-types';
import { finalize } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

import {AuthService} from '../../auth-service/auth.service';
import { imgStorageObject } from '../img-objects/storage.setup.object';
import { ImgListObject } from '../img-objects/img-list.object';


@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent implements OnInit {
  public selectedFile: File;
  @Input() photosToDisplay: string; // sting to identify how the photos should be treated. See storage.object.ts for configuration
  @Input() identifier: string; // string to identify the specific item. See storage.object.ts for configuration
  
  
  private filePath: string = null;
  public uploadPercent: Observable<number>;
  private downloadURL: Observable<string>;
  private downloadURL_thumb: Observable<string>;
  public showUploadProgress: boolean = false;
  private imgstorageobject: imgStorageObject = new imgStorageObject();
  public userAuth: Observable<User> = null;

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    public authServe: AuthService
  ) { }

  ngOnInit() {
    let photoRef: string = null;
    this.userAuth = this.authServe.user;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    this.imgstorageobject.setimgStorageObject(this.photosToDisplay, this.identifier);
    this.filePath = this.imgstorageobject.fireStorageRef;
    
    this.showUploadProgress = true;
    const file = this.selectedFile;
    const fileRef = this.storage.ref(this.filePath + '/' + file.name);
    const task = this.storage.upload(this.filePath + '/' + file.name, file); //upload the file
    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
        const tmpImgObject: ImgListObject = new ImgListObject();
        let fireStoreImgListObjectRef:string = '00000';

        //after upload of image extract dowload url
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(res => {
          tmpImgObject.url = res;
          tmpImgObject.url_thumb = null;
          tmpImgObject.fileName = file.name;
          tmpImgObject.fullPath = this.filePath + '/' + file.name;
          this.afs.collection(this.imgstorageobject.fireClourFireRef).add(JSON.parse(JSON.stringify(tmpImgObject)))
          .then(
            res => {
              const metadata = {
                customMetadata: {
                  'FireStoreDocRef': res.path,
                  'FireStoreDocId': res.id
                }
              }
              fileRef.updateMetatdata(metadata);
              fireStoreImgListObjectRef = res.id;
              res.update({'FireStoreDocRef': res.path});
            }
          );
          }); // end subscribe

        this.showUploadProgress = false // after uplaod completed set show progress bar to fale
        this.selectedFile = null; // after uplaod completed set selected file name to null 
      }) // end finalize
    ).subscribe(); // end pipe
  } // end onUpload

  public canselUpload(){
    this.selectedFile = null; // set selected file name to null
  }
  
  public doLogin() {
    this.authServe.login();
  }
  public logout() {
    this.authServe.logout();
  }

}