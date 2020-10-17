import React from "react";

const StyledHeader = ({children}) => {
    return (
        <div>
            <h1>{children}</h1>
            <style jsx>
                {`h1 {
                  color: red;
                }`}
            </style>
        </div>
    )
};

export default () => {



    return (
        <div>
            <StyledHeader>hogehoge</StyledHeader>
            <h1>hogehoge</h1>
        </div>)
}
