import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home, Users, ShieldCheck, BookOpen, HeartHandshake, Landmark } from 'lucide-react';
import './styles.css';

const sections = [
  { title: 'Housing', icon: Home, description: 'Emergency housing, shelters, transitional living, utility help.' },
  { title: 'Community Support', icon: Users, description: 'Peer support, childcare, food programs, local services.' },
  { title: 'Policy', icon: Landmark, description: 'Beneficial, harmful, and missing policies affecting communities.' },
  { title: 'Research Hub', icon: BookOpen, description: 'Research findings translated into plain language for communities.' },
  { title: 'Advocacy', icon: ShieldCheck, description: 'Community alerts, outreach, and rights-based resources.' },
  { title: 'Recovery & Wellness', icon: HeartHandshake, description: 'Behavioral health, recovery resources, harm reduction, crisis help.' }
];

function Card({ section, admin }) {
  const Icon = section.icon;

  return (
    <div className='card'>
      <div className='card-header'>
        <Icon size={28} />
        <h2>{section.title}</h2>
      </div>

      <p>{section.description}</p>

      <div className='resource-box'>
        <strong>Community Resources</strong>
        <ul>
          <li>Example Resource 1</li>
          <li>Example Resource 2</li>
          <li>Example Resource 3</li>
        </ul>
      </div>

      <textarea placeholder='Recommend a local service, program, mechanic, support group, food provider, or community resource...' />

      <button>Submit Recommendation</button>

      {admin && (
        <div className='admin-panel'>
          <h3>Admin Controls</h3>
          <button className='danger'>Remove Resource</button>
          <button>Edit Section</button>
          <button>Add Resource</button>
        </div>
      )}
    </div>
  );
}

function App() {
  const admin = true;

  return (
    <div className='app'>
      <header>
        <h1>WELL CONNECTED</h1>
        <p>Community-driven population health resource and research translation platform.</p>
      </header>

      <div className='role-banner'>
        Current View: {admin ? 'Administrator' : 'Participant'}
      </div>

      <main>
        {sections.map((section) => (
          <Card key={section.title} section={section} admin={admin} />
        ))}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);