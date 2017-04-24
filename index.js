function getData(){
    var endpoint = 'https://data.lacity.org/resource/akdk-f86v.json'
    
  fetch(endpoint)
    .then(function(data){
        return data.json()
    })// turn data into JSON
    .then(function(json){
        
      var finalHTML = ''
        
      json.forEach(function(item){
            var cardItem = `
             <div class="row">
    <div class="col s8 m9">
      <div class="card">
        <div class="card-image">
          <img src="http://rodeocdn.1parkplace.com/wp-content/uploads/2013/10/iStock_000009160526Large.jpg">
          
          <span class="card-title">${item.facility_title}</span>
        </div>
        <div class="card-content">
          <p>Working Hours: ${item.hours_open} </p>
          <p>Contact @ ${item.phone}</p>
          <p> Location: ${item.location_1_location
            + item.location_1_state + item.location_1_zip}</p>
        </div>
      </div>
    </div>
  </div>
             `
           
        
            // <p> Community Investment Service Locations + item.facility_title + item.hours_open + item.location_1_location
          //  + item.location_1_state + item.location_1_zip + item.phone     <span class="card-title">${item.facility_title}</span>
         //   .<p>
            finalHTML += cardItem
        })
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML= finalHTML
   })
           .catch(function(error){
        console.log(error )
        })
      
}
        
    