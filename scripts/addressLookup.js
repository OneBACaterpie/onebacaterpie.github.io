// Michigan address info lookup tool using 

const displayStatus = document.getElementById("fetchStatus");
const displayResult = document.getElementById("fetchResult");
let myTimeout;

const addressData = [];
addressData[0] = {name:"MI Capitol", address:"100 N Capitol Ave", city:"Lansing", zipcode:"48933"};
addressData[1] = {name:"Comerica Park", address:"2100 Woodward Ave", city:"Detroit", zipcode:"48201"};

// Add event listener
document.getElementById("fetchRequest").addEventListener("click", getData);

function dataFetch(data){
	for (let i = 0; i < addressData.length; i++) {
		if (data.geocodeAddressResult[0].Address === addressData[i].address) {
			addressData[i].repName = data.geocodeAddressResult[0].MatchInfo.House.Name;
			addressData[i].senName = data.geocodeAddressResult[0].MatchInfo.Senate.Name;
			{ break; }
		}
		if (data.geocodeAddressResult[0].Address !== addressData[i].address && (i+1) === addressData.length) {
			console.log("No address match found for " + data.geocodeAddressResult[0].Address);
		}
	}
}

function displayData() {
	
  for (let i = 0; i < addressData.length; i++) {
	  	// console.log(addressData[i].repName, addressData[i].senName); // for testing purposes
		const table = document.getElementById("fetchResult");
		const newRow = table.insertRow(i+1);
		const colAddress = newRow.insertCell(0);
		const colRep = newRow.insertCell(1);
		const colSen = newRow.insertCell(2);
		colAddress.textContent = addressData[i].address;
		colRep.textContent = addressData[i].repName;
		colSen.textContent = addressData[i].senName;
	}
}

function getData(){
	
  displayStatus.innerHTML = "Retrieiving data...";
	
  for (let i = 0; i < addressData.length; i++) {
		const address = encodeURI(addressData[i].address);
		const city = encodeURI(addressData[i].city);
		const zip = encodeURI(addressData[i].zipcode);
		const getGeocode = "https://www.mcgi.state.mi.us/ws_csstp/gis_services.svc/rest/geocodeAddress/?a=".concat(address,"%20",city,"%20",zip,"&ma=false&tk=%7bTOKEN%7d&callback=dataFetch");
				
		var script = document.createElement('script');
		script.src = getGeocode;
		document.head.appendChild(script);
		
		if(i === (addressData.length - 1)) {
			myTimeout = setTimeout(displayData, 2000);
		}			
	}
	displayStatus.innerHTML = "Data retrieval complete.";
	console.log("Get Data Complete");
}
