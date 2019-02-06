import { NgModule, ModuleWithProviders } from '@angular/core';
import { YoutubeConfig } from './youtube-config';
import { YoutubeService } from './youtube.service';
import { YoutubeConfigService } from './youtube-config.service';


@NgModule()
export class ContentfulModule {

  static forRoot(config: YoutubeConfig): ModuleWithProviders {
    return {
      ngModule: ContentfulModule,
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