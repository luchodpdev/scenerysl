import { useState } from "react";

// import Logomenu from "./Logomenu"

const Navbar = () => {
      const [menuExpandido, setMenuExpandido] = useState(false);

  const expandirFondoNegro = () => {
    setMenuExpandido(!menuExpandido);
  };
    

    return (
        <div className="navbar" onClick={expandirFondoNegro}>
            <div className="barrasblancasmenu"></div>
            <div className="barrasblancasmenu"></div>
            <div className="barrasblancasmenu"></div>
            <div className={`fondonegromenu ${menuExpandido ? "expandido" : ""}`} id="menuFondo"></div>
            {/* <Logomenu /> */}
        </div>
    )
}

export default Navbar