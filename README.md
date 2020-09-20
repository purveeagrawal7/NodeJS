# NodeJS
Creating a script that will take a JSON object and import the JSON path and the corresponding values in a CSV file

let the object is as below:

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

so, what the first script(exportObjectToCSV.js) is going to do is:

-> It will store the above object in a CSV file as below:

JSON Path                       Value
name                            Purvee Agrawal
address.personal.city           Kolkata
address.personal.state          WB
address.personal.area           Salt Lake
address.business.city           Bangalore
address.business.area.landmark  Airport


Now the second script(TransformCSVDataToJSON.js) will convert the above path again and value back to the JSON object:
{
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

and it will store this object to a JSON file.
