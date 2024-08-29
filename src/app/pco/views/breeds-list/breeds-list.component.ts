import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { lastValueFrom } from 'rxjs';
import { IBreed } from '../../interfaces/breed.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { isObjectEmpty } from 'src/app/shared/utils/validations';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {
  breeds: IBreed[] = []
  breedsItems: IBreed[] = []
  page: number = 1
  pageSize: number = 10
  collectionSize: number = 0
  breedSelected!: IBreed | null
  breedsImages: string[] = []
  error: boolean = true
  message: string = 'No se ha seleccionado ninguna raza.'

  constructor(private _breedsService: BreedsService) { }

  async ngOnInit(): Promise<void> {
    localStorage.clear()
    await this.getBreeds()
  }

  async getBreeds(): Promise<void> {
    try {
      const response = await lastValueFrom(this._breedsService.getBreeds())
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
    this.breedsItems = this.breeds.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    )
  }

  async selectBreed(breed: IBreed): Promise<void> {
    try {
      const response = await lastValueFrom(this._breedsService.getBreedById(breed.id))
      if (response.error) {
        return
      }
      this.breedSelected = response.data
      if (isObjectEmpty(this.breedSelected)) {
        this.error = true
        this.message = 'No se encontró una raza por el id seleccionado'
        return
      }
      await this.getBreedImages(breed.reference_image_id)
      this.message = ''
      this.error = false
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        console.error(`Ocurrió un error: ${err.error.message}`)
      }
    }
  }

  async getBreedImages(imageId: string): Promise<void> {
    const response = await lastValueFrom(this._breedsService.getBreedImagesByImageId(imageId))
    this.breedsImages = response.data.map(catImage => catImage.url)
  }
}
