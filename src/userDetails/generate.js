const users = [
    'Shira Guevara','Prince Hutchings','Angelo Mount','Cortney Linn','Nikhil Francis','Adriana Flowers','Valentin Parks','Katya Coles','Ezra Lawrence','Sheridan Albertson','Marlon Canady','Gregorio Chen','Grecia Ridenour','Jamal Rowland','Brandan Rich','Antonia Rosen','Noe Nunes','Jennah McIntosh','Jazmin Cerda','Quentin Little','Brant Myles','Abagail Dunne','Danny Trejo','Caden Emerson','Fred Furman','Santino Ricks','Darrin Robinette','Ivana Rodgers','Brandyn Pimentel','Miranda Monahan','Alfred Robledo','Marjorie Villasenor','Aubree Koch','Cristian Ramon','Daphne Bingham','Frederick Rosales','Chris Cartwright','Harlie Abrams','Calvin Dinh','Tionne William','Maureen Willoughby','Mordechai Henning','Vincent Lynch','Gloria Rosa','Shemar Pruitt','Gavyn Heredia','Cassandra Mundy','Amiah Savage','Baby Pullen','Ashlie Strong','Lynette Randall','Joelle Tisdale','Gerald Swain','Brooke Scales','Tamia Dalton','Felix Mitchell','Ariana Wells','Brock Pratt','Clinton Grace','Kolby Clawson','Warren Fahey','Gissell Schulte','Deven Tinsley','Gabrielle Giles','Aracely Baron','Kiera Luu','Ervin Skelton','Caitlynn Damron','Zechariah Keene','Lorraine Persaud','Dillion Fultz','Lesly Hayden','Barbara Cooney','Jamil Meier','Bowen Smallwood','Sydni Pritchard','Ashli Otto','Mackenzi Franz','Larry Beavers','Ava Centeno','Ronaldo Phipps','Harold Holliday','Stefani Stafford','Howard Abraham','Rex Tisdale','Jadon Guillory','Presley Cahill','Matteo Thomason','Lisa Free','Amalia Newman','Mitchell Qualls','Marion Holley','Bryon Wofford','Aimee Fox','Simeon Schneider','Kale Hahn','Kamren Broussard','Maegan Gant','Alyse Gannon','Shakira Lance','Ronaldo Whittaker','Calista Hooker','Luisa Crisp','Shamya Slocum','Harold Mathew','Hattie Jaeger','Estefania Brandon','Darin Callaway','Gunnar Frye','Keyla Williams','Julian Box','Shyann Espinoza','Keira Knight','Robert Schrock','Dominique Ramirez','Deontae Stringer','Kole McCarthy','Nickolas Starnes','Elisa Blackman','Shelbi Stearns','Diamond Baxter','Konnor Boles','Dorian Bliss','Daniela Mcallister','Alannah Tracy','Jon Addison','Deon Atwell','Edgardo Caruso','Rose Brice','Kala Lunsford','Roberto Reynolds','Makenzie Moon','Arjun Swain','Nasir Carter','Jorge Pardo','Lorena Clemens','Javen Poore','Blake Crutchfield','Antony Woodruff','Rayshawn Winters','Jamar Worden','Baby Sample','Darren Maples','Bill Deutsch','Amalia Langford','Savannah Reagan','Aya Hand','Colton Brennan','Floyd Nettles','Raina Whaley','Amari Baird','Nyla Brinkman','Ronnie Dao','Kaili Schwarz','Jolie Schrock','Steven Skinner','Nathen Fine','Kaylea Fusco','Cesar Sauer','Cedric Yang','Semaj Killian','Javon Shannon','Taylor Billingsley','Luna Leighton','Charlotte Lara','Keegan Maguire','Roderick Bowie','Cassandra Shumate','Dayton Arrington','Abel Jerome','Phoenix Lerma','Colby Ely','Katya Pagano','Brendan Hicks','Gretchen Townsend','Harris Langford','Nikki Sauer','Floyd Cuevas','Fernando Perkins'
]
const jobs = [
    'Catalog associate','Software developement engineer - test','Device associate','Quality analyst','Business development associate','ReactJS developer','UI/UX designer','Software developement engineer'
]

const locations = [
    'Mumbai','Delhi','Chennai','Bangalore','Hyderabad','Kochin','Coimbatore','Kolkata'
]

const data = [];

for(i=0;i<1000;i++){
    const obj = {
        "id" : String(i),
        "name" : users[Math.floor(Math.random() * users.length)],
        "job" : jobs[Math.floor(Math.random() * jobs.length)],
        "location": locations[Math.floor(Math.random() * locations.length)]
    }
    data.push(obj);
}

console.log(data)


const temp = [
{id: '0', name: 'Katya Coles', job: 'Business development associate', location: 'Mumbai'},
{id: '1', name: 'Santino Ricks', job: 'Device associate', location: 'Coimbatore'},
{id: '2', name: 'Antony Woodruff', job: 'Device associate', location: 'Coimbatore'},
{id: '3', name: 'Maureen Willoughby', job: 'Business development associate', location: 'Delhi'},
{id: '4', name: 'Phoenix Lerma', job: 'ReactJS developer', location: 'Delhi'},
{id: '5', name: 'Hattie Jaeger', job: 'UI/UX designer', location: 'Hyderabad'} ,
{id: '6', name: 'Daniela Mcallister', job: 'UI/UX designer', location: 'Hyderabad'},
{id: '7', name: 'Baby Sample', job: 'UI/UX designer', location: 'Kolkata'},
{id: '8', name: 'Colton Brennan', job: 'UI/UX designer', location: 'Delhi'},
{id: '9', name: 'Warren Fahey', job: 'Catalog associate', location: 'Kolkata'},
{id: '10', name: 'Jennah McIntosh', job: 'Quality analyst', location: 'Kochin'},
{id: '11', name: 'Shyann Espinoza', job: 'ReactJS developer', location: 'Chennai'},
{id: '12', name: 'Cassandra Shumate', job: 'Catalog associate', location: 'Coimbatore'},
{id: '13', name: 'Marjorie Villasenor', job: 'UI/UX designer', location: 'Hyderabad'},
{id: '14', name: 'Aracely Baron', job: 'UI/UX designer', location: 'Coimbatore'},
{id: '15', name: 'Vincent Lynch', job: 'Quality analyst', location: 'Coimbatore'},
{id: '16', name: 'Ronaldo Whittaker', job: 'UI/UX designer', location: 'Delhi'},
{id: '17', name: 'Amalia Langford', job: 'Device associate', location: 'Kolkata'} ,
{id: '18', name: 'Deven Tinsley', job: 'Catalog associate', location: 'Chennai'},
{id: '19', name: 'Deon Atwell', job: 'UI/UX designer', location: 'Coimbatore'},
{id: '20', name: 'Keegan Maguire', job: 'Software developement engineer', location: 'Kolkata'},
{id: '21', name: 'Nikki Sauer', job: 'ReactJS developer', location: 'Hyderabad'},
{id: '22', name: 'Stefani Stafford', job: 'Device associate', location: 'Bangalore'},
{id: '23', name: 'Nikki Sauer', job: 'Catalog associate', location: 'Hyderabad'},
{id: '24', name: 'Nikhil Francis', job: 'Catalog associate', location: 'Delhi'},
{id: '25', name: 'Katya Pagano', job: 'Quality analyst', location: 'Hyderabad'},
{id: '26', name: 'Keyla Williams', job: 'UI/UX designer', location: 'Chennai'},
{id: '27', name: 'Matteo Thomason', job: 'UI/UX designer', location: 'Mumbai'},
{id: '28', name: 'Gregorio Chen', job: 'UI/UX designer', location: 'Hyderabad'},
{id: '29', name: 'Kiera Luu', job: 'Quality analyst', location: 'Hyderabad'},
{id: '30', name: 'Mackenzi Franz', job: 'ReactJS developer', location: 'Kolkata'},
{id: '31', name: 'Cedric Yang', job: 'UI/UX designer', location: 'Delhi'},
{id: '32', name: 'Sydni Pritchard', job: 'Quality analyst', location: 'Chennai'},
{id: '33', name: 'Aimee Fox', job: 'Device associate', location: 'Kolkata'},
{id: '34', name: 'Colby Ely', job: 'Business development associate', location: 'Delhi'},
{id: '35', name: 'Colton Brennan', job: 'Quality analyst', location: 'Delhi'},
{id: '36', name: 'Baby Pullen', job: 'Business development associate', location: 'Chennai'},
{id: '37', name: 'Ronaldo Phipps', job: 'Device associate', location: 'Kolkata'},
{id: '38', name: 'Alfred Robledo', job: 'Quality analyst', location: 'Chennai'},
{id: '39', name: 'Amalia Langford', job: 'ReactJS developer', location: 'Delhi'},
{id: '40', name: 'Luisa Crisp', job: 'Software developement engineer - test', location: 'Bangalore'},
{id: '41', name: 'Jolie Schrock', job: 'Device associate', location: 'Chennai'},
{id: '42', name: 'Antony Woodruff', job: 'Catalog associate', location: 'Kochin'},
{id: '43', name: 'Brock Pratt', job: 'Software developement engineer', location: 'Bangalore'},
{id: '44', name: 'Gerald Swain', job: 'Device associate', location: 'Coimbatore'},
{id: '45', name: 'Nickolas Starnes', job: 'Catalog associate', location: 'Chennai'},
{id: '46', name: 'Amari Baird', job: 'Business development associate', location: 'Delhi'},
{id: '47', name: 'Jorge Pardo', job: 'Business development associate', location: 'Kochin'},
{id: '48', name: 'Danny Trejo', job: 'Quality analyst', location: 'Kochin'},
{id: '49', name: 'Bill Deutsch', job: 'Software developement engineer - test', location: 'Kochin'},
{id: '50', name: 'Steven Skinner', job: 'Software developement engineer', location: 'Kolkata'},
{id: '51', name: 'Estefania Brandon', job: 'UI/UX designer', location: 'Kolkata'},
{id: '52', name: 'Grecia Ridenour', job: 'Device associate', location: 'Coimbatore'},
{id: '53', name: 'Mitchell Qualls', job: 'UI/UX designer', location: 'Delhi'},
{id: '54', name: 'Katya Coles', job: 'ReactJS developer', location: 'Kolkata'},
{id: '55', name: 'Julian Box', job: 'Catalog associate', location: 'Delhi'},
{id: '56', name: 'Cristian Ramon', job: 'ReactJS developer', location: 'Mumbai'},
{id: '57', name: 'Keira Knight', job: 'Device associate', location: 'Kochin'},
{id: '58', name: 'Nathen Fine', job: 'Quality analyst', location: 'Hyderabad'},
{id: '59', name: 'Nikhil Francis', job: 'Software developement engineer - test', location: 'Hyderabad'},
{id: '60', name: 'Kale Hahn', job: 'Software developement engineer', location: 'Kochin'},
{id: '61', name: 'Taylor Billingsley', job: 'Software developement engineer', location: 'Kochin'},
{id: '62', name: 'Prince Hutchings', job: 'Business development associate', location: 'Coimbatore'},
{id: '63', name: 'Harold Mathew', job: 'UI/UX designer', location: 'Bangalore'},
{id: '64', name: 'Floyd Cuevas', job: 'Software developement engineer - test', location: 'Kochin'},
{id: '65', name: 'Daphne Bingham', job: 'Device associate', location: 'Kochin'},
{id: '66', name: 'Amiah Savage', job: 'Business development associate', location: 'Mumbai'},
{id: '67', name: 'Abel Jerome', job: 'ReactJS developer', location: 'Bangalore'},
{id: '68', name: 'Felix Mitchell', job: 'Software developement engineer', location: 'Kolkata'},
{id: '69', name: 'Caden Emerson', job: 'Software developement engineer', location: 'Delhi'},
{id: '70', name: 'Konnor Boles', job: 'ReactJS developer', location: 'Chennai'},
{id: '71', name: 'Keyla Williams', job: 'Device associate', location: 'Chennai'},
{id: '72', name: 'Gissell Schulte', job: 'Quality analyst', location: 'Mumbai'},
{id: '73', name: 'Taylor Billingsley', job: 'Business development associate', location: 'Mumbai'},
{id: '74', name: 'Simeon Schneider', job: 'Catalog associate', location: 'Delhi'},
{id: '75', name: 'Harlie Abrams', job: 'Catalog associate', location: 'Kolkata'},
{id: '76', name: 'Frederick Rosales', job: 'Business development associate', location: 'Coimbatore'},
{id: '77', name: 'Kaili Schwarz', job: 'Catalog associate', location: 'Chennai'},
{id: '78', name: 'Jamil Meier', job: 'Business development associate', location: 'Kolkata'},
{id: '79', name: 'Jazmin Cerda', job: 'Software developement engineer', location: 'Kolkata'},
{id: '80', name: 'Gretchen Townsend', job: 'Software developement engineer', location: 'Chennai'},
{id: '81', name: 'Antony Woodruff', job: 'Software developement engineer', location: 'Coimbatore'},
{id: '82', name: 'Marjorie Villasenor', job: 'Quality analyst', location: 'Kolkata'},
{id: '83', name: 'Arjun Swain', job: 'ReactJS developer', location: 'Hyderabad'},
{id: '84', name: 'Jon Addison', job: 'ReactJS developer', location: 'Coimbatore'},
{id: '85', name: 'Amiah Savage', job: 'Device associate', location: 'Hyderabad'},
{id: '86', name: 'Deven Tinsley', job: 'Business development associate', location: 'Kolkata'},
{id: '87', name: 'Calvin Dinh', job: 'Catalog associate', location: 'Mumbai'},
{id: '88', name: 'Larry Beavers', job: 'Software developement engineer', location: 'Kochin'},
{id: '89', name: 'Kale Hahn', job: 'Software developement engineer - test', location: 'Mumbai'},
{id: '90', name: 'Warren Fahey', job: 'Software developement engineer', location: 'Mumbai'},
{id: '91', name: 'Kala Lunsford', job: 'Software developement engineer', location: 'Bangalore'},
{id: '92', name: 'Jon Addison', job: 'ReactJS developer', location: 'Bangalore'},
{id: '93', name: 'Charlotte Lara', job: 'UI/UX designer', location: 'Bangalore'},
{id: '94', name: 'Dorian Bliss', job: 'Business development associate', location: 'Bangalore'},
{id: '95', name: 'Brooke Scales', job: 'Catalog associate', location: 'Mumbai'},
{id: '96', name: 'Brock Pratt', job: 'Software developement engineer', location: 'Bangalore'},
{id: '97', name: 'Harris Langford', job: 'ReactJS developer', location: 'Kochin'},
{id: '98', name: 'Ashli Otto', job: 'Quality analyst', location: 'Coimbatore'},
{id: '99', name: 'Valentin Parks', job: 'Device associate', location: 'Bangalore'}
]


const toStore = JSON.stringify(temp);

console.log(toStore)