import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { FeedService } from './feed.service';

describe('FeedService', () => {
  let service: FeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
