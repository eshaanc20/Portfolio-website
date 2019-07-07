import React from 'react';
import './Contact.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Contact extends React.Component {
    render() {
        return(
            <div className='contactContainer'>
                <div className='contactInfo'>
                    <p id='email'>eshaanchaudhari@hotmail.com</p>
                    <p>647-639-7482</p>
                </div>
                <div className='contactCard'>
                    <h2 id='contactTitle'>Contact</h2>
                    <TextField
                        style={{width: '320px'}}
                        variant='outlined'
                        label='Name'
                    />
                    <TextField
                        style={{width: '320px'}}
                        variant='outlined'
                        label='Email address'
                    />
                    <TextField
                        style={{width: '320px'}}
                        variant='outlined'
                        label='Message'
                        multiline
                        rows= '8'
                    />
                    <Button
                        variant='contained'
                        style={{width: '320px'}}
                    >Send</Button>
                </div>
            </div>
        );
    };
}

export default Contact;