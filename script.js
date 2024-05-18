
function myFunction(){
    console.log("If you have a fever, it’s important to prioritize rest and hydration. Drink plenty of fluids like water and herbal teas to stay hydrated, and take over-the-counter medications such as acetaminophen or ibuprofen to help reduce the fever and alleviate discomfort. Applying cool compresses to your forehead, wearing light clothing, and keeping your environment cool can also make you more comfortable. Monitor your temperature regularly and seek medical attention if your fever is 103°F (39.4°C) or higher, lasts more than three days, or if you experience severe symptoms like difficulty breathing or chest pain. For infants, young children, or individuals with chronic health conditions, consult a healthcare provider for specific guidance.");
// Define the URL and the request body
const url= 'http://localhost:5000/ask';
const requestBody= {
question: document.getElementById("message").innerHTML
};
output = document.getElementById('before_label');
// Make the POST request using fetch
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    // Specify the content type
    },
    body:
JSON.stringify(requestBody) 
// Convert the body to JSON string
})

.then (response => {
    if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
    }
   return output.setText(response.json()); // Parsethe JSON response
})
.then (data => {
    console.log( 'Success:', data); 
//Handle the response data
})
.catch(error => {
    console.error('Error:', error); 
    //Handle errors
});

}