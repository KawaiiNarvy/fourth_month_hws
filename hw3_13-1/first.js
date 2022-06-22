import React from "react"
class MyClass extends React.Component {

    render() {
        return <div>
            <p>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
        </div>;
    }
}
MyClass.defaultProps = {name: "Elya", age: 21};
export default MyClass