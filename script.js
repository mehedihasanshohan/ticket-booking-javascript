
// console.log("sohan");
// JavaScript to handle seat selection and appending selected seats
    document.querySelectorAll('.seat').forEach(button => {
        button.addEventListener('click', () => {
            const seatNumber = button.getAttribute('data-seat');
            const seatType = button.getAttribute('seat-class');
            const seatQuality = button.getAttribute('seat-class');
            const selectedSeatsContainer = document.getElementById('selectedSeats');
            const divParent = document.getElementById('div-parent');
            const totalPriceElement = document.getElementById('totalPrice');
            let totalPrice = parseInt(totalPriceElement.textContent);

            let perSeatPrice;
                  // Determine the seat price based on seat quality
              if (seatQuality === 'economy') {
                   perSeatPrice = 600;
                 } else if (seatQuality === 'buseness') {
                  perSeatPrice = 700;
                 } else {
                  perSeatPrice = 500;
                 }

                 if (button.classList.contains('booked')) {
                  alert('This seat is already booked and cannot be selected or deselected.');
                  return; // Prevent further actions
              }

            // Check if the seat is already selected
            if (button.classList.contains('bg-green-500')) {
                // Deselect the seat
                alert('seat removed!');
                button.classList.remove('bg-green-500', 'text-white');
                button.classList.add('bg-gray-200');
                // button.classList.remove('bg-green-500', 'text-white');
                // button.classList.add('bg-gray-200');
                // Remove the seat from the selected list
                const seatToRemove = document.getElementById('seat-' + seatNumber);
                if (seatToRemove) {
                    // seatToRemove.remove();
                    seatToRemove.parentNode.remove();
                }
                totalPrice -= perSeatPrice;
            } else {
                // Select the seat
                button.classList.add('bg-green-500', 'text-white');
                button.classList.remove('bg-gray-200');
                // Append the selected seat to the list
                const div = document.createElement('div');
                const seatElement = document.createElement('h1');
                const seatTypeElement = document.createElement('h1');
                const seatValue = document.createElement('h1');

                seatElement.id = 'seat-' + seatNumber;
                seatElement.classList.add('selected-seat', 'text-green-600');

                let seatPrice = seatQuality === 'economy' ? 600 : seatQuality === 'business' ? 700 : 500;

                seatElement.textContent = seatNumber;
                seatTypeElement.textContent = seatType;
                seatValue.textContent = seatPrice;

                // selectedSeatsContainer.appendChild(seatElement);
                // selectedSeatsContainer.appendChild(seatTypeElement);

                div.appendChild(seatElement);
                div.appendChild(seatTypeElement);
                div.appendChild(seatValue);
                seatElement.classList.add('ml-8');
                seatTypeElement.classList.add('ml-16');
                seatValue.classList.add('ml-16')
                div.classList.add('flex', 'gap-6', 'text-xl', 'font-sm', 'mb-4');

                divParent.appendChild(div);
                // selectedSeatsContainer.appendChild(divParent);
                totalPrice += perSeatPrice;
            }
               totalPriceElement.textContent = totalPrice;
            // Update the message if no seats are selected
            if (selectedSeatsContainer.children.length === 0) {
                selectedSeatsContainer.innerHTML = '<p class="text-gray-600">No seats selected yet.</p>';
            } else {
                // Remove the "No seats selected yet" message if there are selected seats
                const noSeatsMessage = selectedSeatsContainer.querySelector('.text-gray-600');
                if (noSeatsMessage) {
                    noSeatsMessage.remove();
                }
            }
        });
    });