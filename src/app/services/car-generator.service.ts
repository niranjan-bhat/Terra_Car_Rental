import { Component, Injectable } from '@angular/core';
import { CarEntry } from '../car-entry.model';

@Injectable({
  providedIn: 'root',
})
export class CarGeneratorService {
  carEntries: CarEntry[] = [];
  imageIndex = 0;
  modelNames = [
    'Corolla',
    'Civic',
    'Mustang',
    'Camaro',
    '3 Series',
    'Accord',
    'Camry',
    'F-150',
    'Cherokee',
    'Tucson',
    'Qashqai',
    'C-Class',
    'Fiesta',
    'Optima',
    'A4',
  ];
  makes = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'BMW',
    'Hyundai',
    'Nissan',
    'Mercedes-Benz',
    'Kia',
    'Audi',
  ];
  fuels = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  transmissions = ['Automatic', 'Manual'];
  colors = ['Red', 'Blue', 'Silver', 'White', 'Black'];
  years = Array.from({ length: 13 }, (_, i) => 2010 + i);
  prices = [65, 41, 67, 50, 100];
  bodyTypes = ['Sedan', 'Hatchback', 'SUV', 'Crossover', 'Convertible'];
  mileages = Array.from({ length: 19 }, (_, i) => 10 + i * 5);
  doors = [2, 4, 5];
  persons = [2, 4, 6, 7];
  enginePowers = [100, 150, 200, 250, 300];
  imageSrcs = [
    '../../../assets/images/car-01.jpg',
    '../../../assets/images/car-02.jpg',
    '../../../assets/images/car-03.jpg',
    '../../../assets/images/car-04.jpg',
    '../../../assets/images/car-05.jpg',
    '../../../assets/images/car-06.jpg',
    '../../../assets/images/car-07.jpg',
    '../../../assets/images/car-09.jpg',
  ];
  constructor() {}

  getPopularCars(): CarEntry[] {
    for (let i = 0; i < 6; i++) {
      const carEntry: CarEntry = this.generateCarEntry(true);
      this.carEntries.push(carEntry);
    }
    return this.carEntries;
  }
  getAllCars(): CarEntry[] {
    for (let i = 0; i < 21; i++) {
      const carEntry: CarEntry = this.generateCarEntry(false);
      this.carEntries.push(carEntry);
    }
    return this.carEntries;
  }

  private generateCarEntry(uniqueImage: boolean): CarEntry {
    const carEntry: CarEntry = {
      model_name: this.getRandomValueFromArray(this.modelNames),
      model: '',
      fuel: this.getRandomValueFromArray(this.fuels),
      transmission: this.getRandomValueFromArray(this.transmissions),
      year: this.getRandomValueFromArray(this.years),
      color: this.getRandomValueFromArray(this.colors),
      price: this.getRandomValueFromArray(this.prices),
      body: this.getRandomValueFromArray(this.bodyTypes),
      mileage: this.getRandomValueFromArray(this.mileages),
      doors: this.getRandomValueFromArray(this.doors),
      make: this.getRandomValueFromArray(this.makes),
      engine_power: this.getRandomValueFromArray(this.enginePowers),
      img: this.getuniqueImage(),
      persons: this.getRandomValueFromArray(this.persons),
    };

    return carEntry;
  }

  private getRandomValueFromArray(array: any[]): any {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  private getuniqueImage(): any {
    return this.imageSrcs[this.imageIndex++ % this.imageSrcs.length];
  }
}
