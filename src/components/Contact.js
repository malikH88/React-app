import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css'

const online = true;

class Contact extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                online: props.online,
            }
    }
    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} className="avatar"/>
                    <div>
                        <div className="name">    
                            {this.props.name}
                        </div>
                        <div className="status">
                            <div className={this.state.online ? "status-online" : "status-offline"}></div>
                            <p onClick= {event => {
                                const newStatus = !this.state.online
                                this.setState({ online : newStatus})
                            }}
                            className="status-text">{this.state.online ? "online" : "offline"}</p>
                        </div>
                    </div>
            </div>
            )
        }
    }
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};
 export default Contact;
