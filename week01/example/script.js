//Read and retrieve the story name stored in the local storage
function loadStory(){
    let storyName= document.getElementById('name').value;
    let storyHTML= localStorage.getItem(storyName);
    document.getElementById('story').value= storyHTML;
}
//Save the story name as a key to access the story in the browser 
function saveStory(){
    let storyName= document.getElementById('name').value;
    let storyHTML= document.getElementById('story').value;
    localStorage.setItem(storyName, storyHTML);
}
//Simply displays the story in a div below the story input field
function displayStory(){
    let storyHTML= document.getElementById('story').value;
    document.getElementById('display').innerHTML= storyHTML;
}	
//Delete the data
function deleteStory(){
    let storyName= document.getElementById('name').value;
    let assure= window.confirm('Do you want to delete your story');
    let box= window.prompt('confirm the story name');
    if(assure== true && box== storyName){
        localStorage.removeItem(storyName);
        window.alert('Removed succesfully');
    }
    else {
        window.alert('Incorrectname or no input');
    }
}