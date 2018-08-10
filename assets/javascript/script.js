var projectList = [{name: "Career Deer",
                    tags: ["HTML", "CSS", "Javascript", "APIs", "Bootstrap", "Node.js", "Express.js", "MongoDB", "React.js", "Redux.js", "Highlights"],
                    image: "assets/images/career-deer.png",
                    description: "Career Deer helps you find jobs and track your application progress.",
                    url: "https://careerdeer.herokuapp.com",
                    GHurl: "https://github.com/jimmytutron/career-deer"
                }, {name: "ME.dia",
                    tags: ["HTML", "CSS", "Javascript", "jQuery", "APIs", "Bootstrap", "Node.js", "Express.js", "SQL", "Handlebars", "Highlights"],
                    image: "assets/images/media.png",
                    description: "ME.dia analyzes your preferences to deliver cross media recommendations.",
                    url: "https://media-2018.herokuapp.com/",
                    GHurl: "https://github.com/robertshaw87/ME-dia"
                }, {name: "MoveMe",
                    tags: ["HTML", "CSS", "Javascript", "jQuery", "APIs", "Bootstrap", "Google Firebase", "Highlights"],
                    image: "assets/images/MoveMe.jpg",
                    description: "MoveMe is the all in one app for getting involved in your local community.",
                    url: "https://robertshaw87.github.io/MoveMe/",
                    GHurl: "https://github.com/robertshaw87/MoveMe"
                }, {name: "Memory Game",
                    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "React.js", "Highlights"],
                    image: "assets/images/Memory.png",
                    description: "Click the images you haven't selected before. The game ends when you repeat a click.",
                    url: "https://robertshaw87.github.io/memory-check/",
                    GHurl: "https://github.com/robertshaw87/memory-check"
                }, {name: "Definitely Not an Onion Scraper",
                    tags: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "MongoDB", "Express.js", "Node.js", "Highlights"],
                    image: "assets/images/notOnion.png",
                    description: "Save and add notes to interesting news articles that are actually true.",
                    url: "https://not-an-onion-scraper.herokuapp.com/",
                    GHurl: "https://github.com/robertshaw87/DefinitelyNotAnOnionScraper"
                }, {name: "Rock Paper Scissors",
                    tags: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Google Firebase", "Highlights"],
                    image: "assets/images/RPS.jpg",
                    description: "Play with other users over the web or chat with the built in service.",
                    url: "https://robertshaw87.github.io/Rock-Paper-Scissors/",
                    GHurl: "https://github.com/robertshaw87/Rock-Paper-Scissors"
                }, {name: "Animal Facts!",
                    tags: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Highlights"],
                    image: "assets/images/Trivia.jpg",
                    description: "Tackle trivia questions and learn new facts. Be wary of the time limit!",
                    url: "https://robertshaw87.github.io/Trivia-Game/",
                    GHurl: "https://github.com/robertshaw87/Trivia-Game"
                }, {name: "New York Times Scraper",
                    tags: ["HTML", "CSS", "Javascript", "React.js", "MongoDB", "Express.js", "Node.js"],
                    image: "assets/images/NYTScrape.png",
                    description: "Search for interesting New York Times articles and save them to view later.",
                    url: "https://scraper-nyt-react.herokuapp.com/",
                    GHurl: "https://github.com/robertshaw87/nyt-scraper-mern"
                }, {name: "Pet Pals",
                    tags: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Node.js", "Express.js"],
                    image: "assets/images/PetPals.png",
                    description: "Find a new friend for your pet!",
                    url: "https://peaceful-dusk-98568.herokuapp.com/",
                    GHurl: "https://github.com/robertshaw87/Friend-Finder"
                }, {name: "Restaurant Tracker",
                    tags: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Node.js", "Express.js", "SQL", "Highlights"],
                    image: "assets/images/Restaurant-Tracker.png",
                    description: "Create a list of restaurants you wish to visit and save whether you liked them or not!",
                    url: "https://fathomless-coast-46070.herokuapp.com/",
                    GHurl: "https://github.com/robertshaw87/Restaurant-Tracker"
                }, {name: "Triwizard Dueling Arena",
                    tags: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap"],
                    image: "assets/images/Battle.jpg",
                    description: "Select a champion and enter the new dueling event at the Triwizard Tournament!",
                    url: "https://robertshaw87.github.io/Battle-Game/",
                    GHurl: "https://github.com/robertshaw87/Battle-Game"
                }, {name: "Explore the Stars",
                    tags: ["Just For Fun", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"],
                    image: "assets/images/WordGuess.jpg",
                    description: "Guess the chosen word within a limited number of tries!",
                    url: "https://robertshaw87.github.io/Word-Guess-Game/",
                    GHurl: "https://github.com/robertshaw87/Word-Guess-Game"
                }, {name: "Giphy Pets Library",
                    tags: ["Just For Fun", "HTML", "CSS", "Javascript", "APIs", "jQuery", "Bootstrap"],
                    image: "assets/images/Giphy.jpg",
                    description: "Explore a wide variety of gifs from Giphy and save your favorites.",
                    url: "https://robertshaw87.github.io/Giphy-Library/",
                    GHurl: "https://github.com/robertshaw87/Giphy-Library"
                }, {name: "Mystery Fruit",
                    tags: ["Just For Fun", "Node.js"],
                    image: "assets/images/mystery-fruit.png",
                    description: "Guess the mystery fruit!",
                    url: false,
                    GHurl: "https://github.com/robertshaw87/Mystery-Fruit"
                }, {name: "Liri",
                    tags: ["Just For Fun", "Node.js"],
                    image: "assets/images/Liri.png",
                    description: "A little helper program based on Apple's Siri.",
                    url: false,
                    GHurl: "https://github.com/robertshaw87/Liri-Bot"
                }, {
                    name: "Bob's Emporium of Wonders",
                    tags: ["Just For Fun", "Node.js", "SQL"],
                    image: "assets/images/inventory-management.png",
                    description: "An app for managing and purchasing items",
                    url: false,
                    GHurl: "https://github.com/robertshaw87/Inventory-Management"
                }];
var projectButtonsList = ["APIs", "Bootstrap", "CSS", "Express.js", "Google Firebase", "HTML", "Javascript", "jQuery", "MongoDB", "Node.js", "React.js", "Redux.js", "SQL"]

function displayHome() {
    $("#home-button").addClass("current-page");
    $("#portfolio-button").removeClass("current-page");
    $("#main-display").html(`
        <div class="row m-0">
            <div class="col"></div>
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-0">
                <div class="card mt-5 text-light black-background animated zoomIn" id="profile-content-card">
                    <div class="card-body">
                        <div class="card bg-dark m-1" id="profile-portrait">
                            <img class="card-img" src="assets/images/robert-shaw.jpg" alt="Robert Shaw">
                        </div>
                        <div class="card-text" id="about-me-text">
                            <h3>About Me</h3>
                            <hr>
                            <p>Hello! My name is Robert Shaw, and I'm a Full Stack developer.</p><p>I am skilled at combining my background in Computer Science and my experience with online resources to quickly learn new technologies and overcome challenges. I love expanding and utilizing my knowledge base through creating interesting apps.</p><p>I'm a very positive person who works well with others and maintains a strong professional relationship with my teammates. I'm looking for an opportunity to grow my career and apply my skills.</p><p>Thank you for your interest. I look forward to hearing from you!</p>
                            <button class="btn btn-outline-light float-right" id="portfolio-button">My Portfolio ➯</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    `)
}

function displayPortfolio() {
    $("#home-button").removeClass("current-page");
    $("#portfolio-button").addClass("current-page");
    $("#main-display").html(`
        <div class="row m-0">
            <div class="col-0 col-sm-1 col-xl-2"></div>
            <div class="col-12 col-sm-10 col-xl-8 p-0">
                <div class="row m-0">
                    <div class="col-12 col-md-4 col-lg-3 p-0">
                        <div class="card mt-5 text-light black-background" id="project-buttons-card">
                            <div class="card-body text-center">
                                <div class="card-text text-center">
                                    <h3>Projects</h3>
                                    <hr>
                                    <button class="btn btn-outline-light project-button project-button-active mb-4 p-2 pr-5 pl-5" data-tag="Highlights" id="show-all">Highlights</button>
                                </div>
                                <div class="card-text text-center" id="project-buttons-area"></div>
                                <button class="btn btn-outline-light project-button mt-4 p-2 pr-5 pl-5 animated fadeIn" data-tag="Just For Fun" id="just-for-fun">Just For Fun</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8 col-lg-9 p-3 mt-5 text-center">
                        <div class="row m-0" id="project-display-area"></div>
                    </div>
                </div>
            </div>
            <div class="col-0 col-sm-1 col-xl-2"></div>
        </div>
    `);
    displayButtons();
    displayProjects("Highlights")
}

function displayButtons() {
    $("#project-buttons-area").empty();
    for (var i = 0; i < projectButtonsList.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("btn btn-outline-light project-button ml-2 mr-2 mt-2 mb-2 animated fadeIn");
        newButton.data("tag", projectButtonsList[i]);
        newButton.text(projectButtonsList[i]);
        $("#project-buttons-area").append(newButton);
    }
}

function displayProjects (tag) {
    $("#project-display-area").empty();
    for (var i = 0; i < projectList.length; i++) {
        if (projectList[i].tags.indexOf(tag) != -1) {
            $("#project-display-area").append(makeCard(projectList[i]));
        }
    }
}

function makeCard(proj) {
    var tempCard = $("<div>");
    tempCard.addClass("card bg-dark text-white mb-3 project-card position-relative");
    tempCard.html(`
        <div class="card-header p-2 project-card-title">${proj.name}</div>
        <img class="card-img-bottom" src="${proj.image}" alt="Card image">
        <div class="card-img-overlay project-card-overlay">
                <p class="card-text mb-4 project-card-descrip">${proj.description}</p>
                <div class="project-card-content p-0 m-0 text-center">
                    <a class="card-text p-2 ml-1" href="${proj.GHurl}" target="_blank">Github Page</a>
                </div>
        </div>
    `);
    if (proj.url) {
        tempCard.find(".project-card-content").prepend(`<a class="card-text p-2 mr-1" href="${proj.url}" target="_blank">Deployed Site</a>`);
    }
    var cardWrapper = $("<div>");
    cardWrapper.addClass("col-12 col-lg-12 col-xl-6 animated flipInX");
    cardWrapper.html(tempCard);
    return cardWrapper;
}

$(document).on("click", "#home-button", displayHome);
$(document).on("click", "#portfolio-button", displayPortfolio);
$(document).on("click", ".project-button", function (event) {
    $(".project-button-active").removeClass("project-button-active");
    $(this).addClass("project-button-active")
    displayProjects($(this).data("tag"))
});