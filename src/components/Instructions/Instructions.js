import React, { useContext } from 'react';
import YogaContext from '../../YogaContext';
import { poseInstructions } from '../../utils/data';

import './Instructions.css';
import { Link } from 'react-router-dom';
import { usePoseStore } from '../../store/poseStore';

export default function Instructions() {
    const { currentPose } = useContext(YogaContext);
    const { poses } = usePoseStore();

    const pose = poses.filter(pose => pose.name === currentPose);

    // Check if currentPose exists in the instructions
    const poseData = poseInstructions[currentPose];

    if (!poseData) {
        return <p>No instructions found for this pose.</p>;
    }

    return (
        <>
            <div className="instructions-container">
                <ol className="instructions-list">
                    {poseData.instructions.map((instruction, index) => (
                        <li key={index} className="instruction">
                            {instruction}
                        </li>
                    ))}
                </ol>
                <img
                    className="pose-demo-img"
                    src={pose[0].imageUrl}
                    alt={`${currentPose} demo`}
                />
            </div>
            <div className="button-container-links">
                <button className="secondary-btn-link">
                    <Link to={poseData.readMore} target="_blank" rel="noopener noreferrer">
                        Read More
                    </Link>
                </button>
                <button className="secondary-btn-link">
                    <Link to={poseData.watch} target="_blank" rel="noopener noreferrer">
                        Watch Video
                    </Link>
                </button>
            </div>
        </>
    );
}
