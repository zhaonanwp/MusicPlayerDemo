import { Component } from '@angular/core';
import { AudioProvider, ITrackConstraint ,IAudioTrack} from 'ionic-audio';
import { MediaListService } from '../../service/MediaListService';
import { Injectable } from '@angular/core';


@Component({
    selector: 'music-player',
    templateUrl: 'musicplayer.html'
  })

@Injectable()
export class MusicPlayer{
    items: ITrackConstraint[];

      constructor(private audioProvider: AudioProvider,mediaList:MediaListService){
        this.items = mediaList.items;
      }

     public playSelectedTrack(index) {
        // use AudioProvider to control selected track 
        // let oldOne = this.audioProvider.tracks[this.audioProvider.current]; 

        // this.audioProvider.replace(oldOne,this.items[index]);
        if(this.audioProvider._current>-1)
        {
            this.audioProvider.tracks[this.audioProvider._current].isPlaying = false;
        }
        this.audioProvider.play(index);
      }
      onTrackFinished(track: any) {
        this.audioProvider.stop();
      }

      play(){
         this.audioProvider.play(this.audioProvider.current); 
      }
      pause(){
        this.audioProvider.pause();
      }
}
