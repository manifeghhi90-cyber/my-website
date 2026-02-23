
<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>ماشین‌های کلاسیک</title>

  <style>
   
    body {
      margin: 0;
      font-family: sans-serif;
      background: url('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=80') no-repeat center center fixed;
      background-size: cover;
      color: #383636;
      text-align: center;
    }

    h1 {
      margin: 30px 0;
      animation: fadeUp 0.8s ease forwards;
    }

   
    .slider-container {
      position: relative;
      width: 80%;
      max-width: 800px;
      margin: 0 auto 40px;
      overflow: hidden;
      border-radius: 20px;
      backdrop-filter: blur(10px);
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255,255,255,0.2);
    }

    .slide {
      display: none;
      text-align: center;
    }

    .slide img {
      width: 100%;
      border-radius: 15px;
      cursor: zoom-in;
    }

    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      padding: 10px;
      margin-top: -22px;
      color: rgb(0, 0, 0);
      font-weight: bold;
      font-size: 30px;
      background: rgba(0,0,0,0.4);
      border: none;
      border-radius: 10px;
      user-select: none;
    }

    .prev { left: 10px; }
    .next { right: 10px; }

    
    #lightbox {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.85);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    #lightbox img {
      max-width: 90%;
      max-height: 90%;
      border-radius: 20px;
      animation: zoomIn 0.3s ease;
    }

    #lightbox span {
      position: absolute;
      top: 25px;
      right: 35px;
      font-size: 30px;
      cursor: pointer;
      color: #000000;
    }

   
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes zoomIn {
      from { transform: scale(0.7); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    
    @media (max-width: 768px) {
      .slider-container {
        width: 90%;
      }

      .prev, .next {
        font-size: 24px;
        padding: 8px;
      }
    }
  </style>
</head>

<body>

  <h1>ماشین‌های کلاسیک</h1>

  
  <div class="slider-container">
    <a href="tel:09184485222" class="contact-btn">تماس با من</a>
   <div class="slide">
     <img src="blazer.jpg.jpg" onclick="toggleText(this)">
     <h3 onclick="toggleText(this)">بلیزر</h3>
   
     <div class="desc">
       بلیزر یک SUV کلاسیک آمریکاییه که برای آفرود ساخته شده.
       بدنه قدرتمند، طراحی خشن و حس نوستالژی باعث شده هنوز هم
       بین عاشقای ماشین‌های کلاسیک محبوب باشه.
     </div>
   </div>
    <div class="slide">
      <img src="tank-benz.jpg.jpg" onclick="toggleText(this)">
      <h3 onclick="toggleText(this)">بنز اتاق تانک</h3>
    
     <div class="desc">
       بنز اتاق تانک نماد دوام و مهندسی آلمانیه.
       ماشینی که برای سال‌ها کار ساخته شده و هنوز هم
       کیفیت و اصالتش زبان‌زد خاص و عامه.
     </div>
    </div>
    
    
    <button class="prev" onclick="prevSlide()">❮</button>
    <button class="next" onclick="nextSlide()">❯</button>
  </div>

  
  <div id="lightbox" onclick="closeLightbox()">
    <span>✖️</span>
    <img id="lightbox-img">
  </div>

  <script>
    
    let slideIndex = 0;
    showSlide(slideIndex);

    function showSlide(n) {
      let slides = document.getElementsByClassName("slide");
      if (n >= slides.length) { slideIndex = 0; }
      if (n < 0) { slideIndex = slides.length - 1; }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex--;
      showSlide(slideIndex);
    }

    
    setInterval(() => {
      slideIndex++;
      showSlide(slideIndex);
    }, 5000);

   
    function openLightbox(src) {
      document.getElementById("lightbox").style.display = "flex";
      document.getElementById("lightbox-img").src = src;
    }

    function closeLightbox() {

document.getElementById("lightbox").style.display = "none";
    }
  </script>

</body>
</html>
