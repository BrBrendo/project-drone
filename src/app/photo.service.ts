import { Image } from './image';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
 

  constructor() { }
  
   Image =  [
        {
            "previewImageSrc": "./assets/images/drone1.jpg",
            "thumbnailImageSrc": "./assets/images/drone1.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "./assets/images/eventos.jpg",
            "thumbnailImageSrc": "./assets/images/eventos.jpg",
            "alt": "Description for Image 2",
            "title": "Title 2"
        },
        {
            "previewImageSrc": "./assets/images/eventos2.jpg",
            "thumbnailImageSrc": "./assets/images/eventos2.jpg",
            "alt": "Description for Image 3",
            "title": "Title 3"
        }
      
    ]

}

  

