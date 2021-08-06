import React from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

//---------------Dialog--------------------------------------------------//

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//----------------------Radio Buttons-----------------------------------//
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//---------------------------------------------------------------------//

import { getCurrentDeviceConfig, setDeviceConfig } from './apis';




class TelemonConfig extends React.Component {
    constructor() {
        super();
        this.state = {
            configuredialogstate: false,
            selectedgateway:null,
            resetdialogstate: false,
            columns: [
                { title: 'Id', field: 'Id' },
                { title: 'Type', field: 'Type' },
                { title: 'MBAddress', field: 'MBAddress' },
                { title: 'RegisterCount', field: 'RegisterCount' },
                { title: 'Format', field: 'Format' },
                { title: 'Scale', field: 'Scale' },
                { title: 'Tag', field: 'Tag' },
                { title: 'Device', field: 'Device' },
                { title: 'QOS', field: 'QOS' },
                { title: 'SlaveId', field: 'SlaveId' },

            ],
            data: []

        };
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnUpdate = this.handleOnUpdate.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
    }

    componentDidMount() {

    }

   
    handleOnAdd(newData) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.push(newData);
                this.setState({ ...this.state, data });
            }, 100);
        });
    }

    handleOnUpdate(newData, oldData) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                let index = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Id === oldData.Id) {
                        data[i] = newData;
                        this.setState({ ...this.state, data });
                    }
                }


            }, 100);
        });
    }

    handleOnDelete(oldData) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.splice(data.indexOf(oldData), 1);
                this.setState({ ...this.state, data });
            }, 100);
        });
    }

    

  

    render() {
        return (
            <div>
                <MaterialTable
                    title="DEVICE CONFIGURATION"
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowAdd: this.handleOnAdd,
                        onRowUpdate: this.handleOnUpdate,
                        onRowDelete: this.handleOnDelete,
                    }}
                    options={
                        {
                            actionsColumnIndex: -1,
                            headerStyle: {
                                backgroundColor: '#526c69',
                                color: '#FFF'
                            },
                            exportButton: true
                        }
                    }
                />
            </div>
        )
    }
}



export default TelemonConfig;

