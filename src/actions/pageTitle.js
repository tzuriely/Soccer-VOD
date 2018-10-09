export const CHANGE_PAGE_TITLE   = 'CHANGE_PAGE_TITLE';

export const changePageTitleAction = (title = '') => ({
    type: CHANGE_PAGE_TITLE,
    payload : title
});