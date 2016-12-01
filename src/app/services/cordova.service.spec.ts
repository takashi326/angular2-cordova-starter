/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CordovaService } from './cordova.service';

describe('CordovaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CordovaService]
    });
  });

  it('should ...', inject([CordovaService], (service: CordovaService) => {
    expect(service).toBeTruthy();
  }));
});
