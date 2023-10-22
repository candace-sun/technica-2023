import logo from './logo.svg';
import Stack from 'react-bootstrap/Stack';
import Host from './components/host.js';
import './index.css';

function Home() {

    return (
        <div className="body">
            <div className="top-bar">
                <div className="left-top"/>
                <div className="logo-left-top">
                    <img class="logo" src="unnamed.jpg"/>
                </div>
                <p className="group-name">
                    Terp2Table
                </p>
                </div>
                <button onclick="window.location.href='../src/beHost.html';" className="host-button"> 
                    Be a host!
                </button>

            <div>
                <p className="title"> Guest?</p>
                <p className="intro"> Select your living space below</p>
            </div>
            <div>
                <button className="building">
                Commons 1
                </button>
                <button className="building">
                Commons 2
                </button>
                <button className="building">
                Commons 3
                </button>
                <button className="building">
                Commons 4
                </button>
                <button className="building">
                Commons 5
                </button>
                <button className="building">
                Commons 6
                </button>
                <button className="building">
                Commons 7
                </button>
                <button className="building">
                Terp Row
                </button>
                <button className="building">
                Hub
                </button>
                <button className="building">
                Aspen Heights
                </button>
                <button className="building">
                Standard
                </button>
                <button className="building">
                Varsity
                </button>
                <button className="building">
                View
                </button>
                <button className="building">
                Alloy
                </button>
                <button className="building">
                Courtyards
                </button>
                <button className="building">
                Nine
                </button>
                <button className="building">
                Tempo
                </button>
                <button className="building">
                Parkside
                </button>
                <button className="building">
                College Park Towers
                </button>
                <button className="building">
                Landmark
                </button>
                <button className="building">
                Aster
                </button>
                <button className="building">
                Leonardtown
                </button>
            </div>
        </div>
    );
}


export default Home;