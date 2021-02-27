import React from "react";
import "./App.css";
import Lesson from "./Components/Lesson";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [
        {
          coverImg: "lake-inniscarra-thumb.jpg",
          title: "Lake Inniscarra, Ireland—Pyramid",
          stats: { time: "30:53", distance: "6,248 M" },
          avatarImg: "lake-inniscarra-trainer.png",
        },
        {
          coverImg: "performance-series-thumb.jpg",
          title: "Performance Series",
          avatarImg: "performance-series-trainer.jpg",
        },
        {
          coverImg: "slow-pulls-thumb.jpg",
          title: "Slow Pulls and Fast Intervals",
          stats: { time: "44:13", distance: "9,948 M" },
          avatarImg: "slow-pulls-trainer.jpg",
        },
        {
          coverImg: "20-minutes-to-toned-thumb.jpg",
          title: "20 Minutes to Toned",
          avatarImg: "20-minutes-to-toned-trainer.jpg",
        },
        {
          coverImg: "charles-race-thumb.jpg",
          title: "Charles Race, Boston, Massachusetts",
          stats: { time: "36:22", distance: "8,648 M" },
          avatarImg: "charles-race-trainer.jpg",
        },
        {
          coverImg: "full-body-hiit-thumb.jpg",
          title: "Full-Body HIIT Series",
          avatarImg: "full-body-hiit-trainer.jpg",
        },
        {
          coverImg: "kafue-river-thumb.jpg",
          title: "Kafue River, Zambia—Power Stroke Pyramid",
          stats: { time: "22:22", distance: "4,660 M" },
          avatarImg: "kafue-river-trainer.jpg",
        },
        {
          coverImg: "shred-and-burn-thumb.jpg",
          title: "Shred & Burn Series",
          avatarImg: "shred-and-burn-trainer.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 g-md-3">
          {this.state.lessons.map((lesson) => (
            <Lesson lesson={lesson} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
