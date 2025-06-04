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
                    <Link
                        to={poseData.readMore}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-[15px] transition-all duration-300 ease-in-out font-black bg-transparent text-black border hover:bg-transparent hover:text-black hover:border border-black
                    }`}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read More
                    </Link>
                </button>
                <button className="secondary-btn-link">
                    <Link
                        to={poseData.watch}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-[15px] transition-all duration-300 ease-in-out font-black bg-transparent text-black border hover:border hover:border-black
                    }`}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Watch Video
                    </Link>
                </button>
            </div>
        </>
    );
}
