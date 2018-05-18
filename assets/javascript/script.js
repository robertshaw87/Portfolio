var projectList;

var currPortfolio;

function displayHome() {
    $("#header-wrapper").attr("class", "col-12 col-sm-10 col-md-8 col-lg-6 text-left position-relative");
    $("#home-button").addClass("current-page");
    $("#portfolio-button").removeClass("current-page");
    $("#main-display").html(
        '<div class="row p-0">' +
            '<div class="col"></div>' +
            '<div class="col-12 col-sm-10 col-md-8 col-lg-6 p-0">' +
                '<div class="card mt-5 text-light" id="profile-content-card">' +
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
    $("#header-wrapper").attr("class", "col-12 col-sm-10 col-lg-8 text-left position-relative");
    $("#home-button").removeClass("current-page");
    $("#portfolio-button").addClass("current-page");
    console.log("test")
    $("#main-display").html(
        '<div class="row p-0">' +
            '<div class="col"></div>' +
            '<div class="col-12 col-sm-10 col-lg-8 p-0">' +
                '<div class="card mt-5 text-light" id="profile-content-card">' +
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

$(document).on("click", "#home-button", displayHome);
$(document).on("click", "#portfolio-button", displayProfile);