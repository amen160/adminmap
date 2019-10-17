// in src/keys.js
import React from 'react';
import Button from '@material-ui/core/Button';
import { List,Create,Edit, Datagrid, TextField,TextInput,DisabledInput,SimpleForm ,CardActions, CreateButton} from 'react-admin';

const PostActions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter,
    total
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath={basePath} />
        
        <Button resource={resource} color="primary" onClick={() => {
            
            let mapprovider = "goog"
            switch(resource) {
              case "googles":
                mapprovider = "goog"
                break;
              case "heres":
                mapprovider = "here"
                break;
              case "tomtoms":
                mapprovider = "tomt"
                break;
              case "bings":
                mapprovider = "bing"
                break;
              default:
               mapprovider = "goog"
            }
            console.log(mapprovider);

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", 'https://maps.beta.qup.vn/settings/setprovider?provider='+mapprovider+'&jwtoken='+localStorage.getItem('token'), false ); // false for synchronous request
            xmlHttp.send( null );
            alert(xmlHttp.responseText);
            return xmlHttp.responseText;

                }}>Set Provider</Button>
    </CardActions>
);

export const KeyList = props => (
    <List {...props} actions={<PostActions />}>
        <Datagrid >
            <TextField source="id" label="Key"/>
            
        </Datagrid>
    </List>
);
export const KeyCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" label="Key"/>
        </SimpleForm>
    </Create>
);
export const KeyCreateHere = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" label="Key"/>
            <TextInput source="code" />
        </SimpleForm>
    </Create>
);
export const KeyEdit = props => (
    <Edit {...props}>
        <SimpleForm>
          <DisabledInput source="id" label="Key"/>
        </SimpleForm>
    </Edit>
);
