import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ciudad = ['Buenos Aires', 'Madrid', 'Lima', 'Quito'];
  name!: string;
  selection!: string;
  criteria = ''

  title = 'Reto 3 FormsSandiyu';


  addNewCity(city: string): void {
    this.ciudad.push(city);
  }
  onCityClicked(city: string): void {
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

  onSearch(): void {
    console.log('OnSearch');
  }

}
