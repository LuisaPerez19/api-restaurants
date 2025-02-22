import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="restaurant-list"
export default class extends Controller {
  connect() {
    console.log("restaurant_list connected");
  }
}
