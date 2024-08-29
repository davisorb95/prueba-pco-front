import { Component, OnInit } from '@angular/core';
import { IBreed } from '../../interfaces/breed.interface';
import { BreedsService } from '../../services/breeds.service';
import { lastValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-breeds-search',
  templateUrl: './breeds-search.component.html',
  styleUrls: ['./breeds-search.component.scss']
})
export class BreedsSearchComponent implements OnInit {
  breeds: IBreed[] = []
  breedsItems: IBreed[] = []
  page: number = 1
  pageSize: number = 10
  collectionSize: number = 0
  text: string = ''

  constructor(private breedsService: BreedsService) { }

  async ngOnInit(): Promise<void> {
    localStorage.clear()
    await this.getBreeds()
  }

  async getBreeds(): Promise<void> {
    try {
      const response = await lastValueFrom(this.breedsService.getBreeds())
      if (response.error) {
        return
      }
      this.breeds = response.data
      this.breedsItems = this.breeds
      this.collectionSize = this.breeds.length
      this.refreshBreeds()
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        console.error(`Ocurrió un error: ${err.error.message}`)
      }
    }
  }

  refreshBreeds(): void {
    let breeds = [...this.breeds];
    if (this.text && this.text.length > 0) {
      breeds = breeds.filter(breed => breed.name.toLocaleLowerCase().includes(this.text.toLocaleLowerCase()))
      this.collectionSize = breeds.length
    }
    this.collectionSize = breeds.length
    this.breedsItems = breeds.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    )
  }
}
