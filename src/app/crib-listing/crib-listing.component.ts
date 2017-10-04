import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from '../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  // assigning cribs property to an array of type any
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type',
  ];

  constructor(private http: Http, 
    private cribService: CribsService,
    private utilService: UtilService) { }

  ngOnInit() {
  	
  	this.cribService.getAllCribs()
  	.subscribe(
  		data => this.cribs = data,
  		error => this.error = error.statusText,
  		);

    this.cribService.newCribsSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
      );
  }

}
