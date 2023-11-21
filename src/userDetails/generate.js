const users = [
    'Shira Guevara','Prince Hutchings','Angelo Mount','Cortney Linn','Nikhil Francis','Adriana Flowers','Valentin Parks','Katya Coles','Ezra Lawrence','Sheridan Albertson','Marlon Canady','Gregorio Chen','Grecia Ridenour','Jamal Rowland','Brandan Rich','Antonia Rosen','Noe Nunes','Jennah McIntosh','Jazmin Cerda','Quentin Little','Brant Myles','Abagail Dunne','Danny Trejo','Caden Emerson','Fred Furman','Santino Ricks','Darrin Robinette','Ivana Rodgers','Brandyn Pimentel','Miranda Monahan','Alfred Robledo','Marjorie Villasenor','Aubree Koch','Cristian Ramon','Daphne Bingham','Frederick Rosales','Chris Cartwright','Harlie Abrams','Calvin Dinh','Tionne William','Maureen Willoughby','Mordechai Henning','Vincent Lynch','Gloria Rosa','Shemar Pruitt','Gavyn Heredia','Cassandra Mundy','Amiah Savage','Baby Pullen','Ashlie Strong','Lynette Randall','Joelle Tisdale','Gerald Swain','Brooke Scales','Tamia Dalton','Felix Mitchell','Ariana Wells','Brock Pratt','Clinton Grace','Kolby Clawson','Warren Fahey','Gissell Schulte','Deven Tinsley','Gabrielle Giles','Aracely Baron','Kiera Luu','Ervin Skelton','Caitlynn Damron','Zechariah Keene','Lorraine Persaud','Dillion Fultz','Lesly Hayden','Barbara Cooney','Jamil Meier','Bowen Smallwood','Sydni Pritchard','Ashli Otto','Mackenzi Franz','Larry Beavers','Ava Centeno','Ronaldo Phipps','Harold Holliday','Stefani Stafford','Howard Abraham','Rex Tisdale','Jadon Guillory','Presley Cahill','Matteo Thomason','Lisa Free','Amalia Newman','Mitchell Qualls','Marion Holley','Bryon Wofford','Aimee Fox','Simeon Schneider','Kale Hahn','Kamren Broussard','Maegan Gant','Alyse Gannon','Shakira Lance','Ronaldo Whittaker','Calista Hooker','Luisa Crisp','Shamya Slocum','Harold Mathew','Hattie Jaeger','Estefania Brandon','Darin Callaway','Gunnar Frye','Keyla Williams','Julian Box','Shyann Espinoza','Keira Knight','Robert Schrock','Dominique Ramirez','Deontae Stringer','Kole McCarthy','Nickolas Starnes','Elisa Blackman','Shelbi Stearns','Diamond Baxter','Konnor Boles','Dorian Bliss','Daniela Mcallister','Alannah Tracy','Jon Addison','Deon Atwell','Edgardo Caruso','Rose Brice','Kala Lunsford','Roberto Reynolds','Makenzie Moon','Arjun Swain','Nasir Carter','Jorge Pardo','Lorena Clemens','Javen Poore','Blake Crutchfield','Antony Woodruff','Rayshawn Winters','Jamar Worden','Baby Sample','Darren Maples','Bill Deutsch','Amalia Langford','Savannah Reagan','Aya Hand','Colton Brennan','Floyd Nettles','Raina Whaley','Amari Baird','Nyla Brinkman','Ronnie Dao','Kaili Schwarz','Jolie Schrock','Steven Skinner','Nathen Fine','Kaylea Fusco','Cesar Sauer','Cedric Yang','Semaj Killian','Javon Shannon','Taylor Billingsley','Luna Leighton','Charlotte Lara','Keegan Maguire','Roderick Bowie','Cassandra Shumate','Dayton Arrington','Abel Jerome','Phoenix Lerma','Colby Ely','Katya Pagano','Brendan Hicks','Gretchen Townsend','Harris Langford','Nikki Sauer','Floyd Cuevas','Fernando Perkins'
]
const jobs = [
    'Catalog associate','Software developement engineer - test','Device associate','Quality analyst','Business development associate','ReactJS developer','UI/UX designer','Software developement engineer'
]
const locations = [
    'Mumbai','Delhi','Chennai','Bangalore','Hyderabad','Kochin','Coimbatore','Kolkata','Uttar pradesh','Pune'
]
const companies = [
    'Infosys','Amazon','TCS','Wipro','Tech mahindra','LTI Mindtree','HCL Technologies', 'ITC',' Cognizant','Cyient','Larson&Turbo','Capgemini'
]
const relocate = ['Yes','No']
const shift = ['Day','Night','Flexible']

const data = [];

for(i=0;i<100;i++){
    const obj = {
        "id" : String(i),
        "name" : users[Math.floor(Math.random() * users.length)],
        "job" : jobs[Math.floor(Math.random() * jobs.length)],
        "location": locations[Math.floor(Math.random() * locations.length)],
        "companies": companies[Math.floor(Math.random() * companies.length)],
        "experience": Math.floor(Math.random() * 11),
        "salary": String(Math.floor(Math.random() * 15) + 2),
        "relocate": relocate[Math.floor(Math.random() * relocate.length)],
        "shift": shift[Math.floor(Math.random() * shift.length)]
    }
    data.push(obj);
}