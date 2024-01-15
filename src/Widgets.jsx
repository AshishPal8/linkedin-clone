import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import AdjustIcon from "@mui/icons-material/Adjust";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="flex gap-2 py-2 pl-2 cursor-pointer bg-white hover:bg-gray-200">
      <div className="widgets__articleLeft">
        <AdjustIcon style={{ fontSize: "10px" }} />
      </div>
      <div className="widgets__articleRight">
        <h2 className="text-sm font-bold">{heading}</h2>
        <p className="text-xs font-thin text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div
      style={{ flex: 0.2 }}
      className="sidebar sticky top-20 bg-white rounded-lg overflow-hidden  text-left h-fit"
    >
      <div className="flex justify-between items-center p-2">
        <h2 className="text-base font-semibold">Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Massive quake hits Japan", "1d ago · 8,843 Readers")}
      {newsArticle("Sales to take automation route", "1d ago · 1,636 Readers")}
      {newsArticle("FMCG bets big on tech", "16m ago")}
      {newsArticle("Indian economy on growth path", "1d ago · 884 Readers")}
      {newsArticle(
        "Decoding Indian's green job boom",
        "2d ago · 3,445 Readers"
      )}
    </div>
  );
}

export default Widgets;
