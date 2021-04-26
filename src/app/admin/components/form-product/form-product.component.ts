import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  formProduct: FormGroup;
  image$: Observable<any>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.formProduct = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      price: new FormControl(0, [
        Validators.required,
        MyValidators.isPriceValid,
      ]),
      image: new FormControl(''),
      description: new FormControl('', [Validators.required]),
    });
  }

  saveProduct() {
    // event.preventDefault();

    // if (this.form.valid) {
    //   const product = this.form.value;
    //   this.productsService.createProduct(product).subscribe((newProduct) => {
    //     console.log(newProduct);
    //     this.router.navigate(['./admin/products']);
    //   });
    // }

    console.log(this.formProduct.value);
  }

  // uploadFile(event) {
  //   // event.preventDefault();

  //   const file = event.target.files[0];
  //   const name = file.name;
  //   const fileRef = this.angularFireStorage.ref(name);
  //   const task = this.angularFireStorage.upload(name, file);

  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.image$ = fileRef.getDownloadURL();
  //         this.image$.subscribe((url) => {
  //           this.form.get('image').setValue(url);
  //         });
  //       })
  //     )
  //     .subscribe();
  // }

  // private buildForm() {
  //   this.form = this.formBuilder.group({
  //     id: ['', [Validators.required]],
  //     title: ['', [Validators.required]],
  //     price: [0, [Validators.required, MyValidators.isPriceValid]],
  //     image: [''],
  //     description: ['', [Validators.required]],
  //   });
  // }

  get priceField() {
    return this.formProduct.get('price');
  }
}
