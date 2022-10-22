import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowListItem
    from "./who-to-follow-list/index";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import ExploreComponent from "./explore";

function Tuiter() {
    return (
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
            <ExploreComponent/>

            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter