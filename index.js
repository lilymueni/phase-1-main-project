document.addEventListener('DOMContentLoaded', function () {
    const loginSection = document.getElementById('loginSection');
    const secondContainer = document.querySelector('.second-container');

    // Hide the second container initially
    if (secondContainer) {
        secondContainer.style.display = 'none';
    }

    // Event listener for login form submission
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const meterNo = document.getElementById('meterNo').value;

        if (username === 'lilian' && password === '123' && meterNo) {
            // Call a function to fetch and display meter credentials based on selected meter
            displayMeterCredentials(meterNo);
        } else {
            // Incorrect credentials or meter not selected
            alert('Invalid username, password, or meter number. Please try again.');
        }
    });

    // Function to fetch and display meter credentials based on selected meter
    function displayMeterCredentials(meterNo) {
        fetch('db.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const meter = data.meters.find(meter => meter.id === parseInt(meterNo));
                if (meter) {
                    // Populate the second container with meter credentials
                    secondContainer.innerHTML = `
                        <h2>Meter ${meter.id} Credentials</h2>
                        <p>Location: ${meter.location}</p>
                        <p>Type: ${meter.type}</p>
                        <p>Current Reading: <input type="text" id="currentReading" value="${meter['current reading']}"></p>
                        <p>Previous Reading: <input type="text" id="previousReading" value="${meter['previous reading']}"></p>
                        <p>Bill: <input type="text" id="bill" value="${meter.Bill}"></p>
                        <button id="updateButton">Update</button>
                        <button id="resetButton">Reset</button>
                    `;

                    // Add event listeners to the second container
                    secondContainer.addEventListener('click', function () {
                        console.log('Click event triggered on second container');
                    });

                    secondContainer.addEventListener('mouseover', function () {
                        console.log('Mouseover event triggered on second container');
                    });

                    // Add event listener for another distinct event
                    // Replace 'distinctEvent' with the actual event name
                    secondContainer.addEventListener('distinctEvent', function () {
                        console.log('Distinct event triggered on second container');
                    });

                    // Event listener for update button
                    document.getElementById('updateButton').addEventListener('click', function () {
                        const newCurrentReading = document.getElementById('currentReading').value;
                        updateCurrentReading(meterNo, newCurrentReading);
                    });

                    // Event listener for reset button
                    document.getElementById('resetButton').addEventListener('click', function () {
                        // Reset current reading to 0
                        document.getElementById('currentReading').value = 0;
                        // Update the current reading in the database
                        updateCurrentReading(meterNo, 0);
                    });

                    // Show the second container
                    if (secondContainer) {
                        secondContainer.style.display = 'block';
                    }
                } else {
                    alert('Meter credentials not found. Please try again.');
                }
            })
            .catch(function (error) {
                console.error('Error fetching meter credentials:', error);
            });
    }

    // Function to update current reading
    function updateCurrentReading(meterId, newCurrentReading) {
        fetch(`http://localhost:3000/meters/${meterId}/currentReading`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ currentReading: newCurrentReading })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the response from the server
            // Handle success if needed
        })
        .catch(error => {
            console.error('Error updating current reading:', error);
            // Handle error if needed
        });
    }

    // Event listener for toggling dark and light mode
    document.body.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});