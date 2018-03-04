this query is grabbing funding_categories
https://data.cityofnewyork.us/resource/9haj-uwpr.json?$select=award_lead_city_agency&$group=award_lead_city_agency


/* Get all the projects an agency received money for within a certain category
https://data.cityofnewyork.us/resource/9haj-uwpr.json?$where=funding_category='Education'&$select=project_name, payment_value, funding_source&award_lead_city_agency='DOE'
*/

**QUERY TO GRAB THE INFO FOR DIRECTORY OF PUBLIC AUTHORITIES IN NYC
https://data.ny.gov/resource/n7ms-5kh9.json?$where=city='NEW YORK'

**QUERY TO GRAB ALL THE SENATORS
let instance = axios.create({
      baseURL: 'https://api.propublica.org/congress/v1/members/senate/NY/current.json',
      headers: {'X-API-Key': KEY}
    })
    console.log(instance)

    instance.get('https://api.propublica.org/congress/v1/members/house/NY/current.json')
    .then(response =>{
      this.setState({
        houseReps: response.data
      })
    })
    .catch(error =>{
      console.log('Fail')
    })