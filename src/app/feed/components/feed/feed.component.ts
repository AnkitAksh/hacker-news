import { FeedModel } from './../../models/feed/feed-model';
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  pageCount: number = 0;
  rows: Array<FeedModel>;
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.pageCount = 0;
    this.rows = new Array<FeedModel>();
    this.fetchFeeds(this.pageCount);
  }

  more() {
    this.pageCount++;
    this.fetchFeeds(this.pageCount, true);
    document.getElementsByClassName('navbar')[0].scrollIntoView({behavior: 'smooth'});
  }

  fetchFeeds(page, more = false) {
    let data = localStorage.getItem('hits');
    if (data && !more) {  // if data in LS
      let data = localStorage.getItem('hits');
      this.rows = JSON.parse(data);
    } else {
      this.feedService.fetchData(page).subscribe((val: any) => {
        this.rows = new Array<FeedModel>();
        if (val) {
          localStorage.removeItem('hits');
          for (let hit of val.hits) {
            this.rows.push(new FeedModel(hit));
          }
          localStorage.setItem('hits', JSON.stringify(this.rows));
        }
      })
    }
  }

  newFeeds() {
    this.feedService.fetchNewFeeds().subscribe((val: any) => {
      this.rows = new Array<FeedModel>();
      if (val) {
        localStorage.removeItem('hits');
        for (let hit of val.hits) {
          this.rows.push(new FeedModel(hit));
        }
        localStorage.setItem('hits', JSON.stringify(this.rows));
      }
    })
  }

  topfeeds() {
    this.feedService.fetchTopFeeds().subscribe((val: any) => {
      this.rows = new Array<FeedModel>();
      if (val) {
        localStorage.removeItem('hits');
        for (let hit of val.hits) {
          this.rows.push(new FeedModel(hit));
        }
        localStorage.setItem('hits', JSON.stringify(this.rows));
      }
    })
  }

  upVote(index) {
    localStorage.removeItem('hits');
    ++this.rows[index]['points'];
    localStorage.setItem('hits', JSON.stringify(this.rows));
  }

  reset() {
    localStorage.clear();
    this.fetchFeeds(this.pageCount);
  }

  hide(index) {
    this.rows.splice(index, 1);
    localStorage.setItem('hits', JSON.stringify(this.rows));
  }
}
