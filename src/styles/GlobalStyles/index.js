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

@media (max-width:1199px) {
  .container {
    max-width: 932px;
  }
}

@media (max-width:991px) {
  .container {
    max-width: 708px;
  }
}

@media (max-width:767px) {
  .container {
    max-width: 516px;
  }
  /*.row > .col {flex:0 0 50%;}*/


}

@media (max-width:575px) {
  .container {
    max-width: 100%;
    margin-left:0;
    margin-right: 0;
  }
  
}


.divisiont{
  border-top: 1px solid #d3d3d3;
}

.divisionb{
  border-bottom: 1px solid #d3d3d3;
}
`;

