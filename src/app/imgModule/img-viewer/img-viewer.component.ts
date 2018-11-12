import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';

/**
 * Import image-view 
 */
import {ImgListObject} from '../img-objects/img-list.object';
import {ImgViewerService} from './img-viewer.service';
import {imgStorageObject} from '../img-objects/storage.setup.object';




@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {
  @Input() photosToDisplay: string;
  @Input() identifier: string;
  @Output() photoCounter: EventEmitter<number> = new EventEmitter();
  public photoList: Observable<ImgListObject[]>;
  public photoSelected:ImgListObject = null;
  public photoSelectedNextIndex:number = 0;
  public photoSelectedBackIndex:number = 0;



  constructor(private ivs: ImgViewerService) { }

  ngOnInit() {
    let imgstorageobject:imgStorageObject = new imgStorageObject();
    imgstorageobject.setimgStorageObject(this.photosToDisplay, this.identifier);
    this.photoList = this.ivs.getPhotoList(imgstorageobject.fireClourFireRef);
    this.photoList.subscribe(res => {this.firePhotoCounter(res.length)})
  }

  private firePhotoCounter(nPhotos:number){
      this.photoCounter.next(nPhotos);
  }


  setSelectedPhoto(slectedPhoto:ImgListObject, slectedPhotoIndex: number ){
    this.photoSelected = slectedPhoto;
    this.photoSelectedNextIndex = slectedPhotoIndex + 1;
    this.photoSelectedBackIndex = slectedPhotoIndex - 1;
  }

  closeSelectedPhoto(){
    this.photoSelected = null;
  }

}
