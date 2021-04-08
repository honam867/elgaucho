import { Dropdown, Icon, Button, Menu } from "semantic-ui-react";
import styled from "styled-components";

export const DropdownStyle = styled(Dropdown)`
  &:hover {
    color: #cf1b15 !important;
    background: none !important;
  }
  .none {
    display: none !important;
  }
  border-radius: 0px !important;
  font-weight: bold !important;
  padding: 0px !important;
`;
export const IconPhoneHover = styled(Icon.Group)`
  &:hover {
    text-shadow: 3px 3px 6px !important;
  }
  position: fixed !important;
  bottom: 70px !important;
  right: 12px !important;
`;

export const ButtonCustom = styled(Button)`
  color: #cf1b15 !important;
  background: #fff !important;
  border: 1px solid #cf1b15 !important;
`;

export const IconBookHover = styled(Icon.Group)`
  &:hover {
    text-shadow: 3px 3px 6px !important;
  }
  position: fixed !important;
  bottom: 20px !important;
  right: 12px !important;
`;

export const Circle = styled.div`
  cursor: pointer;
  box-shadow: 0 0 0 0 #c31d1d;
  height: 65px;
  width: 65px;
  border-radius: 50px;
  background: #cf1b15;
  position: fixed;
  bottom: 50px;
  right: 0px;
  z-index: 3;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  i.icon {
    margin: 0px !important;
  }
  .group-icon {
    height: 70%;
    width: 70%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    .icon-first {
      position: absolute;
      top: -4px;
      left: 0px;
    }
    .icon-second {
      position: absolute;
      bottom: -4px;
      left: 3px;
    }
    .icon-third {
      position: absolute;
      top: 10px;
      right: -4px;
    }
  }
`;
export const CircleClose = styled.div`
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  cursor: pointer;
  box-shadow: 0 0 0 0 #c31d1d;
  height: 65px;
  width: 65px;
  border-radius: 50px;
  background: #cf1b15;
  position: fixed;
  bottom: 50px;
  right: 0px;
  z-index: 3;
  color: #fff;
  text-align: center;
  cursor: pointer;
  i.icon {
    margin: 0px !important;
  }
  .close-icon {
    position: relative;
    top: calc(50% - 8.5px);
    font-size: 17px;
  }
`;

export const WrappFullScreen = styled.div`
  i.icon {
    margin: 0px !important;
  }
  .group-icon {
    position: fixed;
    bottom: 90px;
    right: 50px;
    height: 220px;
    width: 300px;
    font-size: 20px;
    color: white;
    font-weight: 500;
    a {
      color: #fff;
    }
    .icon-first {
      position: fixed;
      right: 0px;
      bottom: 270px;
      span {
        background: #cf1b15;
        border-radius: 50px;
        padding: 22px 12px 15px 12px;
        margin-left: 10px;
        i {
          font-size: 30px;
        }
      }
    }
    .icon-second {
      position: fixed;
      right: 70px;
      bottom: 214px;
      cursor: pointer;
      span {
        background: #cf1b15;
        border-radius: 50px;
        padding: 22px 12px 15px 12px;
        margin-left: 10px;
        i {
          font-size: 30px;
        }
      }
      :hover {
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
    }
    .icon-third {
      position: fixed;
      right: 125px;
      bottom: 145px;
      span {
        background: #cf1b15;
        border-radius: 50px;
        padding: 22px 12px 15px 8px;
        margin-left: 10px;
        i {
          font-size: 30px;
        }
      }
    }
    .icon-four {
      position: fixed;
      right: 155px;
      bottom: 62px;
      span {
        background: #cf1b15;
        border-radius: 50px;
        padding: 30px 12px 8px 7px;
        margin-left: 10px;
        img {
          height: 35px;
          width: 35px;
        }
      }
    }
  }
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ContactWrapper = styled.div`
  @keyframes zoom {
    0% {
      transform: scale(0.9);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 15px transparent;
    }

    100% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 transparent;
    }
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  .zoom-animate {
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    animation-name: zoom;
    -webkit-animation-name: zoom;
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
    animation-duration: 1.5s;
    -webkit-animation-duration: 1.5s;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }
`;
