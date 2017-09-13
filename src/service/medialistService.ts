import { Injectable } from '@angular/core';
import { ITrackConstraint } from 'ionic-audio';

@Injectable()
export class MediaListService{
    public items: ITrackConstraint[] = [
        {
            id:1,
          art: 'http://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-totoro.png',
          title: '11111',
          src: 'http://cdn5.lizhi.fm/audio/2016/02/01/2514879377169964038_hd.mp3'
        } 
      ];

    public add(item:ITrackConstraint){
        let index = this.items.map((e)=>{return e.id}).indexOf(item.id);
        if(index<0){
            this.items.push(item);
        }
    }

    public playNow(item:ITrackConstraint){
        let index = this.items.map((e)=>{return e.id}).indexOf(item.id);
        if(index<0){
           return this.items.push(item)-1;
        }
        return index;
    }

    public remove(item:ITrackConstraint){
        let index = this.items.map((e)=>{return e.id}).indexOf(item.id);
        if(index>-1)
        {
            this.items.slice(index,1);
        }
    }
}