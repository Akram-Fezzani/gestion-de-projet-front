import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
})
export class UpdateprojectComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor() {}

  ngOnInit(): void {}
}
