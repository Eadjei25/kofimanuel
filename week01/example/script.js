//Save the story name as a key to access the story in the browser 
function saveStory(){
    let storyName= document.getElementById('name').value;
    let storyHTML= document.getElementById('story').value;
    localStorage.setItem(storyName, storyHTML);
}

//Read and retrieve the story name stored in the local storage
function loadStory(){
    let storyName= document.getElementById('name').value;
    let storyHTML= localStorage.getItem(storyName);
    document.getElementById('story').value= storyHTML;
}

//Simply displays the story in a div below the story input field
function displayStory(){
    let storyHTML= document.getElementById('story').value;
    document.getElementById('display').innerHTML= storyHTML;
}	

//This deletes the data
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

//To avoid declaring the same vars, you can declare the var outside of a block and access it inside the blocks you need it.