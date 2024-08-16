document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");

    function loadHomePage() {
        content.innerHTML = `
        <h1>Welcome to the Minutemen International Equity Fund</h1>
        <div class="container">
            <div class="left-half">
                <h3>Purpose</h3>
                <p>Our purpose is to connect remote and on-campus students who share an enthusiasm for international equity research - financial analysis in international markets.</p>
                <h3>Goals</h3>
            <p>We seek to educate and provide hands-on experience to our analysts allowing them to develop highly valuable analytical skills that can translate into future careers in the financial services industry.</p>
            
                
            </div>
            <div class="right-half">
            <h3>Strategy</h3>
                <p>Through using valuations and reports from our analysts, we develop our long/short active trading strategy to create alpha for our club's portfolio.</p>
            <h3>Philosophy</h3>
                <p>At MIEF, we believe in a comprehensive approach to international equity research. Be analytical, logical, and quantitative, always acting upon due dilligence and allowing yourself to learn from mistakes We embrace learning from both positive and negative experiences, as we view them as an opportunity to expand our knowledge and reduce our future risk.</p>
            </div>
        </div>
        `;
    }

    function loadMembersPage() {
        content.innerHTML = `
            <section>
                <h1>Meet Our Members</h1>
                <div class="members">
                    <!-- Example Member -->
                    <div class="member">
                        <img src="member1.jpg" alt="Member 1">
                        <h2>John Doe</h2>
                        <p>Role: President</p>
                        <p>Major: Finance</p>
                    </div>
                    <!-- More members can be added here -->
                </div>
            </section>
        `;
    }

    function loadReportsPage() {
        content.innerHTML = `
            <section>
                <h1>Equity Reports</h1>
                <ul>
                    <li><a href="report1.pdf" target="_blank">Report on XYZ Corp</a></li>
                    <!-- More reports can be added here -->
                </ul>
            </section>
        `;
    }

    function loadBlogPage() {
        content.innerHTML = `
            <section>
                <h1>Blog</h1>
                <article>
                    <h2>Understanding Emerging Markets</h2>
                    <p>August 15, 2024</p>
                    <p>Emerging markets offer unique opportunities and challenges...</p>
                    <a href="#">Read more</a>
                </article>
                <!-- More blog posts can be added here -->
            </section>
        `;
    }

    // Event Listeners for Navigation
    document.getElementById("home-link").addEventListener("click", function(e) {
        e.preventDefault();
        loadHomePage();
    });
    document.getElementById("logo-link").addEventListener("click", function(e) {
        e.preventDefault();
        loadHomePage();
    });

    document.getElementById("members-link").addEventListener("click", function(e) {
        e.preventDefault();
        loadMembersPage();
    });

    document.getElementById("reports-link").addEventListener("click", function(e) {
        e.preventDefault();
        loadReportsPage();
    });

    document.getElementById("blog-link").addEventListener("click", function(e) {
        e.preventDefault();
        loadBlogPage();
    });

    // Load Home Page by default
    loadHomePage();
});
