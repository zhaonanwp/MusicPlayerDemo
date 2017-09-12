import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AudioProvider, ITrackConstraint } from 'ionic-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: ITrackConstraint[] = [
    {
      art: 'http://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-totoro.png',
      title: '11111',
      src: 'http://cdn5.lizhi.fm/audio/2016/02/01/2514879377169964038_hd.mp3'
    }
  ];

  constructor(public navCtrl: NavController, private audioProvider: AudioProvider) {

  }

  playSelectedTrack(item) {
    // use AudioProvider to control selected track 
    this.audioProvider.play(0);
  }
  onTrackFinished(track: any) {
    this.audioProvider.stop();
  }
  autoPlay() {
    this.audioProvider.play(0);
  }
  pause(){
    this.audioProvider.pause();
  }

}
