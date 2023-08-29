import Image from "next/image";
import loader from "../public/Assets/icons/loader.svg";
function Loader() {
  return <Image  src={loader} height={48} width={48} alt="loader" />;
}

export default Loader;
