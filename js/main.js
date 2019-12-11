jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Ruby on Rails Chart
  var doughnutData = [{
      value: 70,
      color: "#1abc9c"
    },
    {
      value: 30,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("ruby-on-rails").getContext("2d")).Doughnut(doughnutData);

  // JavaScript Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // AWS Chart
  var doughnutData = [{
    value: 40,
    color: "#1abc9c"
  },
  {
    value: 60,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("aws").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

  // Illustrator Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

  // AutoCAD Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("autocad").getContext("2d")).Doughnut(doughnutData);

  // Processing Chart
  var doughnutData = [{
    value: 40,
    color: "#1abc9c"
  },
  {
    value: 60,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("processing").getContext("2d")).Doughnut(doughnutData);
});
