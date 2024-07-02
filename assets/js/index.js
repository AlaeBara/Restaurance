document.addEventListener('DOMContentLoaded', function() {
    const categories = {
        Starters: [
            { name: 'Goat cheese with figs', image: 'https://mshanken.imgix.net/wso/Articles/2019/Seasonal_Grits_1600.jpg' },
            { name: 'Char-Grilled Ribeye', image: 'https://food-images.files.bbci.co.uk/food/recipes/rib-eye_steak_with_61963_16x9.jpg' },
            { name: 'Smoked salmon salad', image: 'https://iheartumami.com/wp-content/uploads/2020/05/Smoked-Salmon-with-baby-greens-salad-recipe-I-Heart-Umami.jpg' },
            { name: 'Burrata salad', image: 'https://hips.hearstapps.com/hmg-prod/images/burrata-salad-recipe-2-6488b007d5994.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' },
            { name: 'Prawn salad Tropicana', image: 'https://www.rickscafe.ma/wp-content/uploads/2023/03/tropicana.jpg' },
            { name: 'Smoked Vegetable Salad', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCBmZbFZSjapCpFBZUPhtlf9wUwB_BR12pA&s' }
        ],
        Mains: [
            { name: 'Crown of Stroganoff', image: 'https://www.rickscafe.ma/wp-content/uploads/2023/03/stroganoff-scaled.jpg' },
            { name: 'Beef steak Surf & Turf', image: 'https://drdavinahseats.com/wp-content/uploads/2020/05/surf-and-turf-long-on-a-plate.jpg' },
            { name: 'New York strip grilled steak', image: 'https://pitchforkfoodie.com/wp-content/uploads/2022/10/new-york-steak.jpg' },
            { name: 'Seafood Linguini', image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-09-Seafood-Pasta%2FCrosstester_photo2_WEB_02' },
            { name: 'Char-Grilled Ribeye', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/10/26/0/Neelys_Char-Grilled-Rib-Eye_s3x4.jpg.rend.hgtvcom.1280.960.suffix/1382540844912.jpeg' },
            { name: 'Grilled Sea Bass with curry sauce', image: 'https://www.jamesmartinchef.co.uk/wp-content/uploads/7T4A1591.jpg' }
        ],
        Dessert: [
            { name: 'Lava cake', image: 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg' },
            { name: 'Rick’s Cheesecake', image: 'https://www.rickscafe.ma/wp-content/uploads/2023/03/cheesecake-450x450.jpg' },
            { name: 'Tarte Fine aux Pommes', image: 'https://www.davidlebovitz.com/wp-content/uploads/2020/11/French-apple-tart-tarte-fine-recipe-2.jpg' },
            { name: 'Pineapple delicacy', image: 'https://img.freepik.com/free-photo/mixed-fruit-salad-served-inside-carved-pinapple-with-herbs_114579-2657.jpg?t=st=1719842094~exp=1719845694~hmac=e5e30bcbfdb35252237eb0fff377ae056e25bf8b5e3328eaee6827a1a4ca04b6&w=740' },
            { name: 'Fresh Raspberry Tart', image: 'https://img.freepik.com/free-photo/homemade-raspberry-cheesecake-with-honey_114579-11417.jpg?t=st=1719842133~exp=1719845733~hmac=d2c9939a74756734c50cb6583c6824f4d215c9191da154c8a69636383d4edbb4&w=1060' }
        ],
        Beverages: [
            { name: 'cocktails', image: 'https://www.cafedellastazione.fr/wp-content/uploads/2018/01/cocktails.jpg' },
            { name: 'drinks', image: 'https://www.tasteofhome.com/wp-content/uploads/2017/12/FB_shutterstock_438408706.jpg' },
            { name: 'soft drinks', image: 'https://www.malistedecourses.net/wp-content/uploads/2022/02/boissons-soirees-drinks-soft-pour-1024x683.jpg' }
        ],
        wines: [
            { name: 'Red Wines', image: 'https://www.thewinesociety.com/4a4992/globalassets/discovery/wine-basics/bold_spicy_reds_1200x675.jpg' },
            { name: 'White Wines', image: 'https://halleckvineyard.com/wp-content/uploads/2021/01/shutterstock_226580374-1024x681.jpg' },
            { name: 'Pink Wines', image: 'https://media.zenfs.com/en/video.foodandwine.time.com/b7da69ad360d0de456f4d5a0dec6638d' },
        ],
        Bottles: [
            { name: 'Whiskey', image: 'https://img.freepik.com/free-photo/putting-glass-fine-blended-scotch-whiskey_114579-2143.jpg?t=st=1719842188~exp=1719845788~hmac=dd329210fba0bf543948b5cc79a4da1c806bed84754af276cd9a02ef426d5dac&w=740' },
            { name: 'Vodka', image: 'https://img.freepik.com/premium-photo/martini-glass-with-lime-slices-lime-slices-black-background_1215348-933.jpg?ga=GA1.1.991169707.1719575547&semt=sph' },
            { name: 'Gin', image: 'https://img.freepik.com/free-photo/delicious-beverage-with-lime-ice_23-2148751853.jpg?ga=GA1.1.991169707.1719575547&semt=sph' }
        ]
    };

    const categorySelect = document.getElementById('categorySelect');
    const carouselContent = document.getElementById('carouselContent');
    const prevButton = document.querySelector('[data-slide="prev"]');
    const nextButton = document.querySelector('[data-slide="next"]');

    function loadCategory(category) {
        const items = categories[category];
        carouselContent.innerHTML = '';
        let slides = '';

        for (let i = 0; i < items.length; i += 3) {
            let isActive = i === 0 ? ' active' : '';
            let slide = `<div class="carousel-item${isActive}"><div class="row">`;

            for (let j = 0; j < 3; j++) {
                if (i + j < items.length) {
                    slide += `
                        <div class="col-md-4">
                            <div class="card" style="background: transparent;color:white">
                                <img src="${items[i + j].image}" class="card-img-top img-menu" alt="${items[i + j].name}">
                                <div class="card-body" >
                                    <h5 class="card-title">${items[i + j].name}</h5>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }

            slide += '</div></div>';
            slides += slide;
        }
        carouselContent.innerHTML = slides;

        // Reinitialize the carousel
        $('.carousel').carousel();

        // Show/hide carousel controls based on item count
        if (items.length <= 3) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        }
    }

    categorySelect.addEventListener('change', (e) => {
        loadCategory(e.target.value);
    });

    // Load initial category
    loadCategory(categorySelect.value);

    // Previous and Next buttons functionality
    prevButton.addEventListener('click', () => {
        $('.carousel').carousel('prev');
    });

    nextButton.addEventListener('click', () => {
        $('.carousel').carousel('next');
    });
});


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});