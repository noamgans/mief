export function loadMembersPage() {
    content.innerHTML = `
        <section>
            <h1>Management</h1>
            <div class="members">
                <!-- Example Management Member -->
                <a href="mailto:mlaplante@umass.edu" class="member-link">
                <div class="member">
                    <img src="Mason.jpeg" alt="Mason Laplante">
                    <h3>Mason Laplante</h3>
                    <p>Role: President</p>
                    <p>Major: Finance</p>
                </div>
                </a>
                <a href="mailto:ekelly@umass.edu" class="member-link">
                <div class="member">
                    <img src="Emma.jpeg" alt="Emma Kelly">
                    <h3>Emma Kelly</h3>
                    <p>Role: Vice President</p>
                    <p>Major: Finance</p>
                </div>
                </a>
                <a href="mailto:vpalasani@umass.edu" class="member-link">
                <div class="member">
                    <img src="Vedith.jpeg" alt="Vedith Palasani">
                    <h3>Vedith Palasani</h3>
                    <p>Role: Treasurer</p>
                    <p>Major: Finance,<br> Managerial Economics</p>
                </div>
                </a>
                <a href="mailto:ldfitzgerald@umass.edu" class="member-link">
                <div class="member">
                    <img src="Lily.jpeg" alt="Lily Fitzgerald">
                    <h3>Lily Fitzgerald</h3>
                    <p>Role: Head of Marketing</p>
                    <p>Major: Marketing</p>
                </div>
                </a>
                <a href="mailto:ngans@umass.edu" class="member-link">
                <div class="member">
                    <img src="Noam.jpeg" alt="Noam Gans">
                    <h3>Noam Gans</h3>
                    <p>Role: Quant Portfolio Manager</p>
                    <p>Major: Computer Science,<br> Economics</p>
                </div>
                </a>
            </div>
        </section>
        
        <section>
            <h1>Senior Analysts</h1>
            <div class="members">
            <a href="mailto:eappel@umass.edu" class="member-link">
                <!-- Example Senior Analyst Member -->
                <div class="member">
                    <img src="Evan.jpeg" alt="Evan Appel">
                    <h3>Evan Appel</h3>
                    <p>Role: Senior Analyst</p>
                    <p>Major: Finance</p>
                </div>
                </a>
                <a href="mailto:hcurtis@umass.edu" class="member-link">
                <div class="member">
                    <img src="Henry.jpeg" alt="Henry Curtis">
                    <h3>Henry Curtis</h3>
                    <p>Role: Senior Analyst</p>
                    <p>Major: Finance</p>
                </div>
                </a>
                <a href="mailto:okilpady@umass.edu" class="member-link">
                <div class="member">
                    <img src="Om.jpeg" alt="Om Kilpady">
                    <h3>Om Kilpady</h3>
                    <p>Role: Senior Analyst</p>
                    <p>Major: Finance</p>
                </div>
                </a>
                <a href="mailto:smangal@umass.edu" class="member-link">
                <div class="member">
                    <img src="Sagarika.jpeg" alt="Sagarika Mangal">
                    <h3>Sagarika Mangal</h3>
                    <p>Role: Senior Analyst</p>
                    <p>Major: Finance,<br> Applied Mathematics</p>
                </div>
                </a>
                <a href="mailto:jyeo@umass.edu" class="member-link">
                <div class="member">
                    <img src="Junho.jpeg" alt="Junho Yeo">
                    <h3>Junho Yeo</h3>
                    <p>Role: Senior Analyst</p>
                    <p>Major: Finance</p>
                </div>
                </a>
                <!-- More senior analyst members can be added here -->
            </div>
        </section>
        
        <section>
            <h1>Junior Analysts</h1>
            <div class="members">
                <!-- Example Junior Analyst Member -->
                <div class="member">
                    <img src="junior_analyst1.jpg" alt="Junior Analyst 1">
                    <h3>Sarah Lee</h3>
                    <p>Role: Junior Analyst</p>
                    <p>Major: Finance</p>
                </div>
                <!-- More junior analyst members can be added here -->
            </div>
        </section>
    `;
}