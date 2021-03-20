import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: relative;
  top: -8px;
  background-color: black;
  color: white;
.textAnimtion {
  color: #ff0000;
  font-size: 15px;
  -webkit-animation: my 3s infinite;
  -moz-animation: my 3s infinite;
  -o-animation: my 3s infinite;
  animation: my 3s infinite;
  text-align: justify;
}
@-webkit-keyframes my {
  0% {
    color: #cf1b15;
  }
  100% {
    color: #ff0000;
  }
}
@-moz-keyframes my {
  0% {
    color: #cf1b15;
  }
  100% {
    color: #ff0000;
  }
}
@-o-keyframes my {
  0% {
    color: #cf1b15;
  }
  100% {
    color: #ff0000;
  }
}
@keyframes my {
  0% {
    color: #cf1b15;
  }
  100% {
    color: #ff0000;
  }
}
`