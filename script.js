document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");

    function loadHomePage() {
        content.innerHTML = `
            <section>
                <h1>Welcome to the Minutemen International Equity Fund</h1>
                <p>Our club is dedicated to understanding and investing in international equities.</p>
            </section>
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
