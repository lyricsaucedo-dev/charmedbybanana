// charmedbybanana — Static Site JavaScript

// ========================================
// HERO CAROUSEL
// ========================================
function initHeroCarousel() {
  const heroCarouselTrack = document.getElementById('heroCarouselTrack');
  if (!heroCarouselTrack) return;

  const heroImages = [
    "assets/herocell/651793616_999398432651835_5247240270234151535_n.jpg",
    "assets/herocell/654237884_1622289359004347_5694652506851277362_n.jpg",
    "assets/herocell/655300664_1616891769539272_9089171087142438353_n.jpg",
    "assets/herocell/656832885_970791532308937_1846400715009402438_n.jpg",
    "assets/herocell/657956582_978808197854181_4276569562980094647_n.jpg",
    "assets/herocell/658930329_27579540544968946_5963714997845401319_n.jpg",
    "assets/herocell/665011690_1729863228175185_4273710875869228099_n.jpg",
    "assets/herocell/665189502_1650378512773210_1522311441175281037_n.jpg",
    "assets/herocell/671087764_1972381600036265_6007298158154958140_n.jpg",
    "assets/herocell/672010635_1437261411776526_1337401179123544455_n.jpg",
    "assets/herocell/672050756_986598640383823_4491415262466415892_n.jpg",
    "assets/herocell/672076073_2756031198105611_8058359625366656411_n.jpg",
    "assets/herocell/672093557_1010329428839545_3286004845000460671_n.jpg",
    "assets/herocell/672127868_2016032819012742_2079210941280863718_n.png",
    "assets/herocell/672264231_1534289518037603_1204590600797388791_n.jpg",
    "assets/herocell/672302771_1360029229309020_125679233951654022_n.jpg",
    "assets/herocell/672444144_26193990363629825_895886418556046316_n.png",
    "assets/herocell/672554574_1258845229299458_2372257795767973598_n.jpg",
    "assets/herocell/672584051_966697426226639_6142678759198196743_n.jpg",
    "assets/herocell/672689518_820897717283384_5462027886475563438_n.jpg",
    "assets/herocell/673100652_957993033313860_2833323285754525271_n.jpg",
    "assets/herocell/673464071_4545529469096130_11240939531520829_n.jpg",
    "assets/herocell/673484965_1997568844452904_3905651503177618539_n.jpg",
    "assets/herocell/673666736_1686371622553649_1308198656644115045_n.jpg",
    "assets/herocell/673830596_1616960229531082_4193291319184182615_n.jpg",
    "assets/herocell/673836064_994551200202860_6285749005700259521_n.jpg",
    "assets/herocell/674355767_1505695701086484_1328138063553677294_n.jpg",
    "assets/herocell/674358895_968570879094001_6829740819143098209_n.jpg",
    "assets/herocell/674903323_1407844924431457_7988735968614769994_n.png",
    "assets/herocell/676857611_1600843760997156_8690657936133449061_n.jpg",
    "assets/herocell/676880058_955181673763270_4990211520758192672_n.jpg",
    "assets/herocell/676902168_958209663844607_7507271386025563182_n.jpg",
    "assets/herocell/677166499_967779395829501_7286825612719426498_n.jpg",
    "assets/herocell/677776354_1509865160526239_8723434072709349507_n.jpg",
    "assets/herocell/678656445_1514600373522007_686611346877469292_n.jpg",
    "assets/herocell/679009636_1674578140441883_6911412457999567757_n.jpg",
    "assets/herocell/679061297_2535899356829308_1507241154964594068_n.jpg"
  ];

  heroImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product example';
    img.className = 'hero-carousel-slide';
    heroCarouselTrack.appendChild(img);
  });

  let currentIndex = 0;
  const totalSlides = heroImages.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    heroCarouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 4000);
}

// ========================================
// SPARKLE FIELD
// ========================================
function createSparkles() {
  const sparkleField = document.getElementById('sparkleField');
  if (!sparkleField) return;
  
  const sparkleSymbols = ['✨', '⭐', '💫', '🌟'];
  
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 2.5 + 's';
    sparkle.style.fontSize = (0.75 + Math.random() * 1) + 'rem';
    sparkleField.appendChild(sparkle);
  }
}

// ========================================
// MARQUEE
// ========================================
function initMarquee() {
  const marqueeContent = document.getElementById('marqueeContent');
  if (!marqueeContent) return;
  
  const items = ["✨ handmade", "📱 Phone Charms", "💖 made with love", "⭐ one of a kind", "📕 Bible Charms", "🪞 Rearview Mirror Charms"];
  const repeated = [...items, ...items, ...items, ...items];
  
  repeated.forEach(item => {
    const div = document.createElement('div');
    div.className = 'marquee-item';
    div.innerHTML = `<span>${item}</span><span class="marquee-star">★</span>`;
    marqueeContent.appendChild(div);
  });
}

// ========================================
// CATALOG
// ========================================
const products = [
  { id: 1, name: "Customized Charm", price: 35, images: ["assets/charm/655589505_1512811017299111_8471287371722016722_n.jpg", "assets/charm/672010635_1437261411776526_1337401179123544455_n.jpg", "assets/charm/672027705_1729555221378702_5509327224843784980_n.jpg", "assets/charm/672249956_2115516272324784_4380898232443107297_n.jpg", "assets/charm/676644454_1341415347893991_4429830888461059251_n.jpg"], tag: "custom", bg: "bg-banana" },
  { id: 2, name: "Customized Glasses", price: 25, images: ["assets/glasses/671087764_1972381600036265_6007298158154958140_n.jpg", "assets/glasses/672093557_1010329428839545_3286004845000460671_n.jpg", "assets/glasses/673464071_4545529469096130_11240939531520829_n.jpg", "assets/glasses/679061297_2535899356829308_1507241154964594068_n.jpg", "assets/glasses/IMG_6426 (2).JPG"], tag: "custom", bg: "bg-bubblegum" },
  { id: 3, name: "Car Mirror Charms", price: 30, images: ["assets/mirror/651793616_999398432651835_5247240270234151535_n.jpg", "assets/mirror/655300664_1616891769539272_9089171087142438353_n.jpg", "assets/mirror/672584051_966697426226639_6142678759198196743_n.jpg", "assets/mirror/673830596_1616960229531082_4193291319184182615_n.jpg"], tag: "custom", bg: "bg-lavender" },
  { id: 4, name: "Bible Charms", price: 20, images: ["assets/bible/674903323_1407844924431457_7988735968614769994_n.png"], tag: "custom", bg: "bg-sky" },
  { id: 5, name: "Hat Chains", price: 28, images: ["assets/hatchains/IMG_6439.JPG", "assets/hatchains/IMG_6432.JPG"], tag: "custom", bg: "bg-banana" },
  { id: 6, name: "Kindle/Phone Charms", price: 22, images: ["assets/devicecharms/IMG_6424.JPG", "assets/devicecharms/IMG_6434.JPG", "assets/devicecharms/IMG_6436.JPG"], tag: "custom", bg: "bg-bubblegum" },
];

function initCatalog() {
  const catalogGrid = document.getElementById('catalogGrid');
  if (!catalogGrid) return;
  
  products.forEach(product => {
    const article = document.createElement('article');
    article.className = 'product-card';
    
    const hasMultipleImages = product.images.length > 1;
    const carouselClass = hasMultipleImages ? 'product-carousel' : 'product-image-wrapper';
    
    let carouselHTML = '';
    if (hasMultipleImages) {
      carouselHTML = `
        <div class="product-carousel" id="carousel-${product.id}">
          <div class="carousel-track">
            ${product.images.map(img => `<img src="${img}" alt="${product.name}" class="carousel-slide" />`).join('')}
          </div>
          <button class="carousel-arrow carousel-prev" onclick="moveCarousel(${product.id}, -1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button class="carousel-arrow carousel-next" onclick="moveCarousel(${product.id}, 1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <div class="carousel-dots">
            ${product.images.map((_, i) => `<span class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${product.id}, ${i})"></span>`).join('')}
          </div>
        </div>
      `;
    } else {
      carouselHTML = `
        <div class="product-image-wrapper">
          <img src="${product.images[0]}" alt="${product.name}" class="product-image" />
        </div>
      `;
    }
    
    article.innerHTML = `
      ${carouselHTML}
      <span class="product-tag ${product.tag}">${product.tag}</span>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price}</p>
        <button class="btn btn-hero btn-sm" onclick="openModal('${product.name}')">Add to bag</button>
      </div>
    `;
    catalogGrid.appendChild(article);
  });
}

// ========================================
// CAROUSEL NAVIGATION
// ========================================
const carouselStates = {};

function initCarousel(productId, imageCount) {
  carouselStates[productId] = {
    currentSlide: 0,
    totalSlides: imageCount
  };
}

function moveCarousel(productId, direction) {
  const carousel = document.getElementById(`carousel-${productId}`);
  if (!carousel) return;
  
  if (!carouselStates[productId]) {
    const product = products.find(p => p.id === productId);
    if (product) {
      initCarousel(productId, product.images.length);
    }
  }
  
  const state = carouselStates[productId];
  state.currentSlide += direction;
  
  if (state.currentSlide < 0) {
    state.currentSlide = state.totalSlides - 1;
  } else if (state.currentSlide >= state.totalSlides) {
    state.currentSlide = 0;
  }
  
  updateCarousel(productId);
}

function goToSlide(productId, slideIndex) {
  const carousel = document.getElementById(`carousel-${productId}`);
  if (!carousel) return;
  
  if (!carouselStates[productId]) {
    const product = products.find(p => p.id === productId);
    if (product) {
      initCarousel(productId, product.images.length);
    }
  }
  
  carouselStates[productId].currentSlide = slideIndex;
  updateCarousel(productId);
}

function updateCarousel(productId) {
  const carousel = document.getElementById(`carousel-${productId}`);
  if (!carousel) return;
  
  const state = carouselStates[productId];
  const track = carousel.querySelector('.carousel-track');
  const dots = carousel.querySelectorAll('.carousel-dot');
  
  track.style.transform = `translateX(-${state.currentSlide * 100}%)`;
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === state.currentSlide);
  });
}

// ========================================
// FAQ
// ========================================
const faqs = [
  { q: "Are these waterproof? 💦", a: "Charms are made with quality beads & findings, but I recommend taking them off before showers, swimming, or scrubbing dishes — they'll thank you later 💖" },
  { q: "Can I request a custom charm? 🎨", a: "Yes!! Slide into my DMs on Instagram @charmedbybanana with your idea and we'll make magic." },
  { q: "What if mine breaks? 🥺", a: "Reach out within 14 days and I'll fix you up. Each charm is handmade so I want you to love yours forever." },
];

function initFAQ() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;
  
  faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <button class="faq-question" onclick="toggleFAQ(${index})">
        ${faq.q}
        <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="faq-answer" id="faqAnswer${index}">
        <p>${faq.a}</p>
      </div>
    `;
    faqList.appendChild(item);
  });
}

function toggleFAQ(index) {
  const items = document.querySelectorAll('.faq-item');
  const item = items[index];
  const isActive = item.classList.contains('active');
  
  // Close all
  items.forEach(i => i.classList.remove('active'));
  
  // Open clicked if it wasn't active
  if (!isActive) {
    item.classList.add('active');
  }
}

// ========================================
// MODAL
// ========================================
let currentProduct = '';

function openModal(productName) {
  currentProduct = productName;
  const modal = document.getElementById('customizationModal');
  const modalProductName = document.getElementById('modalProductName');
  modalProductName.textContent = `Customizing: ${productName}`;
  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('customizationModal');
  const themeInput = document.getElementById('theme');
  modal.classList.remove('show');
  themeInput.value = '';
}

function addToCart() {
  const themeInput = document.getElementById('theme');
  const theme = themeInput.value;
  
  // Find product price
  const product = products.find(p => p.name === currentProduct);
  const price = product ? product.price : 0;
  
  // Add to cart
  cart.push({
    id: Date.now(),
    name: currentProduct,
    price: price,
    theme: theme.trim() || 'No theme specified'
  });
  
  updateCartCounter();
  
  closeModal();
  
  if (theme.trim()) {
    showToast('Added to bag! 🍌', `${currentProduct} with theme: ${theme}`);
  } else {
    showToast('Added to bag! 🍌', currentProduct);
  }
}

// ========================================
// CART
// ========================================
let cart = [];

function updateCartCounter() {
  const cartCounter = document.getElementById('cartCounter');
  if (cartCounter) {
    cartCounter.textContent = cart.length;
  }
}

function openCartModal() {
  const cartModal = document.getElementById('cartModal');
  renderCartItems();
  cartModal.classList.add('show');
}

function closeCartModal() {
  const cartModal = document.getElementById('cartModal');
  cartModal.classList.remove('show');
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
  const emptyCartMessage = document.getElementById('emptyCartMessage');
  const cartTotalElement = document.getElementById('cartTotal');
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '';
    emptyCartMessage.style.display = 'block';
    cartTotalElement.textContent = '0';
    return;
  }
  
  emptyCartMessage.style.display = 'none';
  
  let total = 0;
  cartItemsContainer.innerHTML = cart.map(item => {
    total += item.price;
    return `
      <div class="cart-item">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-theme">Theme: ${item.theme}</p>
          <p class="cart-item-price">$${item.price}</p>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    `;
  }).join('');
  
  cartTotalElement.textContent = total;
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartCounter();
  renderCartItems();
  showToast('Removed from bag', 'Item removed from your bag');
}

function checkout() {
  if (cart.length === 0) {
    showToast('Your bag is empty!', 'Add some items before checking out');
    return;
  }
  
  closeCartModal();
  showToast('Checkout coming soon! 🍌', 'DM @charmedbybanana to complete your order');
}

// ========================================
// SHIPPING MODAL
// ========================================
function openShippingModal() {
  if (cart.length === 0) {
    showToast('Your bag is empty!', 'Add some items before checking out');
    return;
  }
  
  closeCartModal();
  const shippingModal = document.getElementById('shippingModal');
  shippingModal.classList.add('show');
}

function closeShippingModal() {
  const shippingModal = document.getElementById('shippingModal');
  const shippingName = document.getElementById('shippingName');
  const shippingEmail = document.getElementById('shippingEmail');
  const shippingPhone = document.getElementById('shippingPhone');
  const shippingStreet = document.getElementById('shippingStreet');
  const shippingCity = document.getElementById('shippingCity');
  const shippingState = document.getElementById('shippingState');
  const shippingZip = document.getElementById('shippingZip');
  
  shippingModal.classList.remove('show');
  shippingName.value = '';
  shippingEmail.value = '';
  shippingPhone.value = '';
  shippingStreet.value = '';
  shippingCity.value = '';
  shippingState.value = '';
  shippingZip.value = '';
}

async function checkoutWithStripe() {
  if (cart.length === 0) {
    showToast('Your bag is empty!', 'Add some items before checking out');
    return;
  }

  closeCartModal();
  showToast('Redirecting to checkout...', 'Please wait while we set up your secure payment');

  try {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      showToast('Checkout error', 'Please try again');
    }
  } catch (error) {
    console.error('Checkout error:', error);
    showToast('Checkout error', 'Please try again');
  }
}

// ========================================
// TOAST
// ========================================
function showToast(title, description) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastDescription = document.getElementById('toastDescription');
  
  toastTitle.textContent = title;
  toastDescription.textContent = description;
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ========================================
// FOOTER YEAR
// ========================================
function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  createSparkles();
  initMarquee();
  initCatalog();
  initFAQ();
  setYear();
});
