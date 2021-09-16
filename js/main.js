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
        label: 'Week04 Notes and Exercises',
        url: 'week04/index.html',
        title: 'Week 4 Link'
    },
    {
        label: 'Week05 Notes and Exercises',
        url: 'week05/index.html',
        title: 'Week 5 Link'
    },
    {
        label: 'Week06 Challenge and Notes',
        url: 'week06/index.html',
        title: 'Week 6 Link'
    },
    {
        label: 'Week07 Notes and Exercises',
        url: 'week07/index.html',
        title: 'Week 7 Link'
    },
    {
        label: 'Week08 Notes an Exercises',
        url: '/week08/',
        title: 'Week 8 Link',
    },
    {
        label: 'Week09 Notes and Exercises',
        url: 'week09/',
        title: 'Week 9 Link'

    },
    {
        label: 'Week10 Notes and Exercises',
        url: 'week10/',
        title: 'Week 10 Link'

    },
    {
        label: 'Week11 Notes and Exercises',
        url: 'week11/',
        title: 'Week 11 Link'

    },
    {
        label: 'Week12 Notes and Exercises',
        url: 'week12/',
        title: 'Week 12 Link'

    },
    {
        label: 'Week13 Notes and Exercises',
        url: 'week13/',
        title: 'Week 13 Link'

    },
    {
        label: 'Week14 Notes and Exercises',
        url: 'week14/',
        title: 'Week 14 Link'

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