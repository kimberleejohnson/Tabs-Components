
class TabLink {
  constructor(link) {
    // Assigning this.element to the passed in DOM element
     this.link = link;
    
    // Getting the link's custom data attribute 
    this.data = this.link.dataset.tab; 
    
    // Getting the associated Item element
    this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`); 
    
    // Creating a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);
    
    // Adding a click event listener on the instance of the link, calling the select method on click
    this.link.addEventListener('click', () => this.select());
  };

  // TabLink methods 
  select() {
    // Get all of the elements with the tabs-link class
     const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
     links.forEach(function(links){
        links.classList.remove(`tabs-link-selected`); 
    });

    // Add a class named "tabs-link-selected" to this link
    this.link.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select(); 
  }
}

class TabItem {
  constructor(tabItem) {
     this.tabItem = tabItem;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
     const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
      items.forEach(function(items){
        items.classList.remove(`tabs-item-selected`); 
  });
    
    // Add a class named "tabs-item-selected" to this element
    this.tabItem.classList.add('tabs-item-selected');
  }
}

// Step 1: Selecting all classes named ".tabs-link" and assign that value to the links variable

// Step 2: Adding .forEach() method to the links variable to iterate over the DOM NodeList

const links = document.querySelectorAll('.tabs-link').forEach(function(link){
  // Callback returns a new instance of TabLink that passes in each link as a parameter 
  new TabLink(link); 
}); 