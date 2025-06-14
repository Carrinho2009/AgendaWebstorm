import {ApplicationConfig, Injectable} from '@angular/core';
import {HttpClientimport { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { Routes } from '@angular/router';
 };} from "@angular/common/http";
export const appConfig: ApplicationConfig = { providers: {
  provideZoneChangeDetection({ eventCoalescing: true })
  }, provideRouter(routes), provideHttpClient()]
};
