import React from "react";
import { ButtonContainer} from './second-button.styles';


const SecondButton = ({
    children,
    inverted,
    isGoogleSignIn,
    ...otherProps
}) => (
       <ButtonContainer>
         <button
            className={`${inverted ? "inverted" : " "} custom-button`}
            {...otherProps}
        >
            {children}
        </button>  
       </ButtonContainer>  
    );

export default SecondButton;
