import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, name: 'movie 1', description: 'güzel film', imageUrl: '' },
      { id: 2, name: 'movie 2', description: 'iyi film', imageUrl: '' },
      { id: 3, name: 'movie 3', description: 'fena değil', imageUrl: '' },
      { id: 4, name: 'movie 4', description: 'fena değil', imageUrl: '' },
      { id: 5, name: 'movie 5', description: 'fena değil', imageUrl: '' },
      { id: 6, name: 'movie 6', description: 'fena değil', imageUrl: '' },
    ];
    return { movies };
  }
}
