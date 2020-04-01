import React, {Fragment} from 'react';
import Item from '../item/Item';

export default (props) => {
    const {list } =props;

    const display = list.map((item, index) => <Item name={item.name} key={index}/>
    )

    return (
        <Fragment>
            {display}
        </Fragment>
    )
}