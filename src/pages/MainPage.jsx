import React from 'react';
import Option from '../components/Option';

const MainPage = () => {
    return (
        <div id='main-page' className='centered'>
            <ul id='options-list' className='list-group'>
                <Option id='op-one' key={0} text={'Very Interested'} color={'green'}/>
                <Option id='op-two' key={1} text={'Interested'} color={'lightgreen'}/>
                <Option id='op-three' key={2} text={'Don\'t Care'} color={'blue'}/>
                <Option id='op-four' key={3} text={'Not so Interested'} color={'orange'}/>
                <Option id='op-five' key={4} text={'Really Not Interested'} color={'red'}/>          
            </ul>
        </div>
    );
};

export default MainPage;