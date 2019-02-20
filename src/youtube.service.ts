import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { YoutubeConfig } from './youtube-config';
import { YoutubeConfigService } from './youtube-config.service';

@Injectable()
export class YoutubeService {

  constructor(
    public http: HttpClient,
    @Inject(YoutubeConfigService) private config: YoutubeConfig
  ) {}

  public async fetchPlaylists(channelId: string): Promise<Array<Object>> {
    const url = `${this.config.apiURL}/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&key=${this.config.apiKey}`;
    return this.http.get(url).toPromise()
    .then(
      data => {
        return data['items'];
      }
    ).catch(
      () => []
    );
  }

  public async fetchVideos(channelId: string, playlistId: string = ''): Promise<Array<Object>> {
    let url = `${this.config.apiURL}/search?key=${this.config.apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;
    if (playlistId !== '') {
      url = `${this.config.apiURL}/playlistItems?key=${this.config.apiKey}&playlistId=${playlistId}&part=snippet,id&order=date&maxResults=20`;
    }
    return this.http.get(url).toPromise()
    .then(
      data => {
        return data['items'];
      }
    ).catch(
      () => []
    );
  }
}
