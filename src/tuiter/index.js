import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowListItem
    from "./who-to-follow-list/index";
import PostSummaryItem from "./post-summary-list/post-summary-item";

function Tuiter() {
    return (
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
            {/*<PostSummaryItem/>*/}


            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter