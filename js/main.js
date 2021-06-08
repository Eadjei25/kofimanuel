//Table of Content 
const links= [
    {
        label: 'Week01 Notes and Exercises',
        url: 'week01/index.html',
        title: 'Week 1 link'
    },
    {
        label: 'Week02 Notes and Exercises',
        url: 'week02/index.html',
        title: 'Week 2 Link'
    },
    {
        label: 'Week03 Notes and Exercises',
        url: 'week03/index.html',
        title: 'Week 3 Link'
    },
    {
        label: 'week04 Notes and Exercises',
        url: 'week04/index.html',
        title: 'Week 4 Link'
    },
    {
        label: 'week05 Notes and Exercises',
        url: 'week05/index.html',
        title: 'Week 5 Link'
    },
    {
        label: 'week06 Challenge and Notes',
        url: 'week06/index.html',
        title: 'Week 6 Link'
    },
    {
        label: 'week07 Notes and Exercises',
        url: 'week07/index.html',
        title: 'Week 7 Link'
    }
]
function contentTable(){
    for(let i=0; i < links.length; i++){
        let elem= document.getElementsByTagName('ol');
        let list= document.createElement('li');
        let anchor= document.createElement('a');
        anchor.innerText= links[i].label;
        anchor.href= links[i].url;
        anchor.title= links[i].title;
        list.appendChild(anchor);
        elem[0].appendChild(list);
    }
}
contentTable();