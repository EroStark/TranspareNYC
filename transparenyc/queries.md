this query is grabbing funding_categories
https://data.cityofnewyork.us/resource/9haj-uwpr.json?$select=award_lead_city_agency&$group=award_lead_city_agency


/* Get all the projects an agency received money for within a certain category
https://data.cityofnewyork.us/resource/9haj-uwpr.json?$where=funding_category='Education'&$select=project_name, payment_value, funding_source&award_lead_city_agency='DOE'
*/