import React from "react";
class MyClass extends React.Component {
    Hello() {
        alert("Hello world");
    }
    render() {
        return (
            <div>
                <button onClick={this.Hello}>click</button>
            </div>
        );
    }
}
export default MyClass;
