import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBreed } from '../interfaces/breed.interface';
import { Observable } from 'rxjs';
import { ICatImage } from '../interfaces/cat-image.interface';
import { ICustomResponse } from 'src/app/shared/interfaces/custom-response.interface';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private _http: HttpClient) { }

  getBreeds(): Observable<ICustomResponse<IBreed[]>> {
    const url = `${environment.api_uri}/cats/breeds`
    return this._http.get<ICustomResponse<IBreed[]>>(url)
  }

  getBreedById(breedId: string): Observable<ICustomResponse<IBreed>> {
    const url = `${environment.api_uri}/cats/breeds/${breedId}`
    return this._http.get<ICustomResponse<IBreed>>(url)
  }

  getBreedImagesByImageId(imageId: string): Observable<ICustomResponse<ICatImage[]>> {
    const url = `${environment.api_uri}/images/imagesbybreedid/${imageId}`
    return this._http.get<ICustomResponse<ICatImage[]>>(url)
  }
}
