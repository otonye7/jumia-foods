import React from "react";
import { ButtonContainer} from './first-button.styles';


const FirstButton = ({
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

export default FirstButton;