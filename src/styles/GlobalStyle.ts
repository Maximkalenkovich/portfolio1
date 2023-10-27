import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";



export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;

  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${Theme.colors.fontSection};


  
}


section {
  padding: 100px 0;


}


a {
text-decoration: none;
}

ul{
    list-style: none;
}

button{ 
    background-color:unset;
    border: none;
    cursor: pointer;
    color: ${Theme.colors.fontSection};
}


section {
    background-color: ${Theme.colors.primaryBg};

}





`