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
            "previewImageSrc": "./assets/images/corretagem.jpg",
            "thumbnailImageSrc": "./assets/images/corretagem.jpg",
            "alt": "Description for Image 2",
            "title": "Title 2"
        },
        {
            "previewImageSrc": "./assets/images/droneTopo.png",
            "thumbnailImageSrc": "./assets/images/droneTopo.png",
            "alt": "Description for Image 3",
            "title": "Title 3"
        }
      
    ]

}

  

