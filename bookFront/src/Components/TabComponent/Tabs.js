import React, { useState } from "react";
import ViewBookYear from "../AllTabs/ViewBookYear";
// import SecondTab from "../AllTabs/SecondTab";
import TabNavItem from "./TabNavItem"
import TabContent from "./TabContent";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                <TabNavItem title="2024" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="2023" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="2022" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="2021" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>
            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <ViewBookYear
                        year={2024}
                    />
                </TabContent>

                <TabContent id="tab2" activeTab={activeTab}>
                    <ViewBookYear
                        year={2023}
                    />
                </TabContent>

                <TabContent id="tab3" activeTab={activeTab}>
                    <ViewBookYear
                        year={2022}
                    />
                </TabContent>

                <TabContent id="tab4" activeTab={activeTab}>
                    <ViewBookYear
                        year={2021}
                    />
                </TabContent>
            </div>
        </div>
    );
};
export default Tabs;