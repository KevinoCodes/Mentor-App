var mentoremail

function Mentorform(){
    var SearchDiv = document.getElementById("SearchDiv");
    if (SearchDiv.style.display === "none") {
        SearchDiv.style.display = "block";
    } else {
        SearchDiv.style.display = "none";
        document.getElementById('toptext').innerHTML='Sign up to tutor someone today!'
        document.getElementById('mentorpanelbutton').innerHTML='Find a mentor'
        
    }

    var MentorDiv = document.getElementById("MentorDiv");
    if (MentorDiv.style.display === "block") {
        MentorDiv.style.display = "none";
        document.getElementById('toptext').innerHTML='Search for a mentor here'
        document.getElementById('mentorpanelbutton').innerHTML='Become a mentor'
    } else {
        MentorDiv.style.display = "block";
    }

}

function settingsOP(){
    var SearchDiv = document.getElementById("aboutus");
    if (SearchDiv.style.display === "none") {
        SearchDiv.style.display = "block";
    } else {
        SearchDiv.style.display = "none";
        document.getElementById('sidebarsubtitle').innerHTML='Site Settings'
        document.getElementById('settingsbutton').innerHTML='Back'
        
    }

    var MentorDiv = document.getElementById("settingstab");
    if (MentorDiv.style.display === "block") {
        MentorDiv.style.display = "none";
        document.getElementById('sidebarsubtitle').innerHTML='About us'
        document.getElementById('settingsbutton').innerHTML='Site settings'
    } else {
        MentorDiv.style.display = "block";
    }
}

function mentorinfo(){

    var mentoremail = document.getElementById('mentoremail1').value;

    var mentorname= document.getElementById('mentorname1').value;

    var mentorgrade = document.getElementById('mentorgrade1').value;

    var mentordescription = document.getElementById('mentordescription1').value;

    var mentorsubject= document.getElementById('mentorsubject1').value;

    console.log(mentoremail)
    console.log(mentorgrade)
    console.log(mentorname)
    console.log(mentordescription)
    console.log(mentorsubject)


    var mentorRef = firebase.database().ref('mentors');

    function saveMentor(mentoremail, mentorgrade, mentorname, mentordescription, mentorsubject){
        var newMentorRef = mentorRef.set({
            name:mentorname
        })
}
}

