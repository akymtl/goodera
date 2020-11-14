import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = [];

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.appService.getImages().subscribe((response: any) => {
      for(let entity of response) {
        this.images.push(entity.download_url);
      }
    });
  }
}
