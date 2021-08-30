import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import one specific thing
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

export default function Player() {
  return (
    <Container>
      <TimeControl>
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </PlayControl>
    </Container>
  );
}

const Container = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TimeControl = styled.div`
  display: flex;
  width: 50%;
  input {
    width: 100%;
    padding: 1rem 2rem;
  }
  p {
    padding: 1rem;
  }
`;

const PlayControl = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  svg {
    cursor: pointer;
  }
`;
