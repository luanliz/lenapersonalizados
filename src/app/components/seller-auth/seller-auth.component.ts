import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService) {
  }
  ngOnInit() {

  }
  signUp(data: object) {
    console.warn(data)
    this.seller.userSignUp()
  }
}
