import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})

export class DetailsProductComponent implements OnInit {
  public products: any = {};
  constructor(private route: ActivatedRoute, private dataSvc: DataService, private location:Location) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.products] = this.dataSvc.getProductById(productId);
  }
  onGoBack(): void {
    this.location.back();
  }
}
