import React from 'react';
import Option from '../components/Option';

const MainPage = () => {
    return (
        <div id='main-page'>
            <ul id='options-list'>
                <Option id='op-one' text={'Very Interested'} color={'green'}/>
                <Option id='op-two' text={'Interested'} color={'lightgreen'}/>
                <Option id='op-three' text={'Don\'t Care'} color={'blue'}/>
                <Option id='op-four' text={'Not so Interested'} color={'orange'}/>
                <Option id='op-five' text={'Really Not Interested'} color={'red'}/>          
            </ul>
        </div>
    );
};

export default MainPage;