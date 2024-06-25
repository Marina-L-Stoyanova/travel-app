import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectedArticlesType } from '../models/travel-app-data/selected-articles-type';
import { ArticlesSource4Type } from '../models/travel-app-data/articles-source4-type';
import { ArticlesSource2Type } from '../models/travel-app-data/articles-source2-type';
import { ArticlesSource1Type } from '../models/travel-app-data/articles-source1-type';
import { ImageSet2Type } from '../models/travel-app-data/image-set2-type';
import { DestinationsType } from '../models/travel-app-data/destinations-type';
import { ArticlesSource3Type } from '../models/travel-app-data/articles-source3-type';
import { ImageSet1Type } from '../models/travel-app-data/image-set1-type';
import { TravelAppData } from '../static-data/travel-app-data';

@Injectable({
  providedIn: 'root'
})
export class TravelAppDataService {
  public getSelectedArticles(): Observable<SelectedArticlesType[]> {
    return of(TravelAppData['SelectedArticlesType']);
  }

  public getDestinations(): Observable<DestinationsType[]> {
    return of(TravelAppData['DestinationsType']);
  }

  public getImageSet1(): Observable<ImageSet1Type[]> {
    return of(TravelAppData['ImageSet1Type']);
  }

  public getImageSet2(): Observable<ImageSet2Type[]> {
    return of(TravelAppData['ImageSet2Type']);
  }

  public getArticlesSource1(): Observable<ArticlesSource1Type[]> {
    return of(TravelAppData['ArticlesSource1Type']);
  }

  public getArticlesSource2(): Observable<ArticlesSource2Type[]> {
    return of(TravelAppData['ArticlesSource2Type']);
  }

  public getArticlesSource3(): Observable<ArticlesSource3Type[]> {
    return of(TravelAppData['ArticlesSource3Type']);
  }

  public getArticlesSource4(): Observable<ArticlesSource4Type[]> {
    return of(TravelAppData['ArticlesSource4Type']);
  }
}
