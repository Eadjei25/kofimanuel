//Table of Content
const links = [
	{
		label: "Week01 Notes and Exercises",
		url: "week01/",
		title: "Week 1 link",
	},
	{
		label: "Week02 Notes and Exercises",
		url: "week02/",
		title: "Week 2 Link",
	},
	{
		label: "Week03 Notes and Exercises",
		url: "week03/",
		title: "Week 3 Link",
	},
	{
		label: "Week04 Notes and Exercises",
		url: "week04/",
		title: "Week 4 Link",
	},
	{
		label: "Week05 Notes and Exercises",
		url: "week05/",
		title: "Week 5 Link",
	},
	{
		label: "Week06 Challenge and Notes",
		url: "week06/",
		title: "Week 6 Link",
	},
	{
		label: "Week07 Notes and Exercises",
		url: "week07/",
		title: "Week 7 Link",
	},
];
/*
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
*/

const elem = document.getElementsByTagName("ol");
links.forEach((link) => {
	const list = document.createElement("li");
	const anchor = document.createElement("a");
	anchor.setAttribute("href", link.url);
	anchor.setAttribute("title", link.title);
	anchor.innerText = link.label;
	list.appendChild(anchor);
	elem[0].appendChild(list);
});
