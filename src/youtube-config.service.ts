import { InjectionToken } from '@angular/core';
import { YoutubeConfig } from './youtube-config';

export const YoutubeConfigService = new InjectionToken<YoutubeConfig>('YoutubeConfig');
