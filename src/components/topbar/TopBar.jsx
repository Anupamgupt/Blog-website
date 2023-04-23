import "./topbar.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterest,
  FaInstagramSquare,
  FaSearch,
} from "react-icons/fa";
import gojo from '../../assets/images/gojo.jpeg'
import { Link } from "react-router-dom";

function TopBar() {
  const user=false
  return (
    <div className="top">
      <div className="topleft">
        <div className="icons">
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaPinterest />
        <FaInstagramSquare />
        </div>  
      </div>
      <div className="topcenter">
        <ul className="toplist">
          
          <li className="toplistitem">
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
              HOME
              </Link>
          </li>
          <li className="toplistitem">
            <Link to="/write" style={{textDecoration:"none",color:"inherit"}}>
            WRITE
              </Link>
          </li>
          <li className="toplistitem">
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            ABOUT
              </Link>
          </li>
          <li className="toplistitem">
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            CONTACT
              </Link>
          </li>
          <li className="toplistitem">
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            {user && "LOGOUT"}
              </Link>
          </li>
        </ul>
      </div>
      <div className="topright">
        <div>
          {user ?( <div className="imgcontainer">
            <img src={gojo} alt="" />
        </div>):(
          <ul className="toplist">
            <li className="toplistitem">
            <Link className="link" to="/login" style={{textDecoration:"none",color:"inherit"}}>LOGIN</Link>
            </li>
            <li className="toplistitem" >
              <Link className="link" to="/register" style={{textDecoration:"none",color:"inherit"}}>REGISTER</Link>
            </li>  
          </ul>
        )}
       
        <FaSearch/> 
        </div>
      </div>
    </div>
  );
}

export default TopBar;
