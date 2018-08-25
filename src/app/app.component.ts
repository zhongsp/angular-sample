import { Component, OnInit } from '@angular/core';

import { Breadcrumbs } from './core/breadcrumbs/breadcrumbs.config';
import { BreadcrumbsService } from "./core/breadcrumbs.service";

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Breadcrumbs;

  constructor(
    private breadcrumbs: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.breadcrumbs.items.subscribe(items => {
      setTimeout(() => {
        this.items = items
      });
    });
  }
}
