//applying the fetch function//
const express = require('express');
const fs = require('fs');
const restaurants = require('../data/restaurants.json');
const router = express.Router();

const url = 'https://restaurants222.p.rapidapi.com/currencies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec19b75ff3mshcbfa3bff3f93858p11211bjsned69d6559bad',
		'X-RapidAPI-Host': 'restaurants222.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

//* GET users listing. *//
router.get('/restaurants', function(req, res) {
  res.json(restaurants);
});

router.get('/restaurants/:id', function(req, res) {
  fs.readFile(`./data/restaurants/${req.params.id}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err
      });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

module.exports = router;

//* =========== Show Navbar =========== *//
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

//* =========== Scroll Position =========== *//

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

//* =========== Smooth Scroll =========== *//
Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default//
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    navbar.classList.remove("show");
  });
});

//* =========== Preloader =========== *//
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

//* =========== Scroll Top =========== *//
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});
