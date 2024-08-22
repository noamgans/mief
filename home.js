export function loadHomePage() {
    content.innerHTML = `
    <h1>Welcome to the Minutemen International Equity Fund</h1>
    <div class="group-member-picture">
            <img src="Group.jpeg" alt="Group Member Picture">
    </div>
    <div class="carousel">
            <div class="carousel-item">
                <h1>Purpose</h1>
                <p>Our purpose is to connect remote and on-campus students who share an enthusiasm for international equity research - financial analysis in international markets.</p>
            </div>
            <div class="carousel-item">
                <h1>Goals</h1>
                <p>We seek to educate and provide hands-on experience to our analysts allowing them to develop highly valuable analytical skills that can translate into future careers in the financial services industry.</p>
            </div>     
            <div class="carousel-item">
                <h1>Strategy</h1>
                <p>Through using valuations and reports from our analysts, we develop our long/short active trading strategy to create alpha for our club's portfolio.</p>
            </div>
            <div class="carousel-item">
                <h1>Philosophy</h1>
                <p>At MIEF, we believe in a comprehensive approach to international equity research. Be analytical, logical, and quantitative, always acting upon due diligence and allowing yourself to learn from mistakes. We embrace learning from both positive and negative experiences, as we view them as an opportunity to expand our knowledge and reduce our future risk.</p>
            </div>
        </div>
    </div>
            <div class="president-section">
                <div class="president-image">
                    <img src="Mason.jpeg" alt="MIEF President">
                </div>
                <div class="president-message">
                    <h3>Message from the President</h3>
                    <p>As the president of MIEF, I am proud to lead a team of dedicated students passionate about international equity research. Our club provides a unique opportunity to gain hands-on experience in financial analysis and portfolio management. I invite you to join us in this exciting journey of learning and growth.</p>
                    <p>- Mason Laplante, MIEF President</p>
                </div>
            </div>
    `;
    const carousel = document.querySelector('.carousel');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }
    function nextCarouselItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
    }
    showCarouselItem(currentIndex);
    setInterval(nextCarouselItem, 7500); // Change slide every 5 seconds
}