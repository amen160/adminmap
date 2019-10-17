import React from 'react';
import { Admin, Resource } from 'react-admin';
import { KeyList,KeyCreate,KeyCreateHere } from './keys';
import dataProvider from './dataProvider';
import authProvider from './authProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} >
        <Resource options={{ label: 'GOOGLE' }} name="googles" list={KeyList} create={KeyCreate} />
        <Resource options={{ label: 'HERE' }} name="heres" list={KeyList} create={KeyCreateHere} />
        <Resource options={{ label: 'TOMTOM' }} name="tomtoms" list={KeyList} create={KeyCreate}/>
        <Resource options={{ label: 'BING' }} name="bings" list={KeyList} create={KeyCreate}/>
    </Admin>
);

export default App;