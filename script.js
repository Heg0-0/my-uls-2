document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        const isOpen = nav.classList.contains('active');

        if (isOpen) {
            // Открывается меню
            nav.style.transition = 'transform 0.3s ease';
            nav.style.transform = 'translateX(0)';
        } else {
            // Закрывается меню
            nav.style.transition = 'transform 0.3s ease';
            nav.style.transform = 'translateX(-100%)'; /* Изменено справа на слева */
        }
    });

    document.addEventListener('click', function (e) {
        const isOpen = nav.classList.contains('active');
        const isMenuToggle = menuToggle.contains(e.target);

        if (isOpen && !isMenuToggle) {
            // Закрывается меню при клике на неактивную область
            nav.classList.remove('active');
            nav.style.transition = 'transform 0.3s ease';

            // Условие: если ширина экрана больше 720px, убрать transform
            if (window.innerWidth > 720) {
                nav.style.transform = '';
            } else {
                nav.style.transform = 'translateX(-100%)'; /* Изменено справа на слева */
            }
        }
    });

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', function () {
        // При изменении размера экрана проверяем, если ширина стала больше 720px, убираем transform
        if (window.innerWidth > 720) {
            nav.style.transition = 'transform 0.3s ease';
            nav.style.transform = '';
        }
    });





    
});


function zoomImage(element) {
    const overlay = document.getElementById('overlay');

    // Добавляем класс к body при открытии изображения
    document.body.classList.add('overlay-open');

    const imageSrc = element.querySelector('img').src;
    const zoomedImage = document.getElementById('zoomed-in-image');
    zoomedImage.src = imageSrc;

    overlay.style.display = 'flex'; // Используем 'flex' вместо 'block' для правильного отображения flex-контейнера
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10); // Добавляем класс с небольшой задержкой, чтобы анимация срабатывала

    // Фиксируем прокрутку при открытии изображения
    document.body.style.overflow = 'hidden';
}

function hideOverlay() {
    const overlay = document.getElementById('overlay');

    overlay.classList.remove('active');

    // Убираем класс с body при закрытии изображения
    document.body.classList.remove('overlay-open');

    // Возвращаем нормальное состояние прокрутки при закрытии изображения
    document.body.style.overflow = 'auto';

    setTimeout(() => {
        overlay.style.display = 'none'; // Скрываем оверлей после завершения анимации
    }, 500); // Задаем время, равное времени анимации
}




document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var isPlaying = false;

    // Добавим обработчик событий для видеоплеера
    videoPlayer.addEventListener('touchend', function() {
        if (isPlaying) {
            videoPlayer.pause();
        } else {
            videoPlayer.play();
        }

        isPlaying = !isPlaying;
    });
});




document.getElementById('openFormButton1').onclick = function(e) {
    openForm();
    e.stopPropagation();
};

document.getElementById('openFormButton2').onclick = function(e) {
    openForm();
    e.stopPropagation();
};

document.getElementById('openFormButton3').onclick = function(e) {
    openForm();
    e.stopPropagation();
};

document.getElementById('openFormButton4').onclick = function(e) {
    openForm();
    e.stopPropagation();
};

function openForm() {
    // Замораживаем прокрутку body
    document.body.style.overflow = 'hidden';

    var registrationForm = document.querySelector('.form-map-2');
    var formOverlay = document.getElementById('formOverlay');
    registrationForm.style.display = 'block';
    formOverlay.style.display = 'block';
    document.getElementById('openFormButton1').classList.add('styled-button');
    registrationForm.classList.add('visible');
    formOverlay.classList.add('visible');
}

function closeForm() {
    // Восстанавливаем прокрутку body
    document.body.style.overflow = '';

    var registrationForm = document.querySelector('.form-map-2');
    var formOverlay = document.getElementById('formOverlay');
    registrationForm.classList.remove('visible');
    formOverlay.classList.remove('visible');
    setTimeout(function() {
        registrationForm.style.display = 'none';
        formOverlay.style.display = 'none';
    }, 300);
}

document.onclick = function(e) {
    var registrationForm = document.querySelector('.form-map-2');
    if (e.target !== registrationForm && !registrationForm.contains(e.target)) {
        closeForm();
    }
};



document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('ul a').forEach(anchor => {
        // Проверяем, что якорь начинается с #
        if (anchor.getAttribute('href').startsWith('#')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});


/* window.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.querySelector('.video');

    videoContainer.addEventListener('click', function () {
        if (videoContainer.classList.contains('ready')) {
            return;
        }

        videoContainer.classList.add('ready');

        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/X9zCVZ2hLuY?autoplay=1&controls=0&disablekb=1&iv_load_policy=3');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.setAttribute('allow', 'autoplay');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.borderRadius = '10px';

        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    });
}); */



