export function loadReportsPage() {
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