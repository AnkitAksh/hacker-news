import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortUrl'
})
export class ShortUrlPipe implements PipeTransform {

  transform(url: string): any {
    let shortUrl = '';

    if (url) {
      let urlHost = url.split('://')[1].split('/')[0].split('.');
      if (urlHost.length > 2) {
        urlHost.shift();
      }
      shortUrl = urlHost.join('.');
    }
    return shortUrl;
  }

}
