import { Component, OnInit } from '@angular/core';
import { PaginationService } from './data/data.service';

interface itemsData {
  id: number;
  title: string;
  body: string;
}

export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor(private ps: PaginationService) {}
  items: itemsData[] = [];
  pages: number[] = [];
  pagination: Pagination = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 0,
  };

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const startIndex =
      (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
    const endIndex = startIndex + this.pagination.itemsPerPage;
    this.ps.getItems().subscribe((data: any) => {
      this.pagination.totalItems = data.length;
      this.pagination.totalPages = Math.ceil(
        this.pagination.totalItems / this.pagination.itemsPerPage
      );
      this.items = data.slice(startIndex, endIndex);
      this.pages = this.getPages();
    });
  }

  onPageChange(event: number) {
    this.pagination.currentPage = event;
    this.getData();
  }

  getPages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.pagination.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
