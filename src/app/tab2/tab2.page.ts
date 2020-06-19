import { OnInit, AfterContentInit, Component, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('map', {static:true}) mapElement;

  map: any;
  mapOptions: any;
  mapCenter = {lat: null, lng: null};

  constructor(private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.mapCenter.lat = resp.coords.latitude;
      this.mapCenter.lng = resp.coords.longitude;
      this.mapOptions = {
        zoom: 15,
        center: this.mapCenter
      };
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
