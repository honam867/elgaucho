import styled from "styled-components";

export const LocationWrapper = styled.div`
  section {
    padding: 40px 0px;
  }
  p {
    font-size: ${(props) => props.theme.fontsize.normal};
  }
  .blur-section {
    background: ${(props) => props.theme.colors.grey};
  }
  .location-section {
    &-name {
      padding: 10px 0px;
    }
    &-hours {
      padding: 10px 0px;
      a {
        color: ${(props) => props.theme.colors.grey};
      }
    }
    &-phone {
      padding: 10px 0px;
    }
    &-carousel {
      padding: 10px 0px;
      width: 100%;
      .carousel-custom {
        width: 70%;
        margin: auto;
        img {
          object-fit: cover;
        }
      }
    }
    &-directions {
      padding: 10px 0px;
    }
    &-ggmap {
      padding: 10px 0px;
      iframe {
        width: 70%;
        margin: auto;
      }
    }
    &-description {
      padding: 10px 0px;
      text-align: justify;
    }
    &-private {
      padding: 10px 0px;
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.screens.tablet}) {
    .location-section {
      &-ggmap {
        iframe {
          width: 90%;
        }
      }
      &-carousel {
        .carousel-custom {
          width: 90% !important;
        }
      }
    }
  }
`;
