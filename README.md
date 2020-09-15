# NodeJS
Creating a script that will take a JSON object and import the JSON path for the corresponding values

let my object is as below:

let obj  = {
  name: "Purvee Agrawal",
  address: {
    personal: {
      city: "Kolkata",
      state: "WB",
      area: "Salt Lake",
    },
    business: {
      city: "Bangalore",
      area: {
        landmark: "Airport",
      }
    }
  }
}

so, what the script is going to do is:

-> It will store the above object in a CSV file as below:

JSON Path                       Value
name                            Purvee Agrawal
address.personal.city           Kolkata
address.personal.state          WB
address.personal.area           Salt Lake
address.business.city           Bangalore
address.business.area.landmark  Airport
