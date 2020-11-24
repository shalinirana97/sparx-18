import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";
import { data } from './data.json';
import ClearIcon from '@material-ui/icons/Clear';

class ContentPage extends Component {
    state = {
        list: data,
        selectedItem: []
    }

    selectOption = (item, option) => {
        let { list } = this.state;
        let final_result = [];
        list.map(med => {
            if (med.country == item.country) {
                let res_result = med.state.map(res => {
                    if (res.name == option.name) {
                        return { ...res, checked: !res.checked }
                    }
                    return res;
                });
                let vg = { country: item.country, state: res_result };
                final_result.push(vg);
            }
            else {
                final_result.push(med);
            }
        })
        this.setState({ list: final_result }, () => {
            let selected = [];
            this.state.list.map(item => {
                let localState = item.state;
                let isAnyExist = false;
                for (let i = 0; i < localState.length; i++) {
                    if (localState[i].checked) {
                        isAnyExist = true;
                        break;
                    }
                }
                if (isAnyExist) {
                    selected.push(item);
                    this.setState({ selectedItem: selected })
                }
                else {
                    this.setState({ selectedItem: selected })
                }
            })
        })
    }

    render() {
        const { list, selectedItem } = this.state;
        return (
            <Grid container direction="row" justify="center" alignItems="center" spacing={2} className="contentWrapper">
                <Grid item xs={12} sm={5}>
                    <Card className=''>
                        <CardContent>
                            {list.map((item, index) => {
                                return <div>
                                    <h3>{item.country}</h3>
                                    <div>
                                        {item.state.map(it => {
                                            return <p>
                                                <Checkbox
                                                    checked={it.checked}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    onChange={() => this.selectOption(item, it)}
                                                />
                                                {it.name}
                                            </p>
                                        })}
                                    </div>
                                </div>
                            })}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardContent>
                            {selectedItem && selectedItem.length ? selectedItem.map((item, index) => {
                                return <div >
                                    <h3>{item.country}</h3>
                                    <div>
                                        {item.state.map(it => {
                                            if (it.checked)
                                                return (
                                                    <div className="listItemWrap">
                                                        <p>
                                                            {it.name}
                                                        </p>
                                                        <ClearIcon onClick={() => { this.selectOption(item, it) }}/>
                                                    </div>
                                                )
                                            else
                                                return null;
                                        })}
                                    </div>
                                </div>
                            })
                                :
                                <div className="emptyTextWrap">
                                    <Typography variant="h6"> No Value Selected </Typography>
                                </div>
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid >
        );
    }
}

export default ContentPage;
