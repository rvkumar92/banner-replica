const express = require("express");
const path = require("path");
const app = express();
const nunjucks = require("nunjucks");

app.use(express.static("lib"));
app.use(express.static("public"));
app.set("view engine", "html");

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

const bannerData = {
  bannerHeader: "Bridging Now and Next",
  bannerDescription: `When the competitive ground shifts, you need to be ready. By
  bridging the gap between existing and emerging technologies, our
  software helps you innovate faster, with less risk, on your path to
  digital transformation.`,
  bannerCards: {
    digitalCard: "Four intersecting paths to digital transformation",
    cards: [
      {
        image:
          "https://b24a6ff9b49a1bb7a25e-262ca1dfd69ee5eb26d646ab6e93f1f7.ssl.cf5.rackcdn.com/2019-04/devops1-0.png",
        description: "Enterprise Devops",
        hiddenDescription: "Build and deliver better software faster."
      },
      {
        image:
          "https://b24a6ff9b49a1bb7a25e-262ca1dfd69ee5eb26d646ab6e93f1f7.ssl.cf5.rackcdn.com/2019-04/hybridit2-0.png",
        description: "Hybrid IT Management",
        hiddenDescription: "Operate with agility."
      },
      {
        image:
          "https://b24a6ff9b49a1bb7a25e-262ca1dfd69ee5eb26d646ab6e93f1f7.ssl.cf5.rackcdn.com/2019-04/security3-0.png",
        description: "Security, Risk & Governance",
        hiddenDescription: "Secure what matters most."
      },
      {
        image:
          "https://b24a6ff9b49a1bb7a25e-262ca1dfd69ee5eb26d646ab6e93f1f7.ssl.cf5.rackcdn.com/2019-04/predictive4-0.png",
        description: "Predictive Analytics",
        hiddenDescription: "Analyze in time to act."
      }
    ]
  }
};

app.get("/", (req, res) => {
  res.render("index.html", bannerData);
});

app.listen(8000, () => console.log("Server listening on port 8000"));
