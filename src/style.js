import {createGlobalStyle} from 'styled-components';
import LangFont from "./resource/font/langqing.otf";
import MyFont from "./resource/font/heiguiti.otf";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #282c34;
  font-weight: 300;

  @font-face {
     font-family: 'LangFont';
     src: url('${LangFont}');
  }
  
   @font-face {
     font-family: 'MyFont';
     src: url('${MyFont}');
  }
  
  #VerticalScreen{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100000;
  display: none;
  background: #29292a;
  color: white;
  text-align: center;
  }

#MongolianScreen{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index:1999;
  background-color:rgba(0, 0, 0, 0.5);
}

#GameMongolianScreen{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index:1999;
  background-color:rgba(0, 0, 0, 0.2);
}

.CloseMongolian{
  display: none;
}

.ShowMongolian{
  display: block;
}
  
  @media screen and (max-width:319px){
    #VerticalScreen{
        display: block;
    }
  }
  
  @media screen and (min-width:1025px){
    #VerticalScreen{
        display: block;
    }
  }
}
`;