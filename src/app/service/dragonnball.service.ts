import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = () => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}


@Injectable({providedIn: 'root'})
export class DragonballService {
  constructor() { }

  characters = signal<Character[]>(loadFromLocalStorage());
  addCharacter(character: Character) {
    this.characters.update((current) => [
      ...current,
      character
    ]);
  }
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  }
  );
}
