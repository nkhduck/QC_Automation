// slide
let slideIndex = 0;
showSlide(slideIndex);

// Function to show the current slide
function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[index].style.display = "flex"; // Show the selected slide
}

// Function to change slide manually
function changeSlide(step) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += step;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to first slide if reached end
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to last slide if negative index
    }
    showSlide(slideIndex);
}

// Function to change slide automatically every 3 seconds
function autoSlide() {
    const slides = document.getElementsByClassName("slide");
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to first slide
    }
    showSlide(slideIndex);
}

// Start the slideshow with an interval of 3 seconds
setInterval(autoSlide, 3000);

let wC = $(".containerAbsolute").width();
let wW = $(window).width();
let content1 = $(".containerScrollinLarge").html();
let c = 1;








$('#slider div:gt(0)').hide();
setInterval(function () {
    let wL = $(".containerScrollinLarge").width();

    if (Math.round(wL) < wW) {
        $(".containerScrollinLarge").append(content1);
    }
    let distance = $(".containerScrollinLarge .containerAbsolute:first-child").css("left").slice(0, -2);
    distance = parseInt(distance);
    console.log(distance);
    console.log((wW / 2));
    if (distance > wW) {

        $(".containerScrollinLarge").append(content1);
    } else {
        $(".containerScrollinLarge .containerAbsolute:first-child").remove();
        console.log("Falso")
    }


}, 1000);




// gallery
// Lấy các phần tử cần thiết
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeModal = document.getElementById("closeModal");

// Hàm mở modal
function openModal(src) {
    modal.style.display = "flex";  // Hiện modal
    modalImg.src = src; // Đặt nguồn ảnh modal
}

// Đóng modal khi nhấn vào nút đóng
closeModal.onclick = function () {
    modal.style.display = "none"; // Ẩn modal
}

// Đóng modal khi nhấn ra ngoài modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Ẩn modal
    }
}

// Thêm sự kiện click cho tất cả các ảnh
var images = document.querySelectorAll("img");
images.forEach(function (img) {
    img.onclick = function () {
        openModal(this.src); // Gọi hàm mở modal
    }
});

const content = [

    {
        image_1: '/Gallary/6c350891e20bead11826ea99fb9d10e3.jpg',
        title_1: '"My sun has finally expired"',
        text_1: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_2: '/Gallary/9e3089fe903fc9b56ea767be4e40e4b2.jpg',
        title_2: '"My sun has finally expired"',
        text_2: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_3: '/Gallary/51f67ae1095fd702e512985b9388b642.jpg',
        title_3: '"My sun has finally expired"',
        text_3: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_4: '/Gallary/14d9593a6836e2a75a59ae0f00cfbcec.jpg',
        title_4: '"My sun has finally expired"',
        text_4: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_5: '/Gallary/2054c6d30e854de69e84e91d069052be.jpg',
        title_5: '"My sun has finally expired"',
        text_5: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_6: '/Gallary/29351931_10213852764806790_7197054541824738462_o.jpg',
        title_6: '"My sun has finally expired"',
        text_6: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_7: '/Gallary/ad9211ad24b0d1989f47c0288ee0cd42.jpg',
        title_7: '"My sun has finally expired"',
        text_7: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_8: '/Gallary/05095a152b1deec56347a8672b6a5f10.jpg',
        title_8: '"My sun has finally expired"',
        text_8: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_9: '/Gallary/428705864_18402461275064455_3408960117460138777_n.jpg',
        title_9: '"My sun has finally expired"',
        text_9: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',


    },
    {
        image_1: '/Gallary/c75e76459b666aa85ccebb4cece0eda4.jpg',
        title_1: '"My sun has finally expired"',
        text_1: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_2: '/Gallary/Screenshot20241008150644.png',
        title_2: '"My sun has finally expired"',
        text_2: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_3: '/Gallary/Screenshot 20241008150721.png',
        title_3: '"My sun has finally expired"',
        text_3: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_4: '/Gallary/Screenshot 20241008151557.png',
        title_4: '"My sun has finally expired"',
        text_4: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_5: '/Gallary/(2).jpeg',
        title_5: '"My sun has finally expired"',
        text_5: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_6: '/Gallary/Screenshot 20241008152010.png',
        title_6: '"My sun has finally expired"',
        text_6: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_7: '/Gallary/(3).jpeg',
        title_7: '"My sun has finally expired"',
        text_7: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_8: '/Gallary/(4).jpeg',
        title_8: '"My sun has finally expired"',
        text_8: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_9: '/Gallary/(5).jpeg',
        title_9: '"My sun has finally expired"',
        text_9: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',


    },
    {
        image_1: '/Gallary/(6).jpeg',
        title_1: '"My sun has finally expired"',
        text_1: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_2: '/Gallary/_ (7).jpeg',
        title_2: '"My sun has finally expired"',
        text_2: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_3: '/Gallary/_ (8).jpeg',
        title_3: '"My sun has finally expired"',
        text_3: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_4: '/Gallary/_ (9).jpeg',
        title_4: '"My sun has finally expired"',
        text_4: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_5: '/Gallary/_ (10).jpeg',
        title_5: '"My sun has finally expired"',
        text_5: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_6: '/Gallary/Screenshot 20241008152010.png',
        title_6: '"My sun has finally expired"',
        text_6: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_7: '/Gallary/_ (15).jpeg',
        title_7: '"My sun has finally expired"',
        text_7: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_8: '/Gallary/_.jpeg',
        title_8: '"My sun has finally expired"',
        text_8: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_9: '/Gallary/_ (14).jpeg',
        title_9: '"My sun has finally expired"',
        text_9: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',


    },
    {
        image_1: '/Gallary/none.jpg',
        title_1: '"My sun has finally expired"',
        text_1: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_2: '/Gallary/none.jpg',
        title_2: '"My sun has finally expired"',
        text_2: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_3: '/Gallary/none.jpg',
        title_3: '"My sun has finally expired"',
        text_3: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_4: '/Gallary/none.jpg',
        title_4: '"My sun has finally expired"',
        text_4: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_5: '/Gallary/none.jpg',
        title_5: '"My sun has finally expired"',
        text_5: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_6: '/Gallary/none.jpg',
        title_6: '"My sun has finally expired"',
        text_6: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_7: '/Gallary/none.jpg',
        title_7: '"My sun has finally expired"',
        text_7: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_8: '/Gallary/none.jpg',
        title_8: '"My sun has finally expired"',
        text_8: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',

        image_9: '/Gallary/none.jpg',
        title_9: '"My sun has finally expired"',
        text_9: 'The painting recreates an emotional moment when the brilliant red sun sets in the heart of the city. High-rise buildings are depicted with rigid lines, with the red color of the sky creating a contrast between modern life and quiet natural beauty.',


    },

];

function changePage(page) {
    document.getElementById('image_1').src = content[page - 1].image_1;
    document.getElementById('title_1').innerText = content[page - 1].title_1;
    document.getElementById('text_1').innerText = content[page - 1].text_1;

    document.getElementById('image_2').src = content[page - 1].image_2;
    document.getElementById('title_2').innerText = content[page - 1].title_2;
    document.getElementById('text_2').innerText = content[page - 1].text_2;

    document.getElementById('image_3').src = content[page - 1].image_3;
    document.getElementById('title_3').innerText = content[page - 1].title_3;
    document.getElementById('text_3').innerText = content[page - 1].text_3;

    document.getElementById('image_4').src = content[page - 1].image_4;
    document.getElementById('title_4').innerText = content[page - 1].title_4;
    document.getElementById('text_4').innerText = content[page - 1].text_4;

    document.getElementById('image_5').src = content[page - 1].image_5;
    document.getElementById('title_5').innerText = content[page - 1].title_5;
    document.getElementById('text_5').innerText = content[page - 1].text_5;

    document.getElementById('image_6').src = content[page - 1].image_6;
    document.getElementById('title_6').innerText = content[page - 1].title_6;
    document.getElementById('text_6').innerText = content[page - 1].text_6;

    document.getElementById('image_7').src = content[page - 1].image_7;
    document.getElementById('title_7').innerText = content[page - 1].title_7;
    document.getElementById('text_7').innerText = content[page - 1].text_7;

    document.getElementById('image_8').src = content[page - 1].image_8;
    document.getElementById('title_8').innerText = content[page - 1].title_8;
    document.getElementById('text_8').innerText = content[page - 1].text_8;

    document.getElementById('image_9').src = content[page - 1].image_9;
    document.getElementById('title_9').innerText = content[page - 1].title_9;
    document.getElementById('text_9').innerText = content[page - 1].text_9;

    const buttons = document.querySelectorAll('.pagination button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[page - 1].classList.add('active');
}