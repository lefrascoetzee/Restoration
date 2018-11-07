ImgModule Module

ImgModule is used in Angular 6 module which enables the upload of img files. The module enables the following functionality:
 1. Upload of files to Firebase Storage
 2. Writes Image data and URL to the FireStore DB
 3. When combined with resize-image-upload function, the upload IMG will automatically on upload create a thumbnail img.
 4. Provides a grid list view of all storeed images


 Set-up
 1. Copy imgModule to project
 2. Configer "environments/environment" with nessesary Firbase access profile
 3. Import imgModule into project root Module
 4. Import Angular Material dependancies in your material.module:
    -  MatGridListModule, MatProgressBarModule,MatCardModule


