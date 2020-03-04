# @meumobi/ngx-youtube-provider

A angular service to fetch Youtube channel videos, playlists and latest videos.

## Dependencies
- apiKey: YouTube Data API v3 key, generated [here](https://console.developers.google.com/apis/library/youtube.googleapis.com)
- apiURL: `https://www.googleapis.com/youtube/v3`

### Testing YouTube data API v3 key
You can test your API key by calling directy the youtube service, for example:
https://www.googleapis.com/youtube/v3/search?key=YOUR-YOUTUBE-DATA-API-V3-KEY&channelId=UCz-8t2BfNdlEcn0moVvc90Q&part=snippet,id&order=date&maxResults=20

Should return a json response like:

```json
{
   "kind":"youtube#searchListResponse",
   "etag":"\"SJZWTG6xR0eGuCOh2bX6w3s4F94/UUa24giTZQ_CDEIB2VzUchUqmRY\"",
   "nextPageToken":"CBQQAA",
   "regionCode":"PT",
   "pageInfo":{
      "totalResults":67,
      "resultsPerPage":20
   },
   "items":[
      {
         "kind":"youtube#searchResult",
         "etag":"\"SJZWTG6xR0eGuCOh2bX6w3s4F94/y1y5awX7TgMaIuSS9rNc5JSD4J4\"",
         "id":{
            "kind":"youtube#video",
            "videoId":"W9xyTHnUna0"
         },
         "snippet":{
            "publishedAt":"2019-09-26T19:09:34.000Z",
            "channelId":"UCz-8t2BfNdlEcn0moVvc90Q",
            "title":"Helbor Offices - invista no que é seu!",
            "description":"",
            "thumbnails":{
               "default":{
                  "url":"https://i.ytimg.com/vi/W9xyTHnUna0/default.jpg",
                  "width":120,
                  "height":90
               },
               "medium":{
                  "url":"https://i.ytimg.com/vi/W9xyTHnUna0/mqdefault.jpg",
                  "width":320,
                  "height":180
               },
               "high":{
                  "url":"https://i.ytimg.com/vi/W9xyTHnUna0/hqdefault.jpg",
                  "width":480,
                  "height":360
               }
            },
            "channelTitle":"Helbor",
            "liveBroadcastContent":"none"
         }
      }
   ]
}
```

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
        apiKey: 'YOUR-YOUTUBE-DATA-API-V3-KEY',
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
your-component.ts
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