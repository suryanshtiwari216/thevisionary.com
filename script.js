 // --- Data --------------------------------------------------------------
const courses = [
 { name:"Full stack web development PW", price:4000, category:"web",
 provider:"PW" },
 { name:"Full stack web dev by Udemy", price:5000, category:"web",
 provider:"Udemy" },
 { name:"Data Analytics by Coursera", price:2800, category:"data",
 provider:"Coursera" },
 { name:"Data Science by Udemy", price:2500, category:"data",
 provider:"Udemy" },
 { name:"Cybersecurity by Coursera", price:4000, category:"cyber",
 provider:"Coursera" },
 { name:"Cloud Computing with Aws and Azure by PW", price:3000,
 category:"cloud", provider:"PW" },
 { name:"Cryptography by Coursera", price:4000, category:"cloud",
 provider:"Coursera" },
 { name:"Machine learning by Udemy", price:4000, category:"ai",
 provider:"Udemy" },
 { name:"AI and data engineering by Coursera", price:2500, category:"ai",
 provider:"Coursera" },
 { name:"Video Editing by Tharun Speaks", price:2000, category:"design",
 provider:"Tharun Speaks" },
 { name:"Media & Digital marketing by Udemy", price:3000, category:"design",
 provider:"Udemy" },
 { name:"Harikrat's Cohort (most demanded)", price:6000, category:"others",
 provider:"Harikrat" },
 { name:"Stock market and optional pricing by Udemy", price:2500,
 category:"others", provider:"Udemy" },
 { name:"Front end web dev PW", price:3000, category:"web", provider:"PW" },
 { name:"Backend web dev Pw", price:3500, category:"web", provider:"PW" },
 { name:"Android dev with kotlin by Udemy", price:2000, category:"app",
 provider:"Udemy" },
 { name:"Android dev with Js With Pw", price:2500, category:"app",
 provider:"PW" },
 { name:"App dev with dart and flutter by Udemy", price:4000, category:"app",
 provider:"Udemy" },
 { name:"IOS 15 shiftdev by Coursera", price:2500, category:"app",
 provider:"Coursera" },
 { name:"Ui/Ux design by Udemy", price:2000, category:"design",
 provider:"Udemy" },
 { name:"Model training by Coursera", price:4500, category:"ai",
 provider:"Coursera" },
 { name:"Dsa in Java Coursera by Udemy", price:4000, category:"data",
 provider:"Udemy" },
 6
{ name:"DSA in python in by Udemy", price:2000, category:"data",
 provider:"Udemy" },
 { name:"Java Script frameworks by Udemy", price:2850, category:"web",
 provider:"Udemy" },
 { name:"MongoDB and django by Udemy", price:2000, category:"web",
 provider:"Udemy" },
 { name:"Deep learning and NLP by Udemy", price:5000, category:"ai",
 provider:"Udemy" },
 { name:"Business and Market analytics by Coursera", price:3550,
 category:"data", provider:"Coursera" },
 { name:"Java sigma 6.0(Apni Kaksha)", price:3000, category:"data",
 provider:"Apni Kaksha" },
 { name:"Python by Udemy", price:2000, category:"data", provider:"Udemy" },
 { name:"C++ along with oops and DSA By Coding Ninjas", price:3000,
 category:"data", provider:"Coding Ninjas" },
 { name:"Mentorship of Coding, engineering by Suryansh Tiwari (Online, 4 
months)", price:1000, category:"others", provider:"TheVisionary" },
 { name:"Mentorship of Coding, engineering by Suryansh Tiwari (Offline, 4 
months)", price:2000, category:"others", provider:"TheVisionary" },
 { name:"Complete package course (AI/ML/Web/App/Maths/etc.)", price:6000,
 category:"ai", provider:"TheVisionary" },
 { name:"Complete Hackerrank, Codeforces, QOJ, Leetcode all problems solved",
 price:4000, category:"others", provider:"TheVisionary" },
 { name:"JEE Course", price:3000, category:"competitive",
 provider:"TheVisionary" },
 { name:"NEET Course", price:2000, category:"competitive",
 provider:"TheVisionary" },
 { name:"GATE CS Course", price:5000, category:"competitive",
 provider:"TheVisionary" },
 { name:"GATE DS and AI Course", price:4000, category:"competitive",
 provider:"TheVisionary" },
 ];
 // --- DOM references ----------------------------------------------------
const courseList = document.getElementById("catalog");
 const searchInput = document.getElementById("search");
 const categoryFilter = document.getElementById("categoryFilter");
 const chipRow = document.querySelector('.chips');
 // --- Helpers -----------------------------------------------------------
function calculateCertificateFee(basePrice) {
 return basePrice <= 2000 ? 1000 : 1500;
 }
 function upiUrl(amount) {
 const pa = 'prateekaps32@okhdfcbank';
 const pn = encodeURIComponent('TheVisionary.com');
 return `upi://pay?pa=${pa}&pn=${pn}&am=${amount}&cu=INR`;
 7
}
 function formatINR(val) {
 return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR',
 maximumFractionDigits: 0 }).format(val);
 }
 // --- Render ------------------------------------------------------------
function renderCourses() {
 courseList.innerHTML = '';
 const searchText = searchInput.value.trim().toLowerCase();
 const category = categoryFilter.value;
 const filtered = courses.filter(c =>
 (category === 'all' || c.category === category) &&
 (!searchText || (c.name + ' ' +
 (c.provider||'')).toLowerCase().includes(searchText))
 );
 if (filtered.length === 0) {
 courseList.innerHTML = `<div class="card"><h3>No courses found</h3><p 
class="small">Try a different keyword or category.</p></div>`;
 return;
 }
 filtered.forEach((course, i) => {
 const certFee = calculateCertificateFee(course.price);
 const base = course.price;
 const card = document.createElement('article');
 card.className = 'card';
 card.innerHTML = `
      <h3>${course.name}</h3>
      <div class="meta">Category: <strong>${course.category.toUpperCase()}</
 strong> • Provider: <strong>${course.provider}</strong></div>
      <div class="row">
        <div>
          <div class="price">${formatINR(base)}</div>
          <div class="small">Certificate: +${formatINR(certFee)} (≤ ₹2000 ⇒ 
₹1000 else ₹1500)</div>
        </div>
        <span id="badge-${i}" class="badge" style="display:none">✅ Certificate 
Included</span>
      </div>
 8
      <div class="controls">
        <label class="checkbox">
          <input type="checkbox" id="cert-${i}" /> Add Certificate
        </label>
        <a class="pay-btn" id="pay-${i}" href="${upiUrl(base)}" target="_blank" 
rel="noopener">Pay ${formatINR(base)}</a>
      </div>
      <div class="small">UPI link auto-updates with your selection.</div>
    `;
 const certCb = card.querySelector(`#cert-${i}`);
 const payBtn = card.querySelector(`#pay-${i}`);
 const badge = card.querySelector(`#badge-${i}`);
 certCb.addEventListener('change', () => {
 const amount = certCb.checked ? base + certFee : base;
 payBtn.href = upiUrl(amount);
 payBtn.textContent = `Pay ${formatINR(amount)}`;
 badge.style.display = certCb.checked ? 'inline-flex' : 'none';
 });
 courseList.appendChild(card);
 });
 }
 // --- Events ------------------------------------------------------------
searchInput.addEventListener('input', renderCourses);
 categoryFilter.addEventListener('change', renderCourses);
 chipRow?.addEventListener('click', (e) => {
 const btn = e.target.closest('[data-cat]');
 if (!btn) return;
 const cat = btn.getAttribute('data-cat');
 categoryFilter.value = cat;
 renderCourses();
 window.scrollTo({ top: document.getElementById('catalog').offsetTop- 80,
 behavior: 'smooth' });
 });
 // Initial paint
 renderCourses();
