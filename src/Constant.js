import { CommandIcon } from "./components/Common/commandIcons";
import { DocIcon } from "./components/Common/docsIcon";
import { KeyIcon } from "./components/Common/keyIcon";
import {FiddleIcon} from "./components/Common/fiddleIcon"
import { ProjectKey } from "./components/Common/projectKeyIcon";
import { AddUserIcon } from "./components/Common/addUserIcon";
import { AddIcon } from "./components/Common/addIcon";
import { CopyIcon } from "./components/Common/copyIcon";
import {EthereumAvatar} from "./components/Common/ethereumAvatar"
import { PolygonAvatar } from "./components/Common/polygonAvatar";
import { OptimismAvatar } from "./components/Common/optimismAvatar";
import { AlchemymAvatar } from "./components/Common/alchemyAvatar";
import { ArbitrumAvatar } from "./components/Common/arbituramAvatar";
import { FantomAvatar } from "./components/Common/fantomAvatar";
import { AllSelectedIcon } from "./components/Common/allSelectedIcon";
import { CircleTickIcon } from "./components/Common/circleTickIcon";
import { InProgressIcon } from "./components/Common/inProgressIcon";
import { FailedIcon } from "./components/Common/failedIcon";
import { KilledIcon } from "./components/Common/killedIcon";

export const Menu_Item_Link = [
    {
        label: "Docs",
        key: "docs",
        icon: <DocIcon className="harbor-header-icon"/>
    },
    {
        label: "Command Cheatsheet",
        key: "cheat_sheet",
        icon: <CommandIcon className="harbor-header-icon"/>
    }
]
export const Menu_Item_Action = [
    {
        label: "Your User Key",
        key: "user_key",
        icon: <KeyIcon className="harbor-header-icon"/>
    }
]
export const List_Item_Route = [
    {
        title:"Test Nets",
        key: "test_net",
        icon: <FiddleIcon className="harbor-action-icon-sidepanel"/>,
        actionIcon: <AddIcon className="harbor-route-item-icon" fill="#DDDDDD"/>
    },
    {
        title:"Member",
        key: "member",
        icon: <AddUserIcon className="harbor-action-icon-sidepanel"/>,
        actionIcon: <AddIcon className="harbor-route-item-icon" fill="#DDDDDD"/>
    },
    {
        title:"Project Key",
        key: "project_key",
        icon: <ProjectKey className="harbor-action-icon-sidepanel"/>,
        actionIcon: <CopyIcon className="harbor-route-item-icon"/>
    }
]
export const Mock_User_Data = {
    avatar_url: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Prakash",
    key: "272d4dcc-a7cd-11ed-afa1-0242ac120002",
    email: "paraksh@example.com"
}
export const Session_Storage_Key = {
    "UserData": "user_data"
}
export const GET_TASK_DATA_URL = `${process.env.REACT_APP_SERVER_RUNNING}testnets`
export const TASK_TYPE_DATA = {
    "RUNNING": "sucess",
    "STANDINGUP": "standingup",
    "PENDING": "in_progress",
    "FAILED": "failed",
    "STOPPED": "killed",
}
export const ENUM_RUNNING = "sucess"
export const ENUM_KILLED = "killed"
export const ENUM_PENDING = "in_progress"
export const ENUM_FAILED = "failed"
export const ENUM_ALL = "all"
export const ENUM_STANDING_UP = "standingup"
export const WEB_3_LOGO = {
    "ethereum": <EthereumAvatar className="harbor-block-chain-avatar" key="ethereum"/>,
    "polygon": <PolygonAvatar className="harbor-block-chain-avatar" key="polygon"/>,
    "optimism": <OptimismAvatar className="harbor-block-chain-avatar" key="optimism"/>,
    "alchemy": <AlchemymAvatar className="harbor-block-chain-avatar" key="alchemy"/>,
    "arbitrum": <ArbitrumAvatar className="harbor-block-chain-avatar" key="arbitrum"/>,
    "fantom": <FantomAvatar className="harbor-block-chain-avatar" key="fantom"/>
}
export const Filter_Type_Data = [
    {
        key: ENUM_ALL,
        label: "All",
        icon: <AllSelectedIcon className="harbor-filter-all-icon"/>,
        className: "all-selected-filter-item",
    },
    {
        key: ENUM_RUNNING,
        label: "Running",
        icon: <CircleTickIcon className="harbor-filter-running-icon"/>,
        className: "running-filter-item",
    },
    {
        key: ENUM_STANDING_UP,
        label: "Standing Up",
        icon: <InProgressIcon className="harbor-filter-pending-icon"/>,
        className: "in-progress-filter-item",
    },
    {
        key: ENUM_PENDING,
        label: "Updating",
        icon: <InProgressIcon className="harbor-filter-pending-icon"/>,
        className: "in-progress-filter-item",
    },
    {
        key: ENUM_FAILED,
        label: "Failed",
        icon: <FailedIcon className="harbor-filter-failed-icon"/>,
        className: "failed-filter-item",
    },
    {
        key: ENUM_KILLED,
        label: "Killed",
        icon: <KilledIcon className="harbor-filter-killed-icon"/>,
        className: "killed-filter-item",
    }
]
export const Filter_Type  = {
    "all": ["sucess","in_progress","standingup","failed","killed"], 
    "sucess": ["sucess"], 
    "standingup": ["standingup"], 
    "in_progress": ["in_progress"], 
    "failed": ["failed"], 
    "killed": ["killed"]
}
export const Data_Show_Limit = 20
export const Sort_Filter_Type = [
    {
        key: "ascending",
        label: "Name A - Z",
        className: "harbor-sort-item"
    },
    {
        key: "descending",
        label: "Name Z - A",
        className: "harbor-sort-item"
    },
    {
        key: "status",
        label: "Status",
        className: "harbor-sort-item"
    },
    {
        key: "created",
        label: "Date Created",
        className: "harbor-sort-item"
    },
    {
        key: "updated",
        label: "Last Modified",
        className: "harbor-sort-item"
    }
]
export const ENUM_ASCESNDING_SORT = "ascending"
export const ENUM_DESCENDING_SORT = "descending"
export const ENUM_STATUS_SORT = "status"
export const ENUM_CREATED_SORT = "created"
export const ENUM_UPDATED_SORT = "updated"