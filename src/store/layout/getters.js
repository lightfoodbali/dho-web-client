export const isShowRightSidebar = ({ showRightSidebar }) => showRightSidebar
export const rightSidebarType = ({ rightSidebarType }) => rightSidebarType
export const contentData = ({ data }) => data
export const breadcrumbs = ({ breadcrumbs }) => breadcrumbs
export const alert = ({ alert }) => (alert.level && alert.content && !alert.hidden && alert) || null
