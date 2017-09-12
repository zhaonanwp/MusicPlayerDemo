import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AudioProvider, ITrackConstraint } from 'ionic-audio';
import { MediaListService } from '../../service/MediaListService';
import { MusicPlayer } from '../musicplayer/musicplayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: ITrackConstraint[] = [
    {
      id:2,
      art: 'http://cdnimg103.lizhi.fm/album_cover/2016/01/28/26035683733714332_320x320.jpg',
      title: '她、鹿港小镇、我们不能失去信仰、1990年的春天  108个关键词',
      src: 'http://cdn5.lizhi.fm/audio/2016/02/08/2516207836324146694_hd.mp3',
      artist:'李志'
    },
    {
      id:3,
      art:'http://cdnimg103.lizhi.fm/album_cover/2016/01/28/26035683733714332_320x320.jpg',
      title:'董卓瑶',
      src:'http://cdn5.lizhi.fm/audio/2016/02/08/2516207960878198790_hd.mp3',
      artist:'李志'
    }
  ];

  constructor(public navCtrl: NavController, 
              private audioProvider: MusicPlayer,
              private mediaListService:MediaListService) {

  }

  playNow(item:ITrackConstraint){
    let index= this.mediaListService.playNow(item);
    this.audioProvider.playSelectedTrack(index);
  }

  playSelectedTrack(item) {
    // use AudioProvider to control selected track  
  }

}
