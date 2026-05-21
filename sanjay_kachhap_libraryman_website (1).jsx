<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>संजय कच्छप | लाइब्रेरी मैन</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <style>

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:'Poppins',sans-serif;
      scroll-behavior:smooth;
    }

    body{
      background:#fff8f3;
      overflow-x:hidden;
      color:#222;
    }

    /* HERO SECTION */

    .hero{
      min-height:100vh;
      background:linear-gradient(135deg,#ff6a00,#ff2d55);
      padding:50px 8%;
      display:flex;
      align-items:center;
    }

    .container{
      width:100%;
      max-width:1300px;
      margin:auto;
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:60px;
      align-items:center;
    }

    .content h1{
      font-size:75px;
      color:white;
      line-height:1.1;
      font-weight:800;
    }

    .content h2{
      color:#ffe082;
      font-size:32px;
      margin-top:15px;
      margin-bottom:25px;
    }

    .content p{
      color:white;
      font-size:20px;
      line-height:2;
      margin-bottom:30px;
    }

    .buttons{
      display:flex;
      gap:20px;
      flex-wrap:wrap;
    }

    .btn{
      display:inline-block;
      padding:16px 35px;
      border-radius:60px;
      text-decoration:none;
      font-weight:700;
      transition:0.4s;
      font-size:18px;
    }

    .btn1{
      background:white;
      color:#ff2d55;
      box-shadow:0 10px 30px rgba(0,0,0,0.2);
    }

    .btn2{
      border:2px solid white;
      color:white;
    }

    .btn:hover{
      transform:translateY(-6px);
    }

    /* IMAGE */

    .image-box{
      position:relative;
      display:flex;
      justify-content:center;
    }

    .image-box img{
      width:100%;
      max-width:480px;
      height:600px;
      object-fit:cover;

      clip-path:polygon(
        10% 0%,
        90% 0%,
        100% 15%,
        100% 85%,
        90% 100%,
        10% 100%,
        0% 85%,
        0% 15%
      );

      border:6px solid white;
      border-radius:30px;
      box-shadow:0 25px 60px rgba(0,0,0,0.4);
    }

    .badge{
      position:absolute;
      bottom:20px;
      left:20px;
      background:white;
      color:#ff2d55;
      padding:14px 24px;
      border-radius:50px;
      font-weight:700;
      box-shadow:0 10px 20px rgba(0,0,0,0.2);
    }

    /* SECTION */

    section{
      padding:100px 8%;
    }

    .title{
      text-align:center;
      font-size:55px;
      color:#ff2d55;
      margin-bottom:60px;
      font-weight:800;
    }

    /* STORY */

    .story-card{
      background:white;
      padding:50px;
      border-radius:35px;
      box-shadow:0 15px 40px rgba(0,0,0,0.08);
      border-left:8px solid #ff6a00;
    }

    .story-card p{
      font-size:20px;
      line-height:2.2;
      margin-bottom:25px;
      color:#444;
    }

    /* KAHANI SECTION */

    .kahani-section{
      background:linear-gradient(to right,#fff3e0,#fff8f5);
    }

    .kahani-card{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:50px;
      align-items:center;
      background:white;
      padding:40px;
      border-radius:35px;
      box-shadow:0 15px 40px rgba(0,0,0,0.08);
    }

    .kahani-card img{
      width:100%;
      height:500px;
      object-fit:cover;
      border-radius:30px;

      clip-path:polygon(
        10% 0%,
        90% 0%,
        100% 15%,
        100% 85%,
        90% 100%,
        10% 100%,
        0% 85%,
        0% 15%
      );
    }

    .kahani-content h3{
      font-size:40px;
      color:#ff6a00;
      margin-bottom:25px;
    }

    .kahani-content p{
      font-size:19px;
      line-height:2;
      color:#444;
      margin-bottom:20px;
    }

    /* TIMELINE */

    .timeline{
      margin-top:70px;
    }

    .timeline-item{
      background:white;
      padding:35px;
      margin-bottom:25px;
      border-radius:30px;
      box-shadow:0 10px 30px rgba(0,0,0,0.08);
      transition:0.4s;
    }

    .timeline-item:hover{
      transform:translateY(-8px);
    }

    .timeline-item h3{
      color:#ff2d55;
      font-size:30px;
      margin-bottom:10px;
    }

    .timeline-item p{
      font-size:18px;
      color:#555;
      line-height:1.8;
    }

    /* GALLERY */

    .gallery{
      background:#fff1eb;
    }

    .gallery-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:25px;
    }

    .gallery-grid img{
      width:100%;
      height:300px;
      object-fit:cover;
      border-radius:30px;
      transition:0.4s;
      box-shadow:0 10px 30px rgba(0,0,0,0.1);
    }

    .gallery-grid img:hover{
      transform:scale(1.05);
    }

    /* FOOTER */

    footer{
      background:#111;
      color:white;
      text-align:center;
      padding:40px;
    }

    footer h3{
      font-size:32px;
      color:#ffe082;
      margin-bottom:15px;
    }

    footer p{
      color:#ccc;
      font-size:17px;
    }

    /* MOBILE */

    @media(max-width:950px){

      .container,
      .kahani-card,
      .gallery-grid{
        grid-template-columns:1fr;
      }

      .content{
        text-align:center;
      }

      .buttons{
        justify-content:center;
      }

      .content h1{
        font-size:50px;
      }

      .content h2{
        font-size:26px;
      }

      .image-box img{
        height:450px;
      }

      .title{
        font-size:40px;
      }

      .kahani-content h3{
        font-size:30px;
      }

    }

  </style>

</head>
<body>

  <!-- HERO -->

  <section class="hero">

    <div class="container">

      <div class="content">

        <h1>संजय कच्छप</h1>

        <h2>झारखंड के “लाइब्रेरी मैन”</h2>

        <p>
          एक ऐसे समाजसेवी जिन्होंने हजारों गरीब और आदिवासी छात्रों के लिए
          लाइब्रेरी, डिजिटल शिक्षा और मुफ्त पढ़ाई अभियान की शुरुआत की।
        </p>

        <div class="buttons">

          <a href="#journey" class="btn btn1">
            जीवन यात्रा देखें
          </a>

          <a href="#kahani" class="btn btn2">
            प्रेरणादायक कहानी
          </a>

        </div>

      </div>

      <div class="image-box">

        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
          alt="Library Man"
        >

        <div class="badge">
          📚 Library Man
        </div>

      </div>

    </div>

  </section>

  <!-- JEEVAN YATRA -->

  <section id="journey">

    <h2 class="title">जीवन यात्रा</h2>

    <div class="story-card">

      <p>
        संजय कच्छप का जन्म झारखंड के एक साधारण आदिवासी परिवार में हुआ था।
        बचपन से ही उन्होंने गरीबी और संघर्ष को बहुत करीब से देखा।
        गांव में अच्छी शिक्षा और किताबों की सुविधा नहीं थी।
      </p>

      <p>
        कई बार उन्हें दूसरों से किताबें लेकर पढ़ाई करनी पड़ती थी।
        उनका सपना था कि वे बड़े अधिकारी बनें और समाज के लिए कुछ अच्छा करें।
        लेकिन आर्थिक तंगी ने उनके रास्ते में कई कठिनाइयाँ खड़ी कीं।
      </p>

      <p>
        सरकारी सेवा में आने के बाद उन्होंने महसूस किया कि आज भी हजारों बच्चे
        किताबों और लाइब्रेरी की कमी से जूझ रहे हैं।
        तभी उन्होंने गांव-गांव में लाइब्रेरी खोलने का मिशन शुरू किया।
      </p>

      <p>
        उन्होंने गरीब छात्रों के लिए मुफ्त किताबें, पढ़ाई की जगह,
        इंटरनेट और डिजिटल शिक्षा की सुविधा उपलब्ध कराई।
        धीरे-धीरे उनका यह अभियान पूरे झारखंड में फैल गया।
      </p>

      <p>
        आज लोग उन्हें “लाइब्रेरी मैन” के नाम से जानते हैं।
        उनका सपना है कि झारखंड का हर बच्चा पढ़े,
        आगे बढ़े और अपने सपनों को पूरा करे।
      </p>

    </div>

    <!-- TIMELINE -->

    <div class="timeline">

      <div class="timeline-item">
        <h3>👦 बचपन</h3>
        <p>
          गरीबी और सीमित संसाधनों के बीच बचपन बीता।
        </p>
      </div>

      <div class="timeline-item">
        <h3>📖 शिक्षा का संघर्ष</h3>
        <p>
          किताबों और पढ़ाई के माहौल की कमी के बावजूद सपनों को जिंदा रखा।
        </p>
      </div>

      <div class="timeline-item">
        <h3>🏛 सरकारी सेवा</h3>
        <p>
          सरकारी नौकरी मिलने के बाद समाज सेवा की शुरुआत की।
        </p>
      </div>

      <div class="timeline-item">
        <h3>📚 लाइब्रेरी अभियान</h3>
        <p>
          गांवों और दूरदराज इलाकों में लाइब्रेरी और डिजिटल स्टडी सेंटर खोले।
        </p>
      </div>

      <div class="timeline-item">
        <h3>⭐ प्रेरणा स्रोत</h3>
        <p>
          आज हजारों युवा उनकी कहानी से प्रेरित होकर शिक्षा की ओर बढ़ रहे हैं।
        </p>
      </div>

    </div>

  </section>

  <!-- KAHANI -->

  <section id="kahani" class="kahani-section">

    <h2 class="title">प्रेरणादायक कहानी</h2>

    <div class="kahani-card">

      <img 
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
        alt="Story"
      >

      <div class="kahani-content">

        <h3>
          गरीबी से “लाइब्रेरी मैन” बनने तक की कहानी
        </h3>

        <p>
          संजय कच्छप का जीवन संघर्ष और प्रेरणा की मिसाल है।
          बचपन में उनके पास पढ़ने के लिए पर्याप्त किताबें नहीं थीं।
        </p>

        <p>
          आर्थिक तंगी के बावजूद उन्होंने अपने सपनों को कभी टूटने नहीं दिया।
          वे हमेशा मानते थे कि शिक्षा ही जिंदगी बदल सकती है।
        </p>

        <p>
          सरकारी नौकरी मिलने के बाद उन्होंने सोचा कि कोई भी बच्चा
          सिर्फ पैसों की कमी की वजह से पढ़ाई से दूर नहीं रहना चाहिए।
        </p>

        <p>
          इसी सोच से उन्होंने गांव-गांव में लाइब्रेरी खोलनी शुरू की।
          आज हजारों छात्र उनकी लाइब्रेरी से पढ़ाई कर रहे हैं।
        </p>

      </div>

    </div>

  </section>

  <!-- GALLERY -->

  <section class="gallery">

    <h2 class="title">प्रेरणादायक गैलरी</h2>

    <div class="gallery-grid">

      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop">

      <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop">

      <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop">

    </div>

  </section>

  <!-- FOOTER -->

  <footer>

    <h3>संजय कच्छप - Library Man</h3>

    <p>
      शिक्षा समाज को बदलने की सबसे बड़ी ताकत है।
    </p>

  </footer>

</body>
</html>
