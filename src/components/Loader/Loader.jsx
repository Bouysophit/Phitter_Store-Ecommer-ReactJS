import { RotateLoader } from "react-spinners";
import "./loader.css"
const Loader = () => {
    return (
      <div className="loader">
        <RotateLoader
          color="##e71d36"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
}

export default Loader;