import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="restaurant-list"
export default class extends Controller {
  static targets = ["searchForm", "selectedCategory", "restaurantList", "location"];

  insertResults(results) {
    const restaurantList = this.restaurantListTarget;
    restaurantList.innerHTML = "";
    if (results.length > 0) {
      results.forEach((restaurant) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerText = `${restaurant.name} in ${restaurant.address}`;
        restaurantList.appendChild(listItem);
      });
    } else {
      let p = document.createElement("p");
      p = "No restaurants found! Please select another category or location";
      restaurantList.innerHTML = p;
    }
  }

  showRestaurantList(event) {
    event.preventDefault();
    const selectedCategory = this.selectedCategoryTargets.find((radio) => radio.checked)?.value; //
    const location = this.locationTarget.value;
    const url = `https://the-fork.api.lewagon.com/api/v1/restaurants?category=${selectedCategory}&location=${location}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.insertResults(data);
      });
  }
}
