import { useContext } from 'react'
import YogaContext from "../../YogaContext";
import { usePoseStore } from '../../store/poseStore'
import './DropDown.css'

export default function DropDown() {
    const { poses } = usePoseStore();
    const { currentPose, setCurrentPosefunc } = useContext(YogaContext);

    const currentPoseData = poses.find(pose => pose.name === currentPose);
    // console.log("Current Pose Data:", currentPoseData);

    return (
        <div
            className='dropdown dropdown-container'
        >
            <button
                className="btn btn-secondary dropdown-toggle"
                type='button'
                data-bs-toggle="dropdown"
                id="pose-dropdown-btn"
                aria-expanded="false"
            > <strong className='dropdown-title text-lg'>{currentPoseData.name} Pose</strong>
            </button>
            <ul class="dropdown-menu dropdown-custom-menu" aria-labelledby="dropdownMenuButton1">
                {poses.map((pose) => (
                    <li onClick={() => setCurrentPosefunc(pose.name)}>
                        <div class="dropdown-item-container">
                            <p className="dropdown-item-1">{pose.name}</p>
                            <img
                                src={pose.imageUrl}
                                className="dropdown-img"
                                alt="yoga_images"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
