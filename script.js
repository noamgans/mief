import { loadHomePage } from './home.js';
import {loadMembersPage} from './members.js';
import {loadReportsPage} from './reports.js';
import {loadBlogPage} from './blog.js';

document.addEventListener("DOMContentLoaded", function() {

    const content = document.getElementById("content");

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
