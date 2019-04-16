// Step 2: Defining the Dropdown Class, which will create each new dropdown object. 
class Dropdown {
  constructor(dropdown) {
    
    // Assign this.element to the dropdown element
    this.dropdown = dropdown;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.dropdown.querySelector('.dropdown-button');
    
    // Assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.dropdown.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent());
  }

  // Step 3: define the method that is called.  
  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Step 1: Finding the elements we need and creating a new Object for each 
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));