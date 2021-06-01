import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function TabPanel({ children, value, index, ...rest }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...rest}
        >
            {value === index &&
                <div >
                    {children}
                </div>
            }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}



const useContainerStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.secondary,
        fontFamily: theme.typography.fontFamily,
    },
    tabPaneStyles: {
        "& > div": {
            margin: 15
        }
    }

}));
const useAppBarStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.secondary,
        color: theme.palette.text.primary,
        fontWeight: 700,
        fontSize: 18,

        boxShadow: "none",
        borderBottom: "1px solid #ebebeb"
    }
}))
const useTabsStyles = makeStyles((theme) => ({
    root: {

    },
    flexContainer: {
        "& > span": {
            display: "none"
        }
    },
    indicator: {
        display: "none"
    }
}))
const useTabStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        color: theme.palette.text.primary,
        fontWeight: "bold",
        fontSize: 18,
        opacity: 1,
        textTransform: "capitalize",
        transition: "all 0.2s",
        padding: "20px 10px",
        display: "inline-block",
        boxSizing: "border-box",
        "&:hover": {
            color: theme.palette.primary.dark,
            "&::before": {
                display: "block"
            }
        },
        "&:before": {
            position: "absolute",
            content: '""',
            width: "60%",
            height: 3,
            backgroundColor: theme.palette.primary.dark,
            bottom: 0,
            left: "20%",
            display: "none",
            animation: "$fadeIn .3s ease-in-out",
            zIndex: 100
        },
    },
    "@keyframes fadeIn": {
        "0%": {
            width: 0
        },
        "100%": {
            width: "60%"
        }
    },
    selected: {
        color: theme.palette.primary.dark,
        "&:before": {
            display: "block"
        }
    }
}))

export const CNTab = ({ tabList }) => {
    const containerStyles = useContainerStyles();
    const appBarStyles = useAppBarStyles();
    const tabsStyles = useTabsStyles();
    const tabStyles = useTabStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={containerStyles.root}>
            <AppBar position="static" classes={appBarStyles}>
                <Tabs
                    classes={tabsStyles}
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    {tabList.map((tab, index) => (<Tab classes={tabStyles} disableRipple label={tab.label}  {...a11yProps({ index })} />))}

                </Tabs>
            </AppBar>
            {tabList.map((tab, index) => (<TabPanel className={containerStyles.tabPaneStyles} value={value} index={index}>
                {tab.component}
            </TabPanel>))}


        </div>
    );
}