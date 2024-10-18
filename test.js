var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  let formData = {};

function updateFormData() {
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.mobile = document.getElementById('mobile').value;
    formData.message = document.getElementById('message').value;
    formData.services = document.getElementById('services').value;

    console.log(formData); // To see the updated formData in console
}