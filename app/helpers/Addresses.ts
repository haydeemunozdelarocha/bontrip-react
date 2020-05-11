export class Addresses {
  public static getComponentType(address_component) {
    switch(address_component.types[0]) {
      case 'locality':
      case 'administrative_area_level_3':
        return 'name';
      case 'country':
        return 'country';
      case 'administrative_area_level_1':
        return 'state';
    }
  }

  public static isComponentValid(address_component) {
    return address_component.long_name.length > 0;
  }
}
