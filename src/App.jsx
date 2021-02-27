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
          selected: false,
        },
        {
          coverImg: "performance-series-thumb.jpg",
          title: "Performance Series",
          avatarImg: "performance-series-trainer.jpg",
          selected: false,
        },
        {
          coverImg: "slow-pulls-thumb.jpg",
          title: "Slow Pulls and Fast Intervals",
          stats: { time: "44:13", distance: "9,948 M" },
          avatarImg: "slow-pulls-trainer.jpg",
          selected: false,
        },
        {
          coverImg: "20-minutes-to-toned-thumb.jpg",
          title: "20 Minutes to Toned",
          avatarImg: "20-minutes-to-toned-trainer.jpg",
          selected: false,
        },
        {
          coverImg: "charles-race-thumb.jpg",
          title: "Charles Race, Boston, Massachusetts",
          stats: { time: "36:22", distance: "8,648 M" },
          avatarImg: "charles-race-trainer.jpg",
          selected: false,
        },
        {
          coverImg: "full-body-hiit-thumb.jpg",
          title: "Full-Body HIIT Series",
          avatarImg: "full-body-hiit-trainer.jpg",
          selected: false,
        },
        {
          coverImg: "kafue-river-thumb.jpg",
          title: "Kafue River, Zambia—Power Stroke Pyramid",
          stats: { time: "22:22", distance: "4,660 M" },
          avatarImg: "kafue-river-trainer.jpg",
          selected: false,
        },
        {
          coverImg: "shred-and-burn-thumb.jpg",
          title: "Shred & Burn Series",
          avatarImg: "shred-and-burn-trainer.jpg",
          selected: false,
        },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index) {
    event.preventDefault();

    let arr = [...this.state.lessons];
    arr[index].selected = !arr[index].selected;
    this.setState({ lessons: arr });
  }

  render() {
    return (
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 g-md-3">
          {this.state.lessons.map((lesson, index) => (
            <div className="col d-flex align-items-stretch">
              <div
                className={
                  lesson.selected
                    ? "card lesson-card-selected"
                    : "card lesson-card"
                }
              >
                <Lesson lesson={lesson} />
                <a
                  href="#"
                  className="stretched-link"
                  onClick={(event) => this.handleClick(event, index)}
                ></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
