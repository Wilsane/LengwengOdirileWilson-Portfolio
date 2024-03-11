

// Display project video buttons
const dafVid=document.getElementById('daf-vid');
const ogsVid=document.getElementById('ogs-vid');
const ogsdVid=document.getElementById('ogsd-vid');
const avqVid=document.getElementById('avq-vid');

//Display project information buttons
const dafInfo=document.querySelector('.daf-info');
const ogsInfo=document.querySelector('.ogs-info');
const ogsdInfo=document.querySelector('.ogsd-info');
const avqInfo=document.querySelector('.avq-info');

//Information modal elements
const infoTitle=document.querySelector('.project-info-title');
const summary=document.querySelector('.project-summary');
const usedItems=document.getElementById('used-items');

//Video modal elements
const videoPlayer=document.querySelector('#videoPlayer');

//Information modal
dafInfo.addEventListener('click',function(){
    console.log("Daf info clicked");
    infoTitle.innerHTML="Disaster Alleviation Foundation";
    summary.innerHTML="The Disaster Alleviation Foundation application is a cutting-edge platform"+
                        " dedicated to mitigating the impact of natural disasters and promoting swift relief efforts."+
                        "This innovative tool combines real-time data analytics, community engagement, and resource"+
                        " coordination to streamline disaster response and recovery.";
    const usedInDaf=['C#','ASP.NET (MVC)','JavaScript','CSS and HTML','Bootstrap','Azure Database'];
    usedItems.innerHTML='';
    usedInDaf.forEach(function(items){
        const li=document.createElement('li');
        li.textContent=items;
        usedItems.appendChild(li);
    });
});
ogsInfo.addEventListener('click',function(){
    infoTitle.innerHTML="Organised Semester WebApp";
    summary.innerHTML="The 'Organized Semester' application is a comprehensive organizational tool "+
                        "designed to empower students in managing their academic life efficiently."+
                        " This user-friendly application serves as a virtual assistant, offering features"+
                        "that streamline course management, task tracking, and overall academic planning.";
    const usedInOgs=['C#','ASP.NET (MVC)','JavaScript','CSS and HTML','Bootstrap','MSSQL'];
    usedItems.innerHTML='';
    usedInOgs.forEach(function(items){
        const li=document.createElement('li');
        li.textContent=items;
        usedItems.appendChild(li);
    });

});
ogsdInfo.addEventListener('click',function(){
    infoTitle.innerHTML="Organised Semester Desktop";
    summary.innerHTML="The 'Organized Semester' application is a comprehensive organizational tool "+
                        "designed to empower students in managing their academic life efficiently."+
                        " This user-friendly application serves as a virtual assistant, offering features"+
                        "that streamline course management, task tracking, and overall academic planning.";
    const usedInOgsd=['C#','WPF','MahApps.Metro Framework','Material Design','MSSQL'];
    usedItems.innerHTML='';
    usedInOgsd.forEach(function(items){
        const li=document.createElement('li');
        li.textContent=items;
        usedItems.appendChild(li);
    });

});
avqInfo.addEventListener('click',function(){
    infoTitle.innerHTML="Aviary Quest";
    summary.innerHTML="'AviaryQuest' is a mobile application designed to engage users"+ 
    " in birdwatching adventures. With an intuitive interface, users can easily identify birds, "+
    "track sightings, and learn about various species. The app offers real-time bird alerts based on "+
    "location, enhancing the birdwatching experience. Users can also participate in challenges and earn "+
    "rewards for their observations. AviaryQuest aims to foster a community of bird enthusiasts while "+
    "promoting conservation efforts.";
    const usedInOgsd=['JAVA','Android','Firebase Database'];
    usedItems.innerHTML='';
    usedInOgsd.forEach(function(items){
        const li=document.createElement('li');
        li.textContent=items;
        usedItems.appendChild(li);
    });

});



//Video modal
dafVid.addEventListener('click',function(){
    videoPlayer.src="Videos/DisasterAlleviation.mkv";
});
ogsVid.addEventListener('click',function(){
    videoPlayer.src="Videos/OrganisesSem_WebApp.mkv";
});
ogsdVid.addEventListener('click',function(){
    videoPlayer.src="Videos/OrganizedSem_Desk.mkv";
});
avqVid.addEventListener('click',function(){
    videoPlayer.src="Videos/AviaryQuest.mkv";
});

