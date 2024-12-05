
function loadBookings() {
    const allBookings = JSON.parse(localStorage.getItem('allBookings')) || [];
    const bookingTableBody = document.getElementById('booking-table-body');
  
    bookingTableBody.innerHTML = '';
  
    allBookings.forEach((booking, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${booking.guestName}</td>
          <td>${booking.phoneNumber}</td>
          <td>${booking.hotelName}</td>
          <td>${booking.roomType}</td>
          <td>${booking.checkIn}</td>
          <td>${booking.checkOut}</td>
        </tr>
      `;
      bookingTableBody.innerHTML += row;
    });
  }
  
 
  document.addEventListener('DOMContentLoaded', loadBookings);
  