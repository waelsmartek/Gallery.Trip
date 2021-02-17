import {Injectable} from '@angular/core';

@Injectable()
export class ImageService{

    visibleImages=[];
    getImages(){
        return this.visibleImages=IMAGES.slice(0);
    }
    getImage(id:number){
      return IMAGES.slice(0).find(image=>image.id == id);
    }  
    
}
const IMAGES=[ 
    {"id":1, "category":"georgia","caption":"orthodox church","url":"assets/img/georgia_01.jpg"},
    {"id":2, "category": "georgia", "caption": "Collection of Tblisi", "url":"assets/img/georgia_02.JPG"},
    {"id":3, "category": "georgia", "caption": "Tv Tower", "url":"assets/img/georgia_03.jpg"},
    {"id":4, "category": "georgia", "caption": "Old building Tsalka", "url":"assets/img/georgia_04.jpg"},
    {"id":5, "category": "turkey", "caption": "Haiga Sophia", "url":"assets/img/turkey_01.jpg"},
    {"id":6, "category": "turkey", "caption": "Beyoglu Kocatepe", "url":"assets/img/turkey_02.jpg"},
    {"id":7, "category": "turkey", "caption": "Fatih Suleymaniye", "url":"assets/img/turkey_03.jpg"},
    {"id":8, "category": "turkey", "caption": "Fetih Kemalpasa", "url":"assets/img/turkey_04.jpg"},
    {"id":10, "category": "lebanon", "caption": "Chekka Sea ", "url":"assets/img/lebanon_01.jpg"},
    {"id":11, "category": "lebanon", "caption": "Laqlouq", "url":"assets/img/lebanon_02.jpg"},
    {"id":12, "category": "lebanon", "caption": "Old Coins ", "url":"assets/img/lebanon_03.jpg"},
    {"id":13, "category": "lebanon", "caption": "Jane kartaba", "url":"assets/img/lebanon_04.JPG"},
]
   