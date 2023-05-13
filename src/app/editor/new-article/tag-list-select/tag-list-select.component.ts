import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-tag-list-select',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tag-list-select.component.html',
  styleUrls: ['./tag-list-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TagListSelectComponent,
      multi: true
    },
  ],
})
export class TagListSelectComponent implements ControlValueAccessor {
  tagInput!: string;
  tagsSelected: string[] = [];
  onChange = (value: string[]) => {};
  onTouched = () => {};

  writeValue(obj: string[]): void {
    this.tagsSelected = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  addTag(): void {
    if(this.tagsSelected.some(tag => tag === this.tagInput)) {
      return;
    }
    if(!this.tagsSelected) {
      this.tagsSelected = [this.tagInput];
    } else {
      this.tagsSelected.push(this.tagInput);
    }
    this.tagInput = '';
    this.onChange(this.tagsSelected);
  }

  removeTag(value: string): void {
    if(!this.tagsSelected.some(tag => tag === value)) {
      return;
    }
    this.tagsSelected = this.tagsSelected.filter(tag => tag !== value);
    this.onChange(this.tagsSelected);
  }
}
