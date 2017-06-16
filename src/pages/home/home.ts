import { Component } from '@angular/core';
import { NavController,NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'; 
import { Platform } from 'ionic-angular';
import { ModalNuevoSitio } from '../modal-nuevo-sitio/modal-nuevo-sitio';
declare var google: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: any; // Manejador del mapa.
  coords : any = { lat: 0, lng: 0 }
  

  constructor(public navCtrl: NavController,public navParams: NavParams,public  platform: Platform,
   private geolocation: Geolocation,public modalCtrl : ModalController,) {
    platform.ready().then(() => {    
      // La plataforma esta lista y ya tenemos acceso a los plugins.
        this.obtenerPosicion();
     });
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad Inicio');
  }

  loadMap(){
   let mapContainer = document.getElementById('map');
    this.map = new google.maps.Map(mapContainer, {
      center: this.coords,
      zoom: 16
      // Manejador del mapa. title: 'Estoy Aqui'
    });
    // Colocamos el marcador
   let miMarker = new google.maps.Marker({
              icon : 'assets/img/pin.png',
              map: this.map,
              position: this.coords,
              draggable: true
              
          });  
  }
      
  
 obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;
    
      this.loadMap();
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }
  nuevoSitio(){
  // aquí vamos a abrir el modal para añadir nuestro sitio.
   let mimodal = this.modalCtrl.create( 'ModalNuevoSitio',this.coords );
   mimodal.present();
}
}

