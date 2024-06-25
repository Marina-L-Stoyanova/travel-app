import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SelectedArticlesType } from '../../models/travel-app-data/selected-articles-type';
import { ArticlesSource4Type } from '../../models/travel-app-data/articles-source4-type';
import { ArticlesSource2Type } from '../../models/travel-app-data/articles-source2-type';
import { ArticlesSource1Type } from '../../models/travel-app-data/articles-source1-type';
import { ArticlesSource3Type } from '../../models/travel-app-data/articles-source3-type';
import { TravelAppDataService } from '../../services/travel-app-data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public travelAppDataArticlesSource1: ArticlesSource1Type[] = [];
  public travelAppDataArticlesSource2: ArticlesSource2Type[] = [];
  public travelAppDataArticlesSource3: ArticlesSource3Type[] = [];
  public travelAppDataArticlesSource4: ArticlesSource4Type[] = [];
  public travelAppDataSelectedArticles: SelectedArticlesType[] = [];

  constructor(
    private travelAppDataService: TravelAppDataService,
  ) {}

  ngOnInit() {
    this.travelAppDataService.getArticlesSource1().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataArticlesSource1 = data,
      error: (_err: any) => this.travelAppDataArticlesSource1 = []
    });
    this.travelAppDataService.getArticlesSource2().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataArticlesSource2 = data,
      error: (_err: any) => this.travelAppDataArticlesSource2 = []
    });
    this.travelAppDataService.getArticlesSource3().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataArticlesSource3 = data,
      error: (_err: any) => this.travelAppDataArticlesSource3 = []
    });
    this.travelAppDataService.getArticlesSource4().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataArticlesSource4 = data,
      error: (_err: any) => this.travelAppDataArticlesSource4 = []
    });
    this.travelAppDataService.getSelectedArticles().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDataSelectedArticles = data,
      error: (_err: any) => this.travelAppDataSelectedArticles = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
