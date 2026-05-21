export default function SanjayKachhapWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-orange-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
              Sanjay Kachhap
            </h1>
            <p className="mt-4 text-2xl font-semibold opacity-90">
              झारखंड के “लाइब्रेरी मैन”
            </p>
            <p className="mt-6 text-lg leading-8 text-yellow-100">
              एक ऐसे समाजसेवी जिन्होंने हजारों गरीब और आदिवासी छात्रों के लिए लाइब्रेरी, डिजिटल लर्निंग सेंटर और मुफ्त शिक्षा अभियान की शुरुआत की।
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#jeevan-yatra" className="bg-white text-red-600 px-6 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition inline-block">
                जीवन यात्रा देखें
              </a>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-red-600 transition">
                प्रेरणादायक कहानी
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="Library Man"
              className="rounded-[30px] shadow-2xl w-full max-w-lg border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="jeevan-yatra" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop"
            alt="Students studying"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-orange-600 mb-6">
              शुरुआती जीवन और संघर्ष
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              संजय कच्छप का जन्म झारखंड के एक साधारण आदिवासी परिवार में हुआ था। बचपन में आर्थिक तंगी की वजह से उन्हें किताबों और पढ़ाई के साधनों की भारी कमी का सामना करना पड़ा। उनका सपना IAS अधिकारी बनने का था, लेकिन संसाधनों की कमी ने उनके सपनों को रोक दिया।
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              लेकिन उन्होंने हार नहीं मानी। सरकारी सेवा में आने के बाद उन्होंने तय किया कि कोई भी छात्र सिर्फ पैसों की कमी की वजह से पढ़ाई से वंचित नहीं रहेगा।
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Cards */}
      <section className="py-20 bg-orange-100 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-orange-700 mb-4">
            मुख्य योगदान
          </h2>
          <p className="text-lg text-gray-700 mb-14">
            झारखंड के शिक्षा क्षेत्र में उनका योगदान बेहद प्रेरणादायक माना जाता है।
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                50+ लाइब्रेरी
              </h3>
              <p className="text-gray-700 leading-7">
                ग्रामीण और आदिवासी क्षेत्रों में छात्रों के लिए लाइब्रेरी स्थापित की गई।
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                डिजिटल शिक्षा
              </h3>
              <p className="text-gray-700 leading-7">
                डिजिटल लर्निंग सेंटर और ऑनलाइन पढ़ाई की सुविधा उपलब्ध कराई गई।
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                मुफ्त शिक्षा सहायता
              </h3>
              <p className="text-gray-700 leading-7">
                प्रतियोगी परीक्षाओं की तैयारी के लिए किताबें और बेहतर अध्ययन वातावरण दिया गया।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center text-orange-700 mb-16">
            जीवन यात्रा टाइमलाइन
          </h2>

          <div className="space-y-12 border-l-4 border-orange-400 pl-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold text-red-600">संजय कच्छप की पूरी जीवन यात्रा</h3>
              <p className="mt-6 text-lg leading-9 text-gray-700">
                संजय कच्छप का जन्म झारखंड के एक साधारण आदिवासी परिवार में हुआ था। बचपन से ही उन्होंने गरीबी, संघर्ष और संसाधनों की कमी को बहुत करीब से देखा। गांव में अच्छी शिक्षा की सुविधा नहीं थी और किताबें खरीदने के लिए भी पैसे नहीं होते थे। कई बार उन्हें दूसरों से किताबें मांगकर पढ़ाई करनी पड़ती थी।
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                पढ़ाई के प्रति उनका जुनून बहुत मजबूत था। उनका सपना था कि वे एक बड़े अधिकारी बनें और समाज के लिए कुछ बड़ा करें। लेकिन आर्थिक स्थिति कमजोर होने के कारण उन्हें कई कठिनाइयों का सामना करना पड़ा। कोचिंग, लाइब्रेरी और पढ़ाई के बेहतर माहौल की कमी ने उनके सपनों को प्रभावित किया।
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                बाद में उन्होंने सरकारी सेवा जॉइन की। नौकरी मिलने के बाद उन्होंने महसूस किया कि झारखंड के हजारों बच्चे आज भी उसी समस्या से गुजर रहे हैं जिससे वे खुद गुजरे थे। इसी सोच ने उनके अंदर समाज के लिए कुछ बड़ा करने की प्रेरणा जगाई।
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                उन्होंने छोटे-छोटे गांवों और दूरदराज इलाकों में लाइब्रेरी खोलना शुरू किया। इन लाइब्रेरी में गरीब छात्रों के लिए मुफ्त किताबें, पढ़ने की जगह, इंटरनेट और डिजिटल लर्निंग की सुविधा उपलब्ध कराई गई। धीरे-धीरे उनका यह अभियान पूरे झारखंड में फैलने लगा।
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                आज संजय कच्छप को लोग “लाइब्रेरी मैन” के नाम से जानते हैं। उन्होंने हजारों युवाओं को शिक्षा के लिए प्रेरित किया है। उनके प्रयासों से कई छात्र प्रतियोगी परीक्षाओं में सफल हुए और अपने जीवन को नई दिशा दे पाए।
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-700">
                उनका सपना है कि झारखंड का हर बच्चा पढ़े, आगे बढ़े और अपने सपनों को पूरा करे। वे मानते हैं कि शिक्षा ही समाज को बदलने की सबसे बड़ी ताकत है।
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-600">बचपन</h3>
              <p className="mt-2 text-lg text-gray-700 leading-7">
                गरीबी और सीमित शिक्षा संसाधनों के बीच उनका बचपन बीता।
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600">शिक्षा का सपना</h3>
              <p className="mt-2 text-lg text-gray-700 leading-7">
                उन्होंने IAS अधिकारी बनने का सपना देखा लेकिन किताबों और कोचिंग की कमी का सामना किया।
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600">सरकारी सेवा</h3>
              <p className="mt-2 text-lg text-gray-700 leading-7">
                सरकारी सेवा में आने के बाद छात्रों के लिए सामाजिक कार्य शुरू किया।
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600">लाइब्रेरी अभियान</h3>
              <p className="mt-2 text-lg text-gray-700 leading-7">
                झारखंड के कई जिलों में लाइब्रेरी और डिजिटल स्टडी सेंटर बनवाए।
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600">सम्मान और पहचान</h3>
              <p className="mt-2 text-lg text-gray-700 leading-7">
                “लाइब्रेरी मैन” के नाम से पूरे झारखंड में प्रसिद्ध हुए और उनके कार्य की राष्ट्रीय स्तर पर सराहना हुई।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-r from-red-100 to-yellow-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center text-orange-700 mb-14">
            प्रेरणादायक गैलरी
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-72 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-72 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            “शिक्षा समाज बदलने की सबसे बड़ी ताकत है।”
          </h2>

          <p className="mt-8 text-xl text-orange-100 leading-8">
            संजय कच्छप ने अपना जीवन छात्रों और शिक्षा के लिए समर्पित कर दिया। आज भी उनका मिशन हजारों युवाओं को प्रेरित करता है।
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">
              Sanjay Kachhap - Library Man
            </h3>
            <p className="mt-2 text-gray-400">
              झारखंड में शिक्षा आंदोलन को नई दिशा देने वाले प्रेरणास्रोत।
            </p>
          </div>

          <div className="flex gap-4 text-lg">
            <button className="bg-red-500 px-5 py-2 rounded-xl hover:scale-105 transition">
              Facebook
            </button>
            <button className="bg-pink-500 px-5 py-2 rounded-xl hover:scale-105 transition">
              Instagram
            </button>
            <button className="bg-blue-500 px-5 py-2 rounded-xl hover:scale-105 transition">
              YouTube
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
