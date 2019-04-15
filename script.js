// Fetch the postcode searched for.
const getPostcode = async (postcode) => {
    const response = await fetch(`http://api.postcodes.io/postcodes/${postcode}`)
    if (response.status === 200) {
		const data = await response.json();
        return data;
    } else {
        throw new Error(`Unable to fetch puzzle`);
    }
}

const h1 = document.querySelector('#postcode-results');
h1.textContent = '';

// Search box, used with renderNotes function to filter the notes on screen
document.querySelector('#search-text').addEventListener('input', (event) => {
    // Making a HTTP request to http://api.postcodes.io/postcodes/
    getPostcode(event.target.value).then((data) => {
        console.log(data.result)
        h1.innerHTML = data.result.admin_ward;
    }).catch((err) => {
        console.log(`Error: ${err}`);
    })
});
