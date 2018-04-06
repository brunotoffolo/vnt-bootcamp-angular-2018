export class Item {

  name: string = '';
  disabled: boolean = false;
  ammount: number = 1;

  constructor(name, disabled?, ammount?) {
    this.name = name;

    if (disabled) {
      this.disabled = disabled;
    }

    if (ammount) {
      this.ammount = ammount;
    }
  }
}
