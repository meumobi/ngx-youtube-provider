# @meumobi/ngx-youtube-provider

A angular service to fetch Youtube channel videos, playlists and latest videos.

## Dependencies
- apiKey: YouTube Data API v3 key, generated [here](https://console.developers.google.com/apis/library/youtube.googleapis.com)
- apiURL: `https://www.googleapis.com/youtube/v3`


## Installation
```bash
$ npm install @meumobi/ngx-youtube-provider --save
```

## Use 
On app.module.js
```ts
...
import { YoutubeService, YoutubeModule } from '@meumobi/ngx-youtube-provider';

@NgModule({
  declarations: [...],
  imports: [
      YoutubeModule.forRoot(
      {
        apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        apiURL: 'https://www.googleapis.com/youtube/v3'
      }
    ),
    ...
  ],
  bootstrap: [...],
  entryComponents: [...],
  providers: [
    YoutubeService,
    ...
  ]
})
export class AppModule {}
```
your-component.module.ts
```ts
...
import { YoutubeService } from '@meumobi/ngx-youtube-provider';

@NgModule({
  declarations: [...],
  imports: [...],
  providers: [
    YoutubeService,
    ...
  ]
})
export class YoutComponentModule {}
```
you-component.ts
```ts
...
import { YoutubeService } from '@meumobi/ngx-youtube-provider';
@Component({
  selector: 'your-component',
  templateUrl: 'your-component',
})
export class YoutComponent  {

  constructor(
    private youtubeService: YoutubeService,
    ...
  ) {}

  fetchPlaylists(channelId: string) {
    this.youtubeService.fetchPlaylists(channelId)
    .then(
      data => console.log(data)
    );
  }

  fetchVideos(channelId: string, playlistId: string) {
    this.youtubeService.fetchVideos(channelId, playlistId)
    .then(
      data => console.log(data)
    );
  }

}
```

## Functions
### fetchPlaylists
It returns an array of all channel playlists.  
If there is no playlist it returns `[]`
`this.youtubeService.fetchPlaylists(channelId)`
- channelId: string like `UCZZPgUIorPao48a1tBYSDgg`  
Playlist [Object](https://developers.google.com/youtube/v3/docs/playlists)


### fetchVideos
It returns an array of the latest 20 playlist vides.   
If not pass a playlistId, it returns the latest 20 channel videos.  
If there is no video on channel/playlist it returns `[]`.  
`this.youtubeService.fetchVideos(channelId, playlistId)`
- channelId: string like `UCZZPgUIorPao48a1tBYSDgg`  
- playlistId: string like `PLNFwX8PVq5q6CHLk0tLCiyh96nALzi3_x`

Video [Object](https://developers.google.com/youtube/v3/docs/videos)