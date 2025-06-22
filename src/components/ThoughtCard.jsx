import React from "react";

export const ThoughtCard = ({ thought, onLike }) => {

  const timeAgo = (dateString) => {
    let seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
    const intervals = [
      [60, "second"],
      [60, "minute"],
      [24, "hour"],
      [7, "day"],
      [4.35, "week"],
      [12, "month"],
      [Number.MAX_SAFE_INTEGER, "year"],
    ];
    let i = 0;
    while (seconds >= intervals[i][0]) {
      seconds /= intervals[i][0];
      i++;
    }
    const rounded = Math.floor(seconds);
    return `${rounded} ${intervals[i][1]}${rounded !== 1 ? "s" : ""} ago`;
  };

  return (
    <article className="thought-card">
      <p>{thought.message}</p>
      <div className="card-footer">
        <button
          className={`heart-button ${thought.hearts > 0 ? "liked" : ""}`}
          onClick={() => onLike(thought._id)}
        >
          ❤️
        </button>
        <span>x {thought.hearts}</span>
        <span className="time-ago">{timeAgo(thought.createdAt)}</span>
      </div>
    </article>
  );
};
