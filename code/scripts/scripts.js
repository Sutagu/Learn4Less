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
        
    }

});
