import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductServicesService } from 'src/app/core/services/product-services.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product!: Product;
  form!: FormGroup;
  image$!: Observable<any>;
  uploadPercent!: Observable<any>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductServicesService,
    private storage: AngularFireStorage
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.value;
    this.formBuild();
  }

  ngOnInit(): void {
    if (typeof this.product === 'undefined') {
      this.router.navigate(['/admin/create-product']);
    } else {
      this.form.patchValue(this.product);
    }
  }

  uploadImage(event: any): void {
    console.log(event);
    const file = event.target.files[0];
    const name = `Product-Image/${file.name}`;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);
    this.uploadPercent = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url: string) => {
            console.log(url);

            this.form.get('image')?.setValue(url);
          });
        })
      )
      .subscribe();
  }

  onSaveCreateProduct(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      const productId = this.product?.id || null;

      this.productService.onSaveProduct(product, productId);
      this.form.reset();
    }
  }

  onGoBacktoList(): void {
    this.router.navigate(['/admin/product-list']);
  }

  private formBuild(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [],
      stock: [],
      image: [''],
    });
  }
}
