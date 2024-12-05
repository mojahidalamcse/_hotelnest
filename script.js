// Function to search hotels
function searchHotels() {
    const location = document.getElementById('location').value.toLowerCase();
  
    // Demo hotels in Rangpur and Soyodpur
    const hotels = [
      { name: 'Hotel Royal Rangpur', location: 'Rangpur', price: 120, image: 'assets/hotel1.jpg' },
      { name: 'Rangpur Inn', location: 'Rangpur', price: 80, image: 'assets/hotel2.jpg' },
      { name: 'Soyodpur Luxury Suites', location: 'Soyodpur', price: 150, image: 'assets/hotel3.jpg' },
      { name: 'Soyodpur Grand Hotel', location: 'Soyodpur', price: 100, image: 'assets/hotel4.jpg' },
      { name: 'Hotel Comfort Rangpur', location: 'Rangpur', price: 90, image: 'assets/hotel5.jpg' },
      { name: 'Rangpur Heritage Hotel', location: 'Rangpur', price: 130, image: 'assets/hotel6.jpg' },
      { name: 'Grand Rangpur Hotel', location: 'Rangpur', price: 150, image: 'assets/hotel7.jpg' },
      { name: 'Rangpur City Hotel', location: 'Rangpur', price: 110, image: 'assets/hotel8.jpg' },
      { name: 'Soyodpur Business Hotel', location: 'Soyodpur', price: 120, image: 'assets/hotel9.jpg' },
      { name: 'Hotel Soyodpur', location: 'Soyodpur', price: 95, image: 'assets/hotel10.jpg' }
    ];
  
    // Filter hotels based on location
    const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase() === location);
  
    // Display all hotels if location is Rangpur or Soyodpur
    if (location === 'rangpur' || location === 'soyodpur') {
      displayHotels(filteredHotels);
    } else {
      alert('No hotels found in this location.');
      document.getElementById('hotels').innerHTML = '';
    }
  }
  
  // Function to display hotels
  function displayHotels(hotels) {
    const hotelList = document.getElementById('hotels');
    hotelList.innerHTML = '';
  
    hotels.forEach(hotel => {
      const hotelDiv = `
        <div class="hotel-item">
          <img src="${hotel.image}" alt="${hotel.name}">
          <h3>${hotel.name}</h3>
          <p>${hotel.location}</p>
          <p>Price: $${hotel.price} per night</p>
          <button onclick="selectHotel('${hotel.name}')">View Rooms</button>
        </div>
      `;
      hotelList.innerHTML += hotelDiv;
    });
  }
  
  function selectHotel(hotelName) {
    localStorage.setItem('selectedHotel', hotelName);
    window.location.href = "rooms.html";
  }
  
  // On room selection page, display the selected hotel
  if (window.location.pathname.includes('rooms.html')) {
    const hotelName = localStorage.getItem('selectedHotel');
    document.getElementById('hotel-name').innerText = hotelName;
  }
  
  function bookRoom(roomType, price) {
    const bookingDetails = {
      hotelName: localStorage.getItem('selectedHotel'),
      roomType,
      price
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    window.location.href = "booking.html";
  }
  
  // On booking page, display booking summary
  if (window.location.pathname.includes('booking.html')) {
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    document.getElementById('hotelName').innerText = bookingDetails.hotelName;
    document.getElementById('roomType').innerText = bookingDetails.roomType;
    document.getElementById('price').innerText = bookingDetails.price;
  }
  
  // Confirm booking function
  function confirmBooking(event) {
    event.preventDefault();
    const guestName = document.getElementById('guestName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
  
    const booking = {
      ...JSON.parse(localStorage.getItem('bookingDetails')),
      guestName,
      phoneNumber,
      checkIn,
      checkOut
    };
  
    let allBookings = JSON.parse(localStorage.getItem('allBookings')) || [];
    allBookings.push(booking);
    localStorage.setItem('allBookings', JSON.stringify(allBookings));
  
    alert('Booking confirmed!');
    window.location.href = "confirm.html"; // Redirect to a confirmation page
  }
  