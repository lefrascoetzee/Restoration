import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

/* AngularFire2 Imports */
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

/* Component Imports */
import {ImgViewerComponent} from './img-viewer/img-viewer.component';
import {ImgUploadComponent} from './img-upload/img-upload.component';

/* Moddule Import */
import {MyOwnCustomMaterialModule} from '../root/app.material.module';

/*Service Imports */
import {ImgViewerService} from './img-viewer/img-viewer.service';

@NgModule({
    declarations: [
        ImgViewerComponent,
        ImgUploadComponent
    ],
    imports: [ 
        CommonModule,
        MyOwnCustomMaterialModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFirestoreModule
     ],
    exports: [
        ImgViewerComponent,
        ImgUploadComponent
    ],
    providers: [
        ImgViewerService
    ],
})
export class ImgModule {}