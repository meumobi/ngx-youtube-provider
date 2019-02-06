import { NgModule, ModuleWithProviders } from '@angular/core';
import { YoutubeConfig } from './youtube-config';
import { YoutubeService } from './youtube.service';
import { YoutubeConfigService } from './youtube-config.service';


@NgModule()
export class YoutubeModule {

  static forRoot(config: YoutubeConfig): ModuleWithProviders {
    return {
      ngModule: YoutubeModule,
      providers: [
        YoutubeService,
        {
          provide: YoutubeConfigService,
          useValue: config
        }
      ]
    }
  }
}