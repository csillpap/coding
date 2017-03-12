var profile = "I am a web developer developing in html css and javascript";
var stops = ["i","am","a","and"]; //words to be removed from profile
var words = profile.split(" ");

function cleanProfile(words,stops) {
	var newProfile = [];

	for (i=0;i<words.length;i++){
		if (stops.indexOf(words[i].toLowerCase()) < 0) {
         newProfile.push(words[i])
		}
         
	}
return newProfile;
}

console.log("New Profile");
console.log(cleanProfile(words,stops));