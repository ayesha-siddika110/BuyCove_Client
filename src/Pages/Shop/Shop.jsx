import Banner from "../../Componants/Share/Banner/Banner";

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ShopCard from "../../Componants/ShopCard/ShopCard";


const Shop = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            {/* banner */}
            <Banner heading="Shop Now" subHeading="Get your best product for your need"></Banner>
            {/* category  */}
            <div className="w-[95%] m-auto">

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                        
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        onChange={handleChange}
                        sx={{
                            "& .MuiTab-root": { color: "gray" },
                            "& .Mui-selected": { color: "#FB8C00" }, 
                            "& .MuiTabs-indicator": { backgroundColor: 'orange' }, 
                        }}
                        >
                            <Tab label="Beg" value="1" />
                            <Tab label="Computer Parts" value="2" />
                            <Tab label="shoes" value="3" />
                            
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
                            <ShopCard></ShopCard>
                            <ShopCard></ShopCard>
                            <ShopCard></ShopCard>
                            <ShopCard></ShopCard>
                            <ShopCard></ShopCard>
                            <ShopCard></ShopCard>
                            <ShopCard></ShopCard>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
            </div>
        </div>
    );
};

export default Shop;