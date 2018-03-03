this query is grabbing funding_categories
https://data.cityofnewyork.us/resource/9haj-uwpr.json?$select=award_lead_city_agency&$group=award_lead_city_agency


get all the projects under a certain agency under a certain category
https://data.cityofnewyork.us/resource/9haj-uwpr.json?$where=award_lead_city_agency='<NAME OF AGENCY>' AND funding_category='<NAME OF CATEGORY>'
