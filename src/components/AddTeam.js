import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
// Remove unused imports: Router, Route, Switch
import { useNavigate } from 'react-router-dom';

const AddTeam = () => {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState('');
    const [members, setMembers] = useState(['']);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        navigate('/some-path');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Team Name:</label>
                <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
            </div>
            {members.map((member, index) => (
                <div key={index}>
                    <label>Member {index + 1}:</label>
                    <input
                        type="text"
                        value={member}
                        onChange={(e) => {
                            const newMembers = [...members];
                            newMembers[index] = e.target.value;
                            setMembers(newMembers);
                        }}
                    />
                </div>
            ))}
            <button type="button" onClick={() => setMembers([...members, ''])}>
                Add Member
            </button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddTeam;