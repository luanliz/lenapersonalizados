import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/data.types';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router) {
  }
  ngOnInit() {

  }
  signUp(data: SignUp) {
    this.seller.userSignUp(data)
  }
}
