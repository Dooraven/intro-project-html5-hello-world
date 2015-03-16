var bio = {
		name : 'Franklin Delano Roosevelt',
		role : 'Leader of the Free World',
		contacts : {
			mobile: '202-456-1414',
			skype: 'fdr',
			email: 'president@whitehouse.gov',
			github: 'fdr',
			twitter: 'http://www.twitter.com/whitehouse',
			location: 'Washington DC, USA'
			},
		welcomeMessage :'Franklin Delano Roosevelt commonly known by his initials FDR, was an American statesman and political leader who served as the 32nd President of the United States. A Democrat, he won a record four elections and served from March 1933 to his death in April 1945. He was a central figure in world events during the mid-20th century, leading the United States during a time of worldwide economic depression and total war. A dominant leader of the Democratic Party, he built a New Deal Coalition that united labor unions, big city machines, white ethnics, African Americans, and rural white Southerners. The New Deal Coalition realigned American politics after 1932, creating the Fifth Party System and defining American liberalism for the middle third of the 20th century. - Wikipedia, 2015 ',
		skills : ['Getting Elected','Winning a War','Governing a Country','Getting Elected Again', 'Establishing the new deal'],
		bioPic: 'images/fdr.jpg',
		display: function () {
			var formattedName = HTMLheaderName.replace('%data%',this.name);
			var formattedRole = HTMLheaderRole.replace('%data%',this.role);
			var formattedBioPic = HTMLbioPic.replace('%data%',this.bioPic);
			var formattedMessage = HTMLWelcomeMsg.replace('%data%',this.welcomeMessage);
			$('#header').append(HTMLskillsStart);
			var formattedMobile = HTMLmobile.replace('%data%',this.contacts['mobile']);
			var formattedEmail = HTMLemail.replace('%data%',this.contacts['email']);
			var formattedSkype = HTMLcontactGeneric.replace('%contact%','skype').replace('%data%',bio.contacts.skype);
			var formattedGitHub = HTMLcontactGeneric.replace('%contact%','github').replace('%data%',bio.contacts.github);

			$('#footerContacts').append(formattedMobile,formattedEmail,formattedSkype,formattedGitHub);
			$('#header').prepend(formattedRole);
			$('#header').prepend(formattedName);
			$('#header').append(formattedBioPic);
			$('#header').append(formattedMessage);
			for (skill in this.skills) {
				var formattedSkills = HTMLskills.replace('%data%', bio.skills[skill]);
				$('#skills').append(formattedSkills);
			}
		}
}

/*
Opted not to use this code as it does not seem to work
function inName (name) {
	name.split(' ');
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice[0,1].toUpperCase() + name[0].slice[1].toLowerCase();
	return name[0] + ' ' + name[1];
}
inName();

$('#main').append(internationalizeButton);

*/
var work = {
	jobs: [
	{
	employer : 'People of the United States of America',
	title : 'President of the United States of America',
	location : 'Washington, DC, United States of America',
	dates : ' March 4, 1933 - April 12, 1945',
	description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tempus turpis. In interdum pretium ornare. Duis eget erat fermentum, accumsan felis molestie, lacinia lacus. Phasellus et sapien at arcu finibus gravida malesuada eu eros. Donec rutrum hendrerit feugiat. Sed interdum, eros sit amet condimentum facilisis, enim erat convallis arcu, sit amet malesuada risus arcu vitae dui. Fusce non malesuada erat, sed volutpat dui. Phasellus condimentum leo quis fermentum pharetra. Pellentesque sagittis mi eu consectetur aliquam. In pellentesque dignissim semper. Duis gravida ex lorem, molestie pharetra nisl dictum at. Etiam dapibus porta pellentesque. In sit amet sapien quis turpis dapibus hendrerit ut quis nunc.'
	},
	{
	employer : 'People of New York City',
	title : 'Governor',
	location : 'New York City, NYC, United States of America',
	dates : 'January 1, 1929 – December 31, 1932',
	description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tempus turpis. In interdum pretium ornare. Duis eget erat fermentum, accumsan felis molestie, lacinia lacus. Phasellus et sapien at arcu finibus gravida malesuada eu eros. Donec rutrum hendrerit feugiat. Sed interdum, eros sit amet condimentum facilisis, enim erat convallis arcu, sit amet malesuada risus arcu vitae dui. Fusce non malesuada erat, sed volutpat dui. Phasellus condimentum leo quis fermentum pharetra. Pellentesque sagittis mi eu consectetur aliquam. In pellentesque dignissim semper. Duis gravida ex lorem, molestie pharetra nisl dictum at. Etiam dapibus porta pellentesque. In sit amet sapien quis turpis dapibus hendrerit ut quis nunc.'
	},
	{
	employer : 'United States Navy',
	title : 'Assistant Secretary to the Navy',
	location : 'Washington, DC, United States of America',
	dates : 'March 17, 1913 – August 26, 1920',
	description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tempus turpis. In interdum pretium ornare. Duis eget erat fermentum, accumsan felis molestie, lacinia lacus. Phasellus et sapien at arcu finibus gravida malesuada eu eros. Donec rutrum hendrerit feugiat. Sed interdum, eros sit amet condimentum facilisis, enim erat convallis arcu, sit amet malesuada risus arcu vitae dui. Fusce non malesuada erat, sed volutpat dui. Phasellus condimentum leo quis fermentum pharetra. Pellentesque sagittis mi eu consectetur aliquam. In pellentesque dignissim semper. Duis gravida ex lorem, molestie pharetra nisl dictum at. Etiam dapibus porta pellentesque. In sit amet sapien quis turpis dapibus hendrerit ut quis nunc.'
	}
	],
	display: function () {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace('%data%', this.jobs[job].location);
		var formattedDates = HTMLworkDates.replace('%data%', this.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace('%data%', this.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDescription);
		}
}
}

var projects = {
	projects: [{
		title : '1932 Presidential Election' ,
		dates : '1932',
		description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tempus turpis. In interdum pretium ornare. Duis eget erat fermentum, accumsan felis molestie, lacinia lacus. Phasellus et sapien at arcu finibus gravida malesuada eu eros. Donec rutrum hendrerit feugiat. Sed interdum, eros sit amet condimentum facilisis, enim erat convallis arcu, sit amet malesuada risus arcu vitae dui. Fusce non malesuada erat, sed volutpat dui. Phasellus condimentum leo quis fermentum pharetra. Pellentesque sagittis mi eu consectetur aliquam. In pellentesque dignissim semper. Duis gravida ex lorem, molestie pharetra nisl dictum at. Etiam dapibus porta pellentesque. In sit amet sapien quis turpis dapibus hendrerit ut quis nunc',
		images : ['images/1932pres.png','images/1932.png'],
		},
{
		title : '1932 Presidential Election' ,
		dates : '1932',
		description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tempus turpis. In interdum pretium ornare. Duis eget erat fermentum, accumsan felis molestie, lacinia lacus. Phasellus et sapien at arcu finibus gravida malesuada eu eros. Donec rutrum hendrerit feugiat. Sed interdum, eros sit amet condimentum facilisis, enim erat convallis arcu, sit amet malesuada risus arcu vitae dui. Fusce non malesuada erat, sed volutpat dui. Phasellus condimentum leo quis fermentum pharetra. Pellentesque sagittis mi eu consectetur aliquam. In pellentesque dignissim semper. Duis gravida ex lorem, molestie pharetra nisl dictum at. Etiam dapibus porta pellentesque. In sit amet sapien quis turpis dapibus hendrerit ut quis nunc',
		images : ['images/1932pres.png','images/1932.png'],
		},
{
		title : '1932 Presidential Election' ,
		dates : '1932',
		description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tempus turpis. In interdum pretium ornare. Duis eget erat fermentum, accumsan felis molestie, lacinia lacus. Phasellus et sapien at arcu finibus gravida malesuada eu eros. Donec rutrum hendrerit feugiat. Sed interdum, eros sit amet condimentum facilisis, enim erat convallis arcu, sit amet malesuada risus arcu vitae dui. Fusce non malesuada erat, sed volutpat dui. Phasellus condimentum leo quis fermentum pharetra. Pellentesque sagittis mi eu consectetur aliquam. In pellentesque dignissim semper. Duis gravida ex lorem, molestie pharetra nisl dictum at. Etiam dapibus porta pellentesque. In sit amet sapien quis turpis dapibus hendrerit ut quis nunc',
		images : ['images/1932pres.png','images/1932.png'],
		}
],
	display: function () {
		$('#projects').append(HTMLprojectStart);
		for (pro in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects[pro].title);
		var formattedDates = HTMLprojectDates.replace('%data%', this.projects[pro].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[pro].description);
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[pro].images);
        $('.project-entry:last').append(formattedTitle);
		$('.project-entry:last').append(formattedDates);
		$('.project-entry:last').append(formattedDescription);
		for (image in projects.projects[pro].images) {
			var formattedImage = HTMLprojectImage.replace('%data%',projects.projects[pro].images[image]);
			$('.project-entry:last').append(formattedImage);
		}
		$('.project-entry:last').append('<hr/>');

			}
	}
}

var education = {
	schools: [
		{
		name : 'Harvard University' ,
		location : 'Boston, MA, United States of America',
		degree : 'Bachelors of Arts',
		major : ['History'],
		dates : 1903,
		url : 'http://www.harvard.edu'
		}
	],
	onlineCourses: [
	{
     title: 'How to be a President 101',
     school: 'udacity',
     date: 1929,
     url: 'http://www.udacity.com'
	},
	{
     title: 'Governing 101',
     school: 'udacity',
     date: 1929,
     url: 'http://www.udacity.com'
	},
	{
     title: 'Domestic Affairs 101',
     school: 'udacity',
     date: 1929,
     url: 'http://www.udacity.com'
	},
	{
     title: 'Foreign Affairs 101',
     school: 'udacity',
     date: 1929,
     url: 'http://www.udacity.com'
	},
],
	display: function () {
		$('#education').append(HTMLschoolStart);

	for(school in education.schools) {


		var formattedName = HTMLschoolName.replace('%data%', this.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace('%data%', this.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace('%data%', this.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace('%data%', this.schools[school].major);
		var formattedDates = HTMLschoolDates.replace('%data%', this.schools[school].dates);
		var formattedURL = HTMLonlineURL.replace('%data%', this.schools[school].url);
		$('.education-entry:last').append(formattedName);
		$('.education-entry:last').append(formattedLocation);
		$('.education-entry:last').append(formattedDegree);
		$('.education-entry:last').append(formattedMajor);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedURL);
	}
	$('.education-entry').append(HTMLonlineClasses);
	for(onlineCourse in education.onlineCourses) {

		var formattedTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[onlineCourse].title);
		var formattedSchool= HTMLonlineSchool.replace('%data%', this.onlineCourses[onlineCourse].school);
		var formattedDates = HTMLonlineDates.replace('%data%', this.onlineCourses[onlineCourse].date);
		var formattedURL = HTMLonlineURL.replace('%data%', this.onlineCourses[onlineCourse].url);

		$('.education-entry:last').append(formattedTitle);
		$('.education-entry:last').append(formattedSchool);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedURL);
	}
	}
}

$('#mapDiv').append(googleMap);
bio.display();
work.display();
projects.display();
education.display();

