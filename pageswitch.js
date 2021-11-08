window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
} 

/*------------------detail product view ------------------*/
var ProductImg = document.getElementById("ProductImg");
            var SmallImg = document.getElementsByClassName("small-img");

                SmallImg[0].onclick = function(){
                    ProductImg.src = SmallImg[0].src;
                }
                SmallImg[1].onclick = function(){
                    ProductImg.src = SmallImg[1].src;
                }
                SmallImg[2].onclick = function(){
                    ProductImg.src = SmallImg[2].src;
                }
                SmallImg[3].onclick = function(){
                    ProductImg.src = SmallImg[3].src;
                }

                /* ----------------search bar---------------*/
// const icon = document.querySelector('.icon');
// const search = document.querySelector('.search');
// icon.onclick = function(){
//     search.classList.toggle('active')
// } 

