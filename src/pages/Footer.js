import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import { useMediaQuery } from 'react-responsive'



function Footer()
{

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });
return (
<div className="footer container-fluid bg-dark ">
    {isDesktop && <Container >
        <div className="  text-center ">
         <p className="text-secondary" style={{textAlign:'center'}}>&copy; 2023 Powered by FAKALU SARL  <span style={{width:5}}></span>, Inc. All rights reserved.</p>
       </div>
    </Container>}
    {isMobileOrTablet && <Container>
        <div className=" py-2 text-center ">
         <p className="text-secondary" style={{textAlign:'center'}}>&copy; 2023 Powered by FAKALU SARL <span style={{width:5}}></span>, Inc.</p>
       </div>
    </Container>}
 </div>
)
}

export default Footer;