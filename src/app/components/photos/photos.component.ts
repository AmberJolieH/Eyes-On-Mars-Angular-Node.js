import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: []
})
export class PhotosComponent {
  @Input() childPhotos?: any

  constructor() { }

  ngOnInit(){
  }

}
