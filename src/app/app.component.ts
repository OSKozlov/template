import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Template';

  @ViewChild('someInput') someInput: ElementRef;

  ngAfterViewInit() {
  }

  appendChild(): void {
    if (this.someInput.nativeElement !== undefined && this.someInput.nativeElement !== null) {
      this.someInput.nativeElement.value = 'Anchovies! 🍕🍕';
    }
  }
}
