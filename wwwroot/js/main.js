window.addEventListener('load', function () {
    if (window.location.hash) {
     
      history.replaceState(null, null, ' ');
      window.scrollTo(0, 0);
    }
  });
document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 992) {
      const collapseEl = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl) 
                      || new bootstrap.Collapse(collapseEl, { toggle: false });
      bsCollapse.hide();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {


  const cookieConsent = document.querySelector('.cookie-consent');
  const acceptBtn = cookieConsent.querySelector('.btn-primary');
  const leaveBtn = cookieConsent.querySelector('.btn-outline-light');
  
  acceptBtn.addEventListener('click', function() {
    cookieConsent.style.animation = 'slideOutBottom 0.5s ease forwards';
    localStorage.setItem('cookieConsent', 'accepted');
  });
  
  leaveBtn.addEventListener('click', function() {
    cookieConsent.style.animation = 'slideOutBottom 0.5s ease forwards';
  });
  
 
  if (localStorage.getItem('cookieConsent') === 'accepted') {
    cookieConsent.style.display = 'none';
  }

  
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(element);
  });
});

 const langSelect = document.getElementById('language-select');
    const htmlElement = document.getElementById('lang-html');

   
    function setLanguage(lang) {
      
      if (lang === 'ar') {
        htmlElement.setAttribute('lang', 'ar');
        htmlElement.setAttribute('dir', 'rtl');
      } else {
        htmlElement.setAttribute('lang', 'en');
        htmlElement.setAttribute('dir', 'ltr');
      }

      
      document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
      });
    }

    
    langSelect.addEventListener('change', (event) => {
      setLanguage(event.target.value);
    });

    
    setLanguage('ar');


      const projects = [
      {
      title: "تنفيذ استوديو صباح الخير  ياكويت بوزارة الاعلام",
      titleEnglish: "Implementation of the Good Morning Kuwait Studio at the Ministry of Information",
      images: ["imgs/img72.jpg", "imgs/img73.jpg", "imgs/img74.jpg", "imgs/img75.jpg", "imgs/img76.jpg", "imgs/img77.jpg", "imgs/img78.jpg", "imgs/img79.jpg", "imgs/img80.jpg"]
    },
      {
      title: "تشطيب محل دسمان للعطور بالجهراء المنار مول",
      titleEnglish: "Finishing of Dasman Perfumes store in Jahra, Al Manar Mall",
      images: ["imgs/img68.jpg", "imgs/img69.jpg", "imgs/img70.jpg", "imgs/img71.jpg"]
    },
     {
      title: "تشطيب دور في برج كيبكو",
      titleEnglish: "Finishing a floor in KIPCO Tower",
      images: ["imgs/img81.jpg", "imgs/img82.jpg", "imgs/img83.jpg", "imgs/img84.jpg", "imgs/img85.jpg", "imgs/img86.jpg","imgs/img91.jpg"]
    },
     {
      title: "حفله عيد الام الجيت مول ",
      titleEnglish: "Mother's Day Party",
      images: ["imgs/img63.jpg", "imgs/img64.jpg", "imgs/img65.jpg", "imgs/img66.jpg", "imgs/img67.jpg"]
    },
     {
      title: " تنفيذ احتفالية روح السعوديه في فندق الفور سيزون ",
      titleEnglish: "Implementing the Saudi Spirit celebration at the Four Seasons Hotel",
      images: ["imgs/img200.jpg","imgs/img201.jpg","imgs/img202.jpg","imgs/img203.jpg","imgs/img204.jpg","imgs/img205.jpg","imgs/img206.jpg","imgs/img207.jpg","imgs/img208.jpg","imgs/img209.jpg"]
    },
    {
      title: "تشطيب  جناح  في قسيمه باابو فطيره",
      titleEnglish: "Finishing a suite in the Babo Fatira plot",
      images: ["imgs/img98.jpg", "imgs/img99.jpg", "imgs/img100.jpg", "imgs/img101.jpg", "imgs/img102.jpg", "imgs/img103.jpg","imgs/img104.jpg","imgs/img105.jpg"]
    },
     {
      title: "تشطيب جناح بالوفرة ",
      titleEnglish: "Finishing a suite in Al Wafra",
      images: ["imgs/img138.jpg","imgs/img139.jpg","imgs/img140.jpg","imgs/img141.jpg","imgs/img142.jpg","imgs/img143.jpg","imgs/img144.jpg","imgs/img145.jpg","imgs/img146.jpg"]
    },
      {
      title: "بوث طبي لشركة Sanofi",
      titleEnglish: "Sanofi Company's medical booth",
      images: ["imgs/img16.jpg", "imgs/img13.jpg", "imgs/img15.jpg", "imgs/img14.jpg"]
    },
    {
      title: "معرض عطور",
      titleEnglish: "Perfume booth",
      images: ["imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg","imgs/img5.jpg","imgs/img6.jpg"]
    },
      {
      title: "استندات خشب وصبغ نارى واستيكر لشركة الاصناف التجاريه",
      titleEnglish: "Fire-painted wood stands, sticker, for the Commercial Items Company",
      images: ["imgs/img17.jpg", "imgs/img18.jpg", "imgs/img19.jpg", "imgs/img20.jpg", "imgs/img21.jpg", "imgs/img22.jpg", "imgs/img23.jpg", "imgs/img24.jpg", "imgs/img25.jpg", "imgs/img26.jpg"]
    },
      {
      title: " بوث لشركة سدره للعطور في الافنيوز",
      titleEnglish: "Sedrah Perfumes Booth in The Avenues",
      images: ["imgs/img38.jpg", "imgs/img39.jpg", "imgs/img40.jpg", "imgs/img41.jpg", "imgs/img42.jpg", "imgs/img43.jpg", "imgs/img44.jpg", "imgs/img45.jpg"]
    },
      {
      title: "تنفيذ وتشطيب محل لشركه مودش للملابس الجاهزه بمول 360",
      titleEnglish: "Implementation and finishing of a store for Modish Readymade Clothes Company in 360 Mall",
      images: ["imgs/img116.jpg","imgs/img117.jpg","imgs/img118.jpg","imgs/img119.jpg","imgs/img120.jpg","imgs/img106.jpg","imgs/img107.jpg", "imgs/img108.jpg", "imgs/img109.jpg", "imgs/img110.jpg", "imgs/img111.jpg","imgs/img112.jpg","imgs/img113.jpg","imgs/img114.jpg","imgs/img115.jpg"]
    },
      {
      title: "استاند وياي فك وتركيب",
      titleEnglish: "Astand Weyay fak W tarkib",
      images: ["imgs/img57.jpg", "imgs/img58.jpg", "imgs/img59.jpg", "imgs/img60.jpg", "imgs/img61.jpg", "imgs/img62.jpg"]
    },
       {
      title: "تنفيذ بوث لشركة كنيرجي للاستشارات الغذائية ",
      titleEnglish: "Booth implementation for Kenergy Food Consulting Company",
      images: ["imgs/img128.jpg","imgs/img129.jpg","imgs/img130.jpg","imgs/img131.jpg","imgs/img132.jpg","imgs/img133.jpg","imgs/img134.jpg"]
    },
    {
      title: "معرض عطور",
      titleEnglish: "Perfume booth",
      images: ["imgs/img7.jpg", "imgs/img8.jpg", "imgs/img9.jpg", "imgs/img10.jpg"]
    },
    
     {
      title: "استاند الهيئه العامه للشباب 2019 ",
      titleEnglish: "General Authority for Youth stand",
      images: ["imgs/img135.jpg","imgs/img136.jpg","imgs/img137.jpg"]
    },
    {
      title: "بوث طبي لشركة جمجوم",
      titleEnglish: "Jamjoom Company's medical booth",
      images: ["imgs/img11.jpg", "imgs/img12.jpg"]
    },
       {
      title: "تنفيذ محل بروج للعطوربالجهراء مجمع المنار",
      titleEnglish: "Implementation of the Bruj Perfumes store in Jahra, Al-Manar Complex",
      images: ["imgs/img159.jpg","imgs/img160.jpg","imgs/img161.jpg","imgs/img162.jpg","imgs/img163.jpg"]
    },
         {
      title: "مداخل في الافنيوز وخيران مول",
      titleEnglish: "Entrances to Avenues and Khiran Mall",
      images: ["imgs/img46.jpg", "imgs/img47.jpg", "imgs/img48.jpg", "imgs/img49.jpg", "imgs/img50.jpg", "imgs/img51.jpg", "imgs/img52.jpg", "imgs/img53.jpg", "imgs/img54.jpg", "imgs/img55.jpg", "imgs/img56.jpg"]
    },
      
     {
      title: "تنفيذ بوث لشركه الاتصالات زين",
      titleEnglish: "Booth implementation for Zain Telecom Company",
      images: ["imgs/img164.jpg","imgs/img165.jpg","imgs/img166.jpg","imgs/img167.jpg","imgs/img168.jpg","imgs/img169.jpg","imgs/img170.jpg","imgs/img171.jpg","imgs/img172.jpg"]
    },
      {
      title: "معارض مجوهرات ",
      titleEnglish: "Jewelry booth",
      images: ["imgs/img178.jpg","imgs/img179.jpg","imgs/img180.jpg","imgs/img181.jpg","imgs/img182.jpg","imgs/img183.jpg","imgs/img184.jpg","imgs/img185.jpg","imgs/img186.jpg","imgs/img187.jpg","imgs/img188.jpg","imgs/img189.jpg","imgs/img190.jpg","imgs/img191.jpg","imgs/img192.jpg","imgs/img193.jpg","imgs/img194.jpg","imgs/img195.jpg","imgs/img196.jpg","imgs/img197.jpg","imgs/img198.jpg","imgs/img199.jpg"]
    },
     {
      title: "تشطيب  حضانه  بالجابريه",
      titleEnglish: "Finishing a nursery in Jabriya",
      images: ["imgs/img87.jpg", "imgs/img88.jpg", "imgs/img89.jpg", "imgs/img90.jpg", "imgs/img92.jpg", "imgs/img93.jpg","imgs/img94.jpg","imgs/img95.jpg","imgs/img96.jpg","imgs/img97.jpg"]
    },
     {
      title: "عصير الضاحية",
      titleEnglish: "Aasir Aldaahia",
      images: ["imgs/img27.jpg", "imgs/img28.jpg", "imgs/img29.jpg", "imgs/img30.jpg"]
    },
     {
      title: "كارى",
      titleEnglish: "Cari",
      images: ["imgs/img31.jpg", "imgs/img32.jpg", "imgs/img33.jpg", "imgs/img35.jpg", "imgs/img36.jpg", "imgs/img37.jpg"]
    },
     {
      title: "احتفالية ترولي علي مرور 15 عام ",
      titleEnglish: "Trolley 15th Anniversary Celebration",
      images: ["imgs/img121.jpg","imgs/img122.jpg","imgs/img123.jpg","imgs/img124.jpg","imgs/img125.jpg","imgs/img126.jpg","imgs/img127.jpg"]
    },
    {
      title:"دروبس",
      titleEnglish:"Drops",
      images:["imgs/img34.jpg","imgs/img210.jpg","imgs/img211.jpg"]
    },
     {
      title: "معرض المنتجات القطرية",
      titleEnglish: "Qatari Products booth",
      images: ["imgs/img147.jpg","imgs/img148.jpg","imgs/img149.jpg","imgs/img150.jpg","imgs/img151.jpg","imgs/img152.jpg","imgs/img153.jpg","imgs/img154.jpg","imgs/img155.jpg","imgs/img156.jpg","imgs/img157.jpg","imgs/img158.jpg"]
    },
     {
      title: "بوثات طلبات ",
      titleEnglish: "Talabaat booths",
      images: ["imgs/img173.jpg","imgs/img174.jpg","imgs/img175.jpg","imgs/img176.jpg","imgs/img177.jpg"]
    },
    
   
  ];
const projectsContainer = document.getElementById('projectsContainer');
const showMoreBtn = document.getElementById('showMoreBtn');
const carouselInner = document.getElementById('carouselInner');
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));

function renderProjects(limit = projects.length) {
  projectsContainer.innerHTML = ""; // clear first
  projects.forEach((project, index) => {
    const col = document.createElement('div');
    col.className = `col-md-4 project-card${index >= limit ? ' d-none' : ''}`;
    col.innerHTML = `
      <div class="card text-center" data-index="${index}" style="cursor:pointer">
        <div>
            <img src="${project.images[0]}" class=" project-image" alt="${project.title}" loading="lazy">
        </div>
        <div class="card-body">
          <h5 class="card-title" data-ar="${project.title}" data-en="${project.titleEnglish}">${project.title}</h5>
        </div>
      </div>
    `;
    col.querySelector('.card').addEventListener('click', () => {
      showCarousel(project.images);
    });
    projectsContainer.appendChild(col);
  });
}

function showCarousel(images) {
  carouselInner.innerHTML = "";
  images.forEach((img, i) => {
    const div = document.createElement('div');
    div.className = `carousel-item${i === 0 ? " active" : ""}`;
    div.innerHTML = `<img src="${img}" class="d-block w-100" alt="Slide ${i + 1}" loading="lazy">`;
    carouselInner.appendChild(div);
  });
  projectModal.show();
}

showMoreBtn.addEventListener('click', () => {
  document.querySelectorAll('.project-card.d-none').forEach(card => {
    card.classList.remove('d-none');
  });
  showMoreBtn.style.display = 'none'; 
});


renderProjects(10);


AOS.init({
  offset: 120, 
  duration: 1000, 
  easing: 'ease-in-out', 
});
