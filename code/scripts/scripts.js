
document.addEventListener('DOMContentLoaded',function(){
    console.log('JS Loaded');
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    let scrollPosition =0;
    const navContainer = document.getElementById('nav-container');


    if(window.location.pathname.endsWith("index.html")){
        navContainer.style.backgroundColor=(`RGB(41,50,65, 0.5)`);
        document.addEventListener('scroll', function(){
        
            scrollPosition = window.scrollY;
            const scrollThreshold = 800;
            let opacity=0.5;
            const scrollTop = document.getElementById('scroll-top');
        

            if(scrollPosition<scrollThreshold){
            opacity= opacity + ((scrollPosition/scrollThreshold)/2);

            }else{opacity=1;}
            navContainer.style.backgroundColor=(`RGB(41,50,65, ${opacity})`);
            scrollTop.style.opacity=(opacity-0.5)*2;

        });
    }


    if(window.location.pathname.endsWith("index.html")){
        const imageTrackContainer = document.querySelector('.inner-track-container');
        console.log('Initialised Track Scrolls');
        console.log('viewportWidth is : '+ viewportWidth);
        document.getElementById('track-left-arrow').addEventListener('click', function(){
            imageTrackContainer.scrollLeft -= viewportWidth/1.8;
            console.log('Scroll is Clicked!');
        });
        document.getElementById('track-right-arrow').addEventListener('click', function(){
            imageTrackContainer.scrollLeft += viewportWidth/1.8;
            console.log('Scroll is Clicked!');
        });


        let isDragging = false;
        let startX;
        let scrollLeft;
        imageTrackContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX; 
            scrollLeft = imageTrackContainer.scrollLeft; 
            imageTrackContainer.style.cursor = 'grabbing';
        });
        
        imageTrackContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return; 
            const distance = e.clientX - startX;
        
            window.requestAnimationFrame(() => {
                imageTrackContainer.scrollLeft = scrollLeft - distance;
            });
        });
        
        imageTrackContainer.addEventListener('mouseup', () => {
            isDragging = false;
            imageTrackContainer.style.cursor = 'grab';
        });
        
        imageTrackContainer.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                imageTrackContainer.style.cursor = 'grab';
            }
        });
        
    }
    const ftc = document.getElementById('ftc-tutors');

    if(window.location.pathname.endsWith('tutors.html')){
        const states = document.querySelectorAll('.states-select');
        console.log("within path of tutors.html");
        const ss = document.getElementById('ss-tutors');
        

        states.forEach(button =>{
            
            button.addEventListener('mouseenter', () =>{
                const typewriterTxtContent = document.getElementById("typewriter-select");
                typewriterTxtContent.classList.remove("typewriter-animate");
                const state = button.getAttribute('name');
                const AuStates = ['Northern Territory', 'Tasmania','Australian Capital Territory', 'Queensland', 'Western Australia', 'South Australia', 'Victoria', 'New South Wales'];
                if(AuStates.includes(state)){
                    button.addEventListener('click', () =>{
                        ss.style.display = 'none';
                        ftc.style.display ='block';
                        const state = button.getAttribute('name');
                        document.querySelectorAll('.university-temp').forEach(element =>{
                            element.textContent = "University of "+ state
                        })
                    });
                    setTimeout(() => {
                        typewriterTxtContent.textContent=state;
                        typewriterTxtContent.classList.add("typewriter-animate")
                    }, 10);
                }else{
                    setTimeout(() => {
                        typewriterTxtContent.textContent='State not supported';
                        typewriterTxtContent.classList.add("typewriter-animate")
                    }, 10);
                }
                
            })
        });
    }
    const ellipsis = document.getElementById('desc-ellipsis');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    if(ellipsis){
        ellipsis.addEventListener('click', (e) => {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            ellipsis.style.color ="#3d5a80";

            const rect = ellipsis.getBoundingClientRect();
            dropdownMenu.style.top = `${rect.bottom}px`;
            dropdownMenu.style.left = `${rect.left}px`;
        });
        

        document.addEventListener('click', (e) => {
            if (!ellipsis.contains(e.target) && !dropdownMenu.contains(e.target)) {
                ellipsis.style.color ="#000";
                dropdownMenu.style.display = 'none';
            }
        });
    
        const tutorIso = document.getElementById('tutor-iso-display-container');
        const reportOverlay = document.getElementById('report-overlay');
        const reportBtn = document.getElementById('report-button');
        const cancelReport = document.getElementById('cancel-report-btn');

        reportBtn.addEventListener('click', function(){
            reportOverlay.style.display= 'block';
            dropdownMenu.style.display = 'none';
            if(ftc){
                ftc.style.filter='blur(2px)';
            }else if(tutorIso){
                tutorIso.style.filter='blur(2px)';
            }
    
            const reportTextArea = document.getElementById('report-info');
            const charText = document.getElementById('report-char-num');
            const maxChar = 250;
    
            reportTextArea.addEventListener('input', function(){
                const currentLength = reportTextArea.value.length;
                charText.textContent= `${currentLength}/${maxChar} characters`;
                if(currentLength >= maxChar){
                    charText.style.color='#ee6c4d';
                }else{
                    charText.style.color='#000';
                }
    
            });
    
    
            cancelReport.addEventListener('click',function(){
                reportOverlay.style.display='none';
                if(ftc){
                    ftc.style.filter='none';
                }else if(tutorIso){
                    tutorIso.style.filter='none';
                }
            });
        });

    }

    // if(window.location.pathname.endsWith('resources.html')){
    //     const filterBtn=document.getElementById('filter-settings-btn');
    //     const backBtn = document.getElementById('lrf-back-btn');
    //     const leftWindow = document.getElementById('left-resources-filter-container');

    //     filterBtn.addEventListener('click', function(){
    //         leftWindow.style.display='block';

    //     });
    //     backBtn.addEventListener('click', function(){
    //         leftWindow.style.display='none';

    //     });
    //     window.addEventListener('resize', function(){
    //         if(this.window.innerWidth>1000 && leftWindow.style.display=='none'){
    //             leftWindow.style.display='block';
    //         }
    //     });
    //     window.addEventListener('resize', function(){
    //         if(this.window.innerWidth<=1000 && leftWindow.style.display=='block'){
    //             leftWindow.style.display='none';
    //         }
    //     });
    // }

    if(window.location.pathname.endsWith('tutorList.html')){
        const ListBackBtn = document.getElementById('tutor-list-back');
        const tutorDisplay = document.getElementById('tutor-display-container');
        const tutorList = document.getElementById('tsc-container');
        const tutorFilter = document.getElementById('filter-dropmenu-container');
        const tutorListItems = document.querySelectorAll('.tutor-list');
        
        tutorListItems.forEach(itemChoice =>{
            itemChoice.addEventListener('click', function(){
                tutorList.style.display='none';
                tutorFilter.style.display='none';
                tutorDisplay.style.display='block';
                console.log('Item choice has been made');

                ListBackBtn.addEventListener('click', function(){
                    tutorList.style.display='block';
                    tutorFilter.style.display='flex';
                    tutorDisplay.style.display='none';
                });
            });
        });

        window.addEventListener('resize', function(){
            if(this.window.innerWidth>1800){
                tutorList.style.display='block';
                tutorFilter.style.display='flex';
                tutorDisplay.style.display='block';
            }
            if(this.window.innerWidth<=1800 && tutorList.style.display=='block'){
                tutorDisplay.style.display='none';
            }
        });
    }
    console.log("Do we achieve the end?");


});
