import React from "react";

class Lesson extends React.Component {
  render() {
    return (
      <>
        <img
          className="card-image-top"
          src={process.env.PUBLIC_URL + "/Images/" + this.props.lesson.coverImg}
          alt={this.props.lesson.title}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-top">
            <p className="card-text">{this.props.lesson.title}</p>
            <small className="text-muted">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/Images/" +
                  this.props.lesson.avatarImg
                }
                alt={this.props.lesson.title}
              />
            </small>
          </div>
          {this.props.lesson.stats && (
            <div className="d-flex">
              <small className="text-muted">
                <i className="bi bi-clock"></i>
                {this.props.lesson.stats.time} &nbsp;
                <i className="bi bi-cone"></i>
                {this.props.lesson.stats.distance}
              </small>
            </div>
          )}
          {this.props.lesson.selected && (
            <button className="px-0 mx-0 btn btn-link lesson-card-button">
              VIEW DETAILS
            </button>
          )}
        </div>
      </>
    );
  }
}

export default Lesson;
