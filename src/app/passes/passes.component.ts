import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-passes',
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.scss']
})
export class PassesComponent implements OnInit {

  info$: Object;
  passes$ : Object;
  res : Object;
  lat: number; // =  40.697;
  lng: number; // = 29.97 ;
  alt: number; // = 10;
 
  constructor(private data: DataService) { }

  ngOnInit() {
    console.log('passes');
    //this.findMe();
    this.data.getPasses().subscribe(
      (res) => {
        this.info$ = res
        this.passes$ = this.info$['passes']
      }
    )
  }
   
  findMe(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition( (position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.alt = position.coords.altitude;
        console.log("coords get");
      });
    } else {
      alert("Geolocation is not supperted by this browser ");
    }
  }

}
