import React from 'react';
import { KfcContainer } from './kfc-mall.styles';
import Chicken from  '../../assets/kfc.jpg';
import {resturants} from '../../redux/resturant/resturant.selector';
import {collection} from '../../redux/value-deals/value-deals.selector';
import {connect} from 'react-redux';
import CardItems from '../../components/card-items/card-items.component';
import CollectionItems from '../../components/collection-item/collection-item.component';
import {createStructuredSelector} from 'reselect';
import { Link } from 'react-router-dom';



const KfcMallPage = ({sections, collections}) => {
  console.log(collections)
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
              <br />
             <div className='header'>
                 <Link className='header-links'>VALUE DEALS</Link>
             </div>
             <br />
             <div className='border-line'></div>
              <br />
             <div className='collection-items'>
             {   
                 collections.map(({id,  ...otherSectionProps}) =>  (
                     <CollectionItems key={id}  {...otherSectionProps}/>
                )) 

             }
             </div>
        </KfcContainer>
             
      );
  };
 
  const mapStateToProps = createStructuredSelector({
    sections: resturants,
    collections: collection
})

  
  export default connect(mapStateToProps)(KfcMallPage);