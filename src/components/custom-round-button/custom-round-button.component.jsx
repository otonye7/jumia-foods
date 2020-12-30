import React from 'react';
import PropTypes from 'prop-types';
import { CustomRoundButtonContainer } from './custom-round-button.styles';

const CustomRoundButton = ({ 
	buttonText, 
	leftText, 
	rightText, 
	buttonColor, 
	buttonBgColor, 
	buttonHeight, 
	buttonWidth, 
	fontSize, 
	fontWeight, 
	buttonBorder,
	buttonMargin, 
	handleClick,cover, buttonPadding }) => {
	
	const btnProps = {
		buttonColor, 
		buttonBgColor, 
		buttonHeight, 
		buttonWidth, 
		fontSize, 
		fontWeight, 
		buttonBorder,
		buttonMargin,
		cover,
		buttonPadding
	};
	
	return (
		<CustomRoundButtonContainer onClick={handleClick} {...btnProps}>
			{
				leftText && <span>{leftText}</span>
			}
			<div className="round-btn" >
				{buttonText}
			</div>
			{
				rightText && <span>{rightText}</span>
			}
		</CustomRoundButtonContainer>
	);
};

CustomRoundButton.propTypes = {
	buttonText: PropTypes.string,
	leftText: PropTypes.string,
	rightText: PropTypes.string,
	buttonColor: PropTypes.string,
	buttonBgColor: PropTypes.string,
	buttonHeight: PropTypes.string,
	buttonWidth: PropTypes.string,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	buttonBorder: PropTypes.string,
	buttonMargin: PropTypes.string,
	handleClick: PropTypes.func,
	cover: PropTypes.bool,
	buttonPadding: PropTypes.string
};



export default CustomRoundButton;