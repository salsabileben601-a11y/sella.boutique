let currentProductPrice = 0;

// تصفية المنتجات حسب القسم (فلتر الأقسام)
function filterProducts(category) {
    // تغيير لون الأزرار النشطة
    let buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // إظهار أو إخفاء المنتجات حسب الـ category
    let cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// فتح نافذة الطلب وتعبئة معلومات المنتج المختار
function openOrder( price) {
    currentProductPrice = parseInt(price);
    
    document.getElementById('modalBasePrice').innerText = price + " DA";
    
    
    document.getElementById('orderModal').style.display = 'block';
    calculateTotal();
}

// غلق النافذة
function closeOrder() {
    document.getElementById('orderModal').style.display = 'none';
}

// حساب سعر التوصيل والإجمالي تلقائياً
function calculateTotal() {
    let wilaya = document.getElementById('wilaya').value;
    let deliveryType = document.getElementById('delivery').value;
    let shippingPrice = 500; // سعر افتراضي

    // أمثلة لأسعار التوصيل حسب الولاية
    if (wilaya === 'biskra') {
        shippingPrice = deliveryType === 'home' ? 400 : 300;
    } else {
        shippingPrice = deliveryType === 'home' ? 600 : 450;
    }

    document.getElementById('shippingprice').innerText = shippingPrice + " DA";
    
    let total = currentProductPrice + shippingPrice;
    document.getElementById('total').innerText = total + " DA";
}

// تأكيد الطلب وإرساله
function submitOrder(event) {
    event.preventDefault();
    alert("🎉 تم إرسال طلبك بنجاح! سنتصل بك قريباً لتأكيد التوصيل.");
    closeOrder();
}