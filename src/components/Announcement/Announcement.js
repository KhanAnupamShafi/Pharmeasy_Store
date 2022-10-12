import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return (
    <Container>
      <Bar>
        <Row>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                viewBox="0 0 34 34"
                fill="#1a1a1a"
              >
                <path d="M25.9 12H23V7c0-.6-.4-1-1-1H6C4.3 6 3 7.3 3 9v15c0 .6.4 1 1 1h2.1c.2 1.7 1.7 3 3.4 3s3.2-1.3 3.4-3h8.2c.2 1.7 1.7 3 3.4 3s3.2-1.3 3.4-3H30c.6 0 1-.4 1-1v-5.1c0-.6-.2-1.2-.5-1.7l-2.9-4.4c-.4-.5-1-.8-1.7-.8zM9.5 26c-.8 0-1.5-.7-1.5-1.5S8.7 23 9.5 23s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm15 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM23 18v-4h3.3l2.7 4h-6z" />
              </svg>
              <p>FREE Click & Collect on orders over 20&#2547;</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                viewBox="0 0 34 34"
                fill="#1a1a1a"
              >
                <path d="M27.2,4H6.8C5.2,4,4,5.2,4,6.8v20.4C4,28.8,5.2,30,6.8,30h20.4c1.5,0,2.8-1.2,2.8-2.8V6.8C30,5.2,28.8,4,27.2,4z M26,19c0,0.6-0.4,1-1,1h-5v5c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-5H9c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h5V9c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v5h5c0.6,0,1,0.4,1,1V19z"></path>
              </svg>
              <p>Talk to a doctor within 30 minutes</p>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                viewBox="0 0 34 34"
                fill="#1a1a1a"
              >
                <g transform="translate(50.45 23.676)">
                  <path d="M-36.2-3.8l-10.1,4.3c-0.3,0.1-0.5,0.5-0.3,0.8c0.1,0.1,0.2,0.3,0.3,0.3l3.8,1.7l1.7,3.8c0.1,0.3,0.5,0.5,0.8,0.3c0.1-0.1,0.3-0.2,0.3-0.3L-35.4-3c0.1-0.3,0-0.7-0.3-0.8C-35.9-3.9-36-3.9-36.2-3.8z"></path>
                </g>
                <path d="M27.1,9.9C27,9.4,26.6,9,26.1,9H24V8c0-2.8-2.2-5-5-5s-5,2.2-5,5v1h-2.1c-0.5,0-0.9,0.4-1,0.9l-1,9.7l3.5-1.5c0.3-0.1,0.7-0.2,1-0.2c0.4,0,0.7,0.1,1,0.2c1.3,0.6,2,2.1,1.4,3.5L13.7,29h13.1c1.2,0,2.1-1,2-2.2L27.1,9.9z M15,13c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1C16,12.6,15.6,13,15,13z M16,9V8c0-1.7,1.3-3,3-3s3,1.3,3,3v1H16z M23,13c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1C24,12.6,23.6,13,23,13z"></path>
              </svg>
              <p>FREE prescription delivery by Bd-Dex</p>
            </li>
          </ul>
        </Row>
      </Bar>
    </Container>
  );
};

export default Announcement;

const Container = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  margin-top: 50px;
  margin-bottom: 20px;
  background: #ebf7fc;
`;
const Bar = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 0 20px;
  ul {
    display: flex;
    flex: 1 0 0%;
    justify-content: space-between;
    list-style: none;
    @media (max-width: 980px) {
      flex-direction: column;
      column-gap: 20;
    }
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      padding: 0 20px 0 0;
      color: #1a1a1a;
      &:hover {
        text-decoration: underline;
      }
      @media (max-width: 980px) {
        flex-direction: column;
        margin-bottom: 20px;
      }
    }
  }
`;
