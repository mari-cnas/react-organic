import { createGlobalStyle } from "styled-components";  

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
 
    /* unvisited link */
a:link {
    text-decoration: none;
    color:  #666;
  }
  
  /* visited link */
  a:visited {
    color:  #666;
  }

}

html, body, #root{
        min-height: 100vh;
    }

.divisiont{
  border-top: 1px solid #d3d3d3;
}

.divisionb{
  border-bottom: 1px solid #d3d3d3;
}

.anchor {
  position: absolute;
  top:-75px;
  visibility: hidden;
}
`;

