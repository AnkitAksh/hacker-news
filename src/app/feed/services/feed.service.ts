import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  fetchData(page) {
    return this.http.get(environment.apiEndPoint + 'search?query=&page=' + page).pipe(catchError(this.handleError));
  }

  fetchNewFeeds() {
    return this.http.get(environment.apiEndPoint + 'search_by_date?tags=story').pipe(catchError(this.handleError));
  }

  fetchTopFeeds(){
    return this.http.get(environment.apiEndPoint + 'search?tags=front_page').pipe(catchError(this.handleError));
  }

}

