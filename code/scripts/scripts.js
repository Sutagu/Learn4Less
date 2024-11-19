window.addEventListener('load', function() {
    if (window.location.hash) {
        // Scroll to the top if a hash is present in the URL
        window.scrollTo({
            top:0
        });
        // Clear the hash from the URL
        window.history.pushState("", document.title, window.location.pathname);
    }
});
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

    



    console.log("Do we achieve this stage?");

    if(window.location.pathname.endsWith('tutors.html')){
        const states = document.querySelectorAll('.states-select');
        console.log("within path of tutors.html");
        const ss = document.getElementById('ss-tutors');
        const ttc = document.getElementById('ttc-tutors');
        const ftc = document.getElementById('ftc-tutors');
        const trackText = document.getElementById('state-featured-tutor');
        const filterMore = document.getElementById('view-more-tutor');

        states.forEach(button =>{
            
            button.addEventListener('mouseenter', () =>{
                const typewriterTxtContent = document.getElementById("typewriter-select");
                typewriterTxtContent.classList.remove("typewriter-animate");
                const state = button.getAttribute('name');
                const AuStates = ['Queensland', 'Western Australia', 'South Australia', 'Victoria', 'New South Wales'];
                if(AuStates.includes(state)){
                    button.addEventListener('click', () =>{
                        ss.style.display = 'none';
                        ttc.style.display ='block';
                        const state = button.getAttribute('name');
                        trackText.textContent = `Featured Tutors in ${state}`;
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
        filterMore.addEventListener('click', () =>{
            ttc.style.display ='none';
            ftc.style.display= 'block';
        });
        const ellipsis = document.getElementById('desc-ellipsis');
        const dropdownMenu = document.getElementById('dropdown-menu');
        
        // Toggle dropdown visibility when ellipsis is clicked
        ellipsis.addEventListener('click', (e) => {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            ellipsis.style.color ="#3d5a80";
            // Position the dropdown relative to the ellipsis icon
            const rect = ellipsis.getBoundingClientRect();
            dropdownMenu.style.top = `${rect.bottom}px`;
            dropdownMenu.style.left = `${rect.left}px`;
        });
        
        // Hide the dropdown if clicking outside
        document.addEventListener('click', (e) => {
            if (!ellipsis.contains(e.target) && !dropdownMenu.contains(e.target)) {
                ellipsis.style.color ="#000";
                dropdownMenu.style.display = 'none';
            }
        });


        const reportOverlay = document.getElementById('report-overlay');
        const reportBtn = document.getElementById('report-button');
        const cancelReport = document.getElementById('cancel-report-btn');
        reportBtn.addEventListener('click', function(){
            reportOverlay.style.display= 'block';
            dropdownMenu.style.display = 'none';
            ftc.style.filter='blur(2px)';

            const reportTextArea = document.getElementById('report-details');
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
                ftc.style.filter='none';
            });
        });





    }

});
