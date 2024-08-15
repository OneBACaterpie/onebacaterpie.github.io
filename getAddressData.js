//Let's create an array
const grantees = [];

//Let's fill the array with four test addresses
grantees[0] = {name:"MI Capitol", address:"100 N Capitol Ave", city:"Lansing", zipcode:"48933"};
grantees[1] = {name:"Comerica Park", address:"2100 Woodward Ave", city:"Detroit", zipcode:"48201"};
grantees[2] = {name:"Van Andel Arena", address:"130 Fulton St W", city:"Grand Rapids", zipcode:"49503"};
grantees[3] = {name:"Bronner's Christmas Wonderland", address:"25 Christmas Ln", city:"Frankenmuth", zipcode:"48754"};

console.log(grantees.length); //4

async function getData(){
	const displayStatus = document.getElementById("fetchStatus");
	const displayOutput = document.getElementById("fetchOutput");
	displayStatus.innerHTML = "Retrieiving data...";
	
	for (let  i = 0;  i < grantees.length; i++) {
		const address = grantees[i].address;
		const city = grantees[i].city;
		const zip = grantees[i].zipcode;
		const getRep = "https://www.house.mi.gov/FindARepresentative?address=".concat(address,"&city=",city,"&zipcode=",zip);
		const getSen = "https://www.senate.michigan.gov/findyoursenator/results?Address=".concat(address,"&City=",city,"&Zip=",zip);
		const getGeocode = "https://www.mcgi.state.mi.us/ws_csstp/gis_services.svc/rest/geocodeAddress/?a=".concat(address," ",city," ",zip,"&ma=false&tk=%7bTOKEN%7d");
		
		// Get Rep data
		const repResponse = await fetch(getRep);
		const repData = await repResponse.json();
		const repObj = await JSON.parse(repData);
		// Set repName
		grantees[i].repName = repObj.printName;
		console.log(grantees[i].repName);

		// Get Sen data
		const senResponse = await fetch(getSen);
		const senData = await senResponse.json();
		const senObj = await JSON.parse(senData);
		console.log(senObj);
	  	// Set senName
		grantees[i].senName = senObj.printName;
		console.log(grantees[i].senName;

		// Display output
		const newP = document.createElement("p");
		p.textContent = grantees[i].name.concat(": ", grantees[i].repName,", ", grantees[i].senName);

    		// Print Leg Names to table
		//const table = document.getElementById("Legislators");
		//const newRow = table.insertRow(i+1);
		//const colName = newRow.insertCell(0);
		//const colRep = newRow.insertCell(1);
		//const colSen = newRow.insertCell(2);
		//colName.textContent = grantees[i].name;
		//colRep.textContent = grantees[i].repName;
		//colSen.textContent = grantees[i].senName;
	}
	
	displayStatus.innerHTML = "Data retrieval complete.";
}
