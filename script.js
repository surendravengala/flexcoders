
    // let isDark = false;

    // function toggleTheme() {
    //   isDark = !isDark;
    //   document.body.className = isDark ? "dark" : "light";
    //   const icon = document.querySelector("#themeBtn i");
    //   icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    
    // }

    // document.getElementById("themeBtn").addEventListener("click", toggleTheme);

    function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      const hamburger = document.getElementById("hamburger");
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    }
    


let isDark = localStorage.getItem("theme") === "dark";

// Apply the saved theme
document.body.className = isDark ? "dark" : "light";

// Update the icon on load
const icon = document.querySelector("#themeBtn i");
if (icon) {
  icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
}

// Function to toggle theme
function toggleTheme() {
  isDark = !isDark;
  document.body.className = isDark ? "dark" : "light";
  localStorage.setItem("theme", isDark ? "dark" : "light"); // Save to localStorage

  const icon = document.querySelector("#themeBtn i");
  if (icon) {
    icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
  }
}

// Add event listener to theme button
document.getElementById("themeBtn").addEventListener("click", toggleTheme);







 const trendingBtn = document.getElementById("trendingBtn");
const allBtn = document.getElementById("allBtn");
const cards = document.querySelectorAll(".course_card");
const courseCount = document.getElementById("courseCount");

// const trendingCourses = ["Machine Learning", "Artificial Intelligence", "Python", "Data Science", "Microsoft Azure"];

const trendingCourses = [ "Data Analytics", "Full Stack Development","Data Science"];

// Function to update the count
function updateCount(visibleCards) {
    courseCount.textContent = `${visibleCards} Trending Courses Found`;
}

// Show All 
function showAllCourses() {
    trendingBtn.classList.remove("active");
    allBtn.classList.add("active");
    let visible = 0;
    cards.forEach(card => {
        card.style.display = "flex";
        visible++;
    });
    updateCount(visible);
}

// Show Trending by default
function showTrendingCourses() {
    allBtn.classList.remove("active");
    trendingBtn.classList.add("active");
    let visible = 0;
    cards.forEach(card => {
        if (trendingCourses.includes(card.dataset.name)) {
            card.style.display = "flex";
            visible++;
        } else {
            card.style.display = "none";
        }
    });
    updateCount(visible);
}

// Event listeners
allBtn.addEventListener("click", showAllCourses);
trendingBtn.addEventListener("click", showTrendingCourses);

// Initialize count on page load 
showTrendingCourses();




   