import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import { actions } from '../redux/action';
// import tempLogo from '../assets/ava-1.jpg';
import tempLogo from '../assets/logo.svg';

import InvertColorsIcon from '@material-ui/icons/InvertColors';
import clsx from 'clsx';
const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);



const useStyles = (theme) => ({
    root: {
        overflowX: 'hidden !important',

        flexGrow: 1,
        '& .PrivateValueLabel-circle': {

            display: 'none'

        },
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        }
    },

    Logo_root_37: {
        background_color: '#4d5358'
    },
    MuiSlider_root: {
        color: '#fafafa',
        width: '92%',
        cursor: 'pointer',
        height: '2px',
        display: 'inline_block',
        padding: '13px 0',
        position: 'relative',
        box_sizing: 'content_box',
        touch_action: 'none',
        _webkit_tap_highlight_color: 'transparent'
    },
    textField: {
        width: 200,
        // height: 19,
        textAlign: 'left',
        color: '#787880',
        opacity: 1,
    },

    checkbox: {
        borderColor: '#5E81F4'
    },
    p_Publiceveryonecansee: {
        top: 0,
        left: -70,
        // width: 100,
        height: 10,
        // textAlign: 'left',
        font: 'Bold 14px/19px Roboto',
        // letterSpacing: 0.17,
        color: '#1C1D21',
        opacity: 1,
    },
    p_editby: {
        top: 60,
        left: -100,
        textAlign: 'left',
        font: 'Regular 14px/21px Roboto',
        letterSpacing: ' 0.2px',
        color: ' #787880',
        opacity: 1
    },
    i_text_description: {
        top: 252,
        left: 1276,
        width: 292,
        height: 94,
        textAlign: 'left',
        letterSpacing: 0,
        opacity: 1
    },
    icon_upload: {
        fontSize: 100,
        textAlign: 'left',
        //    width:13
    },
    icon_clander: {
        textAlign: 'left'
    },
    list1: {
        fontSize: 'smaller',
        paddingTop: 1
    },
    drawer: {
        backgroundColor: '#3A405E'
    },

    RoundedUp: {

        borderRadius: ' 50px 0px 0px 0px '
    },
    fieldTextStyle: {
        textAlign: 'left',
        font: 'Light 40px/40px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },

    textcontect: {
        color: 'white',
        margin: '1%'
    },
    toolbar: {
        paddingRight: '0px',

    },
    multilineColor: {
        color: 'white'
    },
    form: {
        margin: 'auto'
    },
    button: {
        color: 'white',
        margintTop: '60%',
        borderRadius: '290px'
    },
    textarea: {
        backgroundColor: '#3A405E'
    },

    div: {
        textAlign: 'center',
        backgroundColor: 'lightslategrey',
        // borderStyle: 'solid',
        width: 124,
        height: 104
    },
    iconVideUp:
    {
        fontSize: 50,
        textAlign: 'center',
    },
    hue_horizontal:
    {
        padding: '0px 2px',
        position: 'relative',
        height: '100%',
        border_radius: ' 2px',
        width: '60%'
    },
    iconVideUp1:
    {
        fontSize: 50,
        textAlign: 'center',
    },

    inputNumber:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },
    inputNumberSlider:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'center',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
        // '-webkit-appearance': 'none',
        // margin:0
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200,
    },
    row1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    createNewPage: {
        paddingRight: '5%',
        paddingLeft: '5%',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 6 + 'vh',
        top: 0
    },
    logoDetails: {
        color: '#b6b6c9',
        fontSize: '13px',
        paddingLeft: '8%',
        marginTop: '10px'
    }
});


class Logo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgcolrPNG: '#fffff',
            // rivki 16.09.20
            checkedSwitch: false,
            IsCollapse: false,
            logoYN: true,

        }
    }
    handleChangeSwitch = () => {
        this.setState({ logoYN: !this.state.logoYN })
            // this.props.homeStoreDesign.logoYOrN = !this.props.homeStoreDesign.logoYOrN
            ;
        this.props.changeLogoYOrN()
    }
    handleChangeSwitchCN = () => {
        // this.props.homeStoreDesign.logoYOrN = !this.props.homeStoreDesign.logoYOrN
        ;
        this.props.changeLogoCNYOrN()
    }
    IsOpenCollapse = () => {
        this.setState({
            IsCollapse: !this.state.IsCollapse
        })
    }


    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));
    handleChangeComplete = (color) => {
        this.setState({ bgcolrPNG: color.hex });
    };
    changeLogoselectRdiuseView = (e) => {
        ;
        this.props.changeLogoselectRdiuseView(e)
    }
    onChangeHandlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            //   var url = URL.createObjectURL(event) 
            reader.onloadend = () => {
                
                // this.props.dispatch(setDetailsImagewUrl(url))
                // this.props.dispatch(editImage(reader.result))
                this.props.changeLogo(reader.result)
            }
            
            reader.readAsDataURL(event)
        }

    }
    render() {
        const { classes } = this.props

        const defaultProps3 = {
            // width: 300,
            color: 'white'

        }


        return (
            <>
                <div className={classes.root} >
                    <FormControl component="fieldset" className={clsx(classes.textField, 'con', 'vertical-center')} style={{ height: 73 + "vh", width: 100 + "%" }} >
                        <FormGroup className={classes.textField} >
                            {this.state.IsCollapse ?
                                <div className={classes.row1}  >
                                    <h3 edge="end" className={classes.logoDetails}>  Logo Details   </h3>
                                    <div edge="start" >
                                        <label for="ColapseLogo">
                                            <KeyboardArrowUpIcon />
                                        </label>
                                        <input
                                            type={"button"}
                                            id="ColapseLogo"
                                            htmlFor="myInput"
                                            style={{ display: 'none' }}
                                            onClick={this.IsOpenCollapse}
                                        />
                                    </div>
                                </div>
                                :
                                <div className={classes.row} >
                                    <h3 edge="end" className={classes.logoDetails}>  Logo Details   </h3>
                                    <div edge="start">
                                        <label for="ColapseLogo">
                                            <KeyboardArrowDownIcon />
                                        </label>
                                        <input
                                            type={"button"}
                                            id="ColapseLogo"
                                            htmlFor="myInput"
                                            style={{ display: 'none' }}
                                            onClick={this.IsOpenCollapse}
                                        />
                                    </div>
                                </div>
                            }
                            <div hidden={this.state.IsCollapse} style={{ width: 94 + "%", marginRight: 3 + "%", marginLeft: 7 + "%", margintTop: 20 + "vh" }} >
                                <Grid
                                    container
                                    direction="column"
                                    justify="space-between"

                                >
                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Box
                                            width={'80%'}
                                        >
                                            <FormLabel className={classes.textcontect}>Logo</FormLabel>

                                        </Box>
                                        <Box justifyContent="flex-end">
                                            <AntSwitch checked={this.state.logoYN} onClick={this.handleChangeSwitch} name="checkedSwitch" />
                                        </Box>

                                    </Box>
                                    <Box
                                        alignSelf="center">
                                        <div className={classes.div} >
                                            <div class="image-upload">
                                                <label for="logouug">
                                                    <img className="logoC" alt="" src={this.props.homeStoreDesign.logo ? this.props.homeStoreDesign.logo : tempLogo} />
                                                </label>
                                                <input
                                                    type={"file"}
                                                    id="logouug"
                                                    htmlFor="myInput"
                                                    accept="image/*"
                                                    style={{
                                                        display: 'none',
                                                        cursor: 'pointer',
                                                        width: this.props.homeStoreDesign.logoWidth,
                                                    }}
                                                    onChange={(e) => this.onChangeHandlerLogo(e.target.files[0])}
                                                />

                                            </div>
                                            <div id='lbError' class='warning'
                                                style={{
                                                    position: 'relative',
                                                    color: 'red',
                                                    top: '-43px',
                                                    right: '7x',
                                                    left: '109px'
                                                }}
                                            >

                                            </div>
                                        </div>

                                    </Box>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <FormLabel className={classes.textcontect}>Border Radius Logo</FormLabel>
                                    <br></br>
                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >

                                        <Box
                                            width={'100%'}
                                            alignSelf="center"
                                        >


                                            <Slider
                                                defaultValue={this.props.homeStoreDesign.logoBorderRadiusLogo}
                                                step={1}
                                                marks
                                                min={0}
                                                max={150}
                                                getAriaValueText={this.props.changeLogoselectRdiuseView}
                                                valueLabelDisplay="auto"
                                                className={classes.MuiSlider_root}
                                            />
                                        </Box>
                                        <Box justifyContent="flex-end">
                                            <input
                                                textAlign="center"
                                                id="standard-number"
                                                type="number"
                                                value={this.props.homeStoreDesign.logoBorderRadiusLogo ? this.props.homeStoreDesign.logoBorderRadiusLogo : '0'}
                                                defaultValue={this.props.homeStoreDesign.logoBorderRadiusLogo}
                                                onChange={(e) => this.props.changeLogoselectRdiuseView(e.target.value)}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className={classes.inputNumberSlider}
                                            />
                                        </Box>
                                    </Box>

                                    <br></br>
                                    <FormLabel className={classes.textcontect}>Logo Width</FormLabel>

                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >

                                        <Box
                                            width={'100%'}
                                            alignSelf="center"
                                        >


                                            <Slider {...defaultProps3}
                                                defaultValue={this.props.homeStoreDesign.logoWidth ? this.props.homeStoreDesign.logoWidth : '100'}
                                                step={1}
                                                marks
                                                min={100}
                                                max={200}
                                                getAriaValueText={this.props.changeLogoWidth}
                                                valueLabelDisplay="auto"
                                                className={classes.MuiSlider_root}
                                            />

                                        </Box>
                                        <Box justifyContent="flex-end">
                                            <input
                                                textAlign="center"
                                                id="standard-number"
                                                type="number"
                                                value={this.props.homeStoreDesign.logoWidth ? this.props.homeStoreDesign.logoWidth : '100'}
                                                onChange={(e) => this.props.changeLogoWidth(e.target.value)}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className={classes.inputNumberSlider}
                                            />

                                        </Box>

                                    </Box>


                                </Grid>
                            </div>
                        </FormGroup>
                    </FormControl>

                </div></>


        )
    }


}

const mapStateToProps = (state) => {
    return {
        // contactDetails: state.contactDetails.contactDetails,
        homeStoreDesign: state.editHomeStoreReducer.homeStoreDesign
    };
}

const mapDispatchToProps = (dispatch) => ({
    // delInDimus:(a)=> dispatch({ type: 'DEL_DIMUS' }),
    // deleteContact:(a)=>((a)=> dispatch({ type: 'DELETE_CONTACT' }),dispatch(actions.setActive(a))),
    // editContact:(a)=> dispatch({ type: 'EDIT_CONTACT' }),
    // editstepper:()=> dispatch(actions.setStepper()),
    // deleteContact:(a)=> dispatch({ type: 'DELETE_CONTACT' }),

    changeLogo: (image) => dispatch(actions.setLogo(image)),
    changeLogoYOrN: (image) => dispatch(actions.setLogoYOrN(image)),
    changeCompanyName: (image) => dispatch(actions.setLogoCompanyName(image)),
    changeLogoWidth: (image) => dispatch(actions.setLogoWidth(image)),
    changeLogoHeight: (image) => dispatch(actions.setLogoHeight(image)),
    changeLogoBackgroundOnlyPng: (image) => dispatch(actions.setLogoBackgroundOnlyPng(image)),
    changeLogoselectRdiuseView: (image) => dispatch(actions.setLogoBorderRadiusLogo1(image)),
    changeLogoCNYOrN: (image) => dispatch(actions.setLogoBorderRadiusLogo1(image)),

})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Logo));