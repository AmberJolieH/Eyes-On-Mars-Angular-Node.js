// import { Component, OnInit } from '@angular/core';
// import { RoverApiService } from 'src/app/rover-api.service';
// import {RoverApiService} from '../rover-api.service'
// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css'],
//   providers: [RoverApiService]
// })
// export class FormComponent {
//   photos: any[] = null;
//   noPhotos: boolean = false;
//   constructor(private roverApiService: RoverApiService) {}

//  getRoverImages( date: string, camera: string) {
//    this.noPhotos = false;
//    this.roverApiService.getphotoByDateAndCamera(date, camera).subscribe(response => {
//      if(response.json().photos.length > 0)
//      {
//        this.photos = response.json();
//      }
//      else {
//        this.noPhotos = true;
//      }
//    });
//  }
// }
