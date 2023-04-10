import React, { Component } from "react";

// const withClass = (WrapperComponent, className) => {
//     return props => (
//         <div className="App">
//             <WrapperComponent {...props} />
//         </div>
//     );
// }

const withClass = (WrapperComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return <div className="App">
                <WrapperComponent ref={this.props.forwardRef} {...this.props} />
            </div>
        }
    }
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardRef={ref} />;
    });
}

export default withClass;
