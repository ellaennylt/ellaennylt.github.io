import React from "react";
import "./CampaignsCard.css";
import { Fade } from "react-reveal";

export default function CampaignsCard({ pub, theme }) {
  function openPubinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className="campaign-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={pub.id} onClick={() => openPubinNewTab(pub.url)}>
          <div className="campaign-name-div">
            <p className="campaign-name" style={{ color: theme.text }}>
              {pub.name}
            </p>
          </div>
          <p className="campaign-description" style={{ color: theme.text }}>
            {pub.description}
          </p>
          {/* <div className="campaign-details">
            <p
              className="campaign-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Published on {pub.createdAt.split("T")[0]}
            </p>
          </div> */}
        </div>
      </Fade>
    </div>
  );
}
