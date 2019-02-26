import React, { Component } from 'react';

import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

import info from '../../../assets/EclesiasticOrganizationText';

class EclesiasticOrganization extends Component {

    state = {
        accordion: true,
        activeKey: ['4'],
      }
    
      getItems() {
        const items = [];
        for (let i = 0; i < info.length; i++) {
            let auxInside = [];
            for (let j = 0; j < info[i][2].length; j++) {
                auxInside.push(
                    <Panel header={info[i][2][j][0]} key={j}>
                        <p>{info[i][2][j][1]}</p>
                    </Panel>
                );
            }
            items.push(
                <Panel header={info[i][0]} key={i}>
                    <p>{info[i][1]}</p>
                    <Collapse>
                        {auxInside}
                    </Collapse>
                </Panel>
            );
        }
        return items;
      }

      render() {
        return (
            <React.Fragment>
                <div className="page-head">
                    <div className="container">
                        <h2 className="page-title">Organización Eclesiástica</h2>
                    </div>
                </div>
                <div style={{ margin: '5%', marginTop: '20px' ,marginBottom: '20px', width: '90%' }}>
                    <Collapse defaultActiveKey="0" accordion={true}>
                        {this.getItems()}
                    </Collapse>
                </div>
            </React.Fragment>
        );
      }
}

export default EclesiasticOrganization;