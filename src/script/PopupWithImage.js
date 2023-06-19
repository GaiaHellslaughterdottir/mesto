import Popup from "./Popup";
import * as data from "./constants";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({src, alt, title}) {
    data.elementPlaceInfoImage.src = src;
    data.elementPlaceInfoImage.alt = alt;
    data.elementPlaceInfoTitle.textContent = title;
    super.open();
  }
}