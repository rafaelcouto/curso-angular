import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, filter, map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();

  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';

  results$: Observable<any>;
  total: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.results$ = this.queryField.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      tap(console.log),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((value) => this.http.get<any>(this.SEARCH_URL, {
        params: {
          search: value,
          fields: 'name,version'
        }
      })),
      tap(response => this.total = response.total),
      map(response => response.results)
    );

  }

  onSearch() {

    const value = (this.queryField.value || '').trim();
    if (!value) {
      return;
    }

    let params = new HttpParams();

    params = params.set('search', value);
    params = params.set('fields', 'name,version');

    this.results$ = this.http.get<any>(this.SEARCH_URL, {params})
      .pipe(
        tap(response => this.total = response.total),
        map(response => response.results)
      );
  }

}
