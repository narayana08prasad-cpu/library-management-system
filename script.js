const books = [
"Python Programming",
"Java Programming",
"HTML & CSS",
"JavaScript",
"Database Management",
"C Programming",
"C++ Programming",
"Operating System",
"Computer Networks",
"Data Structures"
];

function searchBook(){

let search=document.getElementById("searchInput").value.toLowerCase();

let result=books.filter(book=>book.toLowerCase().includes(search));

if(result.length>0){
alert("Book Found:\n\n"+result.join("\n"));
}
else{
alert("Book Not Found");
}

}

function startVoiceSearch(){

if(!('webkitSpeechRecognition' in window)){
alert("Voice Search is not supported.");
return;
}

const recognition=new webkitSpeechRecognition();

recognition.lang="en-US";

recognition.start();

recognition.onresult=function(event){

let speech=event.results[0][0].transcript;

document.getElementById("searchInput").value=speech;

searchBook();

};

recognition.onerror=function(){
alert("Voice Recognition Error");
};

}