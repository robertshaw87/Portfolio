var projectList = [{name: "MoveMe",
                    tags: ["Html", "CSS", "Javascript", "jQuery", "APIs", "Bootstrap", "Google Firebase", "Google Maps", "Show All"],
                    image: "assets/images/MoveMe.jpg",
                    description: "MoveMe is the all in one app for getting involved in your local community.",
                    url: "https://robertshaw87.github.io/MoveMe/",
                    GHurl: "https://github.com/robertshaw87/MoveMe"
                }, {name: "Rock Paper Scissors",
                    tags: ["Html", "CSS", "Javascript", "jQuery", "Bootstrap", "Google Firebase", "Show All"],
                    image: "assets/images/RPS.jpg",
                    description: "Play with other users over the web or chat with the built in service.",
                    url: "https://robertshaw87.github.io/Rock-Paper-Scissors/",
                    GHurl: "https://github.com/robertshaw87/Rock-Paper-Scissors"
                }, {name: "Animal Facts!",
                    tags: ["Html", "CSS", "Javascript", "jQuery", "Bootstrap", "Show All"],
                    image: "assets/images/Trivia.jpg",
                    description: "Tackle trivia questions and learn new facts. Be wary of the time limit!",
                    url: "https://robertshaw87.github.io/Trivia-Game/",
                    GHurl: "https://github.com/robertshaw87/Trivia-Game"
                }, {name: "Triwizard Dueling Arena",
                    tags: ["Html", "CSS", "Javascript", "jQuery", "Bootstrap", "Show All"],
                    image: "assets/images/Battle.jpg",
                    description: "Select a champion and enter the new dueling event at the Triwizard Tournament!",
                    url: "https://robertshaw87.github.io/Battle-Game/",
                    GHurl: "https://github.com/robertshaw87/Battle-Game"
                }, {name: "Explore the Stars",
                    tags: ["Html", "CSS", "Javascript", "jQuery", "Bootstrap", "Show All"],
                    image: "assets/images/WordGuess.jpg",
                    description: "Guess the chosen word within a limited number of tries!",
                    url: "https://robertshaw87.github.io/Word-Guess-Game/",
                    GHurl: "https://github.com/robertshaw87/Word-Guess-Game"
                }, {name: "Giphy Pets Library",
                    tags: ["Html", "CSS", "Javascript", "APIs", "jQuery", "Bootstrap", "Show All"],
                    image: "assets/images/Giphy.jpg",
                    description: "Explore a wide variety of cute gifs from Giphy. Save your favorites or download them at the click of a button!",
                    url: "https://robertshaw87.github.io/Giphy-Library/",
                    GHurl: "https://github.com/robertshaw87/Giphy-Library"
                }];
var projectButtonsList = ["Html", "CSS", "Javascript", "jQuery", "APIs", "Bootstrap", "Google Firebase", "Google Maps"]

function displayHome() {
    $("#home-button").addClass("current-page");
    $("#portfolio-button").removeClass("current-page");
    $("#main-display").html(
        '<div class="row m-0">' + 
            '<div class="col"></div>' + 
            '<div class="col-12 col-sm-10 col-md-8 col-lg-6 p-0">' + 
                '<div class="card mt-5 text-light black-background" id="profile-content-card">' + 
                    '<div class="card-body">' + 
                        '<div class="card bg-dark m-1 mr-3" id="profile-portrait">' + 
                            '<img class="card-img" src="assets/images/robert-shaw.jpg" alt="Robert Shaw">' + 
                        '</div>' + 
                        '<div class="card-text" id="about-me-text">' + 
                            '<h3>About Me</h3>' + 
                            '<hr>' + 
                            '<p>Full Stack and Back End developer in training. Adept at leveraging undergraduate education in Computer Science and experience with online resources to rapidly learn new technologies. Passionate about expanding and utilizing my knowledge base. Works well with others while maintaining a positive attitude and developing strong professional bonds. Looking for an opportunity to begin a career and apply my skills.</p>' + 
                            '<button class="btn btn-outline-light float-right" id="portfolio-button">My Portfolio ➯</button>' + 
                        '</div>' + 
                    '</div>' + 
                '</div>' + 
            '</div>' + 
            '<div class="col"></div>' + 
        '</div>'
    )
}

function displayProfile() {
    $("#home-button").removeClass("current-page");
    $("#portfolio-button").addClass("current-page");
    $("#main-display").html(
        '<div class="row m-0">' + 
            '<div class="col-0 col-sm-1 col-xl-2"></div>' + 
            '<div class="col-12 col-sm-10 col-xl-8 p-0">' + 
                '<div class="row m-0">' + 
                    '<div class="col-12 col-md-4 col-lg-3 p-0">' + 
                        '<div class="card mt-5 text-light black-background" id="project-buttons-card">' + 
                            '<div class="card-body">' + 
                                '<div class="card-text text-center">' + 
                                    '<h4>Projects</h4>' + 
                                    '<hr>' + 
                                    '<button class="btn btn-outline-light project-button project-button-active" data-tag="Show All" id="show-all">Show All</button>' + 
                                '</div>' + 
                                '<div class="card-text text-center" id="project-buttons-area">' + 
                                '</div>' + 
                            '</div>' + 
                        '</div>' + 
                    '</div>' + 
                    '<div class="col-12 col-md-8 col-lg-9 p-3 mt-5 text-center" id="project-display-area">' + 
                    '</div>' + 
                '</div>' + 
            '</div>' + 
            '<div class="col-0 col-sm-1 col-xl-2"></div>' + 
        '</div>'
    );
    displayButtons();
    displayProjects("Show All")
}

function displayButtons() {
    $("#project-buttons-area").empty();
    for (var i = 0; i < projectButtonsList.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("btn btn-outline-light project-button ml-2 mr-2 mt-3");
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
    console.log(proj)
    var tempCard = $("<div>");
    tempCard.addClass("card bg-dark text-white mb-3 project-card");
    tempCard.html(
        '<img class="card-img" src="' + proj.image + '" alt="Card image">' + 
        '<div class="card-img-overlay project-card-overlay">' + 
            '<h5 class="card-title">' + proj.name + '</h5>' + 
            '<p class="card-text">' + proj.description + '</p>' + 
            '<p class="card-text">Last updated 3 mins ago</p>' + 
        '</div>'
    )
    return tempCard;
}

$(document).on("click", "#home-button", displayHome);
$(document).on("click", "#portfolio-button", displayProfile);
$(document).on("click", ".project-button", function (event) {
    $(".project-button-active").removeClass("project-button-active");
    $(this).addClass("project-button-active")
    displayProjects($(this).data("tag"))
});