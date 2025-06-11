import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Instructions from "../../components/Instructions/Instructions";
import YogaContext from "../../YogaContext";
import "./Yoga.css";
import DropDown from "../../components/DropDown/DropDown";

function Yoga() {
  const { startYoga, currentPose } = useContext(YogaContext);
  const navigate = useNavigate();

  const isDisabled = currentPose === "Fish" || currentPose === "Siddhasana";

  const handleClick = () => {
    if (!isDisabled) {
      startYoga(true);
      navigate("yoga");
    }
  };

  return (
    <div className="yoga-container">
      <div className="yoga-top">
        <DropDown />
      </div>

      <Instructions />

      <div className="button-container">
        <button
          onClick={handleClick}
          className="secondary-btn flex items-center gap-2 px-4 py-2 rounded-md text-[15px] transition-all duration-300 ease-in-out font-black"
          disabled={isDisabled}
          style={{
            opacity: isDisabled ? 0.5 : 1,
            cursor: isDisabled ? "not-allowed" : "pointer",
            fontFamily: "'Playfair Display', serif",
            fontSize: '20px'
          }}
        >
          Start Pose
        </button>
      </div>
    </div>
  );
}

export default Yoga;
