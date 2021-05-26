import { Component, Input } from '@angular/core';
import { RoverApiService } from 'src/app/rover-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [RoverApiService]
})
export class FormComponent {

  
  photos: any = null;
  noPhotos: boolean = false;
  constructor(private roverApiService: RoverApiService) {}

 getRoverImages( date: string, camera: string) {
      console.log(date, camera);

   this.noPhotos = false;
   this.roverApiService.getphotoByDateAndCamera(date, camera).subscribe(response => {
    this.photos=response

   });
 }
}
