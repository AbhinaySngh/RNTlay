// Sample item data
const items = [
  { id: '1', name: 'Laptop', category: 'Electronics', image:'./images/Electronics/laptop.jpg', description: 'High-end laptop for rent.', location: 'Mumbai', price: 50 },
  { id: '2', name: 'Office Chair', category: 'Furniture', image: './images/Furniture/chair.jpg', description: 'Comfortable office chair.', location: 'Pune', price: 15 },
  { id: '3', name: 'Drill', category: 'Tools', image: './images/tool/drill.jpg', description: 'Power drill for rent.', location: 'vapi', price: 20 },
  { id: '4', name: 'Bicycle', category: 'Vehicles', image: './images/Vehiclesd/bicycle.jpg', description: 'Mountain bike for rent.', location: 'Umargaon', price: 10 },
  { id: '36', name: 'Sandal', category: 'Clothes', image: './images/clothes/sandal.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '5', name: 'Camera', category: 'Electronics', image: './images/Electronics/camera.jpeg', description: 'DSLR camera for photography.', location: 'Silvassa', price: 30 },
  { id: '6', name: 'Sofa', category: 'Furniture', image: './images/Furniture/sofa.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '7', name: 'Lawnmower', category: 'Tools', image: './images/tool/lawn.jpeg', description: 'Gas-powered lawnmower.', location: 'Valsad', price: 15 },
  { id: '8', name: 'Skateboard', category: 'Vehicles', image: './images/Vehiclesd/skateboard.jpg', description: 'Skateboard for rent.', location: 'Surat', price: 8 },
  { id: '9', name: 'Projector', category: 'Electronics', image: './images/Electronics/projector.jpg', description: 'HD projector for presentations.', location: 'Umargaon', price: 40 },
  { id: '36', name: 'Suit', category: 'Clothes', image: './images/clothes/suit.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '10', name: 'Dining Table', category: 'Furniture', image: './images/Furniture/dinning table.jpeg', description: 'Wooden dining table for rent.', location: 'Silvassa', price: 35 },
  { id: '11', name: 'Power Bank', category: 'Electronics', image: './images/Electronics/powerbank.jpg', description: 'Portable power bank.', location: 'Daman', price: 5 },
  { id: '36', name: 'Garba-Dress', category: 'Clothes', image: './images/clothes/garba.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '12', name: 'Tent', category: 'Equipment', image: './images/Equipment/tent.jpeg', description: 'Camping tent for rent.', location: 'Diu', price: 20 },
  { id: '13', name: 'Mixer', category: 'Appliances', image: './images/Appliances/mixer.jpg', description: 'Kitchen mixer for baking.', location: 'Valsad', price: 15 },
  { id: '14', name: 'Drone', category: 'Electronics', image: './images/Electronics/drone.jpeg', description: 'Quadcopter drone for aerial photography.', location: 'Vapi', price: 45 },
  { id: '15', name: 'Golf Clubs', category: 'Sports', image: './images/sports/golf.jpeg', description: 'Set of golf clubs for rent.', location: 'Chanod', price: 30 },
  { id: '36', name: 'Denim-Jacket', category: 'Clothes', image: './images/clothes/denim-jacket.jpg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '16', name: 'Fishing Rod', category: 'Sports', image: './images/sports/sports.jpeg', description: 'Fishing rod for rent.', location: 'Gunjan', price: 10 },
  { id: '17', name: 'BBQ Grill', category: 'Appliances', image: './images/Appliances/bbq grill.jpeg', description: 'Portable BBQ grill for outdoor cooking.', location: 'Vapi', price: 25 },
  { id: '18', name: 'Sound System', category: 'Electronics', image: './images/Electronics/sound.jpeg', description: 'Bluetooth sound system for parties.', location: 'Vapi', price: 50 },
  { id: '19', name: 'Keyboard', category: 'Musical Instruments', image: './images/Instrument/keyboard.jpeg', description: 'Electronic keyboard for music enthusiasts.', location: 'Mumbai', price: 20 },
  { id: '20', name: 'Luggage', category: 'Travel', image: './images/travel/luggage.jpeg', description: 'Set of luggage for travelers.', location: 'Silvassa', price: 15 },
  { id: '36', name: 'Blazer', category: 'Clothes', image: './images/clothes/blazer.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '21', name: 'Air Conditioner', category: 'Electronics', image: './images/Electronics/ac.webp', description: 'Bluetooth sound system for parties.', location: 'Vapi', price: 50 },
  { id: '22', name: 'Fridge', category: 'Electronics', image: './images/Electronics/fridge.webp', description: 'Quadcopter drone for aerial photography.', location: 'Vapi', price: 45 },
  { id: '23', name: 'Rocking Chair', category: 'Furniture', image: './images/Furniture/rocking-chair.jpeg', description: 'Comfortable office chair.', location: 'Pune', price: 15 },
  { id: '36', name: 'Lehenga', category: 'Clothes', image: './images/clothes/lehenga.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '24', name: 'Drill', category: 'Tools', image: './images/tool/drill.jpg', description: 'Power drill for rent.', location: 'vapi', price: 20 },
  { id: '25', name: 'Bicycle', category: 'Vehicles', image: './images/Vehiclesd/bicycle.jpg', description: 'Mountain bike for rent.', location: 'Umargaon', price: 10 },
  { id: '36', name: 'Shoes', category: 'Clothes', image: './images/clothes/shoes.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '26', name: 'Cooler', category: 'Electronics', image: './images/Electronics/cooler.jpg', description: 'DSLR camera for photography.', location: 'Silvassa', price: 30 },
  { id: '27', name: 'Bed', category: 'Furniture', image: './images/Furniture/bed1.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '28', name: 'Lawnmower', category: 'Tools', image: './images/tool/lawn.jpeg', description: 'Gas-powered lawnmower.', location: 'Valsad', price: 15 },
  { id: '29', name: 'Skateboard', category: 'Vehicles', image: './images/Vehiclesd/skateboard.jpg', description: 'Skateboard for rent.', location: 'Surat', price: 8 },
  { id: '36', name: 'Jacket', category: 'Clothes', image: './images/clothes/normal-jacket.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '30', name: 'TV', category: 'Electronics', image: './images/Electronics/tv.webp', description: 'HD projector for presentations.', location: 'Umargaon', price: 40 },
  { id: '31', name: 'Sofa', category: 'Furniture', image: './images/Furniture/sofa2.jpg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '32', name: 'Almirah', category: 'Furniture', image: './images/Furniture/almirah2.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '33', name: 'Bed', category: 'Furniture', image: './images/Furniture/bed2.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '34', name: 'Jhula', category: 'Furniture', image: './images/Furniture/jhula.jpeg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '35', name: 'Almirah', category: 'Furniture', image: './images/Furniture/almirah.webp', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  { id: '36', name: 'Shoes', category: 'Clothes', image: './images/clothes/shoes2.jpg', description: 'Comfortable sofa for rent.', location: 'Vapi', price: 25 },
  
];


// Function to load items dynamically
function loadItems() {
  const itemList = document.querySelector('#item-list');
  console.log(itemList)
  // itemList.innerHTML = ''; // Clear existing items
  items.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.className = 'item-card';
      itemCard.innerHTML = `
          <img src="${item.image}" alt="Rs. {item.name}">
          <h3>${item.name}</h3>
          <p>Category: ${item.category}</p>
          <p>Price: Rs ${item.price} / day</p>
          <button onclick="viewDetails('${item.id}')" class="view-btn">View Details</button>
          
      `;
      console.log(itemCard)
      
      itemList.appendChild(itemCard);
  });
}

function reloadItems() {
  const itemList = document.querySelector('#item-list2');
  console.log(itemList)
  // itemList.innerHTML = ''; // Clear existing items
  items.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.className = 'item-card';
      itemCard.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Category: ${item.category}</p>
          <p>Price: Rs ${item.price} / day</p>
          <button onclick="viewDetails('${item.id}')" class="view-btn">View Details</button>
          
      `;
      console.log(itemCard)
      
      itemList.appendChild(itemCard);
  });
}

// Function to filter items based on category
document.getElementById('category-filter').addEventListener('change', function() {
  const selectedCategory = this.value;
  const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category.toLowerCase() === selectedCategory);
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = ''; // Clear existing items
  filteredItems.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.className = 'item-card';
      itemCard.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Category: ${item.category}</p>
          <p>Price: Rs ${item.price} / day</p>
          <button onclick="viewDetails('${item.id}')"  class="view-btn">View Details</button>
      `;
      itemList.appendChild(itemCard);
  });
});
 
// Function to view item details
function viewDetails(itemId){
  const item = items.find(i => i.id === itemId);
  if (item) {
      const detailsHtml = `
           <a href="index.html" class="item-home view-box" >Home</a>
          <div class="item-details">
              <h2 class="item-name">${item.name}</h2>
              <img src="${item.image}" alt="${item.name}">
              <p class="item-desc"><strong>Description:</strong> ${item.description}</p>
              <p class="item-desc"><strong>Location:</strong> ${item.location}</p>
              <p class="item-desc"><strong>Price:</strong> Rs ${item.price} / day</p>
              <button onclick="openRentForm('${item.id}')" class="rent-btn">Rent Now</button>
          </div>
      `;
      document.body.innerHTML = detailsHtml; // Change to details view
  }
}

// Function to open rent form
function openRentForm(itemId) {
  const item = items.find(i => i.id === itemId);
  const rentFormHtml = `
      <div class="rent-form">
          <h2>Rent ${item.name}</h2>
          <form    onsubmit="submitRent(event, '${item.id}')" >
              <label for="name">Name:</label>
              <input type="text" id="name" required>
              <label for="phone">Phone Number:</label>
              <input type="tel" id="phone" required>
              <label for="address">Address:</label>
              <input type="text" id="address" required>
              <label for="location">Location:</label>
              <input type="text" id="location" value="${item.location}" required readonly>
              <label for="days">Rent for how many days?</label>
              <input type="number" id="days" min="1" required>
              <button type="submit">Submit Rent Request</button>
              <a class="form-home" href="index.html">Go to home</a>
          </form>
      </div>
  `;
  document.body.innerHTML = rentFormHtml; // Change to rent form view
}

// Function to submit rent form
function submitRent(event, itemId) {
  event.preventDefault(); // Prevent default form submission
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const days = document.getElementById('days').value;

  alert(`Rent request submitted for item ID: ${itemId}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nDays: ${days}`);
  // Here you would implement actual payment logic
  reloadItems(); // Reload items after submission
}

// Load items on page load
document.addEventListener('DOMContentLoaded', loadItems);

// login prompt

function alertMe(){
  alert("Login Successful");
}
