import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySenctions = createSelector(
    [selectDirectory],
    directory => directory.sections
);