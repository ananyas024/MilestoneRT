import React from 'react';
import Event1 from '../img1/coding.jpg';
import Event2 from '../img1/rob.jpeg';
import Event3 from '../img1/ui.jpg';
import Event4 from '../img1/ideaaa.png';
import Event5 from '../img1/bt.jpeg';
import './EventCard.css'; // Import CSS for styling

const events = [
    {
        id: 1,
        title: 'CODE CRAFT',
        description: 'Software hackathon with intense coding,creativity and collaboration.',
        image: Event1,
    },
    {
        id: 2,
        title: 'ROBOCON',
        description: 'RC controllled bots kickoff thrilling matches with agility and strategy.',
        image: Event2,
    },
    {
        id: 3,
        title: 'UI DESIGNING',
        description: 'Showcase your UI/UX skils,innovation and attention to detail in this thrilling UI design competiotion ',
        image: Event3,
    },
    {
        id: 4,
        title: 'IDEATION',
        description: 'Pitch your innovative ideas and seize the opportunity to secure funding!  ',
        image: Event4,
    },
    {
        id: 5,
        title: 'BLIND TYPING',
        description: 'Test your typing speed and accuracy without looking at the keyboard!',
        image: Event5,
    },
];

const EventCard = () => {
    return (
        <div className="event-card">
            {events.map(event => (
                <div key={event.id} className="card">
                    <img src={event.image} className="card-img-top" alt={event.title} />
                    <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventCard;
