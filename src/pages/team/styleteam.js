import styled from "styled-components";

// export const TeamP = styled.p`
//   font-size: 1rem;
//   margin-bottom: 1em;
//   max-width: 75ch;
// `;

export const TeamSection = styled.section`
  margin-bottom: 40.4375em;


  padding-inline: 1em;

  @media (min-width: 48em) {
    padding-inline: 2em;
  }
  @media (min-width: 80em) {
    padding-inline: calc((100% - 80em) / 2 + 2.5em);
  }

  h1{
    margin: 0;
    padding: 100px 20px;
    font-size: 5rem
  }






  * {
  font-family: Nunito, sans-serif;
}

.responsive-cell-block {
  min-height: 75px;
}

.text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  line-height: 25px;
  color: black;
}

.responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: space-evenly;
}

.team-head-text {
  line-height: 50px;
  width: 100%;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 50px;
  margin-left: 0px;
}

.container {
  max-width: 1380px;
  margin-top: 60px;
  margin-right: auto;
  margin-bottom: 60px;
  margin-left: auto;
  padding-top: 0px;
  padding-right: 30px;
  padding-bottom: 0px;
  padding-left: 30px;
}

.card {
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-right: 25px;
  padding-bottom: 30px;
  padding-left: 25px;
  background-color: LightGray;
}

.card-container {
  width: 280px;
  margin-top: 0px;
  margin-right: 10px;
  margin-bottom: 25px;
  margin-left: 10px;
}

.name {
  margin-top: 20px;
  margin-right: 0px;
  margin-bottom: 5px;
  margin-left: 0px;
  font-size: 18px;
  font-weight: 800;
}

.position {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
}

.feature-text {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 20px;
  margin-left: 0px;
  color: rgb(122, 122, 122);
  line-height: 30px;
}

.social-icons {
  width: 70px;
  display: flex;
  justify-content: space-between;
}

.team-image-wrapper {
  clip-path: circle(50% at 50% 50%);
  width: 130px;
  height: 130px;
}

.team-member-image {
  max-width: 100%;
}

@media (max-width: 500px) {
  .card-container {
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 25px;
    margin-left: 0px;
  }
}

`;
