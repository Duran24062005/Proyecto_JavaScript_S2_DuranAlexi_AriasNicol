// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 100
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.backdropFilter = "blur(20px)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".overview-card, .module-card, .tech-card, .delivery-card, .scope-column",
  )

  animatedElements.forEach((el, index) => {
    el.classList.add("fade-in")
    el.style.transitionDelay = `${index * 0.1}s`
    observer.observe(el)
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const sectionHeight = section.clientHeight
    if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add active class styles
const style = document.createElement("style")
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`
document.head.appendChild(style)

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
  const header = document.querySelector(".header-content")
  const nav = document.querySelector(".nav")

  // Create mobile menu button
  const mobileMenuBtn = document.createElement("button")
  mobileMenuBtn.className = "mobile-menu-btn"
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
  mobileMenuBtn.style.display = "none"

  // Add mobile styles
  const mobileStyles = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--primary-color);
                cursor: pointer;
            }
            .nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 1rem;
                box-shadow: var(--shadow-lg);
            }
            .nav.active {
                display: flex;
            }
        }
    `

  const styleSheet = document.createElement("style")
  styleSheet.textContent = mobileStyles
  document.head.appendChild(styleSheet)

  // Add event listener
  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
  })

  // Insert button
  header.appendChild(mobileMenuBtn)
}

// Initialize mobile menu
createMobileMenu()

// Console welcome message
console.log(`
🎓 LMS Project Documentation
============================
Bienvenido a la documentación del Sistema de Gestión del Aprendizaje.
Este proyecto incluye 8 módulos principales para una experiencia educativa completa.

Tecnologías: HTML5, CSS3, JavaScript, Bootstrap, JSON-Server
`)
