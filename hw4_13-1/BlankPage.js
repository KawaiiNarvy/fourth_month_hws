import React from "react";

class BlankPage extends React.Component {
    constructor() {
        super();
        this.state = { name: "", surname: "", age: 0, adress: "" };
    }

    handleInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = () => {
        const data = {
            name: this.state.name,
            surname: this.state.surname,
            age: this.state.age,
            adress: this.state.adress,
        };

        console.log(data);
    };

    render() {
        return (
            <div>
                <h1>Blank</h1>
                <input type='text' placeholder="name" onChange={this.handleInput} name='name' />

                <input type='text' placeholder="surname" onChange={this.handleInput} name='surname' />

                <input type='number' placeholder="age" onChange={this.handleInput} name='age' />

                <input type='text' placeholder="adress" onChange={this.handleInput} name='adress' />

                <button onClick={this.onSubmit}>push</button>
            </div>
        );
    }
}

export default BlankPage;
