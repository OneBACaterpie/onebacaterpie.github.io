// Create an array
const grantees = [];

// Fill the array with four test addresses
grantees[0] = {name:"MI Capitol", address:"100 N Capitol Ave", city:"Lansing", zipcode:"48933"};
grantees[1] = {name:"Comerica Park", address:"2100 Woodward Ave", city:"Detroit", zipcode:"48201"};
grantees[2] = {name:"Van Andel Arena", address:"130 Fulton St W", city:"Grand Rapids", zipcode:"49503"};
grantees[3] = {name:"Bronner's Christmas Wonderland", address:"25 Christmas Ln", city:"Frankenmuth", zipcode:"48754"};

// Add event listener to the button
document.getElementById("getData").addEventListener("click", getData);

// Function called when the button is clicked
async function getData(){
	const displayStatus = document.getElementById("status");
	const displayPrint = document.getElementById("print");
	displayStatus.innerHTML = "Retrieiving data...";

	for (let i = 0; i < grantees.length; i++) {
		const address = encodeURI(grantees[i].address);
		const city = encodeURI(grantees[i].city);
		const zip = encodeURI(grantees[i].zipcode);
		const getGeocode = "https://www.mcgi.state.mi.us/ws_csstp/gis_services.svc/rest/geocodeAddress/?a=".concat(address,"%20",city,"%20",zip,"&ma=false&tk=%7bTOKEN%7d&callback=displayData");
		
		var script = document.createElement('script');
		script.src = getGeocode;
		document.head.appendChild(script);
	}
	displayStatus.innerHTML = "Data retrieval complete.";
}
