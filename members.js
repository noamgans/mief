export function loadMembersPage() {
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