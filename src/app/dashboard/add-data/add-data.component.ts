import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'],
})
export class AddDataComponent implements OnInit{

  constructor(private formbuilder: FormBuilder,
              public storeService: StoreService,
              public backendService: BackendService,
  ) {
  }
  public addChildForm: any;
  public startDate = new Date(2015, 0, 1);
  @Output() childAdded = new EventEmitter<void>();
  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      kindergardenId: ['', Validators.required],
      birthDate: [null, [Validators.required]]
    })
  }

  onSubmit() {
    if(this.addChildForm.valid) {
      this.backendService.addChildData(this.addChildForm.value, (success: boolean) => success && this.childAdded.emit());
    }
  }
}
