import React from 'react';
import { KfcContainer } from './kfc-mall.styles';
import Chicken from  '../../assets/kfc.jpg';
import {resturants} from '../../redux/resturant/resturant.selector';
import {connect} from 'react-redux';
import CardItems from '../../components/card-items/card-items.component';
import {createStructuredSelector} from 'reselect';



const KfcMallPage = ({sections}) => {
  

      return ( 
        <KfcContainer>
            <div className='cover-image'>
               <img src={Chicken} alt="Avatar"  />
             </div>
             <br />
            <div className='text'>
            {   
                 sections.filter((section, id) => id === 0).map(({id,  ...otherSectionProps}) =>  (
                     <CardItems key={id}  {...otherSectionProps}/>
                )) 

             }
             </div>
             <br />
             <div className='border'></div>
        </KfcContainer>
             
      );
  };
 
  const mapStateToProps = createStructuredSelector({
    sections: resturants
})

  
  export default connect(mapStateToProps)(KfcMallPage);